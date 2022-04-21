import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes';
import GUI from 'lil-gui';
import fragmentShader from '../../shaders/fragment.glsl';
import vertexShader from '../../shaders/vertex.glsl';
import Animation from './Animation.class';

export default class Blob {
  constructor(options) {
    this.scene = new THREE.Scene();
 
    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xf0712c, 0); 
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.001, 1000);

    this.camera.position.set(0, 0, 2.8);
    // LIGHTS

			const light = new THREE.DirectionalLight( 0xffffff );
			light.position.set( 1.5, 0, 5 );
			this.scene.add( light );

			// const pointLight = new THREE.PointLight( 0xffffff );
			// pointLight.position.set( 1.5, 0, 5 );
			// this.scene.add( pointLight );

			const ambientLight = new THREE.AmbientLight( 0xffffff );
      ambientLight.position.set( 1.5, 0, 2 );
			this.scene.add( ambientLight );


    this.time = 0;
    this.color = new THREE.Vector3(0.94, 0.44, 0.17);
 
    this.isPlaying = true;
    this.ipads = [];
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.settings();
    this.addBlob();
    // this.addMarching();
    this.gltfModelLoad();
    this.resize();
    this.render();
    this.setupListeners();
    
  }
 
  addMarching() {
    // MARCHING CUBES

		this.resolution = 28;
    this.ballMaterial = new THREE.MeshPhysicalMaterial({  });
    // new THREE.MeshPhongMaterial( { specular: 0x888888, shininess: 250, color: 0xf0712c } );
		this.effect = new MarchingCubes( this.resolution, this.ballMaterial, true, true, 100000 );
		this.effect.position.set( -1, 0, 0 );
	  this.effect.scale.set( 1, 1, 1);
		this.effect.enableUvs = false;
    this.effect.enableColors = false;
    // this.effect.isolation = 10;

    this.scene.add( this.effect );
  }

  updateCubes( object, time, numblobs ) {

    object.reset();

    const subtract = 12;
    const strength = 1.2 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

    for ( let i = 0; i < numblobs; i ++ ) {

      const ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5;
      const bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
      const ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

      object.addBall( ballx, bally, ballz, strength, subtract );

    }
  }

  settings() {
    this.settings = {
      koeff: 0,
      r: 0.94,
      g: 0.44,
      b: 0.17,
    };
    // this.gui = new GUI();
    // this.gui.add(this.settings, "koeff", 0, 10, 0.1);
    // this.gui.add(this.settings, "r", 0, 1, 0.01);
    // this.gui.add(this.settings, "g", 0, 1, 0.01);
    // this.gui.add(this.settings, "b", 0, 1, 0.01);
  }
 
  setupListeners() {
    this.mouse = {
      moved: false,
      x: 0,
      y: 0,
    };
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("mousemove", this.mousemove.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix(); 
  }
 
  addBlob() {
    const k = this.settings.koeff;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        koeff: { value: k },
        uColor: { value: new THREE.Vector3(0.9, 0.9, 0.8) },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
 
    this.geometry = new THREE.SphereBufferGeometry(1, 100, 100);
 
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.sphere);
    new Animation(this.camera, this.sphere, this.ipads);
  }
  
  mousemove(event){
    this.sphere.rotateY(-1*(this.mouse.x - event.x)/1000);
    this.sphere.rotateX(-1*(this.mouse.y - event.y)/1000);
    this.mouse.x = event.x;
    this.mouse.y = event.y;
  }
 
  stop() {
    this.isPlaying = false;
  }
 
  play() {
    if(!this.isPlaying){
      this.isPlaying = true;
      this.render()
    }
  }
 
  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time/7;
    this.material.uniforms.koeff.value = this.settings.koeff;
    this.color.set(this.settings.r, this.settings.g, this.settings.b);
    this.material.uniforms.uColor.value = this.color;
    
    // this.updateCubes( this.effect, this.time / 3, 4 );
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  gltfModelLoad() {
		const loader = new GLTFLoader();
		const ipads = './././scene.gltf';
    
    loader.load(ipads, gltf =>  {
			const root = gltf.scene;
      this.ipads.push(
        root.getObjectByName('Empty_Object_6'),
        root.getObjectByName('Empty_Object_4'),
        root.getObjectByName('Empty_Object_7')
      );
      this.group = new THREE.Group();
      this.ipads.forEach((ipad, idx) => {
        ipad.scale.set(0, 0, 0);
        ipad.rotation.set(0, 0, 0);
        if(idx === 0){
          ipad.position.set(0.8, 0, 0);
          ipad.rotateY(Math.PI/2);
        } else if(idx == 1){
          ipad.position.set(0.8, 0, 1.2);
          
        } else {
          ipad.position.set(1.0, 0, 0);
          ipad.rotateY(-Math.PI/2);
        }
        ipad["children"].forEach(tv => {
          tv["material"] = new THREE.MeshPhongMaterial({ shininess: 250, color: 0xf0eae5 });
        });
        this.group.add(ipad);
        
        console.log(this.dumpObject(ipad).join('\n'));
      });
      this.box = new THREE.Box3().setFromObject(this.group);
      this.box.center(new THREE.Vector3(3, 0, 0)); // this re-sets the mesh position
      this.scene.add(this.box);
      this.scene.add(this.group);
		});
	}

	dumpObject(obj, lines = [], isLast = true, prefix = '') {
		const localPrefix = isLast ? '└─' : '├─';
		lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
		const newPrefix = prefix + (isLast ? '  ' : '│ ');
		const lastNdx = obj.children.length - 1;
		obj.children.forEach((child, ndx) => {
			const isLast = ndx === lastNdx;
			this.dumpObject(child, lines, isLast, newPrefix);
		});
		return lines;
	}

}
 
new Blob({
  dom: document.querySelector("#container")
});
