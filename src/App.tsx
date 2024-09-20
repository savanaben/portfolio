import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Project1 from './projects/Project1';
import TestletDesignSystem from './projects/TestletDesignSystem';
import { HeaderResponsive } from './components/Header';
import './index.css';

const MainPage: React.FC = () => {
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
    <>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
    </>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/design-system" element={<TestletDesignSystem />} />
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <HeaderResponsive />
          <main className="container mx-auto max-w-9xl px-4 py-8 pt-20">
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;