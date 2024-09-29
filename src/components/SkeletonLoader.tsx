import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useAnimationCycle = (duration: number) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return key;
};

const SkeletonLoader: React.FC = () => {
  const animationKey = useAnimationCycle(4000); // Total duration of animation cycle



  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          className="w-full max-w-2xl relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center mb-8">
            <motion.div
              className="w-1/3 h-24 bg-gray-200 rounded-full mr-4"
              variants={itemVariants}
            />
            <div className="w-2/3 space-y-3">
              <motion.div
                className="h-4 bg-gray-200 rounded w-3/4"
                variants={itemVariants}
              />
              <motion.div
                className="h-4 bg-gray-200 rounded w-1/2"
                variants={itemVariants}
              />
              <motion.div
                className="h-4 bg-gray-200 rounded w-5/6"
                variants={itemVariants}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkeletonLoader;