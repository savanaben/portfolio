import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Add this import
import ProjectTile from './components/ProjectTile';
import Heading from './components/Heading';
import useScrollPosition from './hooks/useScrollPosition';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  categories: string[];
  featured: boolean;  // Add this line
}



  const projects: Project[] = [
    
    //this site
    //planwise
    //design systems - across projects
    //testlets
    //prototype samples
    
    {
      id: "draw-probability",
      title: "Probability Crunching",
      description: "UI, Svelte, Design system, Simulation",
      image: `${process.env.PUBLIC_URL}/img/DrawProbability/drawProbCover.svg`,
      imageAlt: "Abstract image of a magic card with a percent symbol overtop.",
      link: "/DrawProbability",
      featured: true,
      categories: ["UI","dev", "data-viz" ]
    },
    {
      id: "design-system",
      title: "Prototype Errything",
      description: "UI, Design system, Project Management",
      image: `${process.env.PUBLIC_URL}/img/design-system-cover.svg`,
      imageAlt: "Abstract image of three shapes coming together to create a page template",
      link: "/design-system",
      featured: false,
      categories: ["UI", "Project Management"]
    },
    {
      id: "design-system",
      title: "PlanWise",
      description: "UI, Design system, Project Management",
      image: `${process.env.PUBLIC_URL}/img/design-system-cover.svg`,
      imageAlt: "Abstract image of three shapes coming together to create a page template",
      link: "/design-system",
      featured: true,
      categories: ["UI", "UX"]
    },
    {
      id: "design-system",
      title: "Design Systems",
      description: "UI, Design system, Project Management",
      image: `${process.env.PUBLIC_URL}/img/design-system-cover.svg`,
      imageAlt: "Abstract image of three shapes coming together to create a page template",
      link: "/design-system",
      featured: true,
      categories: ["UI", "Project Management"]
    },
    {
      id: "design-system",
      title: "This Site! (WIP)",
      description: "UI, Design system, Project Management",
      image: `${process.env.PUBLIC_URL}/img/design-system-cover.svg`,
      imageAlt: "Abstract image of three shapes coming together to create a page template",
      link: "/Folio",
      featured: false,
      categories: ["UI", "dev"]
    },
    {
      id: "design-system",
      title: "Modernizing Formative Assessment",
      description: "Design system, Project Management, Assessment",
      image: `${process.env.PUBLIC_URL}/img/design-system-cover.svg`,
      imageAlt: "Abstract image of three shapes coming together to create a page template",
      link: "/FormativeAssessment",
      featured: true,
      categories: ["UI", "Project Management", "Assessment", "UX"]
    },
    {
      id: "sf-data-viz",
      title: "Science Fiction Data Viz",
      description: "Data viz, D3, dev, Student work",
      image: `${process.env.PUBLIC_URL}/img/SFdataViz-cover.jpg`,
      imageAlt: "Floating circular nodes in space with various book labels",
      link: "/ScienceFictionDataViz",
      featured: false,
      categories: ["data-viz", "dev"]
    },
    {
      id: "nj-affordable-housing",
      title: "NJ Affordable Housing Viz",
      description: "Data viz, Vue, dev, Storytelling, Student work",
      image: `${process.env.PUBLIC_URL}/img/NJ-cover.jpg`,
      imageAlt: "Image related to New Jersey affordable housing visualization",
      link: "/affordable-housing-viz",
      featured: false,
      categories: ["data-viz", "dev"]
    },
    {
      id: "museum-mania",
      title: "Museum Mania",
      description: "UI, Dev, Student work",
      image: `${process.env.PUBLIC_URL}/img/museum-mania-cover.svg`,
      imageAlt: "Logo that looks like an abstract museum with the letter M built in it",
      link: "/MuseumMania",
      featured: false,
      categories: ["UI", "dev"]
    },
    {
      id: "math-widget-mania",
      title: "Math Widget Mania",
      description: "Accessibility, UI, UX",
      image: `${process.env.PUBLIC_URL}/img/IIC-card-cover.png`,
      imageAlt: "Image of a coordinate plane with points and lines",
      link: "/MathMania",
      featured: false,
      categories: ["UI"]
    },
    {
      id: "simulating-searches",
      title: "Simulating Searches",
      description: "Assessment, Simulation, UI, UX",
      image: `${process.env.PUBLIC_URL}/img/search.svg`,
      imageAlt: "Image of a search engine user interface",
      link: "/SimulatedSearch",
      featured: false,
      categories: ["UX", "Assessment"]
    },
    {
      id: "test-design",
      title: "Tests Don't Have to Look Bad",
      description: "Animation, Assessment, Illustration, Content, UI, UX",
      image: `${process.env.PUBLIC_URL}/img/mango.jpg`,
      imageAlt: "Image of a user interface for a reading assessment",
      link: "/TestDesign",
      featured: false,
      categories: ["UI","UX", "Assessment"]
    },
    // {
    //   id: "toolbar-redesign",
    //   title: "Toolbar Redesign",
    //   description: "Iconography, UI, UX",
    //   image: `${process.env.PUBLIC_URL}/img/toolbar.jpg`,
    //   imageAlt: "Image of two toolbars for a user interface",
    //   link: "/toolbar-redesign",
    //   featured: false,
    //   categories: ["UI"]
    // },
    {
      id: "macro-world-design",
      title: "Macro World Design",
      description: "Illustration, World-building, Project management",
      image: `${process.env.PUBLIC_URL}/img/heartlands.jpg`,
      imageAlt: "Colorful map with labels of towns",
      link: "/Maps",
      featured: false,
      categories: ["UX", "Project Management", "art"]
    },
    {
      id: "art-grab-bag",
      title: "Art Grab-Bag",
      description: "3D Modeling, Abstract, Illustration, Data viz",
      image: `${process.env.PUBLIC_URL}/img/3D-cover.jpg`,
      imageAlt: "Fantastical image of melting mushroom and orange candy-cane trees",
      link: "/DigitalWork",
      featured: false,
      categories: ["art"]
    },
    // {
    //   id: "pratt-usability-study",
    //   title: "Pratt Usability Study",
    //   description: "User Testing, UI, Task Design, Student Work",
    //   image: `${process.env.PUBLIC_URL}/img/pratt-usability-study-cover.jpg`,
    //   imageAlt: "Image related to Pratt usability study",
    //   link: "/pratt-usability-study",
    //   featured: false,
    //   categories: ["design", "UI"]
    // },
    // {
    //   id: "grownyc-design-process",
    //   title: "GrowNYC Design Process",
    //   description: "User Testing, Style Guide, End-to-End, Student Work",
    //   image: `${process.env.PUBLIC_URL}/img/growNYC-cover.jpg`,
    //   imageAlt: "Abstract image related to GrowNYC design process",
    //   link: "/growNYC",
    //   featured: false,
    //   categories: ["design", "UI"]
    // }

    // Add more projects here...
  ];



  //THE FOLLOWING CODE DID checkbox logic for selecting
  //projects. you also need to change some references below
  //this block.

  // const Projects: React.FC = () => {
  //   const navigate = useNavigate();
  //   const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  //   // Get unique categories from all projects
  //   const categories = useMemo(() => {
  //     const allCategories = projects.flatMap(project => project.categories);
  //     return ['all', ...new Set(allCategories)];
  //   }, []);
  
  //   // Add this filteredProjects calculation
  //   const filteredProjects = useMemo(() => {
  //     if (activeFilters.length === 0) return projects;
      
  //     return projects.filter(project => 
  //       project.categories.some(category => activeFilters.includes(category))
  //     );
  //   }, [activeFilters]);
  
  //   // Then use filteredProjects in the featured/normal split
  //   const { featuredProjects, normalProjects } = useMemo(() => {
  //     return {
  //       featuredProjects: filteredProjects.filter((project: Project) => project.featured),
  //       normalProjects: filteredProjects.filter((project: Project) => !project.featured)
  //     };
  //   }, [filteredProjects]);
  
  //   const handleProjectClick = (link: string) => {
  //     navigate(link);
  //   };
  
  //   const handleFilterClick = (category: string) => {
  //     if (category === 'all') {
  //       setActiveFilters([]);
  //       return;
  //     }
  
  //     setActiveFilters(prev => {
  //       if (prev.includes(category)) {
  //         return prev.filter(f => f !== category);
  //       }
  //       return [...prev, category];
  //     });
  //   };
  

