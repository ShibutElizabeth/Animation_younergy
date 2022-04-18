uniform float time;
uniform vec3 uColor;
varying float vNoise;

void main(){
    gl_FragColor = (1. - vNoise) * vec4(uColor, (1. - vNoise) * 0.07);
}