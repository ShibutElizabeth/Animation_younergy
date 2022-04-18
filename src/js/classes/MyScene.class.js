import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';
import fragmentShader from '../../shaders/fragment.glsl';
import vertexShader from '../../shaders/vertex.glsl';

export default class MyScene {
  constructor(options) {
    this.scene = new THREE.Scene();
 
    this.container = options.dom || document.body;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xf0712c, 1); 
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
 
    this.container.appendChild(this.renderer.domElement);
 
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;
 
    this.isPlaying = true;
 
    this.addObjects();
    // this.resize();
    this.render();
    // this.setupResize();
    this.settings();
  }
 
  settings() {
    let that = this;
    this.settings = {
      progress: 0,
    };
    this.gui = new GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }
 
  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }
 
  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
 
    this.camera.updateProjectionMatrix(); 
  }
 
  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });
    // this.material.transparent = true;
 
    this.geometry = new THREE.SphereBufferGeometry(1, 62, 62);
 
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
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
    this.material.uniforms.time.value = this.time/10;
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
 
new MyScene({
  dom: document.getElementById("container")
});