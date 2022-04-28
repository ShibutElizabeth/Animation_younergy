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
      this.ipads = objects.ipads.mesh;
      this.metaball = objects.metaball.mesh;
      this.grid = objects.grid.group;
      this.camera = camera;
      this.stage = 0;
      this.setupTimeline();
      // this.firstStage();
      // this.secondStage();
      // this.thirdStage();
      // this.fourthStage();
      // this.getProgress();
    }

    getProgress(){
      ScrollTrigger.create({
        onUpdate({progress, direction, isActive}) {
          console.log((progress*100).toFixed());
        }
      })
    }

    setupTimeline(){
      const that = this;
      const timeline = gsap.timeline();
      const blobPosition = this.blob.position;
      const blobSize = this.blob.scale;
      const metaballPosition = this.metaball.position;
      const metaballSize = this.metaball.scale;

      // STAGE #0
      timeline.set(this.ipads.scale, {
        x: 0.0000001,
        y: 0.0000001,
        z: 0.0000001,
      });
      timeline.set(blobSize, {
        x: 1,
        y: 1,
        z: 1,
      });
      timeline.set(blobPosition, {
        x: -1,
        y: 0,
        z: 0,
      });
      timeline.set(metaballPosition, {
        x: -1,
        y: 0,
        z: 0,
      });
      // timeline.set(this.blob.material.uniforms.coefficient, {
      //   value: 2.2,
      // });

      // STAGE #1
      timeline.to([blobPosition, metaballPosition], {
        x: 0,
        duration: 2,
        onStart: ()=>{
          that.changeStage(1);
          // that.stage = 1;
        },
        onReverseComplete: ()=>{
          that.changeStage(0);
        },
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo([blobSize], {
        x: 1.0,
        y: 1.0,
        z: 1.0,
      }, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo([this.ipads.scale], {
        x: 0.0000001,
        y: 0.0000001,
        z: 0.0000001,
      }, {
        x: 0.00097,
        y: 0.00097,
        z: 0.00097,
        duration: 2,
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })

      // STAGE #2
      // .fromTo(this.blob.material.uniforms.coefficient, {
      //   value: 2.2,
      // }, {
      //   value: 1,
      //   duration: 1,
      // })
      .fromTo([this.ipads.scale], {
        x: 0.00097,
        y: 0.00097,
        z: 0.00097,
      }, {
        x: 0.0000001,
        y: 0.0000001,
        z: 0.0000001,
        duration: 2,
        onStart: ()=>{
          that.changeStage(2);
          // that.stage = 2;
        },
        
        scrollTrigger: {
          trigger: '#section-4',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(blobSize, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
      }, {
        x: 0.01,
        y: 0.01,
        z: 0.01,
        scrollTrigger: {
          trigger: '#section-5',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(metaballSize, {
        x: 0.01,
        y: 0.01,
        z: 0.01,
      }, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        onReverseComplete: ()=>{
          that.changeStage(1);
        },
        scrollTrigger: {
          trigger: '#section-5',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })

      // STAGE #3
      .fromTo(blobSize, {
        x: 0.01,
        y: 0.01,
        z: 0.01,
      }, {
        x: 0.25,
        y: 0.25,
        z: 0.25,
        onStart: ()=>{
          that.changeStage(3);
          // that.stage = 3;
        },
        onReverseComplete: ()=>{
          that.changeStage(2);
        },
        scrollTrigger: {
          trigger: '#section-6',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(blobPosition, {
        x: 0.0,
        y: 0.0,
      }, {
        x: -0.6,
        y: 0.5,
        scrollTrigger: {
          trigger: '#section-6',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(metaballPosition, {
        x: 0.0,
        y: 0.0,
      }, {
        x: 0.3,
        y: -0.2,
        scrollTrigger: {
          trigger: '#section-6',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(blobPosition, {
        x: -0.6,
      }, {
        x: -1.7,
        scrollTrigger: {
          trigger: '#section-8',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(metaballPosition, {
        x: 0.3,
      }, {
        x: -2.4,
        scrollTrigger: {
          trigger: '#section-8',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })

      // STAGE #4
      .fromTo(blobPosition, {
        x: -1.7,
        y: 0.5,
      }, {
        x: 0,
        y: 0,
        onStart: ()=>{
          // that.stage = 4;
          that.changeStage(4);
        },
        onReverseComplete: ()=>{
          that.changeStage(3);
        },
        scrollTrigger: {
          trigger: '#section-10',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(blobSize, {
        x: 0.25,
        y: 0.25,
        z: 0.25,
      }, {
        x: 0.01,
        y: 0.01,
        z: 0.01,
        scrollTrigger: {
          trigger: '#section-10',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(metaballPosition, {
        x: -2.4,
        y: -0.2,
      }, {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: '#section-10',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(that.grid.scale, {
        x: 0.00001,
        y: 0.00001,
        z: 0.00001,
      }, {
        x: 1.3,
        y: 1.3,
        z: 1.3,
        scrollTrigger: {
          trigger: '#section-12',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      });
    }

    changeCoefficient(k1, k2) {
      gsap.fromTo(this.blob.material.uniforms.coefficient, {
        value: k1,
      }, {
        value: k2,
        duration: 2,
      })
    }

    changeStage(k){
      // console.log("k: " + k);
      // console.log("stage: " + this.stage)
      if(this.stage === 1 && k === 2){
        this.changeCoefficient(2.2, 1.0);
      } else if(this.stage === 2 && k === 1){
        this.changeCoefficient(1.0, 2.2);
      }
      this.stage = k;
      
    }

    firstStage() {
      const that = this;
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-1',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          onEnterBack: () => {
            changePosition(that.blob.position, { x: -1 });
            changePosition(that.metaball.position, { x: -1 });
            changeSize(that.blob.scale, { size: 1 });
            changeSize(that.ipads[2].scale, { size: 0.000000001, duration: 0.1 });
            changeSize(that.ipads[1].scale, { size: 0.000000001, duration: 0.1 });
            changeSize(that.ipads[0].scale, { size: 0.000000001, duration: 0.1 });
            that.stage = 0;
          },
        }
      });
          
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          onEnter: () => {
            changePosition(that.blob.position, { x: 0, duration: 2, ease: 'elastic.out(1, 0.7)' });
            changePosition(that.metaball.position, { x: 0, duration: 2, ease: 'elastic.out(1, 0.7)' });
            changeSize(that.blob.scale, { size: 0.5 });
            changeSize(that.ipads[0].scale, { size: 0.0008 });
            changeSize(that.ipads[1].scale, { size: 0.0008 });
            changeSize(that.ipads[2].scale, { size: 0.0008 });
            that.stage = 1;
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
            that.stage = 1;
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
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          onEnter: () => {
            changeCoefficient(1);
            changeSize(that.blob.scale, { size: 0.01, duration: 2 });
            changeSize(that.metaball.scale, { size: 1.2, duration: 2 });
            that.stage = 2;
          },
          onLeave: () => {

          },
          onEnterBack: () => {
            changeCoefficient(1);
            changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
            changeSize(that.metaball.scale, { size: 1.2, duration: 1 });
            that.stage = 2;
          },
          onLeaveBack: () => {
            changeCoefficient(2.2);
            changeSize(that.blob.scale, { size: 0.5, duration: 2 });
            changeSize(that.metaball.scale, { size: 0.2, duration: 1, });
          },
        }
      });
    }

    thirdStage(){
      const that = this;
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-6',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          // markers: true,
          onEnter: () => {
            changeSize(that.blob.scale, { size: 0.25, duration: 1 });
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 2 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 2 });
            that.stage = 3;
          },
          // onLeave: () => {
          //   changePosition(that.blob.position, { x: 0, y: 0, duration: 2 });
          //   changePosition(that.metaball.position, { x: 0, y: 0, duration: 2 });
          // },
          onEnterBack: () => {
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 2 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 2 });
            that.stage = 3;
          },
          onLeaveBack: () => {
            changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
            changePosition(that.blob.position, { x: 0, y: 0, duration: 2 });
            changePosition(that.metaball.position, { x: 0, y: 0, duration: 2 });
          },
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-8',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          
          onEnter: () => {
            changePosition(that.blob.position, { x: -1.7, y: 0.5, duration: 1 });
            changePosition(that.metaball.position, { x: -2.6, y: -0.2, duration: 1 });
          },
          onLeave: () => {
            changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 1 });
            changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 1 });
          },
          onEnterBack: () => {
            changeSize(that.blob.scale, { size: 0.25, duration: 1 });
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

    fourthStage(){
      const that = this;
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-10',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          onEnter: () => {
            changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1 });
            changePosition(that.blob.position, { x: 0, y: 0, duration: 2 });
            changePosition(that.metaball.position, { x: 0, y: 0, duration: 2 });
            that.stage = 4;
          },
          onLeave: () => {
            // changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
            
          },
          // onEnterBack: () => {
          //   changeSize(that.blob.scale, { size: 0.25, duration: 1 });
          //   changePosition(that.blob.position, { x: -0.6, y: 0.5, duration: 2 });
          //   changePosition(that.metaball.position, { x: 0.3, y: -0.2, duration: 2 });
          // },
          // onLeaveBack: () => {
          //   // changeSize(that.blob.scale, { size: 0.01, duration: 1, delay: 1, });
          //   changePosition(that.blob.position, { x: 0, y: 0, duration: 2 });
          //   changePosition(that.metaball.position, { x: 0, y: 0, duration: 2 });
          // },
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-11',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          onEnter: () => {
            changeSize(that.grid.scale, { size: 1.0, duration: 1, delay: 1, ease: 'elastic(1.2, 0.7)' });
            that.stage = 4;
          },
          onLeave: () => {
            changeSize(that.grid.scale, { size: 0.0001, duration: 1, delay: 1, ease: 'elastic(0.8, 0.7)' });
            
          },
          onEnterBack: () => {
            changeSize(that.grid.scale, { size: 1.0, duration: 1, delay: 1, ease: 'elastic(1.2, 0.7)' });
          },
          onLeaveBack: () => {
            changeSize(that.grid.scale, { size: 0.000001, duration: 1, delay: 1, ease: 'elastic(0.8, 0.7)'});
            
          },
        }
      });
    }
}
