import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import { SlideData } from 'photoswipe'; // Add this import
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import AnimatedPage from '../components/AnimatedPage';

interface Image {
  thumbnailURL: string;
  largeURL: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
}

const Project1: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      paddingFn: () => {
        return { top: 30, bottom: 30, left: 70, right: 70 };
      },
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: 'auto',
      captionContent: (slide: SlideData) => {
        return slide.data.element.getAttribute('data-caption') || '';
      },
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  const images: Image[] = [
    {
      thumbnailURL: '/img/3D/AbstractLight.jpg',
      largeURL: '/img/3D/AbstractLight.jpg',
      width: 1000,
      height: 563,
      caption: 'Abstract Light: A mesmerizing play of colors and shapes',
      alt: 'Abstract light patterns'
    },
    {
      thumbnailURL: '/img/3D/AbstractLight.jpg',
      largeURL: '/img/3D/AbstractLight.jpg',
      width: 1000,
      height: 563,
      caption: 'Abstract Light: A mesmerizing play of colors and shapes',
      alt: 'Abstract light patterns'
    },
    {
      thumbnailURL: '/img/3D/AbstractLight.jpg',
      largeURL: '/img/3D/AbstractLight.jpg',
      width: 1000,
      height: 563,
      caption: 'Abstract Light: A mesmerizing play of colors and shapes',
      alt: 'Abstract light patterns'
    },
  ];

  return (
    <AnimatedPage>
      <div>
        <h2>Project 1: PhotoSwipe Test</h2>
        <div className="pswp-gallery" ref={galleryRef}>
          {images.map((image, index) => (
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={`image-${index}`}
              data-caption={image.caption}
            >
              <img src={image.thumbnailURL} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Project1;