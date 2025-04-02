
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="card group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {demoUrl && (
            <Button href={demoUrl} size="sm" className="flex items-center gap-1">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </Button>
          )}
          {githubUrl && (
            <Button 
              href={githubUrl}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              <span>Code</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
