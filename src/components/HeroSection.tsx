
import React, { useEffect, useRef } from 'react';
import { animateHero } from '@/utils/animations';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      animateHero(heroRef.current);
    }
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="section flex items-center"
    >
      <div className="container-custom">
        <div className="flex flex-col max-w-3xl mx-auto text-center">
          <span className="hero-badge badge bg-secondary text-secondary-foreground mb-6">Portfolio</span>
          
          <h1 className="hero-title heading-xl mb-6">
            Crafting <span className="text-primary">Minimalist</span> Digital Experiences
          </h1>
          
          <p className="hero-subtitle subtitle mb-8 mx-auto max-w-xl">
            A showcase of carefully crafted digital work focused on simplicity, functionality, and elegant aesthetics.
          </p>
          
          <div className="hero-cta flex justify-center space-x-4">
            <button 
              onClick={handleScrollDown}
              className={cn(
                "px-6 py-3 rounded-md bg-primary text-primary-foreground",
                "hover:bg-primary/90 transition-colors duration-300"
              )}
            >
              Explore Projects
            </button>
            
            <a 
              href="#contact" 
              className={cn(
                "px-6 py-3 rounded-md border border-border",
                "hover:bg-secondary transition-colors duration-300"
              )}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
