import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { changePosition, changeSize } from '../utils/changeState';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Animation {
    constructor(camera, objects){
      this.objects = objects;
      this.blob = objects.blob.mesh;
      this.ipads = objects.ipads.ipads;
      this.metaball = objects.metaball.mesh;
      this.camera = camera;
      this.firstStage();
      this.secondStage();
      this.thirdStage();
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
            changeSize(that.ipads[2].scale, { size: 0.000000001, duration: 0.4 });
            changeSize(that.ipads[1].scale, { size: 0.000000001, duration: 0.4 });
            changeSize(that.ipads[0].scale, { size: 0.000000001, duration: 0.4 });
          },
          onEnterBack: () => {
            changeSize(that.ipads[0].scale, { size: 0.0008 });
            changeSize(that.ipads[1].scale, { size: 0.0008 });
            changeSize(that.ipads[2].scale, { size: 0.0008 });
          },
          onLeaveBack: () => {
            changeSize(that.ipads[2].scale, { size: 0.000000001, duration: 0.4 });
            changeSize(that.ipads[1].scale, { size: 0.000000001, duration: 0.4 });
            changeSize(that.ipads[0].scale, { size: 0.000000001, duration: 0.4 });
          },
        }
      });
    }

    secondStage(){
      const that = this; 
      const changeCoefficient = (k) => {
        gsap.to(this.blob.material.uniforms.coefficient, {
          value: k,
          duration: 1,
        })
        // this.objects.blob.updateCoefficient(k);
      }
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-4',
          start: 'top+=10px bottom',
          end: 'bottom-=10px top',
          scrub: 2,
          onEnter: () => {
            changeCoefficient(1);
            changeSize(that.blob.scale, { size: 0.01, duration: 2 });
            changeSize(that.metaball.scale, { size: 1.2 });
          },
          onLeave: () => {

          },
          onEnterBack: () => {
            changeCoefficient(1);
            changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
            changeSize(that.metaball.scale, { size: 1.2 });
          },
          onLeaveBack: () => {
            changeCoefficient(2.2);
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
          trigger: '#section-6',
          start: 'top+=10px bottom',
          end: 'bottom-=10px top',
          scrub: 2,
          onEnter: () => {
            changeSize(that.blob.scale, { size: 0.25, duration: 1 });
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 2 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 2 });
          },
          onLeave: () => {
            // changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
            changePosition(that.blob.position, { x: 0, y: 0, duration: 2 });
            changePosition(that.metaball.position, { x: 0, y: 0, duration: 2 });
          },
          onEnterBack: () => {
            changeSize(that.blob.scale, { size: 0.25, duration: 1 });
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 2 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 2 });
          },
          onLeaveBack: () => {
            // changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
            changePosition(that.blob.position, { x: 0, y: 0, duration: 2 });
            changePosition(that.metaball.position, { x: 0, y: 0, duration: 2 });
          },
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-8',
          start: 'top+=10px bottom',
          end: 'bottom-=10px top',
          scrub: 2,
          onEnter: () => {
            changePosition(that.blob.position, { x: -1.7, y: 0.5, duration: 1 });
            changePosition(that.metaball.position, { x: -2.6, y: -0.2, duration: 1 });
          },
          onLeave: () => {
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 1 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 1 });
          },
          onEnterBack: () => {
            changePosition(that.blob.position, { x: -1.7, y: 0.5, duration: 1 });
            changePosition(that.metaball.position, { x: -2.6, y: -0.2, duration: 1 });
          },
          onLeaveBack: () => {
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 1 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 1 });
          },
        }
      });
    }
}
