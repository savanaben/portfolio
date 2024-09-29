import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    if (navigationType === 'POP') {
      // Browser's back or forward button was used
      if (scrollPositions.current[pathname] !== undefined) {
        setTimeout(() => {
          window.scrollTo(0, scrollPositions.current[pathname]);
        }, 0);
      }
    } else {
      // New navigation
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, navigationType]);

  return null;
}