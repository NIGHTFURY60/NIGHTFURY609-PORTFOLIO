
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectCardHover } from '@/utils/animations';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  description,
  thumbnailUrl
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      projectCardHover(cardRef.current);
    }
  }, []);

  return (
    <Link to={`/project/${id}`}>
      <div 
        ref={cardRef}
        className={cn(
          "group relative overflow-hidden rounded-lg",
          "transition-all duration-300 h-full cursor-pointer"
        )}
      >
        {/* Image container with overflow hidden */}
        <div className="overflow-hidden aspect-[4/3]">
          <img
            src={thumbnailUrl}
            alt={title}
            className={cn(
              "project-image w-full h-full object-cover",
              "transition-transform duration-700 ease-out group-hover:scale-105"
            )}
          />
        </div>
        
        {/* Content overlay */}
        <div 
          className={cn(
            "project-content absolute bottom-0 left-0 right-0",
            "p-6 bg-gradient-to-t from-background/90 to-transparent",
            "transition-all duration-300"
          )}
        >
          <span className="block text-sm font-medium text-primary mb-2">
            {category}
          </span>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          
          <div className={cn(
            "mt-4 flex items-center text-sm font-medium",
            "opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-300"
          )}>
            <span>View Project</span>
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
