import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SkeletonLoader from './SkeletonLoader';
import useScrollPosition from '../hooks/useScrollPosition';

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
  duration: 0.2,
};

const skeletonVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.1 } // 100ms fade out
  }
};

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const location = useLocation();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const skeletonTimerRef = useRef<NodeJS.Timeout | null>(null);
  const loadStartTimeRef = useRef(Date.now());
  const { scrollToPosition } = useScrollPosition();

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

  // useEffect(() => {
  //   // This effect will run after the component has rendered
  //   const timer = setTimeout(() => {
  //     scrollToPosition();
  //   }, 100); // Adjust this delay as needed

  //   return () => clearTimeout(timer);
  // }, [location, scrollToPosition]);

  return (
    <>
      <AnimatePresence>
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
    </>
  );
};

export default AnimatedPage;