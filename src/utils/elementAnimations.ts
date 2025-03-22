
import { gsap } from "gsap";

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
