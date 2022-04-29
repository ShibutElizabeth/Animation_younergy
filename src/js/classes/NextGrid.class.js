import 'regenerator-runtime/runtime';
import * as THREE from 'three';
// import fragmentShader from '../../shaders/fragment-wireframe.glsl';
// import vertexShader from '../../shaders/vertex-wireframe.glsl';

export default class Grid {
    constructor() {
        this.setupMesh();
    }

    setupMesh() {
        this.geometry = new THREE.SphereBufferGeometry(1, 100, 100);
        this.material1 = this.getMaterial(0xffffff, 0.15);
        this.mesh1 = new THREE.Mesh(this.geometry, this.material1);
        this.mesh1.castShadow = true;
        this.mesh1.receiveShadow = true;
        this.mesh1.position.set(0, 0, 0);
        // this.mesh1.customDepthMaterial = this.getDepthMaterial();

        this.mesh2 = new THREE.Mesh(this.geometry, this.getMaterial(0x000000, 0.5, 0.5));
        this.mesh2.castShadow = true;
        this.mesh2.receiveShadow = true;
        this.mesh2.position.set(0, 0, 0);
        // this.mesh2.scale.set(0.7, 0.7, 0.7);
        this.mesh2.rotateX(Math.PI / 2)
        // this.mesh2.customDepthMaterial = this.getDepthMaterial2();
        this.group = new THREE.Group();
        this.group.add(this.mesh1, this.mesh2);
        // this.group.scale.set(0, 0, 0);
        this.group.rotateY(Math.PI/3)
    }

    getMaterial(color, roughness, opacity) {
        const material = new THREE.MeshStandardMaterial({
            color,
            roughness,
            opacity,
            side: THREE.DoubleSide
        });
        material.onBeforeCompile = (shader) => {
            shader.vertexShader = shader.vertexShader.replace(
                `varying vec3 vViewPosition;`,
                `varying vec3 vViewPosition;
                varying vec3 pos;
                varying vec2 vUv;`);
            shader.vertexShader = shader.vertexShader.replace(
                `#include <defaultnormal_vertex>`,
                `#include <defaultnormal_vertex>
                pos = position.xyz;
                vUv = pos.xy;`);

            shader.fragmentShader = shader.fragmentShader.replace(
                `varying vec3 vViewPosition;`,
                `varying vec3 vViewPosition;
                varying vec3 pos;
                varying vec2 vUv;
                #define M_PI 3.14159265359
                #define M_TAU (2.*M_PI)
                const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
const vec2 mys = vec2(1e4, 1e6);

vec2 rhash(vec2 uv) {
  uv *= myt;
  uv *= mys;
  return fract(fract(uv / mys) * uv);
}

vec3 hash(vec3 p) {
  return fract(
      sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)),
               dot(p, vec3(113.0, 1.0, 57.0)))) *
      43758.5453);
}
vec3 voronoi3d(const in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
  
    float id = 0.0;
    vec2 res = vec2(100.0);
    for (int k = -1; k <= 1; k++) {
      for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
          vec3 b = vec3(float(i), float(j), float(k));
          vec3 r = vec3(b) - f + hash(p + b);
          float d = dot(r, r);
  
          float cond = max(sign(res.x - d), 0.0);
          float nCond = 1.0 - cond;
  
          float cond2 = nCond * max(sign(res.y - d), 0.0);
          float nCond2 = 1.0 - cond2;
  
          id = (dot(p + b, vec3(1.0, 57.0, 113.0)) * cond) + (id * nCond);
          res = vec2(d, res.x) * cond + res * nCond;
  
          res.y = cond2 * d + nCond2 * res.y;
        }
      }
    }
  
    return vec3(sqrt(res), abs(id));
  }
                float voronoi2d(const in vec2 point) {
                    vec2 p = floor(point);
                    vec2 f = fract(point);
                    float res = 0.0;
                    for (int j = -1; j <= 1; j++) {
                      for (int i = -1; i <= 1; i++) {
                        vec2 b = vec2(i, j);
                        vec2 r = vec2(b) - f + rhash(p + b);
                        res += 1. / pow(dot(r, r), 8.);
                      }
                    }
                    return pow(1. / res, 0.0625);
                  }
                float pattern(vec3 pos){
                float opacity = 1.0;
                float r = sqrt(dot(pos,pos));
                float theta = acos(pos.z/r);
                float phi = atan(pos.y,pos.x);
                float v = theta / M_TAU;
                float v2 = phi / M_PI;
                float m1 = 2.0 + 0.5*tan(v*M_TAU*${6}. + v2 * M_TAU*${6}.);
                float res = m1;
                return res;
            }`);
            // float m1 = .5+.5*sin(v*M_TAU*16. + v2 * M_TAU + opacity*M_TAU);
            shader.fragmentShader = shader.fragmentShader.replace(
                `vec4 diffuseColor = vec4( diffuse, opacity );`,
                `vec4 diffuseColor = vec4( diffuse, 0.5 );
                vec3 thePos = voronoi3d(pos);
                float strip = pattern(thePos);
                if( smoothstep(.49,.51,strip) >.5){
                   discard;
                }`);
            }
        return material;
    }

