
import React, { useRef, useEffect } from 'react';
import { animateOnScroll } from '@/utils/animations';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  id, 
  className, 
  children, 
  delay = 0 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      animateOnScroll(sectionRef.current, delay);
    }
  }, [delay]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn("section opacity-0", className)}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
