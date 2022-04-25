import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import fragmentShader from '../../shaders/fragment.glsl';
import vertexShader from '../../shaders/vertex.glsl';

export default class Blob {
  constructor(){
    this.size = 1.0;
    this.setupMaterial();
    this.setupMesh();
  }

  setupMaterial(){
    const koeff = 2.2;
    const color = new THREE.Vector3(0.91, 0.44, 0.17);
    this.material = new THREE.ShaderMaterial({
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
          value: color,
        },
        mouseX: {
          value: 0,
        },
        mouseY: {
          value: 0,
        }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }

  setupMesh(){
    this.geometry = new THREE.SphereBufferGeometry(1, 100, 100);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(-1, 0, 0);
  }

  updateRotation(mouse, event){
    this.mesh.rotateY(-1 * (mouse.x - event.x) / 1000);
    this.mesh.rotateX(-1 * (mouse.y - event.y) / 1000);

    this.material.uniforms.mouseX.value = event.x;
    this.material.uniforms.mouseY.value = event.y;
  }

  updateMesh(time){
    this.material.uniforms.time.value = time;
  }
}