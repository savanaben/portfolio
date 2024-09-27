import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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
  const tileRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-1, 1], ["13deg", "-13deg"]);
  const rotateY = useTransform(mouseX, [-1, 1], ["-13deg", "13deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const springConfig = { damping: 25, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const shadowX = useTransform(mouseX, [-1, 1], ["8px", "-8px"]);
  const shadowY = useTransform(mouseY, [-1, 1], ["8px", "-8px"]);

  const shadow = useTransform(
    [shadowX, shadowY],
    ([latestX, latestY]) => `${latestX} ${latestY} 0px rgba(0, 0, 0, 0.13)`
  );

  return (
    <div 
      ref={tileRef}
      className="h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={imageRef}
        className="relative w-full pb-[80%] rounded-lg bg-white overflow-hidden mb-2 transition-all duration-300 border border-transparent"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => {
          setImageHovered(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
          rotateX: springRotateX,
          rotateY: springRotateY,
          boxShadow: imageHovered 
            ? shadow 
            : hovered 
              ? "0 7px 0px rgba(0, 0, 0, 0.13)" 
              : "none",
          borderColor: hovered ? 'rgba(229, 231, 235, 1)' : 'transparent', // gray-200 color
          transition: "all 0.1s ease",
        }}
      >
        <img 
          src={project.image} 
          alt={project.imageAlt} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </motion.div>
      <figcaption className="flex flex-col">
        <h3 className={`text-lg font-semibold mb-1 ${hovered ? 'underline' : ''}`}>
          {project.title}
        </h3>
        <p className="text-sm text-gray-600">{project.description}</p>
      </figcaption>
    </div>
  );
}

export default ProjectTile;