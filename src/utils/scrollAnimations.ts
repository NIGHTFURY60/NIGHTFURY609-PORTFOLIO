
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate section on scroll
export const animateOnScroll = (element: Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { 
      y: 100, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
};

// Stagger children elements animation on scroll
export const staggerChildren = (parent: Element, childSelector: string, delay: number = 0) => {
  const children = parent.querySelectorAll(childSelector);
  
  gsap.fromTo(
    children,
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      stagger: 0.1, 
      duration: 0.8, 
      delay, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: parent,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
};

// Text reveal animation on scroll
export const revealText = (element: Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1.2, 
      delay, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
};

// Parallax effect on scroll
export const parallaxEffect = (element: Element, strength: number = 30) => {
  gsap.to(element, {
    y: strength,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
};

// Smooth scroll to section
export const smoothScrollTo = (target: string) => {
  const element = document.querySelector(target);
  if (!element) return;
  
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: target,
      offsetY: 50
    },
    ease: "power3.inOut"
  });
};
