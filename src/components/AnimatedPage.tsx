import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigationType } from 'react-router-dom';
import SkeletonLoader from './SkeletonLoader';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.2, // Slightly longer duration
};

const skeletonVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.1 }
  }
};

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const scrollPositions = useRef<{ [key: string]: number }>({});
  const skeletonTimerRef = useRef<NodeJS.Timeout | null>(null);
  const loadStartTimeRef = useRef(Date.now());
  const isMainPage = location.pathname === '/';

 // Save scroll position when leaving a page
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

// Handle scroll position on navigation
useEffect(() => {
  if (navigationType === 'POP') {
    // For back/forward navigation
    if (isMainPage && location.state?.previousScroll) {
      // Restore main page scroll position
      window.scrollTo(0, location.state.previousScroll);
    } else if (scrollPositions.current[location.pathname] !== undefined) {
      // Restore other saved positions
      window.scrollTo(0, scrollPositions.current[location.pathname]);
    }
  } else {
    // Save current scroll position for non-POP navigation
    scrollPositions.current[location.pathname] = window.scrollY;
  }
}, [location.pathname, navigationType, isMainPage]);

  // Handle image loading
  useEffect(() => {
    loadStartTimeRef.current = Date.now();
    const images = document.querySelectorAll('img');
    let loadedCount = 0;

    const imageLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        const loadTime = Date.now() - loadStartTimeRef.current;
        if (loadTime < 500) {
          setImagesLoaded(true);
          setShowSkeleton(false);
        } else {
          setImagesLoaded(true);
          setShowSkeleton(false);
        }
        document.body.style.overflow = '';
      }
    };

    const checkAllImagesLoaded = () => {
      return Array.from(images).every(img => img.complete);
    };

    if (images.length === 0 || checkAllImagesLoaded()) {
      setImagesLoaded(true);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded);
        }
      });
    }

    skeletonTimerRef.current = setTimeout(() => {
      if (!imagesLoaded && !checkAllImagesLoaded()) {
        setShowSkeleton(true);
        document.body.style.overflow = 'hidden';
      }
    }, 500);

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
      if (skeletonTimerRef.current) {
        clearTimeout(skeletonTimerRef.current);
      }
      document.body.style.overflow = '';
    };
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {showSkeleton && (
        <motion.div
          key="skeleton"
          variants={skeletonVariants}
          exit="exit"
        >
          <SkeletonLoader />
        </motion.div>
      )}
      <motion.div
        key={location.pathname}
        initial="initial"
        animate={imagesLoaded ? "in" : "initial"}
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPage;