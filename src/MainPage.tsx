import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import AnimatedPage from './components/AnimatedPage';
import Contact from './Contact';

export const MainPage: React.FC = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetRef = 
        location.state.scrollTo === 'projects' ? projectsRef :
        location.state.scrollTo === 'experience' ? experienceRef :
        location.state.scrollTo === 'contact' ? contactRef :
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
      <div className="space-y-12 mb-12"> {/* Add vertical spacing between sections */}
        <div className="mt-12" id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="experience" ref={experienceRef}>
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default MainPage;