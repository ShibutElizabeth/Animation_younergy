uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vNoise;
float PI = 3.14159265359;

void main(){
    gl_FragColor = (1. - vNoise) * vec4(0.94, 0.44, 0.17,  (1. - vNoise) * 0.1);
}