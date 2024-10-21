import React from 'react';
import ExternalProjectTemplate from '../components/ExternalProjectTemplate';
import TextContainer from '../components/TextContainer';
import Paragraph from '../components/Paragraph';

const ScienceFictionDataViz: React.FC = () => {
  return (
    <ExternalProjectTemplate
      bannerImage="/img/SFdataViz.png"
      bannerImageStyle={{ objectPosition: 'center' }}
      title="Science Fiction Data Viz"
      titleLevel={1}
      titleVisualLevel="h2"
      content={
        <TextContainer size="3xl">
          <Paragraph>
            This data viz elevates <a href="http://www.casos.cs.cmu.edu/tools/datasets/internal/index.php">interesting research</a> by Dr. Kathleen M. Carley on the prevalence of science fiction sub-themes (e.g. time travel, interplanetary, magic) in popular novels of the time (2016). It involved learning d3 force simulations to create a node/link network where the attraction of nodes to the sub-themes is based on how integral a sub-theme was found to be.
          </Paragraph>
          <Paragraph>
            This was a great learning experience, and is meant to promote exploration of books you might be interested in based on the themes they hold.
          </Paragraph>
        </TextContainer>
      }
      projectLink={{
        url: '/img/SFdataViz.html',
        isInternal: true
      }}
    />
  );
};

export default ScienceFictionDataViz;