import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider, Button } from '@mantine/core';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Project1 from './projects/Project1';
import { HeaderResponsive } from './components/Header';
import './index.css';

function MainPage() {
  return (
    <>
      <Projects />
      <Experience />
      <About />
    </>
  );
}

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <HeaderResponsive />
          <main className="container mx-auto max-w-9xl px-4 py-8 pt-20">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/project1" element={<Project1 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;