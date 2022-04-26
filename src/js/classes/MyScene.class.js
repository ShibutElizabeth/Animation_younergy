import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Blob from './Blob.class';
import Metaball from './Metaball.class';
import Ipads from './Ipads.class';
import Animation from './Animation.class';
import Text3d from './Text.class';
import { MeshStandardMaterial } from 'three';
import fragmentShader from '../../shaders/fragment-wireframe.glsl';
import vertexShader from '../../shaders/vertex-wireframe.glsl';
import { Vector2 } from 'three';
import { Vector3 } from 'three';
import { LineBasicMaterial } from 'three';

export default class MyScene {
  constructor(options) {

    // CONTAINER & RENDERER
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

    // CAMERA
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.001, 1000);
    this.camera.position.set(-1, 0, 2.8);

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // LIGHTS
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1.5, 0, 5);
    const r = 3;
    light.shadow.camera.near = .001;
    light.shadow.camera.far = 10;
    light.shadow.camera.left = -r;
    light.shadow.camera.right = r;
    light.shadow.camera.top = r;
    light.shadow.camera.bottom = -r;
    light.shadow.camera.updateProjectionMatrix();
    light.castShadow = true;
    this.scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(0.5, 0, 5);
    this.scene.add(light2)
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(1.5, 0, 5);
    this.scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.position.set(0.5, 0, 2);
    this.scene.add(ambientLight);

    // MAIN VARIABLES
    this.time = 0;
    this.isPlaying = true;
    this.mouse = {
      moved: false,
      x: 0,
      y: 0,
    };

    // objects
    this.objects = {
        blob: new Blob(),
        metaball: new Metaball(),
        ipads: new Ipads(),
        // text: new Text3d(),
    }
    this.scene.add(this.objects.blob.mesh, this.objects.ipads.mesh, this.objects.metaball.mesh);
    
    // METHODS
    new Animation(this.camera, this.objects);
    // this.addWF();
    this.resize();
    this.render();
    this.setupListeners();
  }

  addWF(){
      const geometry = new THREE.SphereGeometry(1, 10, 10);
      const material = new THREE.MeshBasicMaterial({ 
          color: 0x888888, 
          wireframe: true, 
          wireframeLinewidth: 3.0, 
        });
        const s = new THREE.Mesh(geometry, material);
        s.position.set(-1.5, 0,2);
        this.scene.add(s);

        // const material2 = new THREE.ShaderMaterial( {

        //     uniforms: { 
        //         thickness: { 
        //             value: 0
        //         },
        //         center: {
        //             value: new Vector3(-1.5, 0.0, 0.0),
        //         }
        //     },
        //     vertexShader: vertexShader,
        //     fragmentShader: fragmentShader,
        //     side: THREE.DoubleSide,
        //     alphaToCoverage: true // only works when WebGLRenderer's "antialias" is set to "true"

        // } );
        // material2.extensions.derivatives = true;

        // const mesh2 = new THREE.Mesh( geometry, material2 );
        // mesh2.position.set( -1.5, 0, 0 );

        // this.scene.add( mesh2 );
        // var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

        // var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 5 } );
        
        // var wireframe = new THREE.LineSegments( geo, mat );
//         const edges = new THREE.EdgesGeometry( geometry );
// const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 4.0 } ) );
        
//         this.scene.add( line );
//         console.log(line.material)
  }

  updateObjects(time){
    this.objects.blob.updateMesh(time/7);
    this.objects.metaball.updateMesh(this.mouse, time/3, this.width, this.height);
  }
 
  setupListeners() {
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

  mousemove(event) {
    const direction = this.mouse.x < event.x ? 1 : -1;
    
    // rotate ipads on mousemove
    this.objects.ipads.updateRotation(direction);

    // rotate blob on mousemove
    this.objects.blob.updateRotation(this.mouse, event);

    // rotate metaball on mousemove
    this.objects.metaball.updateRotation(this.mouse, event);

    // set new mouse coords
    this.mouse.x = event.x;
    this.mouse.y = event.y;
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;

    // update objects
    this.updateObjects(this.time);

    // render
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.render()
    }
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

}

new MyScene({
  dom: document.querySelector("#container")
});