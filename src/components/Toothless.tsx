import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
    
    // Follow cursor with slight delay
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop to create smooth following
    const updatePosition = () => {
      // Calculate new position with easing
      posX += (mouseX - posX) * 0.05;
      posY += (mouseY - posY) * 0.05;
      
      // Apply transform while keeping Toothless within viewport bounds
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;
      
      const boundedX = Math.max(50, Math.min(maxX, posX));
      const boundedY = Math.max(50, Math.min(maxY, posY));
      
      gsap.set(toothless, {
        x: boundedX - 50,
        y: boundedY - 50,
      });
      
      // Look at cursor - eyes follow cursor even when body doesn't move much
      if (eyes) {
        const toothlessRect = toothless.getBoundingClientRect();
        const toothlessCenterX = toothlessRect.left + toothlessRect.width / 2;
        const toothlessCenterY = toothlessRect.top + toothlessRect.height / 2;
        
        // Calculate the angle between Toothless and the cursor
        const angle = Math.atan2(mouseY - toothlessCenterY, mouseX - toothlessCenterX);
        
        // Convert radians to degrees
        const degrees = angle * (180 / Math.PI);
        
        // Limit the rotation to a reasonable range
        const limitedRotation = Math.max(-15, Math.min(15, degrees / 10));
        
        gsap.to(eyes, {
          x: limitedRotation * 0.5,
          y: limitedRotation * 0.5,
          duration: 0.3
        });
      }
      
      // Continue animation loop
      requestAnimationFrame(updatePosition);
    };
    
    updatePosition();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={toothlessRef}
      className="fixed w-24 h-24 z-50 pointer-events-none"
      style={{ 
        bottom: 20, 
        right: 20,
        transform: 'translate(0, 0)' 
      }}
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
