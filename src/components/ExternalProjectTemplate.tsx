import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Image, Button, Container, Group } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import AnimatedPage from './AnimatedPage';
import TextContainer from './TextContainer';
import Heading from './Heading';
import ProjectFooter from '../components/ProjectFooter';
import classes from './ExternalProjectTemplate.module.css';

interface ProjectLink {
  url: string;
  isInternal?: boolean;
}

interface ExternalProjectTemplateProps {
  bannerImage: string;
  bannerImageStyle?: React.CSSProperties;
  title: string;
  color: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  titleVisualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content: ReactNode;
  projectLink: string | ProjectLink;
}


const HEADER_HEIGHT = 56; // Update this to match your actual header height


const ExternalProjectTemplate: React.FC<ExternalProjectTemplateProps> = ({
  bannerImage,
  bannerImageStyle,
  title,
  color,
  titleLevel = 1,
  titleVisualLevel = 'h2',
  content,
  projectLink,
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


  const handleProjectLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof projectLink === 'object' && projectLink.isInternal) {
      e.preventDefault();
      window.open(`${process.env.PUBLIC_URL}${projectLink.url}`, '_blank');
    }
  };

  const getLinkProps = () => {
    if (typeof projectLink === 'string') {
      return {
        href: projectLink,
        target: "_blank",
        rel: "noopener noreferrer",
      };
    } else {
      return {
        href: projectLink.url,
        onClick: handleProjectLinkClick,
        target: projectLink.isInternal ? undefined : "_blank",
        rel: projectLink.isInternal ? undefined : "noopener noreferrer",
      };
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
                  {...getLinkProps()}
                  size="md"
                  radius="xl"
                  className={`${classes.rainbowButton}`}
                >
                  <span>
                    View Project <IconExternalLink size={18} className="ml-2 inline" />
                  </span>
                </Button>
              </Group>
            </Container>
          </div>
        </div>

        <TextContainer>
          <Heading level={titleLevel} color={color} visualLevel={titleVisualLevel}>
            {title}
          </Heading>
        </TextContainer>


        <div className="w-full">
          {content}
        </div>


        <ProjectFooter />
      </div>
    </AnimatedPage>
  );
};

export default ExternalProjectTemplate;