    getDepthMaterial() {
        const material = new THREE.MeshDepthMaterial({
            depthPacking: THREE.RGBADepthPacking,
            side: THREE.DoubleSide
        });
        material.onBeforeCompile = (shader) => {
            shader.vertexShader = shader.vertexShader.replace(
                `#include <common>`,
                `#include <common>
                varying vec3 pos;`);
            shader.vertexShader = shader.vertexShader.replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
                pos = position.xyz;`);

            shader.fragmentShader = shader.fragmentShader.replace(
                `#include <common>`,
                `#include <common>
                varying vec3 pos;
                #define M_PI 3.14159265359
                #define M_TAU (2.*M_PI)
                float pattern(vec3 pos){
                float r = sqrt(dot(pos,pos));
                float theta = acos(pos.z/r);
                float phi = atan(pos.y,pos.x);
                float v = theta / M_TAU;
                float v2 = phi / M_PI;
                float m1 = .2+.2*cos(v*M_TAU*16. + v2 * M_TAU);
                float res = m1;
                return res;
            }`);

            shader.fragmentShader = shader.fragmentShader.replace(
                `vec4 diffuseColor = vec4( 1.0 );`,
                `vec4 diffuseColor = vec4( 1.0 );
                float strip = pattern(pos);
                if( smoothstep(.49,.51,strip) >.5){
                  discard;
                }`);
            }
        return material;
    }

    getDepthMaterial2() {
        const material = new THREE.MeshDepthMaterial({
            depthPacking: THREE.RGBADepthPacking,
            side: THREE.DoubleSide
        });
        material.onBeforeCompile = (shader) => {
            shader.vertexShader = shader.vertexShader.replace(
                `#include <common>`,
                `#include <common>
                varying vec3 pos;`);
            shader.vertexShader = shader.vertexShader.replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
                pos = position.xyz;`);

            shader.fragmentShader = shader.fragmentShader.replace(
                `#include <common>`,
                `#include <common>
                varying vec3 pos;
                #define M_PI 3.14159265359
                #define M_TAU (2.*M_PI)
                float pattern(vec3 pos){
                float r = sqrt(dot(pos,pos));
                float theta = acos(pos.z/r);
                float phi = atan(pos.y,pos.x);
                float v = theta / M_TAU;
                float v2 = phi / M_PI;
                float m1 = .5+.5*sin(v*M_TAU*16. + v2 * M_TAU + M_PI);
                float res = m1;
                return res;
            }`);

            shader.fragmentShader = shader.fragmentShader.replace(
                `vec4 diffuseColor = vec4( 1.0 );`,
                `vec4 diffuseColor = vec4( 1.0 );
                float strip = pattern(pos);
                if( smoothstep(.49,.51,strip) >.5){
                    discard;
                }`);
            }
        return material;
    }
}