import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';

const ProjectFooter: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  return (
    <footer className="pt-8 pb-12">
      <div className="container mx-auto px-4 text-center">
        <button
          onClick={handleClick}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black cursor-pointer"
        >
          <IconArrowLeft size={16} className="mr-2" />
          Back to Projects
        </button>
      </div>
    </footer>
  );
};

export default ProjectFooter;