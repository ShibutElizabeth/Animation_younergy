import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import fragmentShader from '../../shaders/fragment-blob.glsl';
import vertexShader from '../../shaders/vertex-blob.glsl';

export default class Blob {
  constructor(){
    this.size = 1.0;
    this.coefficient = 2.2;
    this.setupMaterial();
    this.setupMesh();
  }

  setupMaterial(){
    const k = this.coefficient;
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
        coefficient: {
          value: k
        },
        uColor: {
          value: color,
        },
        delta: {
          value: 1,
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

  updateRotation(mouse, event, delta){
    this.mesh.rotateY(-1 * (mouse.x - event.x) / 1000);
    this.mesh.rotateX(-1 * (mouse.y - event.y) / 1000);
    this.material.uniforms.delta.value = delta;
  }

  updateMesh(time){
    this.material.uniforms.time.value = time;
  }

  updateCoefficient(k){
    this.material.uniforms.coefficient.value = k;
  }

}