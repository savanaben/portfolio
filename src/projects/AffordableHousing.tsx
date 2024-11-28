import React from 'react';
import ExternalProjectTemplate from '../components/ExternalProjectTemplate';
import TextContainer from '../components/TextContainer';
import Paragraph from '../components/Paragraph';

const AffordableHousing: React.FC = () => {
  return (
    <ExternalProjectTemplate
    bannerImage={`${process.env.PUBLIC_URL}/img/affordableHousing/Merwick-Stanworth - Torti Gallas and Partners.16a52031.svg`}
    bannerImageStyle={{ objectPosition: 'center bottom' }}
      title="Visualizing NJ Affordable Housing"
      titleLevel={1}
      titleVisualLevel="h2"
      color="#296851"
      content={
        <TextContainer size="3xl">
          <Paragraph>
            This project combined storytelling with data visualization to introduce people to the extremely complex topic of affordable housing in New Jersey. Collaborating with the Fair Share Housing Center and David Kinsey, I acquired the latest affordable housing data to enable people to explore how many affordable homes their municipality is required to build under the Mount Laurel Doctrine.
          </Paragraph>
          <Paragraph>
            This data viz was combined with a storytelling flow to simplify the many court rulings that have shaped affordable housing in NJ.
          </Paragraph>
          <Paragraph>
            Thanks again to David Kinsey for sharing the latest affordable housing data and being a core advocate of the Mount Laurel Doctrine.
          </Paragraph>
        </TextContainer>
      }
      projectLink="https://savanaben.github.io/affordable-housing-viz-2/"
    />
  );
};

export default AffordableHousing;