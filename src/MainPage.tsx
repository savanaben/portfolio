import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import AnimatedPage from './components/AnimatedPage';

export const MainPage: React.FC = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetRef = 
        location.state.scrollTo === 'projects' ? projectsRef :
        location.state.scrollTo === 'experience' ? experienceRef :
        location.state.scrollTo === 'about' ? aboutRef : null;

      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'auto' });
        window.scrollTo({
          top: targetRef.current.offsetTop - 80, // Adjust 80 based on your header height
          behavior: 'auto'
        });
      }
    }
  }, [location]);

  return (
    <AnimatedPage>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
    </AnimatedPage>
  );
}

export default MainPage;