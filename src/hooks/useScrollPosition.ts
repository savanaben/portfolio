import { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const useScrollPosition = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToPosition = useCallback(() => {
    if (navigationType === 'POP') {
      if (scrollPositions.current[pathname] !== undefined) {
        window.scrollTo(0, scrollPositions.current[pathname]);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return { scrollToPosition };
};

export default useScrollPosition;