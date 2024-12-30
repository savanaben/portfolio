import React, { useState, useRef, useEffect } from 'react';
import PhotoSwipeGallery from './PhotoSwipeGallery';
import RichTextCaption from './RichTextCaption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



interface MediaItem {
  type: 'image' | 'video' | 'gif' | 'iframe';  
  src: string;
  coverImage?: string;  
  thumbnailSrc?: string;
  width?: number;
  height?: number;
  caption?: string;
  alt?: string;
  videoType?: 'direct' | 'youtube';
  gifOptions?: {
    playOnce?: boolean;
    showReplayButton?: boolean;
    duration?: number;
    autoPlay?: boolean;  
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
    base?: 1 | 2 | 3 | 4;
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';  
  showCaptions?: boolean;
  className?: string;
}

// New GifPlayer component
const GifPlayer: React.FC<{
  src: string;
  coverImage?: string;
  width?: number;
  height?: number;
  alt?: string;
  playOnce?: boolean;
  showReplayButton?: boolean;
  duration?: number;
  autoPlay?: boolean;  // New prop
}> = ({ 
  src, 
  coverImage,
  width, 
  height, 
  alt, 
  playOnce = true, 
  showReplayButton = true, 
  duration = 3000,
  autoPlay = true  // Default to true for backward compatibility
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const imgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Only start timer if gif is playing
    if (playOnce && isPlaying) {
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

  const handlePlay = () => {
    if (imgRef.current) {
      // Reset gif by clearing and resetting src
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
        src={!isPlaying && coverImage ? coverImage : src}
        width={width}
        height={height}
        alt={alt || 'Animated GIF'}
        className="rounded-lg w-full"
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg transition-all hover:bg-black/30"
          aria-label="Play animation"
        >
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
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
  columns = { base: 1, sm: 1, md: 2, lg: 2 },
  gap = 'md',
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

  const getGapClass = (gap: MediaContainerProps['gap']) => {
    switch (gap) {
      case 'none': return 'gap-0';
      case 'xs': return 'gap-2';    // 0.5rem
      case 'sm': return 'gap-3';    // 0.75rem
      case 'md': return 'gap-4';    // 1rem (default)
      case 'lg': return 'gap-6';    // 1.5rem
      case 'xl': return 'gap-8';    // 2rem
      case '2xl': return 'gap-12';  // 3rem
      default: return 'gap-4';
    }
  };

  const getColumnsClass = (columns: MediaContainerProps['columns'] = {}) => {
    // Ensure columns object exists with default values
    const cols = {
      base: columns?.base || 1,
      sm: columns?.sm,
      md: columns?.md,
      lg: columns?.lg
    };
  
    const baseColumns = `grid-cols-${cols.base}`;
    const smColumns = cols.sm ? `sm:grid-cols-${cols.sm}` : '';
    const mdColumns = cols.md ? `md:grid-cols-${cols.md}` : '';
    const lgColumns = cols.lg ? `lg:grid-cols-${cols.lg}` : '';
  
    // Filter out empty strings
    return [baseColumns, smColumns, mdColumns, lgColumns]
      .filter(Boolean)
      .join(' ');
  };


  const maxWidthClass = getMaxWidthClass(maxWidth);
  const gapClass = getGapClass(gap);
  const columnsClass = getColumnsClass(columns);
  const gridClass = `grid ${gapClass} ${columnsClass}`;


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

  // Add quality parameters to YouTube URL
  const enhancedYoutubeUrl = item.videoType === 'youtube' 
    ? `${item.src}${item.src.includes('?') ? '&' : '?'}vq=hd1080&modestbranding=1`
    : item.src;

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
        {item.videoType === 'youtube' ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={enhancedYoutubeUrl}
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
            coverImage={item.coverImage}  // Add this line
            width={item.width}
            height={item.height}
            alt={item.alt}
            playOnce={item.gifOptions?.playOnce}
            showReplayButton={item.gifOptions?.showReplayButton}
            duration={item.gifOptions?.duration}
            autoPlay={item.gifOptions?.autoPlay}
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
        {items.map((item, index) => {
          if (item.type === 'image') {
            return (
              <PhotoSwipeGallery
                key={index}
                images={[{
                  largeURL: item.src,
                  thumbnailURL: item.thumbnailSrc || item.src,
                  width: item.width || 1000,
                  height: item.height || 1000,
                  caption: item.caption,
                  alt: item.alt,
                }]}
                options={{}}
                showCaptions={showCaptions}
              />
            );
          }
          return renderMediaItem(item, index);
        })}
      </div>
    </div>
  );
};

export default MediaContainer;