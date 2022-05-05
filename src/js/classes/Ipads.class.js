import {
  Group,
  MeshPhysicalMaterial,
  MeshBasicMaterial,
  TextureLoader,
  DoubleSide,
  Mesh,
  PlaneGeometry,
} from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
    for (let i = 0; i < 3; i++) {
      const texture = textureLoader.load(texUrls[i]);
      texture.flipY = false;
      const material = new MeshBasicMaterial({
        opacity: 0,
        reflectivity: 1,
        transparent: true,
        map: texture,
        side: DoubleSide,
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
    const factors = [
      [0.4, 0, 0],
      [0, 0, -0.4],
      [-0.4, 0, 0],
    ]

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

        // add screen plane
        const geometry = new PlaneGeometry(0.67, 0.46);
        const material = this.screen[idx];
        const plane = new Mesh(geometry, material);
        plane.position.set(positions[idx][0]+factors[idx][0], positions[idx][1]+factors[idx][1], positions[idx][2]+factors[idx][2]);
        plane.rotateY((idx - 1) * Math.PI / 2);
        plane.rotateX(Math.PI);

        // add ipad material
        ipad["children"].forEach((child) => {
          child["material"] = this.material;
        })
    
        // add ipad to the group
        this.mesh.add(ipad, plane);
      });

      this.mesh.position.set(0, 0, 0)
    });
  }

  updateRotation(direction) {
    const newAngle = direction * Math.PI / 2;

    // check angle's bounds [-Pi/2; Pi/2]
    this.angle = newAngle > Math.PI / 2 || newAngle < -Math.PI / 2 ? direction * Math.PI / 2 : newAngle;
    gsap.to(this.mesh.rotation, {
      y: this.angle,
      duration: 1.2,
      ease: 'power1.easeIn',
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