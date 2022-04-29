import 'regenerator-runtime/runtime';
import * as THREE from 'three';
import fragmentShader from '../../shaders/fragment-grid.glsl';
import vertexShader from '../../shaders/vertex-grid.glsl';

export default class Grid {
  constructor(){
    this.size = 1.0;
    this.coefficient = 2.2;
    this.setupMaterial();
    this.setupMesh();
  }

  setupMaterial(){
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        iTime: {
          value: 0
        },
      },
      transparent: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }

  setupMesh(){
    this.geometry = new THREE.SphereBufferGeometry(1, 100, 100);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(-1, 0, 0);
  }

  updateMesh(time){
    this.material.uniforms.iTime.value = time;
  }

}