import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextContainer from './components/TextContainer';
import Paragraph from './components/Paragraph';
import Heading from './components/Heading';


const imageCache: { [key: string]: HTMLImageElement } = {};

const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  return Promise.all(
    imageUrls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          // Store the loaded image in cache
          imageCache[url] = img;
          resolve();
        };
        img.onerror = reject;
        img.src = `${process.env.PUBLIC_URL}${url}`;
      });
    })
  );
};




const slides = [
  {
    id: 1,
    roundedImage: '/img/about/parkzoomedin.jpg',
    backgroundImage: '/img/about/parkbackground.jpg',
    caption: 'At Storm King Art Center'
  },
  {
    id: 2,
    roundedImage: '/img/about/pacificimage1.jpg',
    backgroundImage: '/img/about/pacificbackground.jpg',
    caption: 'Hiking the north California coast'
  },
  {
    id: 3,
    roundedImage: '/img/about/winterparkface.jpg',
    backgroundImage: '/img/about/winterparkbg.jpg',
    caption: 'Skiing at Winter Park'
  },
  // Add more slides as needed
];


interface AboutProps {
  shouldPreload?: boolean;
}


const About: React.FC<AboutProps> = ({ shouldPreload = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [hasCompletedFirstCycle, setHasCompletedFirstCycle] = useState(false);
  const [clipCenter, setClipCenter] = useState({ x: 75, y: 30 }); // Default values
  const imageRef = useRef<HTMLImageElement>(null);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);  // Add this ref

  const centerPointStyles = `
  .image-container {
    position: relative;
  }
  .image-container::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 1px;
    pointer-events: none;
  }
`;

  //useEffect for preloading
  useEffect(() => {
    if (!shouldPreload) return;

    const timer = setTimeout(async () => {
      const imagesToPreload = slides.reduce((acc: string[], slide) => {
        return [...acc, slide.backgroundImage, slide.roundedImage];
      }, []);

      try {
        await preloadImages(imagesToPreload);
        setImagesPreloaded(true);
        console.log('Images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [shouldPreload]);



  // Update the background style to use cached images
  const getBackgroundStyle = (imagePath: string) => {
    const fullPath = `${process.env.PUBLIC_URL}${imagePath}`;
    if (imagesPreloaded && imageCache[imagePath]) {
      return {
        backgroundImage: `url(${imageCache[imagePath].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    return {
      backgroundImage: `url(${fullPath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  };

// this was a simpler way based on just a part of the screen

  const handleImageClick = () => {
    // On mobile (< md breakpoint)
    if (window.innerWidth < 1024) {
      setClipCenter({ x: 50, y: 80 }); // Center of viewport
    } else {
      // On desktop (≥ md breakpoint)
      setClipCenter({ x: 130, y: 50 }); // Slightly right of center for two-column layout
    }
  
    if (!hasBeenClicked) {
      setHasBeenClicked(true);
    } else {
      const nextSlide = (currentSlide + 1) % slides.length;
      if (nextSlide === 0 && !hasCompletedFirstCycle) {
        setHasCompletedFirstCycle(true);
      }
      setCurrentSlide(nextSlide);
    }
  };



  // const handleImageClick = (e: React.MouseEvent) => {
  //   // Get click coordinates relative to viewport
  //   const clickX = (e.clientX / window.innerWidth) * 100;
  //   const clickY = (e.clientY / window.innerHeight) * 100;
    
  //   setClipCenter({ 
  //     x: Math.round(clickX * 100) / 100,
  //     y: Math.round(clickY * 100) / 100
  //   });

  //   if (!hasBeenClicked) {
  //     setHasBeenClicked(true);
  //   } else {
  //     const nextSlide = (currentSlide + 1) % slides.length;
  //     if (nextSlide === 0 && !hasCompletedFirstCycle) {
  //       setHasCompletedFirstCycle(true);
  //     }
  //     setCurrentSlide(nextSlide);
  //   }
  // };

   return (
    <>
    <style>{centerPointStyles}</style>
    
    <div className="relative">
      <AnimatePresence initial={false}>
        {hasBeenClicked && (
          <>
            {/* Base layer */}
            {(hasBeenClicked && currentSlide !== 0) || (currentSlide === 0 && hasCompletedFirstCycle) ? (
              <motion.div
                key={`prev-${currentSlide}`}
                className="absolute inset-0 -z-20"
                style={getBackgroundStyle(
                  currentSlide === 0 
                    ? slides[slides.length - 1].backgroundImage 
                    : slides[currentSlide - 1].backgroundImage
                )}
              />
            ) : null}
            
            {/* Overlay layer with dynamic clip center */}
            <motion.div
              key={`new-${currentSlide}`}
              initial={{ clipPath: `circle(10% at ${clipCenter.x}% ${clipCenter.y}%)` }}  // Increased from 0% to 20%
              animate={{ clipPath: `circle(190% at ${clipCenter.x}% ${clipCenter.y}%)` }}
              transition={{ 
                duration: .7,  
                ease: [0.165, 0.84, 0.44, 1]  // easeOutQuart
              }}
              className="absolute inset-0 -z-10"
              style={getBackgroundStyle(slides[currentSlide].backgroundImage)}
            />
          </>
        )}
      </AnimatePresence>

      <TextContainer removeHorizontalPadding size="5xl">
      <div className="flex flex-col lg:mr-9 justify-center lg:flex-row items-start gap-8">
      <div className="lg:w-3/5">  {/* Change md: to lg: */}
            {/* Container with conditional glass effect */}
            <motion.div 
              className={`rounded-xl p-6 m-6 ${hasBeenClicked ? 'bg-white/80 backdrop-blur-md' : ''}`}
              animate={{
                backgroundColor: hasBeenClicked ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
                backdropFilter: hasBeenClicked ? 'blur(12px)' : 'blur(0px)'
              }}
              transition={{ duration: 0.2 }}
            >
             
             <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
              <Heading level={1} color='#00719c' alignment="center" className="md:text-left mb-6">
                <span className="lg:hidden md:hidden">
                  Nice to meet!<br />I&apos;m Ben.
                </span>
                <span className="hidden md:block lg:block">
                  Nice to meet! I&apos;m Ben.
                </span>
              </Heading>

              <Paragraph>
                I got my start in 3D/digital design, expanded to UX, and now enjoy tinkering in frontend dev. 
              </Paragraph>
              <Paragraph>
                I&apos;ve worked across the design and creation spectrum making art, animations, UIs, prototypes, and novel tools. As a project lead I&apos;ve managed the completion of a design system, various accessibility initiatives, and the day-to-day client-team collaboration critical to moving projects forward. 
              </Paragraph>
              <Paragraph>
                My greatest drive has been challenging the status quo of assessment. We can do better - push for richer, more engaging, and more authentic experiences for students. 
              </Paragraph>
              </div>
            </motion.div>
          </div>

          <div 
              ref={imageContainerRef}
              className="image-container flex flex-col items-center justify-center mx-auto lg:pt-16"
           >      
            <motion.img 
              ref={imageRef}
              draggable="false"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '14px 14px 0px 0px rgba(0,0,0,0.12)'
              }}
              initial={{
                boxShadow: '11px 11px 0px 0px rgba(0,0,0,0.15)'
              }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: '7px 7px 0px 0px rgba(0,0,0,0.15)'
              }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut'
              }}
              onClick={handleImageClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick();
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View next photo: ${slides[currentSlide].caption}`}
              className="rounded-full w-8/12 mx-4 object-cover cursor-pointer lg:w-96 md:w-96 border-solid border-2 border-gray-200 focus:ring-offset-4"           
              src={imagesPreloaded && imageCache[slides[currentSlide].roundedImage] 
                ? imageCache[slides[currentSlide].roundedImage].src 
                : `${process.env.PUBLIC_URL}${slides[currentSlide].roundedImage}`}
              alt={slides[currentSlide].caption}
            />

            {hasBeenClicked && (
              <motion.div
                key={slides[currentSlide].caption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 px-3 py-2 rounded-lg mb-6"
                style={{
                  backgroundColor: hasBeenClicked ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)',
                  backdropFilter: hasBeenClicked ? 'blur(10px)' : 'blur(0px)'
                }}
              >
                <p className="text-sm italic text-gray-800 text-center">
                  {slides[currentSlide].caption}
                </p>
              </motion.div>
      )}
          </div>
        </div>
      </TextContainer>
    </div>
    </>
  );
};

export default About;