uniform float time;
uniform vec3 uColor;
varying float vNoise;

void main(){
    gl_FragColor = (1. - sin(vNoise)) * vec4(uColor, 0.6);
}