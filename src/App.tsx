import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { HeaderResponsive } from './components/Header';
import routeConfig from './routeConfig';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

// Create a context for the background color
const BackgroundColorContext = createContext<{
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}>({
  backgroundColor: '#f3f4f6', // Default light gray
  setBackgroundColor: () => { /* no-op */ },
});

// Custom hook to use the background color context
const useBackgroundColor = () => useContext(BackgroundColorContext);


const AnimatedRoutes = () => {
  const location = useLocation();
  const { setBackgroundColor } = useBackgroundColor();

  useEffect(() => {
    const currentRoute = routeConfig.find(route => route.path === location.pathname);
    if (currentRoute) {
      setBackgroundColor(currentRoute.backgroundColor);
    } else {
      setBackgroundColor('#f3f4f6'); // Default color if route not found
    }
  }, [location, setBackgroundColor]);

  return (
    <AnimatePresence mode="wait">
            <ScrollToTop />  {/* Add ScrollToTop component here */}
      <Routes location={location} key={location.pathname}>
        {routeConfig.map(({ path, element: Element, fullWidth }) => (
          <Route 
            key={path} 
            path={path} 
            element={<MainContent fullWidth={fullWidth}><Element /></MainContent>} 
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

interface MainContentProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({ 
  children, 
  fullWidth = false,
}) => {
  const widthClass = fullWidth ? "w-full" : "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";

  return (
    <main className={`${widthClass} pt-[56px]`}>
      {children}
    </main>
  );
};

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#f3f4f6');

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <MantineProvider>
        <Router>
          <div className="min-h-screen">
            <HeaderResponsive />
            <AnimatedRoutes />
          </div>
        </Router>
      </MantineProvider>
    </BackgroundColorContext.Provider>
  );
}

export default App;