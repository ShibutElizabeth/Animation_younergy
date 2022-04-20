import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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

    this.time = 0;
    this.color = new THREE.Vector3(0.94, 0.44, 0.17);
 
    this.isPlaying = true;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.settings();
    this.addBlob();
    this.gltfModelLoad();
    this.resize();
    this.render();
    this.setupListeners();
  }
 
  settings() {
    this.settings = {
      koeff: 2.2,
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
    new Animation(this.sphere, this.camera);
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
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  gltfModelLoad() {
		const loader = new GLTFLoader();
		const ipads = './././sc.gltf';
    // const texUrl = '../../models/model2/theme1.jpg';

    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(texUrl);
    // texture.flipY = false;
    // const material = new THREE.MeshBasicMaterial( { map: texture } );
    // const texture2 = textureLoader.load(texUrl2);
    // texture2.flipY = false;
    // const material2 = new THREE.MeshBasicMaterial( { map: texture2 } );

    
    loader.load(ipads, gltf =>  {
			const root = gltf.scene;
      this.ipads = [];
      this.ipads.push(
        root.getObjectByName('Empty_Object_6'),
        root.getObjectByName('Empty_Object_4'),
        root.getObjectByName('Empty_Object_7')
      );
      this.ipads.forEach((ipad, idx) => {
        ipad.scale.set(0.002, 0.002, 0.002);
        ipad.rotation.set(0, 0, 0);
        if(idx === 0){
          ipad.position.set(0, 0, 0);
          ipad.rotateY(Math.PI/2);
        } else if(idx == 1){
          ipad.position.set(0, 0, 2.1);
        } else {
          ipad.position.set(0, 0, 0);
          ipad.rotateY(-Math.PI/2);
        }
        this.scene.add(ipad);
        console.log(this.dumpObject(ipad).join('\n'));
      });
      // tvs["children"].forEach(tv => {
      //   tv["material"] = material;
      // });
      // const screens = root.getObjectByName('POD_Schermo');
      // screens["children"].forEach(sc => {
      //   sc["material"] = material2;
      // });
			
			
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
