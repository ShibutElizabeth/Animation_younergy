import {
  ShaderMaterial,
  Vector3,
  DoubleSide,
} from 'three';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes';
import fragmentShader from '../../shaders/fragment-metaball.glsl';
import vertexShader from '../../shaders/vertex-metaball.glsl';
import { randomInRange } from '../utils/utils';
import noise from '../utils/perlin';

export default class Metaball {
  constructor() {
    this.size = 0.2;
    this.resolution = 50;
    this.numberOfBlobs = 15;
    this.blobs = [];
    this.setMaterial();
    this.setupEffect(this.resolution, this.material, this.size);
    this.setupBlobs(this.numberOfBlobs);
  }

  setMaterial() {
    const koeff = 2.2;
    this.material = new ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: DoubleSide,
      uniforms: {
        time: {
          value: 0
        },
        koeff: {
          value: 1.5 * koeff,
        },
        uColor: {
          value: new Vector3(0.94, 0.44, 0.17)
        },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }

  setupEffect(resolution, material, size) {
    this.mesh = new MarchingCubes(resolution, material, true, true);
    this.mesh.position.set(-1, 0, 0);
    this.mesh.init(resolution);
    this.mesh.isolation = 20;

    this.mesh.scale.set(size, size, size);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  setupBlobs(number) {
    const numBlobs = number;
    for (let j = 0; j < numBlobs; j++) {
      this.blobs.push({
        theta: randomInRange(0, Math.PI),
        phi: randomInRange(0, 2 * Math.PI),
        offset: randomInRange(0, 2 * Math.PI),
      });
    }
  }

  updateMesh(TIME) {
    const effect = this.mesh;
    effect.isolation = 500;
    effect.reset();
    const PI = Math.PI;
    const TAU = 2 * Math.PI;
    const radius = 0.25;
    const time = TIME % 6;
    const t = time / 6;
    const tmpVector = new Vector3();
    this.blobs.forEach((blob, idx) => {
      const r = radius * Math.cos(t * TAU + blob.offset);
      tmpVector.x = r * Math.sin(blob.theta) * Math.cos(blob.phi);
      tmpVector.y = r * Math.sin(blob.phi);
      tmpVector.z = r * Math.cos(blob.theta);
      const s = 3.0;
      const offset = Math.cos(t * TAU) * s;
      const strength = 0.1 + 4 * (0.5 + .5 * noise.perlin3(s * tmpVector.x + offset, s * tmpVector.y + .5 * offset, s * tmpVector.z + .4 * offset));
      const subtract = 10 + 20 * (.5 + .5 * noise.perlin3(s * tmpVector.x + 1.2 * offset, s * tmpVector.y + .8 * offset, s * tmpVector.z + .9 * offset));
      effect.addBall(tmpVector.x + .5, tmpVector.y + .5, tmpVector.z + .5, strength, subtract);
    });
    effect.material.opacity = 1 * time / 8;
  }

  updateRotation(mouse) {
    this.mesh.rotation.x = mouse.y;
    this.mesh.rotation.y = mouse.x;
  }

  updateDelta(delta){
    this.delta = delta;
  }
}