//following is radio-based filtering ----------------------

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>('');  

  const categories = useMemo(() => {
    const allCategories = projects.flatMap(project => project.categories);
    return ['all', ...new Set(allCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === '' || activeFilter === 'all') return projects;
    return projects.filter(project => 
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const { featuredProjects, normalProjects } = useMemo(() => {
    return {
      featuredProjects: filteredProjects.filter((project: Project) => project.featured),
      normalProjects: filteredProjects.filter((project: Project) => !project.featured)
    };
  }, [filteredProjects]);

  // Separate handlers for filters and navigation
  const handleFilterClick = (category: string) => {
    if (category === activeFilter) {
      setActiveFilter('');
    } else {
      setActiveFilter(category);
    }
  };

  const handleProjectClick = (link: string) => {
    navigate(link);
  };

   //------------------------------------------

    const ProjectGrid = ({ projects }: { projects: Project[] }) => (
      <>
        {projects.map((project: Project) => (
          <motion.div
            key={project.id}
            layout
            initial={false}  // Change this from the animation object
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              layout: { duration: 0.3 }
            }}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-6 sm:mb-5 md:mb-5 lg:mb-5"
          >
            <button 
              onClick={() => handleProjectClick(project.link)} 
              className="block h-full w-full text-left"
            >
              <ProjectTile project={project} />
            </button>
          </motion.div>
        ))}
      </>
    );
  
    return (
      <section id="projects" className="container mx-auto px-4">
        <Heading level={1} color="#00719c" visualLevel="h2" alignment="center">
          Projects
        </Heading>
  
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilterClick(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200
                ${category === 'all' && activeFilter.length === 0 ? 
                  'bg-purple-600 text-white' : 
                  activeFilter.includes(category) ?
                  'bg-purple-600 text-white' :
                  'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
  
         {/* Projects Grid Container */}
         <div className="relative">
          {/* Separator Line */}
          <AnimatePresence mode="wait">
            {featuredProjects.length > 0 && normalProjects.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  enter: { delay: 0.6, duration: 0.2 },
                  exit: { duration: 0 }
                }}
                style={{ pointerEvents: 'none' }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="text-gray-700 italic text-lg">Featured</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured Projects */}
          <motion.div 
            className="flex flex-wrap justify-center -mx-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              <ProjectGrid projects={featuredProjects} />
            </AnimatePresence>
          </motion.div>

          {/* Separator Line */}
          <AnimatePresence>
            {featuredProjects.length > 0 && normalProjects.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, display: 'none' }}
                animate={{ opacity: 1, display: 'block' }}
                exit={{ opacity: 0, display: 'none' }}
                transition={{ 
                  enter: { delay: 0.6, duration: 0.2 },
                  exit: { duration: 0 }
                }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="text-gray-700 italic text-lg">More Projects</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Normal Projects */}
          <motion.div 
            className="flex flex-wrap justify-center w-11/12 m-auto"
            layout
          >
            <AnimatePresence mode="popLayout">
              <ProjectGrid projects={normalProjects} />
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Projects;