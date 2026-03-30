import { Code, Squircle, ExternalLink, Image, MapPin, Music } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getIcon = () => {
    switch (project.icon) {
      case 'image':
        return <Image className="text-blue-500" size={24} />;
      case 'music':
        return <Music className="text-purple-500" size={24} />;
      case 'map':
        return <MapPin className="text-green-500" size={24} />;
      case 'edit':
        return <Squircle className="text-amber-500" size={24} />;
      case 'poop':
        return <span className="text-2xl leading-none" aria-label="poop">💩</span>;
      case 'ski':
        return <span className="text-2xl leading-none" aria-label="ski">⛷️</span>;
      default:
        return <Code className="text-gray-500" size={24} />;
    }
  };

  return (
    <a 
      href={project.path} 
      className="block group"
    >
      <div className="h-full p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-gray-50 rounded-md">
            {getIcon()}
          </div>
          <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-gray-600 text-sm">
          {project.description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
