
import React, { useRef, useEffect } from 'react';
import { staggerChildren, parallaxEffect } from '@/utils/animations';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      staggerChildren(sectionRef.current, '.stagger-item', 0.2);
    }
    
    if (parallaxRef.current) {
      parallaxEffect(parallaxRef.current);
    }
  }, []);

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-lg" ref={parallaxRef}>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop"
              alt="Designer workspace" 
              className="w-full h-full object-cover"
            />
            
            {/* Decorative element */}
            <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-primary/5 rounded-lg -z-10"></div>
          </div>
          
          {/* Content side */}
          <div ref={sectionRef}>
            <span className="stagger-item badge bg-secondary text-secondary-foreground mb-4">About</span>
            
            <h2 className="stagger-item heading-lg mb-6">
              Designing with Purpose &amp; Precision
            </h2>
            
            <p className="stagger-item subtitle mb-6">
              I'm a designer and developer focused on creating minimal, functional, and beautiful digital experiences. With a passion for clean aesthetics and thoughtful interactions, I bring ideas to life through careful attention to detail.
            </p>
            
            <div className="stagger-item grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg glass-effect">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="p-4 rounded-lg glass-effect">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            
            <h3 className="stagger-item text-lg font-medium mb-3">Skills &amp; Expertise</h3>
            
            <div className="stagger-item flex flex-wrap gap-2 mb-6">
              {["UX Design", "Development", "Branding", "Art Direction", "UI Design", "Photography"].map((skill, index) => (
                <span 
                  key={index}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm",
                    "bg-background border border-border"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
