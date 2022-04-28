import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Blob from './Blob.class';
import Metaball from './Metaball.class';
import Ipads from './Ipads.class';
import Animation from './Animation.class';
import Grid from './Grid.class';

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
    this.firstPart = true;

    // objects
    this.objects = {
        blob: new Blob(),
        metaball: new Metaball(),
        ipads: new Ipads(),
        grid: new Grid(),
    }
    
    this.scene.add(this.objects.blob.mesh, this.objects.ipads.mesh, this.objects.metaball.mesh, this.objects.ipads.mesh);
    
    // METHODS
    this.animation = new Animation(this.camera, this.objects);

    this.resize();
    this.render();
    this.setupListeners();
  }

  updateObjects(time){
    this.objects.blob.updateMesh(time/7);
    this.objects.metaball.updateMesh(time/6);
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

  updateEvents(){
    // console.log(this.animation.stage);
    if(this.animation.stage < 2){
      this.firstPart = true;
    } else {
      this.firstPart = false;
    }
  }

  mousemove(event) {
    const direction = this.mouse.x < event.x ? 1 : -1;
    let delta = 1.0;
    if(this.firstPart){
      if(this.animation.stage === 0){
        delta = (event.x -  this.width/2)*0.001;
      } else if(this.animation.stage === 1){
        delta = (event.x -  this.width/2)*0.001 - 0.4;
      }
    }
    // else{
    //     delta = 0.45;
    // } 


    // rotate ipads on mousemove
    this.objects.ipads.updateRotation(direction);

    // rotate blob on mousemove
    this.objects.blob.updateRotation(this.mouse, event, delta);

    // rotate metaball on mousemove
    this.objects.metaball.updateRotation(this.mouse, event, delta);

    // set new mouse coords
    this.mouse.x = event.x;
    this.mouse.y = event.y;
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;

    this.updateEvents();
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