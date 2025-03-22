import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { toothlessJump, toothlessCelebrate } from '../utils/toothlessAnimations';

interface ToothlessProps {
  className?: string;
}

const Toothless: React.FC<ToothlessProps> = ({ className }) => {
  const toothlessRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const toothless = toothlessRef.current;
    const eyes = eyesRef.current;
    
    if (!toothless || !eyes) return;
    
    // Initial animation - fade in and slight bounce
    gsap.fromTo(
      toothless,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
    );
    
    // Blinking animation
    const blinkAnimation = () => {
      gsap.to(eyes, { scaleY: 0.1, duration: 0.1, yoyo: true, repeat: 1, delay: Math.random() * 3 + 2 });
      setTimeout(blinkAnimation, Math.random() * 3000 + 2000);
    };
    
    blinkAnimation();
    
    // Set initial position to bottom right
    let posX = window.innerWidth - 150;
    let posY = window.innerHeight - 150;
    
    // Apply initial position
    gsap.set(toothless, {
      x: posX,
      y: posY
    });
    
    // Random movement function
    const flyToRandomPosition = () => {
      if (!toothless) return;
      
      // Calculate random position within viewport
      const maxX = window.innerWidth - 150;
      const maxY = window.innerHeight - 150;
      
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      
      // Random rotation for flying effect
      const randomRotation = Math.random() * 20 - 10;
      
      // Animate Toothless to new position
      gsap.to(toothless, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        duration: 1.5 + Math.random(),
        ease: "power2.inOut",
        onComplete: () => {
          // Reset rotation after flying
          gsap.to(toothless, {
            rotation: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });
    };
    
    // Scroll event handler
    const handleScroll = () => {
      flyToRandomPosition();
    };
    
    // Throttle scroll event to prevent too many animations
    let scrollTimeout: number | null = null;
    const throttledScroll = () => {
      if (scrollTimeout === null) {
        scrollTimeout = window.setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 300);
      }
    };
    
    // Add scroll listener
    window.addEventListener('scroll', throttledScroll);
    
    // Occasionally fly around even without scrolling
    const randomFlyInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to fly randomly
        flyToRandomPosition();
      }
    }, 10000); // Check every 10 seconds
    
    // Add click interaction
    const handleDocumentClick = (e: MouseEvent) => {
      // Calculate distance from click to Toothless
      if (!toothless) return;
      
      const rect = toothless.getBoundingClientRect();
      const toothlessCenterX = rect.left + rect.width / 2;
      const toothlessCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - toothlessCenterX, 2) + 
        Math.pow(e.clientY - toothlessCenterY, 2)
      );
      
      // If click is close to Toothless, trigger celebration animation
      if (distance < 100) {
        toothlessCelebrate(toothless);
      }
    };
    
    document.addEventListener('click', handleDocumentClick);
    
    // Handle window resize to keep Toothless in bounds
    const handleResize = () => {
      const maxX = window.innerWidth - 150;
      const maxY = window.innerHeight - 150;
      
      // If currently outside bounds, fly to a random position inside bounds
      if (posX > maxX || posY > maxY) {
        flyToRandomPosition();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial random flight after a short delay
    setTimeout(flyToRandomPosition, 2000);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      clearInterval(randomFlyInterval);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);
  
  // Jump animation on hover
  const handleHover = () => {
    if (toothlessRef.current) {
      toothlessJump(toothlessRef.current);
    }
  };
  
  return (
    <div 
      ref={toothlessRef}
      className="fixed w-24 h-24 z-50 cursor-pointer"
      style={{ 
        bottom: 20, 
        right: 20,
        transform: 'translate(0, 0)' 
      }}
      onMouseEnter={handleHover}
    >
      {/* Toothless body */}
      <div className="relative w-full h-full">
        {/* Main body */}
        <div className="absolute w-20 h-16 bg-black rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Head */}
        <div className="absolute w-16 h-14 bg-black rounded-full left-1/2 -translate-x-1/2 -top-4"></div>
        
        {/* Eyes */}
        <div ref={eyesRef} className="absolute left-1/2 -translate-x-1/2 top-1 w-12 flex justify-between">
          <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-5 bg-black rounded-full"></div>
          </div>
          <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-5 bg-black rounded-full"></div>
          </div>
        </div>
        
        {/* Ears/wings */}
        <div className="absolute w-10 h-4 bg-black rounded-full -left-4 top-0 rotate-45"></div>
        <div className="absolute w-10 h-4 bg-black rounded-full -right-4 top-0 -rotate-45"></div>
        
        {/* Tail */}
        <div className="absolute w-12 h-3 bg-black rounded-full left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"></div>
        <div className="absolute w-10 h-3 bg-black rounded-full right-0 bottom-2 rotate-12 origin-left"></div>
        <div className="absolute w-8 h-3 bg-black rounded-full right-0 bottom-4 rotate-45 origin-left"></div>
      </div>
    </div>
  );
};

export default Toothless;
