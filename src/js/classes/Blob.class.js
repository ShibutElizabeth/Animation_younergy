import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes';
import fragmentShader from '../../shaders/fragment.glsl';
import vertexShader from '../../shaders/vertex.glsl';
import Animation from './Animation.class';
import { dumpObject, randomInRange } from '../utils/utils';
import noise from '../utils/perlin';

export default class Blob {
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
    this.camera.position.set(-4, 0, 2.8);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // LIGHTS
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0.5, 0, 5);
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

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(1.5, 0, 5);
    this.scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.position.set(0.5, 0, 2);
    this.scene.add(ambientLight);

    // MAIN VARIABLES
    this.time = 0;
    this.color = new THREE.Vector3(0.94, 0.44, 0.17);
    this.isPlaying = true;
    this.materials = {
      blob: null,
      ipadMetal: null,
      ipadScreen: null,
    };
    this.geometries = {
      blob: null,
    }
    this.blobs = [];

    // IPADS VARIABLES
    this.group = new THREE.Group();
    this.ipads = [];
    this.angle = 0;
    this.isRotating = false;

    // METHODS
    this.settings();
    this.setupMaterials();
    this.addIpads();
    this.addBlob();
    this.addMarching();
    this.resize();
    this.render();
    this.setupListeners();

  }

  addMarching() {
    // MARCHING CUBES

    this.resolution = 32;
    this.ballMaterial =  new THREE.MeshMatcapMaterial( {  color: 0xfff68f } );
    this.effect = new MarchingCubes(this.resolution, this.ballMaterial, true, true);
    this.effect.position.set(-4, 0, 0);
    this.effect.enableUvs = false;
    this.effect.enableColors = false;
    this.effect.init(this.resolution);
    this.effect.isolation = 20;

    // this.mesh = new THREE.Mesh(this.effect.geometry, this.ballMaterial);
    this.effect.scale.set(1, 1, 1);
    this.effect.castShadow = true;
    this.effect.receiveShadow = true;

    this.scene.add(this.effect);

    const numBlobs = 20;
    
    for (let j = 0; j < numBlobs; j++) {
      this.blobs.push({
        theta: randomInRange(0, Math.PI),
        phi: randomInRange(0, 2 * Math.PI),
        offset: randomInRange(0, 2 * Math.PI),
      });
    }
    console.log(this.blobs);
  }

  updateCubes(effect, TIME, blobs) {
    effect.isolation = 500;
    effect.reset();
    const PI = Math.PI;
    const TAU = 2 * Math.PI;
    const radius = 0.25;
    const time = TIME % 6;
    const t = time / 6;
    const tmpVector = new THREE.Vector3();
    blobs.forEach((blob)=> {
      const r = radius * Math.cos(t * TAU + blob.offset);
      tmpVector.x = r * Math.sin(blob.theta) * Math.cos(blob.phi);
      tmpVector.y = r * Math.sin(blob.theta) * Math.sin(blob.phi);
      tmpVector.z = r * Math.cos(blob.theta);
      const s = 3.0;
      const offset = Math.cos(t * TAU) * s;
      const strength = 0.1 + 4 * (0.5 + .5 * noise.perlin3(s * tmpVector.x + offset, s * tmpVector.y + .5 * offset, s * tmpVector.z + .4 * offset));
      const subtract = 10 + 20 * (.5 + .5 * noise.perlin3(s * tmpVector.x + 1.2 * offset, s * tmpVector.y + .8 * offset, s * tmpVector.z + .9 * offset));
      effect.addBall(tmpVector.x + .5, tmpVector.y + .5, tmpVector.z + .5, strength, subtract);
    });

    // this.mesh.geometry.dispose();
    // this.mesh.geometry = effect.geometry;

    effect.material.opacity = 1 * time / 8;
    // effect.rotation.z = t * TAU;
    // effect.rotation.x = t * TAU;

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

  setupMaterials() {
    const {
      koeff
    } = this.settings;

    // BLOB material
    this.materials.blob =
      new THREE.ShaderMaterial({
        extensions: {
          derivatives: "#extension GL_OES_standard_derivatives : enable"
        },
        side: THREE.DoubleSide,
        uniforms: {
          time: {
            value: 0
          },
          koeff: {
            value: koeff
          },
          uColor: {
            value: new THREE.Vector3(0.9, 0.9, 0.8)
          },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

    // IPAD materials 
    // metal
    this.materials.ipadMetal =
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 1,
        reflectivity: 1,
        flatShading: true,
      });
  }

  addBlob() {
    this.geometries.blob = new THREE.SphereBufferGeometry(1, 100, 100);
    this.sphere = new THREE.Mesh(this.geometries.blob, this.materials.blob);
    this.sphere.position.set(-1, 0, 0);
    this.scene.add(this.sphere);
    new Animation(this.camera, this.sphere, this.ipads);
  }

  addIpads() {
    const link = './././scene.gltf';
    const loader = new GLTFLoader();
    const positions = [
      [-1.0, 0.0, 0.0],
      [0.0, 0.0, 1.0],
      [1.0, 0.0, 0.0]
    ];

    loader.load(link, (gltf) => {
      const root = gltf.scene;

      this.ipads.push(
        root.getObjectByName('Empty_Object_6'),
        root.getObjectByName('Empty_Object_4'),
        root.getObjectByName('Empty_Object_7')
      );
      this.ipads.forEach((ipad, idx) => {
        // set scale & position
        ipad.scale.set(0, 0, 0);
        ipad.rotation.set(0, 0, 0);
        ipad.position.set(positions[idx][0], positions[idx][1], positions[idx][2]);
        ipad.rotateY((idx - 1) * Math.PI / 2);

        // add ipad material
        ipad["children"].forEach((child) => {
          child["material"] = this.materials.ipadMetal;
        })
        this.group.add(ipad);
      });
      // console.log(this.dumpObject(root).join('\n'));
    });
    this.scene.add(this.group);
  }

  mousemove(event) {
    // rotate ipads on mousemove
    if (!this.isRotating) {
      this.isRotating = true;
      const direction = this.mouse.x < event.x ? 1 : -1;
      const newAngle = this.angle + (direction * Math.PI / 2);

      // check angle's bounds [-Pi/2; Pi/2]
      this.angle = newAngle > Math.PI / 2 || newAngle < -Math.PI / 2 ? direction * Math.PI / 2 : newAngle;
      console.log(this.angle);
      gsap.to(this.group.rotation, {
        y: this.angle,
        duration: 1,
      });
      setTimeout(() => {
        this.isRotating = false;
      }, 1000);
    }

    // rotate blob on mousemove
    this.sphere.rotateY(-1 * (this.mouse.x - event.x) / 1000);
    this.sphere.rotateX(-1 * (this.mouse.y - event.y) / 1000);

    this.effect.rotateY(-1 * (this.mouse.x - event.x) / 1000);
    this.effect.rotateX(-1 * (this.mouse.y - event.y) / 1000);

    // set new mouse coords
    this.mouse.x = event.x;
    this.mouse.y = event.y;
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;

    // update blob material uniforms
    this.materials.blob.uniforms.time.value = this.time / 7;
    this.materials.blob.uniforms.koeff.value = this.settings.koeff;
    this.color.set(this.settings.r, this.settings.g, this.settings.b);
    this.materials.blob.uniforms.uColor.value = this.color;

    this.updateCubes(this.effect, this.time / 3, this.blobs);

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

new Blob({
  dom: document.querySelector("#container")
});