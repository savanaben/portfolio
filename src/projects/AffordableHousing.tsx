import React from 'react';
import ExternalProjectTemplate from '../components/ExternalProjectTemplate';

const ExampleExternalProject: React.FC = () => {
  const projectImages = [
    {
      thumbnailURL: "/img/example-project/thumbnail1.jpg",
      largeURL: "/img/example-project/large1.jpg",
      width: 1200,
      height: 800,
      caption: "Example image 1",
      alt: "Example image 1"
    },
    // Add more images as needed
  ];

  const description = `This project combined storytelling with data visualization to introduce people to the extremely complex topic of affordable housing in New Jersey. Collaborating with the Fair Share Housing Center and David Kinsey, I acquired the latest affordable housing data to enable people to explore how many affordable homes their municipality is required to build under the Mount Laurel Doctrine. This data viz was combined with a storytelling flow to simplify the many court rulings that have shaped affordable housing in NJ.
  Thanks again to David Kinsey for sharing the latest affordable housing data and being a core advocate of the Mount Laurel Doctrine.`;


  return (
    <ExternalProjectTemplate
      bannerImage="/img/affordableHousing/Merwick-Stanworth - Torti Gallas and Partners.16a52031.svg"
      bannerImageStyle={{ objectPosition: 'center bottom' }}
      title="Visualizing NJ Affordable Housing"
      titleLevel={1} // Optional: defaults to 1
      titleVisualLevel="h2" // Optional: defaults to 'h2'
      description={description}
      projectLink="https://savanaben.github.io/affordable-housing-viz-2/"
      // images={projectImages}
    />
    
  );
};

export default ExampleExternalProject;