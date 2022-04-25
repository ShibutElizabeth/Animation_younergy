import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { changePosition, changeSize } from '../utils/changeState';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Animation {
    constructor(camera, objects){
        this.blob = objects.blob.mesh;
        this.ipads = objects.ipads.ipads;
        this.metaball = objects.metaball.mesh;
        this.camera = camera;
        this.firstStage();
        this.secondStage();
    }
    
    firstStage() {
        const that = this;
        gsap.timeline({
            scrollTrigger: {
              trigger: '#section-1',
              start: 'top+=10px bottom',
              end: 'bottom-=10px top',
              scrub: 2,
              onEnterBack: () => {
                changePosition(that.blob.position, { x: -1 });
                changePosition(that.metaball.position, { x: -1 });
                changeSize(that.blob.scale, { size: 1 });
                changeSize(that.ipads[2].scale, { size: 0.000000001, duration: 0.1 });
                changeSize(that.ipads[1].scale, { size: 0.000000001, duration: 0.1 });
                changeSize(that.ipads[0].scale, { size: 0.000000001, duration: 0.1 });
              },
            }
          });
          
        gsap.timeline({
            scrollTrigger: {
              trigger: '#section-2',
              start: 'top 35%',
              end: 'bottom-=10px top',
              scrub: 2,
              onEnter: () => {
                changePosition(that.blob.position, { x: 0, duration: 2, ease: 'elastic.out(1, 0.7)' });
                changePosition(that.metaball.position, { x: 0, duration: 2, ease: 'elastic.out(1, 0.7)' });
                changeSize(that.blob.scale, { size: 0.5 });
                changeSize(that.ipads[0].scale, { size: 0.0008 });
                changeSize(that.ipads[1].scale, { size: 0.0008 });
                changeSize(that.ipads[2].scale, { size: 0.0008 });
              },
              onLeave: () => {
                changeSize(that.ipads[2].scale, { size: 0.000000001, duration: 0.1 });
                changeSize(that.ipads[1].scale, { size: 0.000000001, duration: 0.1 });
                changeSize(that.ipads[0].scale, { size: 0.000000001, duration: 0.1 });
              },
              onEnterBack: () => {
                changeSize(that.ipads[0].scale, { size: 0.0008 });
                changeSize(that.ipads[1].scale, { size: 0.0008 });
                changeSize(that.ipads[2].scale, { size: 0.0008 });
              },
              onLeaveBack: () => {
                changeSize(that.ipads[2].scale, { size: 0.000000001, duration: 0.1 });
                changeSize(that.ipads[1].scale, { size: 0.000000001, duration: 0.1 });
                changeSize(that.ipads[0].scale, { size: 0.000000001, duration: 0.1 });
              },
            }
        });
    }

    secondStage(){
      const that = this;
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-4',
          start: 'top+=10px bottom',
          end: 'bottom-=10px top',
          scrub: 2,
          onEnter: () => {
            changeSize(that.blob.scale, { size: 0.00001, duration: 2, ease: 'elastic.out(1.2, 0.7)' });
            changeSize(that.metaball.scale, { size: 1.2 });
          },
          onLeave: () => {

          },
          onEnterBack: () => {
            changeSize(that.blob.scale, { size: 0.00001, duration: 2, ease: 'elastic.out(1.2, 0.7)' });
            changeSize(that.metaball.scale, { size: 1.2 });
          },
          onLeaveBack: () => {
            changeSize(that.blob.scale, { size: 0.5, duration: 1 });
            changeSize(that.metaball.scale, { size: 0.2, ease: 'elastic.out(1.2, 0.7)' });
          },
        }
      });
    }

    thirdStage(){
      const that = this;
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-5',
          start: 'top+=10px bottom',
          end: 'bottom-=10px top',
          scrub: 2,
          // onEnter: () => {
          //   changeSize(that.target.scale, { size: 0.00001, duration: 2, ease: 'elastic.out(1.2, 0.7)' });
          //   changeSize(that.metaball.scale, { size: 1.2 });
          // },
          // onLeave: () => {

          // },
          // onEnterBack: () => {
          //   changeSize(that.target.scale, { size: 0.00001, duration: 2, ease: 'elastic.out(1.2, 0.7)' });
          //   changeSize(that.metaball.scale, { size: 1.2 });
          // },
          // onLeaveBack: () => {
          //   changeSize(that.target.scale, { size: 0.5, duration: 1 });
          //   changeSize(that.metaball.scale, { size: 0.2, ease: 'elastic.out(1.2, 0.7)' });
          // },
        }
      });
    }
}
