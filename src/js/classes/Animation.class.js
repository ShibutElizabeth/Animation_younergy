import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Animation {
    constructor(camera, objects){
      this.objects = objects;
      this.blob = objects.blob.mesh;
      this.ipads = objects.ipads.mesh;
      this.metaball = objects.metaball.mesh;
      // this.grid = objects.grid.mesh;
      this.camera = camera;
      this.stage = 0;
      this.setupTimeline();
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
      timeline.set(this.blob.material.uniforms.coefficient, {
        value: 2.2,
      });

      // STAGE #1
      timeline.to([blobPosition, metaballPosition], {
        x: 0,
        duration: 2,
        onStart: ()=>{
          that.changeStage(1);
        },
        onReverseComplete: ()=>{
          that.changeStage(0);
        },
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
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
      .fromTo([this.ipads.scale], {
        x: 0.00097,
        y: 0.00097,
        z: 0.00097,
      }, {
        x: 0.0000001,
        y: 0.0000001,
        z: 0.0000001,
        duration: 1,
        onStart: ()=>{
          that.changeStage(2);
        },
        onReverseComplete: ()=>{
          that.changeStage(1);
        },
        scrollTrigger: {
          trigger: '#section-4',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(blobSize, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
      }, {
        x: 0.25,
        y: 0.25,
        z: 0.25,
        scrollTrigger: {
          trigger: '#section-5',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
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
        scrollTrigger: {
          trigger: '#section-5',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })

      // STAGE #3
      // .fromTo(blobSize, {
      //   x: 0.01,
      //   y: 0.01,
      //   z: 0.01,
      // }, {
      //   x: 0.25,
      //   y: 0.25,
      //   z: 0.25,
        
      //   scrollTrigger: {
      //     trigger: '#section-6',
      //     start: 'top center',
      //     end: 'bottom top',
      //     scrub: 1,
      //     toggleActions: 'restart pause reverse pause',
      //   }
      // })
      .fromTo(blobPosition, {
        x: 0.0,
        y: 0.0,
      }, {
        x: -0.6,
        y: 0.5,
        onStart: ()=>{
          that.changeStage(3);
        },
        onReverseComplete: ()=>{
          that.changeStage(2);
        },
        scrollTrigger: {
          trigger: '#section-7',
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
          trigger: '#section-7',
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
          trigger: '#section-9',
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
          trigger: '#section-9',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
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
          that.changeStage(4);
        },
        onReverseComplete: ()=>{
          that.changeStage(3);
        },
        scrollTrigger: {
          trigger: '#section-11',
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
        x: 0.1,
        y: 0.1,
        z: 0.1,
        scrollTrigger: {
          trigger: '#section-11',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
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
          trigger: '#section-11',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      // .fromTo(that.blob.material, {
      //   wireframe: false,
      // }, {
      //   wireframe: true,
      //   scrollTrigger: {
      //     trigger: '#section-12',
      //     start: 'top 110%',
      //     end: 'top bottom',
      //     scrub: 1,
      //     toggleActions: 'restart pause reverse pause',
      //   }
      // })
      // .fromTo(blobSize, {
      //   x: 0.1,
      //   y: 0.1,
      //   z: 0.1,
      // }, {
      //   x: 1.0,
      //   y: 1.0,
      //   z: 1.0,
      //   scrollTrigger: {
      //     trigger: '#section-12',
      //     start: 'top bottom',
      //     end: 'bottom top',
      //     scrub: 1,
      //     toggleActions: 'restart pause reverse pause',
      //   }
      // });
    }

    changeCoefficient(k1, k2) {
      gsap.fromTo(this.blob.material.uniforms.coefficient, {
        value: k1,
      }, {
        value: k2,
        duration: 1,
      })
    }

    changeStage(k){
      if(this.stage === 1 && k === 2){
        this.changeCoefficient(2.2, 1.0);
      } else if(this.stage === 2 && k === 1){
        this.changeCoefficient(1.0, 2.2);
      }
      this.stage = k;
      
    }
}
