import React from 'react';
import MediaContainer from '../components/MediaContainer';
import AnimatedPage from '../components/AnimatedPage';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import TextContainer from '../components/TextContainer';
import ProjectFooter from '../components/ProjectFooter';

const DigitalWork: React.FC = () => {
  return (
    <AnimatedPage>
      <TextContainer size="3xl">
        <Heading alignment='center' level={2}>Art Grab-Bag</Heading>
        <Paragraph>
          This page holds some examples of my drawn, 2D, 3D, and data viz work.
        </Paragraph>
      </TextContainer>
      <MediaContainer 
        items={[
          {
            type: 'image',
            src: '/img/3D/elbow-bone-study.jpg',
            width: 2000,
            height: 1790,
            alt: 'Elbow bone study',
          },
          {
            type: 'image',
            src: '/img/3D/hand-study.jpg',
            width: 2000,
            height: 1099,
            alt: 'Hand study',
          },
          {
            type: 'image',
            src: '/img/3D/whistful-person.jpg',
            width: 1236,
            height: 2000,
            alt: 'Wistful person',
          },
          {
            type: 'image',
            src: '/img/3D/BenGross_SF_networkCompress.png',
            width: 2212,
            height: 2598,
            alt: 'Network visualization of top science fiction novels by sub-genre',
            caption: 'Network visualization of top science fiction novels by sub-genre.',
          },
          {
            type: 'image',
            src: '/img/3D/Wonderland.jpg',
            width: 1000,
            height: 563,
            alt: 'Scene inspiration from Alice in Wonderland',
            caption: 'Scene inspiration from Alice in Wonderland.',
          },
          {
            type: 'image',
            src: '/img/3D/AbstractLight.jpg',
            width: 1000,
            height: 563,
            alt: 'Abstract light',
          },
          {
            type: 'image',
            src: '/img/3D/airshipport.jpg',
            width: 1000,
            height: 563,
            alt: 'Airship Port',
            caption: 'Airship Port modeling by me, conceptualized by Rice.',
          },
          {
            type: 'image',
            src: '/img/3D/Archives.jpg',
            width: 1000,
            height: 563,
            alt: 'Archives',
            caption: 'Archives modeling by me, conceptualized by Nicholas Hydock.',
          },
          {
            type: 'image',
            src: '/img/3D/FancyLibrary.jpg',
            width: 1000,
            height: 563,
            alt: 'Fancy Library',
            caption: 'Royal Library modeling by me, conceptualized by Nicholas Hydock.',
          },
          {
            type: 'image',
            src: '/img/3D/clouds.jpg',
            width: 1000,
            height: 563,
            alt: 'Lighthouse',
            caption: 'Clouds and sky made in Illustrator.',
          },
          {
            type: 'image',
            src: '/img/3D/RecreationofShangri-LaatNight.jpg',
            width: 1000,
            height: 561,
            alt: 'Mech',
            caption: 'Recreation of Shangri-La from Frank Capras Lost Horizon.',
          },
          {
            type: 'image',
            src: '/img/3D/TheDepths0.jpg',
            width: 1000,
            height: 623,
            alt: 'Mech 2',
          },
          {
            type: 'image',
            src: '/img/3D/CNBM-Headquarters-Render.jpg',
            width: 1000,
            height: 750,
            alt: 'Mech 3',
            caption: 'Rendering of the proposed CNBM Headquarters and Expo Center in Bengbu, China. Building design by GRO Architects.',
          },
        ]}
        maxWidth="7xl"
        columns={{ sm: 1, md: 2, lg: 2 }}
        showCaptions={true}
        
      />
      <TextContainer>
        <ProjectFooter />
      </TextContainer>
    </AnimatedPage>
  );
};

export default DigitalWork;