
import { gsap } from "gsap";

// Toothless jump animation
export const toothlessJump = (element: Element) => {
  gsap.to(element, {
    y: -20,
    duration: 0.4,
    ease: "power2.out",
    yoyo: true,
    repeat: 1
  });
};

// Toothless celebration animation
export const toothlessCelebrate = (element: Element) => {
  const tl = gsap.timeline();
  
  tl.to(element, {
    rotate: 360,
    duration: 1,
    ease: "power2.inOut"
  })
  .to(element, {
    scale: 1.2,
    duration: 0.3,
    ease: "back.out(1.7)",
    yoyo: true,
    repeat: 1
  }, "-=0.5");
  
  return tl;
};
