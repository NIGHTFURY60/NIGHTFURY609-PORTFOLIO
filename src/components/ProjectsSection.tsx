
import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { staggerChildren } from '@/utils/animations';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      staggerChildren(sectionRef.current, '.project-card-wrapper', 0.1);
    }
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge bg-secondary text-secondary-foreground mb-4">Projects</span>
          
          <h2 className="heading-lg mb-4">
            Selected Work
          </h2>
          
          <p className="subtitle max-w-2xl mx-auto">
            A curated collection of my most recent projects, showcasing my approach to design and development.
          </p>
        </div>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-wrapper opacity-0">
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                thumbnailUrl={project.thumbnailUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
