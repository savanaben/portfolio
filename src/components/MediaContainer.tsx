import React, { useState, useRef, useEffect } from 'react';
import PhotoSwipeGallery from './PhotoSwipeGallery';
import RichTextCaption from './RichTextCaption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



interface MediaItem {
  type: 'image' | 'video' | 'gif' | 'iframe';  // Added gif type
  src: string;
  thumbnailSrc?: string;
  width?: number;
  height?: number;
  caption?: string;
  alt?: string;
  videoType?: 'direct' | 'youtube';
  gifOptions?: {
    playOnce?: boolean;
    showReplayButton?: boolean;
    duration?: number; // Add duration option
  };
  iframeOptions?: {
    scrolling?: boolean;
    height?: string;  // Allow percentage or pixel values
    sandbox?: string; // For security restrictions
    allowFullScreen?: boolean;
  };
}

interface MediaContainerProps {
  items: MediaItem[];
  maxWidth?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  columns?: {
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
  showCaptions?: boolean;
  className?: string;
}

// New GifPlayer component
const GifPlayer: React.FC<{
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  playOnce?: boolean;
  showReplayButton?: boolean;
  duration?: number; // Add duration prop
}> = ({ src, width, height, alt, playOnce = true, showReplayButton = true, duration = 3000 }) => { // Default 3s duration
  const [isPlaying, setIsPlaying] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (playOnce && isPlaying) {
      // Set timer to show replay button after duration
      timerRef.current = setTimeout(() => {
        setIsPlaying(false);
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying, playOnce, duration]);

  const handleReplay = () => {
    if (imgRef.current) {
      const currentSrc = imgRef.current.src;
      imgRef.current.src = '';
      imgRef.current.src = currentSrc;
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative inline-block">
      <img
        ref={imgRef}
        src={src}
        width={width}
        height={height}
        alt={alt || 'Animated GIF'}
        className="rounded-lg w-full"
      />
        {!isPlaying && showReplayButton && (
        <button
          onClick={handleReplay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg transition-all hover:bg-black/30"
          aria-label="Replay animation"
        >
          <div className="relative">
            {/* White circle background */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              {/* Play icon, slightly offset to the right for visual balance */}
              <FontAwesomeIcon 
                icon={faPlay} 
                className="text-gray-700 text-3xl ml-1" 
              />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

const MediaContainer: React.FC<MediaContainerProps> = ({
  items,
  maxWidth = 'none',
  columns = { sm: 1, md: 2, lg: 2 },
  showCaptions = false,
  className = '',
}) => {
  const getMaxWidthClass = (maxWidth: MediaContainerProps['maxWidth']) => {
    switch (maxWidth) {
      case 'xs': return 'max-w-xs';
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      case '2xl': return 'max-w-2xl';
      case '3xl': return 'max-w-3xl';
      case '4xl': return 'max-w-4xl';
      case '5xl': return 'max-w-5xl';
      case '6xl': return 'max-w-6xl';
      case '7xl': return 'max-w-7xl';
      default: return '';
    }
  };

  const maxWidthClass = getMaxWidthClass(maxWidth);
  const gridClass = `grid gap-4 grid-cols-1 sm:grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg}`;

  const images = items.filter(item => item.type === 'image').map(item => ({
    largeURL: item.src,
    thumbnailURL: item.thumbnailSrc || item.src,
    width: item.width || 1000,
    height: item.height || 1000,
    caption: item.caption,
    alt: item.alt,
  }));

  const renderMediaItem = (item: MediaItem, index: number) => {
    if (item.type === 'iframe') {
      const [showModal, setShowModal] = useState(false);
      

        //  useEffect to handle body scroll locking
        useEffect(() => {
          if (showModal) {
            // Prevent scrolling on the body when modal is open
            document.body.style.overflow = 'hidden';
          } else {
            // Re-enable scrolling when modal is closed
            document.body.style.overflow = 'unset';
          }
          
          // Cleanup function to ensure scroll is re-enabled if component unmounts
          return () => {
            document.body.style.overflow = 'unset';
          };
        }, [showModal]);



      return (
        <div key={index} className="min-w-[150px] w-full">
          {/* Preview on mobile */}
          <div className="md:hidden">
            <div className="relative w-full bg-white rounded-lg border border-gray-300">
              <div 
                className="h-[300px] overflow-hidden"
                style={{ 
                  maxWidth: item.width ? `${item.width}px` : undefined,
                  margin: item.width ? '0 auto' : undefined
                }}
              >
                <iframe
                  src={item.src}
                  className="w-full h-full rounded-t-lg border-0"
                  scrolling={item.iframeOptions?.scrolling ? 'yes' : 'no'}
                  sandbox={item.iframeOptions?.sandbox}
                  allowFullScreen={item.iframeOptions?.allowFullScreen}
                  title={item.caption || 'Embedded content preview'}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 
                             flex items-end justify-center pb-4 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                               hover:bg-blue-700 transition-colors duration-200
                               flex items-center gap-2"
                  >
                    <span>Open Full View</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Full iframe on desktop */}
          <div className="hidden md:block">
            <div 
              className="relative w-full bg-white rounded-lg border border-gray-300"
              style={{ 
                height: item.iframeOptions?.height || '500px',
                maxWidth: item.width ? `${item.width}px` : undefined,
                margin: item.width ? '0 auto' : undefined
              }}
            >
              <iframe
                src={item.src}
                className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                scrolling={item.iframeOptions?.scrolling ? 'yes' : 'no'}
                sandbox={item.iframeOptions?.sandbox}
                allowFullScreen={item.iframeOptions?.allowFullScreen}
                title={item.caption || 'Embedded content'}
              />
            </div>
          </div>
  
         {/* Modal for mobile */}
{showModal && (
  <div 
    className="fixed inset-0 z-50 md:hidden mt-[56px] pb-0" // Added pt-[56px] to account for toolbar
    onClick={() => setShowModal(false)}
  >
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    <div className="absolute inset-2 bg-white rounded-2xl flex flex-col"> {/* Changed to rounded-2xl */}
      {/* Top toolbar */}
      <div className="flex justify-between items-center py-1 px-4 border-b">
        <h3 className="text-lg font-semibold">
          {item.caption || 'Embedded Content'}
        </h3>
        <button 
          onClick={() => setShowModal(false)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-hidden">
        <iframe
          src={item.src}
          className="w-full h-full border-0"
          scrolling={item.iframeOptions?.scrolling ? 'yes' : 'no'}
          sandbox={item.iframeOptions?.sandbox}
          allowFullScreen={item.iframeOptions?.allowFullScreen}
          title={item.caption || 'Embedded content full view'}
        />
      </div>

      {/* Bottom toolbar */}
      <div className="flex justify-end items-center rounded-b-2xl p-2 border-t bg-white">
        <button 
          onClick={() => setShowModal(false)}
          className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 
                    border border-gray-300 rounded-lg 
                    transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
  
          {showCaptions && item.caption && (
            <RichTextCaption content={item.caption} />
          )}
        </div>
      );
    }
    


    if (item.type === 'video') {
      const hasCustomDimensions = item.width && item.height;
      const aspectRatio = hasCustomDimensions 
        ? `${(item.height! / item.width!) * 100}%`
        : '56.25%';

      return (
        <div key={index} className="min-w-[150px] w-full">
          <div 
            className="relative w-full" 
            style={{ 
              paddingBottom: aspectRatio,
              maxWidth: item.width ? `${item.width}px` : undefined,
              margin: item.width ? '0 auto' : undefined
            }}
          >
            {(item.videoType || 'direct') === 'youtube' ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={item.src}
                title={item.caption || 'Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                controls
                playsInline
                preload="metadata"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          {showCaptions && item.caption && (
            <RichTextCaption content={item.caption} />
          )}
        </div>
      );
    }



    if (item.type === 'gif') {
      return (
        <div key={index} className="min-w-[150px] w-full">
          <GifPlayer
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            playOnce={item.gifOptions?.playOnce}
            showReplayButton={item.gifOptions?.showReplayButton}
            duration={item.gifOptions?.duration}
          />
          {showCaptions && item.caption && (
            <RichTextCaption content={item.caption} />
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`w-full mx-auto ${maxWidthClass} ${!showCaptions ? 'mb-6' : ''} ${className}`}>
      <div className={gridClass}>
        {images.length > 0 && (
          <PhotoSwipeGallery
            images={images}
            options={{}}
            className={`col-span-full ${gridClass}`}
            showCaptions={showCaptions}
          />
        )}
      {items
        .filter(item => item.type === 'video' || item.type === 'gif' || item.type === 'iframe') 
        .map(renderMediaItem)}
    </div>
  </div>
  );
};

export default MediaContainer;