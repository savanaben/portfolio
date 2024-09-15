import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

const PhotoSwipeGallery = ({ images, options = {} }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      ...options
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: 'auto',
      captionContent: (slide) => slide.data.element.getAttribute('data-pswp-caption')
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      // We don't need to call destroy on captionPlugin
    };
  }, [options]);

  return (
    <div className="pswp-gallery" ref={galleryRef}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={`gallery-item-${index}`}
          data-pswp-caption={image.caption}
        >
          <img src={image.thumbnailURL} alt={image.alt || ''} />
        </a>
      ))}
    </div>
  );
};

export default PhotoSwipeGallery;