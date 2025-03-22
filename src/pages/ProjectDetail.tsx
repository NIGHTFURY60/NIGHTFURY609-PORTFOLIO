
import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { projects } from '@/data/projects';
import { staggerChildren, parallaxEffect } from '@/utils/animations';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  
  // Handle page transitions and animations
  useEffect(() => {
    // Entry animation
    gsap.fromTo(
      ".project-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    
    // Stagger images
    if (imagesRef.current) {
      staggerChildren(imagesRef.current, '.project-image', 0.2);
    }
    
    // Create scroll triggers for content sections
    if (contentRef.current) {
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top 80%",
        animation: gsap.fromTo(
          ".content-block",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
        ),
        once: true
      });
    }
    
    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [id]);
  
  // If project not found
  if (!project) {
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    
    return null;
  }

  return (
    <Layout>
      {/* Hero section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 md:px-8">
        <div className="container-custom">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center text-sm mb-8 hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </button>
          
          <div className="project-content">
            <span className="badge bg-secondary text-secondary-foreground mb-4">
              {project.category}
            </span>
            
            <h1 className="heading-lg mb-6">
              {project.title}
            </h1>
            
            <p className="subtitle max-w-2xl mb-12">
              {project.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Main image */}
      <section className="px-4 sm:px-6 md:px-8 pb-16">
        <div className="container-custom">
          <div className="relative rounded-lg overflow-hidden aspect-video project-content">
            <img 
              src={project.thumbnailUrl.replace('w=1000', 'w=2000')} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Project details */}
      <section ref={contentRef} className="px-4 sm:px-6 md:px-8 py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="heading-md mb-6 content-block">Project Overview</h2>
              <p className="text-muted-foreground mb-8 content-block leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="content-block space-y-6">
                <h3 className="text-xl font-semibold">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The project approach focused on minimalism and functional design, ensuring that every element serves a purpose. The design process began with extensive research and wireframing, followed by iterative prototyping and user testing.
                </p>
              </div>
            </div>
            
            <div className="content-block">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground">Client</h4>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground">Year</h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground">Services</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.services.map((service, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-background rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-background rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image gallery */}
      <section ref={imagesRef} className="px-4 sm:px-6 md:px-8 py-16">
        <div className="container-custom">
          <h2 className="heading-md mb-8 text-center">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.imageUrls.map((imageUrl, index) => (
              <div 
                key={index}
                className="relative rounded-lg overflow-hidden project-image opacity-0"
              >
                <img 
                  src={imageUrl} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Next project */}
      <section className="px-4 sm:px-6 md:px-8 py-20 bg-secondary/30">
        <div className="container-custom text-center">
          <span className="badge bg-secondary text-secondary-foreground mb-4">Next Project</span>
          
          <h2 className="heading-lg mb-8">Continue Exploring</h2>
          
          <button 
            onClick={() => navigate("/")}
            className={cn(
              "px-6 py-3 rounded-md bg-primary text-primary-foreground",
              "hover:bg-primary/90 transition-colors duration-300"
            )}
          >
            View All Projects
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
