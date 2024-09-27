import React, { useEffect, useRef, useState } from 'react';
import { Image, Button, Container, Group } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import PhotoSwipeGallery from './PhotoSwipeGallery';
import AnimatedPage from './AnimatedPage';
import Paragraph from './Paragraph';
import TextContainer from './TextContainer';
import Heading from './Heading';
import ProjectFooter from '../components/ProjectFooter';
import classes from './ExternalProjectTemplate.module.css';

interface Image {
  thumbnailURL: string;
  largeURL: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
}

interface ExternalProjectTemplateProps {
  bannerImage: string;
  bannerImageStyle?: React.CSSProperties;
  title: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  titleVisualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description: string;
  projectLink: string;
  images?: Image[];
}

const HEADER_HEIGHT = 56; // Update this to match your actual header height


const ExternalProjectTemplate: React.FC<ExternalProjectTemplateProps> = ({
  bannerImage,
  bannerImageStyle,
  title,
  titleLevel = 1,
  titleVisualLevel = 'h2',
  description,
  projectLink,
  images,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const updateStickyState = () => {
    if (toolbarRef.current && bannerRef.current) {
      const headerHeight = HEADER_HEIGHT;
      const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
      const shouldBeSticky = bannerBottom <= headerHeight;
      setIsSticky(shouldBeSticky);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      updateStickyState();
    };

    const handleResize = () => {
      updateStickyState();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    updateStickyState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AnimatedPage>
      <div className="w-full">
        {/* Banner Image */}
        <div ref={bannerRef} className="w-full h-[50vh] relative overflow-hidden">
          <Image
            src={bannerImage}
            alt={title}
            className="w-full h-full object-cover"
            style={bannerImageStyle}
          />
        </div>

        {/* Toolbar Container */}
        <div className={isSticky ? classes.stickyContainer : ''}>
          {/* Toolbar Placeholder */}
          <div className={classes.toolbarPlaceholder}></div>

          {/* Sticky Toolbar */}
          <div 
            ref={toolbarRef}
            className={`${classes.toolbar} ${isSticky ? classes.sticky : ''}`}
          >
            <Container size="md" className={classes.inner}>
              <Group gap={5} className={classes.group}>
                <Button
                  component="a"
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  radius="xl"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  View Project <IconExternalLink size={18} className="ml-2" />
                </Button>
              </Group>
            </Container>
          </div>
        </div>

        <TextContainer>
          <Heading level={titleLevel} visualLevel={titleVisualLevel}>
            {title}
          </Heading>

          {description.split('\n').map((paragraph, index) => (
            <Paragraph key={index}>{paragraph.trim()}</Paragraph>
          ))}

          {/* Optional Images */}
          {images && images.length > 0 && (
            <div className="mb-8">
              <PhotoSwipeGallery
                images={images}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              />
            </div>
          )}

          <ProjectFooter />
        </TextContainer>
      </div>
    </AnimatedPage>
  );
};

export default ExternalProjectTemplate;