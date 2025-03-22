
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = scrollWrapper.current;
    if (!element) return;
    
    // Create a GSAP smooth scrolling context
    let ctx = gsap.context(() => {
      // Setup smooth scrolling
      const smoothScroll = gsap.to(element, {
        y: () => -(element.scrollHeight - window.innerHeight),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
      
      return () => {
        // Clean up
        smoothScroll.kill();
      };
    }, scrollWrapper);
    
    return () => ctx.revert(); // Clean up context
  }, []);

  return (
    <div 
      ref={scrollWrapper}
      className="smooth-scroll-container"
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
