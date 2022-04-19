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
        x: 1,
        duration: 2,
        // keyframes: {
        //     x: [0, 1.4, 1],
        // },
        ease: 'elastic.out(1.2, 0.7)'
    });
}
export function toThisSize (target) {
    return gsap.to(target, {
      x: 1,
      y: 1,
      duration: 1,
    });
}
export function toRightSize (target) {
    const f = () => {
        gsap.to(target, {
            // keyframes: {
            //     x: [1, 0.7, 0.3, 0.5],
            //     y: [1, 1.2, 1, 0.5],
            // },
        //   x: 0.5,
          y: 0.5,
            duration: 1,
            ease: 'back.in(3)'
        });
        gsap.to(target, {
            x: 0.5,
            duration: 1,
        });
    }
    return f();
}