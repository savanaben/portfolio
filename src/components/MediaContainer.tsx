import React from 'react';
import PhotoSwipeGallery from './PhotoSwipeGallery';
import RichTextCaption from './RichTextCaption';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnailSrc?: string;
  width?: number;
  height?: number;
  caption?: string;
  alt?: string;
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

const MediaContainer: React.FC<MediaContainerProps> = ({
    items,
    maxWidth = 'none',
    columns = { sm: 1, md: 2, lg: 2 },
    showCaptions = false,
    className = '',
  }) => {
    const getMaxWidthClass = (maxWidth: MediaContainerProps['maxWidth']) => {
      switch (maxWidth) {
        case 'xs':
          return 'max-w-xs';
        case 'sm':
          return 'max-w-sm';
        case 'md':
          return 'max-w-md';
        case 'lg':
          return 'max-w-lg';
        case 'xl':
          return 'max-w-xl';
        case '2xl':
          return 'max-w-2xl';
        case '3xl':
          return 'max-w-3xl';
        case '4xl':
          return 'max-w-4xl';
        case '5xl':
          return 'max-w-5xl';
        case '6xl':
          return 'max-w-6xl';
        case '7xl':
          return 'max-w-7xl';
        default:
          return '';
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
      if (item.type === 'video') {
        // If width and height are provided, use them to calculate aspect ratio
        const hasCustomDimensions = item.width && item.height;
        const aspectRatio = hasCustomDimensions 
          ? `${(item.height! / item.width!) * 100}%`
          : '56.25%'; // Default 16:9 ratio
    
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
              <iframe
                src={item.src}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={item.caption || `Video ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
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
          {items.filter(item => item.type === 'video').map(renderMediaItem)}
        </div>
      </div>
    );
  };
  
  export default MediaContainer;