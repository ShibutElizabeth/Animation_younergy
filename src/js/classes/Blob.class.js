import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';
import fragmentShader from '../../shaders/fragment.glsl';
import vertexShader from '../../shaders/vertex.glsl';

export default class Blob {
  constructor(options) {
    console.log('scene');
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
 
    this.container.appendChild(this.renderer.domElement);
 
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 1.8);
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;
    this.color = new THREE.Vector3(0.9, 0.9, 0.8);
 
    this.isPlaying = true;
 
    this.settings();
    this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
  }
 
  settings() {
    this.settings = {
      koeff: 1.2,
      r: 0.9,
      g: 0.9,
      b: 0.8,
    };
    this.gui = new GUI();
    this.gui.add(this.settings, "koeff", 0, 10, 0.1);
    this.gui.add(this.settings, "r", 0, 1, 0.01);
    this.gui.add(this.settings, "g", 0, 1, 0.01);
    this.gui.add(this.settings, "b", 0, 1, 0.01);
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
    const k = this.settings.koeff;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        time: { value: 0 },
        koeff: { value: k },
        uColor: { value: new THREE.Vector3(0.9, 0.9, 0.8) },
      },
    //   wireframe: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });
 
    this.geometry = new THREE.SphereBufferGeometry(1, 100, 100);
 
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.sphere);
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
}
 
new Blob({
  dom: document.querySelector("#container")
});