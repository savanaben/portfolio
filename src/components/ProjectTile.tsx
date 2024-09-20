import React from 'react';

interface Project {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  categories: string[];
}

interface ProjectTileProps {
  project: Project;
}

function ProjectTile({ project }: ProjectTileProps): JSX.Element {
  return (
    <figure className={`rounded-lg bg-white ${project.categories.join(' ')} flex flex-col h-full`}>
      <div className="block flex-grow">
        <div className="relative w-full pb-[80%]">
          <img 
            src={project.image} 
            alt={project.imageAlt} 
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <figcaption className="p-4 flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export default ProjectTile;