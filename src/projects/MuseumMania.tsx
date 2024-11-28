import React from 'react';
import ExternalProjectTemplate from '../components/ExternalProjectTemplate';
import TextContainer from '../components/TextContainer';
import Paragraph from '../components/Paragraph';

const ScienceFictionDataViz: React.FC = () => {
  return (
    <ExternalProjectTemplate
      bannerImage={`${process.env.PUBLIC_URL}/img/MuseumManiaCover.png`}
      bannerImageStyle={{ objectPosition: 'top' }}
      title="Museum Mania"
      titleLevel={1}
      color="#6b2626"
      titleVisualLevel="h2"
      content={
        <TextContainer size="3xl">
          <Paragraph>
          This student project was a quick foray into expanding my web development skills. The task was to utilize a public domain database to create something interesting. I choose a database of museums and connected longitude and latitude data with google streetview to enable the viewing of various unique interiors and exteriors. You can also view a random assortment of art pulled from the Harvard Art Museums API.
          </Paragraph>
        </TextContainer>
      }
      projectLink={{
        url: 'https://bgross-museums.glitch.me/',
      }}
    />
  );
};

export default ScienceFictionDataViz;