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

// Stagger children elements animation
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

// Text reveal animation
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

// Parallax effect
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

// Hero section animation
export const animateHero = (container: Element) => {
  const tl = gsap.timeline();
  
  tl.fromTo(
    container.querySelector('.hero-badge'),
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
  )
  .fromTo(
    container.querySelector('.hero-title'),
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.4"
  )
  .fromTo(
    container.querySelector('.hero-subtitle'),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  )
  .fromTo(
    container.querySelector('.hero-cta'),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    "-=0.6"
  );
  
  return tl;
};

// Project card hover animation
export const projectCardHover = (card: Element) => {
  const image = card.querySelector('.project-image');
  const content = card.querySelector('.project-content');
  
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { scale: 1.05, duration: 0.5, ease: "power2.out" });
    gsap.to(content, { y: -5, duration: 0.5, ease: "power2.out" });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(content, { y: 0, duration: 0.5, ease: "power2.out" });
  });
};

// Page transition animation
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

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
