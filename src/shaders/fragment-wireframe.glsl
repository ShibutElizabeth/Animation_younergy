varying vec3 vViewPosition;
    varying vec3 pos;
    varying vec2 vUv;
  #define M_PI 3.14159265359
  #define M_TAU (2.*M_PI)
  float pattern(vec3 pos){
    float opacity = 1.0;
    float r = sqrt(dot(pos,pos));
    float theta = acos(pos.z/r);
    float phi = atan(pos.y,pos.x);
    float v = theta / M_TAU;
    float v2 = phi / M_PI;
    float m1 = 2.0 + 0.5*tan(v*M_TAU*6. + v2 * M_TAU*6.);
    float res = m1;
    return res;
  }