import { useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';

interface CustomLocation extends Omit<Location, 'state'> {
  state: {
    scrollTo?: string;
  } | null;
}

export default function ScrollToTop() {
  const location = useLocation() as CustomLocation;

  useEffect(() => {
    // Only handle scrolling for main page section targets
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        requestAnimationFrame(() => {
          const offsetPosition = element.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          });
        });
      }
    }
  }, [location.state]);

  return null;
}