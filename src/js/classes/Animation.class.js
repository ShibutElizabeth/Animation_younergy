import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Animation {
    constructor(camera, objects){
      this.sections = Array.from(document.querySelectorAll('.content__section'));
      this.objects = objects;
      this.blob = objects.blob.mesh;
      this.ipadMaterial = objects.ipads.material;
      this.ipadScreen = objects.ipads.screen;
      this.metaball = objects.metaball.mesh;
      this.grid = objects.grid.mesh;
      this.camera = camera;
      this.stage = 0;
      this.smallText = document.querySelector('.small-text');
      this.bigText = document.querySelector('.big-text');
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
      timeline.set([this.ipadMaterial, this.ipadScreen], {
        opacity: 0,
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
          trigger: this.sections[0],
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
          trigger: this.sections[1],
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo([this.ipadMaterial, this.ipadScreen], {
        opacity: 0,
      }, {
        opacity: 1,
        delay: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: this.sections[1],
          start: 'top -30%',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })

      // STAGE #2
      .fromTo([this.ipadMaterial, this.ipadScreen], {
        opacity: 1,
      }, {
        opacity: 0,
        duration: 0.7,
        onStart: ()=>{
          that.changeStage(2);
        },
        onReverseComplete: ()=>{
          that.changeStage(1);
        },
        scrollTrigger: {
          trigger: this.sections[3],
          start: 'top center',
          end: 'bottom 20%',
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
          trigger: this.sections[4],
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
          trigger: this.sections[4],
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })

      // STAGE #3
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
          trigger: this.sections[6],
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
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
          trigger: this.sections[6],
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(blobPosition, {
        x: -0.6,
      }, {
        x: -1.7,
        onStart: () =>{
          that.textAppear();
        },
        onReverseComplete: () => {
          that.textDisappear();
        },
        scrollTrigger: {
          trigger: this.sections[8],
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(this.smallText, {
        x: 0,
      }, {
        x: '-23vw',
        scrollTrigger: {
          trigger: this.sections[8],
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(metaballPosition, {
        x: 0.3,
      }, {
        x: -2.4,
        scrollTrigger: {
          trigger: this.sections[8],
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(this.bigText, {
        x: 0,
      }, {
        x: '-58vw',
        scrollTrigger: {
          trigger: this.sections[8],
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
          that.textDisappear();
        },
        onReverseComplete: ()=>{
          that.changeStage(3);
          that.textAppear();
        },
        scrollTrigger: {
          trigger: this.sections[10],
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
          trigger: this.sections[10],
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
          trigger: this.sections[10],
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          snap: 1,
          toggleActions: 'restart pause reverse pause',
        }
      })
      .fromTo(that.grid.scale, {
        x: 0.001,
        y: 0.001,
        z: 0.001,
      }, {
        x: 1,
        y: 1,
        z: 1,
        ease: 'power4.easeInOut',
        scrollTrigger: {
          trigger: this.sections[11],
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1,
          toggleActions: 'restart pause reverse pause',
        },
      })
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
        this.changeCoefficient(1.6, 1.0);
      } else if(this.stage === 2 && k === 1){
        this.changeCoefficient(1.0, 1.6);
      }
      this.stage = k;
    }

    textAppear(){
      gsap.fromTo([this.smallText, this.bigText], {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.6,
      });
    }

    textDisappear(){
      gsap.fromTo([this.smallText, this.bigText], {
        opacity: 1,
      }, {
        opacity: 0,
        duration: 0.6,
      });
    }
}
