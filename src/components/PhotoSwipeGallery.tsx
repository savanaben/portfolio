import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
}

interface PhotoSwipeGalleryProps {
  images: Image[];
  options?: Partial<PhotoSwipeLightbox['options']>;
  className?: string;
  showCaptions?: boolean;  // Add this line
}

let galleryCounter = 0;


const PhotoSwipeGallery: React.FC<PhotoSwipeGalleryProps> = ({ 
  images, 
  options = {}, 
  className = '',
  showCaptions = false  // Add this line
}) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const galleryId = useRef(`gallery-${galleryCounter++}`);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId.current}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      paddingFn: () => ({ top: 30, bottom: 30, left: 70, right: 70 }),
      tapAction: 'close',
      ...options
    });

  // Add white background to images
  lightbox.on('firstUpdate', () => {
    const style = document.createElement('style');
    style.textContent = `
      .pswp__img {
        background-color: white !important;
        
      }
    `;
    document.head.appendChild(style);
  });


    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: 'auto',
      captionContent: (slide: { data: { element: HTMLElement } }) => 
        slide.data.element.getAttribute('data-pswp-caption')
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [options]);

  return (
    <div id={galleryId.current} className={`pswp-gallery ${className}`} ref={galleryRef}>
      {images.map((image, index) => (
        <div key={`${galleryId.current}-item-${index}`} className="relative">
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            data-pswp-caption={image.caption}
          >
<img 
  src={image.thumbnailURL} 
  alt={image.alt || ''} 
  className="w-full h-auto rounded-lg" // Added rounded-lg
/>
          </a>
          {showCaptions && image.caption && (
            <p className="mt-2 mx-2 text-md text-gray-600 indent-0 leading-tight mb-4">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoSwipeGallery;