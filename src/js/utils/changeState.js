import { gsap } from 'gsap';

export function changePosition (target, options) {
    return gsap.to(target, {
      x: options.x || 0,
      duration: options.duration || 1,
      ease: options.ease || "none",
    });
}
export function changeSize (target, options) {
    return gsap.to(target, {
      x: options.size || 4,
      y: options.size || 4,
      z: options.size || 4,
      duration: options.duration || 1,
    });
}