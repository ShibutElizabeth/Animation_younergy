import {
  Group,
  MeshPhysicalMaterial, 
  MeshBasicMaterial,
  TextureLoader
} from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { dumpObject } from '../utils/utils';
import { Color } from 'three';

export default class Ipads {
  constructor() {
    this.mesh = new Group();
    this.ipads = [];
    this.angle = 0;
    this.isRotating = false;
    this.setupMaterial();
    this.setupMesh();
  }

  setupMaterial() {
    this.material = new MeshPhysicalMaterial({
      color: 0xffffff,
      opacity: 0,
      roughness: 1,
      reflectivity: 1,
      flatShading: true,
      transparent: true,
    });

    const texUrls = [];
    texUrls.push(
      './Customers.png',
      './Opportunities.png',
      './Profile.png',
    );

    const textureLoader = new TextureLoader();
    this.screen = [];
    for(let i = 0; i < 3; i++){
      const texture = textureLoader.load(texUrls[i]);
      // console.log(texture)
      // texture.flipY = false;
      const material = new MeshBasicMaterial({
        opacity: 0,
        reflectivity: 1,
        transparent: true,
        map: texture,
      });
      this.screen.push(material);
    }

  }

  setupMesh() {
    const link = './././scene.gltf';
    const loader = new GLTFLoader();
    const positions = [
      [-1.065, 0.0, 0.0],
      [0.0, 0.0, 1.065],
      [1.065, 0.0, 0.0],
    ];

    loader.load(link, (gltf) => {
      const root = gltf.scene;

      this.ipads.push(
        root.getObjectByName('Tablet_1'),
        root.getObjectByName('Tablet_2'),
        root.getObjectByName('Tablet_3')
      );

      this.ipads.forEach((ipad, idx) => {

        // set scale & position
        ipad.scale.set(0.0008, 0.0008, 0.0008);
        ipad.rotation.set(0, 0, 0);
        ipad.position.set(positions[idx][0], positions[idx][1], positions[idx][2]);
        ipad.rotateY((idx - 1) * Math.PI / 2);

        const name = `Screen_${idx+1}`;
        const screen = ipad.getObjectByName(name);
        
        // add ipad material
        ipad["children"].forEach((child) => {
          child["material"] = this.material;
        })
        // add screen material
        if(screen) screen["material"] = this.screen[idx];
        // console.log(screen)

        // add ipad to the group
        this.mesh.add(ipad);
      });

      this.mesh.position.set(0, 0, 0)
    });
  }

  updateRotation(direction) {
    if (!this.isRotating) {
      this.isRotating = true;
      const newAngle = this.angle + (direction * Math.PI / 2);

      // check angle's bounds [-Pi/2; Pi/2]
      this.angle = newAngle > Math.PI / 2 || newAngle < -Math.PI / 2 ? direction * Math.PI / 2 : newAngle;
      gsap.to(this.mesh.rotation, {
        y: this.angle,
        duration: 1,
      });
      setTimeout(() => {
        this.isRotating = false;
      }, 1000);
    }
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