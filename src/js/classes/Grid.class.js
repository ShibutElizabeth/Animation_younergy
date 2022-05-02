import 'regenerator-runtime/runtime';
import * as THREE from 'three';

export default class Grid {
    constructor() {
        this.setupMesh();
    }

    setupMesh() {
        this.geometry = new THREE.SphereBufferGeometry(1, 100, 100);
        this.time = 0.0;
        this.getMaterial(0x888888, 0.3, 0.15);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.position.set(0, 0, 0);
    }

    getMaterial(color, roughness, opacity) {
        const that = this;
        this.material = new THREE.MeshStandardMaterial({
            color,
            roughness: roughness,
            metalness: 0.02,
            opacity,
            side: THREE.DoubleSide,
        });

        this.material.onBeforeCompile = (shader) => {
            shader.uniforms.iTime = { value: 0.0 };
            shader.uniforms.show = { value: 1.0 };
            that.material.uniforms = shader.uniforms;
            shader.vertexShader = shader.vertexShader.replace(
                `varying vec3 vViewPosition;`,
                `varying vec3 vViewPosition;
                varying vec3 pos;
                varying vec2 vUv;`);
            shader.vertexShader = shader.vertexShader.replace(
                `#include <defaultnormal_vertex>`,
                `#include <defaultnormal_vertex>
                pos = position.xyz;
                vUv = uv;`);
  
            shader.fragmentShader = shader.fragmentShader.replace(
                `varying vec3 vViewPosition;`,
                `varying vec3 vViewPosition;
                uniform float iTime;
                uniform float show;
                varying vec3 pos;
                varying vec2 vUv;
                #define M_PI 3.14159265359
                #define M_TAU (2.*M_PI)
                const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
                const vec2 mys = vec2(1e4, 1e6);
  
                vec2 hash2( vec2 p )
                {
                  // texture based white noise
                  //return textureLod( iChannel0, (p+0.5)/256.0, 0.0 ).xy;
  
                    // procedural white noise	
                  return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
                }
  
                vec3 voronoi( in vec2 x )
                {
                    vec2 n = floor(x);
                    vec2 f = fract(x);
  
                    //----------------------------------
                    // first pass: regular voronoi
                    //----------------------------------
                  vec2 mg, mr;
  
                    float md = 8.0;
                    for( int j=-1; j<=1; j++ )
                    for( int i=-1; i<=1; i++ )
                    {
                        vec2 g = vec2(float(i),float(j));
                    vec2 o = hash2( n + g );
                    // #ifdef ANIMATE
                        o = 0.5 + 0.5*sin( iTime + 6.2831*o );
                        // #endif	
                        vec2 r = g + o - f;
                        float d = dot(r,r);
  
                        if( d<md )
                        {
                            md = d;
                            mr = r;
                            mg = g;
                        }
                    }
  
                    //----------------------------------
                    // second pass: distance to borders
                    //----------------------------------
                    md = 8.0;
                    for( int j=-2; j<=2; j++ )
                    for( int i=-2; i<=2; i++ )
                    {
                        vec2 g = mg + vec2(float(i),float(j));
                    vec2 o = hash2( n + g );
                    // #ifdef ANIMATE
                        o = 0.5 + 0.5*sin( iTime + 6.2831*o );
                        // #endif	
                        vec2 r = g + o - f;
  
                        if( dot(mr-r,mr-r)>0.00001 )
                        md = min( md, dot( 0.5*(mr+r), normalize(r-mr) ) );
                    }
  
                    return vec3( md, mr );
                }
  
                float pattern(vec3 pos){
                    return voronoi((vec2(2.,1.)*vUv)*(15.+1.*sin(iTime))).x;
                }
            `);
            shader.fragmentShader = shader.fragmentShader.replace(
                `vec4 diffuseColor = vec4( diffuse, opacity );`,
                `vec4 diffuseColor = vec4( diffuse, 1. );
                float strip = pattern(pos);
                
                if( smoothstep(.0,.2,strip) >.5){
                   discard;
                }
  
                // diffuseColor =vec4( vec3(abs(strip)), 1. );
  
                `);
            }
    }

    updateMesh(time){
        if(this.material.uniforms){
            this.material.uniforms.iTime.value = time;
        }
        
    }
}