import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Projects</h1>
        <p className="text-lg text-gray-600">
          A collection of a few tools and fun apps I've built as a software engineer.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.path} project={project} />
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        <div className="flex justify-center items-center gap-2 mb-4">
          <a 
            href="/" 
            className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Back to main site</span>
          </a>
        </div>
        <p>© {new Date().getFullYear()} • All rights reserved</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;
