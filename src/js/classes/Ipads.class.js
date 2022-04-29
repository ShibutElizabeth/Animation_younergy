import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { dumpObject } from '../utils/utils';

export default class Ipads{
    constructor(){
        this.mesh = new THREE.Group();
        this.ipads = [];
        this.angle = 0;
        this.isRotating = false;
        this.setupMaterial();
        this.setupMesh();
    }

    setupMaterial(){
        this.material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 1,
            reflectivity: 1,
            flatShading: true,
        });
    }

    setupMesh() {
        const link = './././scene.gltf';
        const loader = new GLTFLoader();
        const positions = [
          [-1.45, 0.0, 0.0],
          [0.0, 0.0, 1.45],
          [1.45, 0.0, 0.0],
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
            // ipad.scale.set(0, 0, 0);
            ipad.rotation.set(0, 0, 0);
            ipad.position.set(positions[idx][0], positions[idx][1], positions[idx][2]);
            ipad.rotateY(idx * (Math.PI / 2));
    
            // add ipad material
            ipad["children"].forEach((child) => {
              child["material"] = this.material;
            })
            this.mesh.add(ipad);
          });
          // console.log(this.dumpObject(root).join('\n'));
        });
        // this.mesh.scale.set(0.000000001, 0.000000001, 0.000000001);
        // this.mesh.rotateY(-Math.PI/2);
    }

    updateRotation(direction){
        if (!this.isRotating) {
            this.isRotating = true;
            
            const newAngle = this.angle + (direction * Math.PI / 2);
      
            // check angle's bounds [0; Pi]
            this.angle = newAngle > Math.PI || newAngle < 0 ? direction * Math.PI/2 : newAngle;
            gsap.to(this.mesh.rotation, {
              y: this.angle,
              duration: 1,
            });
            setTimeout(() => {
              this.isRotating = false;
            }, 1000);
        }
    }
}