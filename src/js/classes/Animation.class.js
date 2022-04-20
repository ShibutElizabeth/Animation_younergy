import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { changePosition, changeSize } from '../utils/changeState';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Animation {
    constructor(object, camera){
        this.target = object;
        this.camera = camera;
        this.firstStage();
    }
    
    firstStage() {
        const that = this;
        gsap.timeline({
            scrollTrigger: {
              trigger: '#section-1',
              start: 'top+=10px bottom',
              end: 'bottom-=400px top',
              scrub: 2,
              onEnterBack: () => {
                changePosition(that.target.position, { x: 0 });
                changeSize(that.target.scale, { size: 4 });
              },
            }
          });
          
        gsap.timeline({
            scrollTrigger: {
              trigger: '#section-2',
              start: 'top+=10px bottom',
              end: 'bottom-=10px top',
              scrub: 2,
              onEnter: () => {
                changePosition(that.target.position, { x: 4, duration: 2, ease: 'elastic.out(1.2, 0.7)' });
                changeSize(that.target.scale, { size: 2.5 });
              },
            }
        });
    }
}
