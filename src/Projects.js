import React from 'react';
import { Link } from 'react-router-dom';
import ProjectTile from './components/ProjectTile';

function Projects() {
  const projects = [
    {
      id: "design-system",
      title: "Design System",
      description: "UI, Process, Design System, Project Management",
      image: "/img/design-system-cover.svg",
      imageAlt: "Abstract image of three shapes coming together to create a page template",
      link: "/project1",
      categories: ["design", "ui"]
    },
    {
      id: "sf-data-viz",
      title: "Science Fiction Data Viz",
      description: "Data viz, D3, UI, html, css, js, Student Work",
      image: "/img/SFdataViz-cover.jpg",
      imageAlt: "Floating circular nodes in space with various book labels",
      link: "/SFdataViz",
      categories: ["data-viz", "dev"]
    },
    {
      id: "nj-affordable-housing",
      title: "NJ Affordable Housing Viz",
      description: "Data viz, Vue, Front end dev, Storytelling, Student Work",
      image: "/img/NJ-cover.jpg",
      imageAlt: "Image related to New Jersey affordable housing visualization",
      link: "/NJ-affordable-housing-2",
      categories: ["data-viz", "ux"]
    },
    {
      id: "museum-mania",
      title: "Museum Mania",
      description: "UI, Web Dev, html, css, js",
      image: "/img/museum-mania-cover.svg",
      imageAlt: "Logo that looks like an abstract museum with the letter M built in it",
      link: "/museum-mania",
      categories: ["data-viz", "dev"]
    },
    {
      id: "math-widget-mania",
      title: "Math Widget Mania",
      description: "Accessibility, UI, UX",
      image: "/img/IIC-card-cover.png",
      imageAlt: "Image of a coordinate plane with points and lines",
      link: "/math-mania",
      categories: ["ui", "case-study"]
    },
    {
      id: "simulating-searches",
      title: "Simulating Searches",
      description: "Case Study, Simulation, Documentation, UI, UX",
      image: "/img/search.svg",
      imageAlt: "Image of a search engine user interface",
      link: "/simulated-search",
      categories: ["case-study", "ux", "assessment"]
    },
    {
      id: "test-design",
      title: "Tests Don't Have to Look Bad",
      description: "Animation, Assessment, Illustration, Content, UI, UX",
      image: "/img/mango.jpg",
      imageAlt: "Image of a user interface for a reading assessment",
      link: "/test-design",
      categories: ["ui", "assessment"]
    },
    {
      id: "toolbar-redesign",
      title: "Toolbar Redesign",
      description: "Iconography, UI, UX",
      image: "/img/toolbar.jpg",
      imageAlt: "Image of two toolbars for a user interface",
      link: "/toolbar-redesign",
      categories: ["ui"]
    },
    {
      id: "macro-world-design",
      title: "Macro World Design",
      description: "Illustration, World-building, Project Management",
      image: "/img/heartlands.jpg",
      imageAlt: "Colorful map with labels of towns",
      link: "/maps",
      categories: ["game-design"]
    },
    {
      id: "art-grab-bag",
      title: "Art Grab-Bag",
      description: "3D Modeling, Abstract, Illustration, Data viz",
      image: "/img/3D-cover.jpg",
      imageAlt: "Fantastical image of melting mushroom and orange candy-cane trees",
      link: "/3D",
      categories: ["art"]
    },
    {
      id: "pratt-usability-study",
      title: "Pratt Usability Study",
      description: "User Testing, UI, Task Design, Student Work",
      image: "/img/pratt-usability-study-cover.jpg",
      imageAlt: "Image related to Pratt usability study",
      link: "/pratt-usability-study",
      categories: ["case-study", "ui"]
    },
    {
      id: "grownyc-design-process",
      title: "GrowNYC Design Process",
      description: "User Testing, Style Guide, End-to-End, Student Work",
      image: "/img/growNYC-cover.jpg",
      imageAlt: "Abstract image related to GrowNYC design process",
      link: "/growNYC",
      categories: ["case-study", "ui"]
    }

    // Add more projects here...
  ];

  return (
    <section id="projects" className="container mx-auto px-4">
      <h2 id="work" className="text-5xl font-bold mb-8 text-center">Work</h2>
      <div className="flex flex-wrap -mx-4">

      {projects.map((project) => (
  <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
    <Link to={project.link}>
      <ProjectTile project={project} />
    </Link>
  </div>
))}


      </div>
    </section>
  );
}

export default Projects;