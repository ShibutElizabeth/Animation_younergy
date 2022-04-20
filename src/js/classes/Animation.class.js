import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Animation {
    constructor(object, camera){
        this.target = object;
        this.camera = camera;
        this.firstStage();
    }
    
    firstStage(){
        const that = this;
        gsap.timeline({
            scrollTrigger: {
              trigger: '#section-1',
              start: 'top+=10px bottom',
              end: 'bottom-=400px top',
              scrub: 1,
              onEnterBack: () => {
                toThisPosition(that.target.position);
                toThisSize(that.target.scale);
              },
            }
          });
          
        gsap.timeline({
            scrollTrigger: {
              trigger: '#section-2',
              start: 'top+=10px bottom',
              end: 'bottom-=10px top',
              scrub: 1,
              onEnter: () => {
                toRightPosition(that.target.position);
                toRightSize(that.target.scale);
              },
            }
        });
    }
}

export function toThisPosition (target) {
    return gsap.to(target, {
      x: 0,
      duration: 1,
    });
}
export function toRightPosition (target) {
    return gsap.to(target, {
        x: 4,
        duration: 2,
        ease: 'elastic.out(1.2, 0.7)'
    });
}
export function toThisSize (target) {
    return gsap.to(target, {
      x: 4,
      y: 4,
      z: 4,
      duration: 1,
    });
}
export function toRightSize (target) {
    return gsap.to(target, {
        x: 2.5,
        y: 2.5,
        z: 2.5,
        duration: 1,
    });
}