import React from 'react';
import { styled, keyframes } from 'styled-components';
import TextContainer from '../components/TextContainer';
import MediaContainer from '../components/MediaContainer';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import AnimatedPage from '../components/AnimatedPage';
import ProjectFooter from '../components/ProjectFooter';

// Create the slowpan animation
const slowPan = keyframes`
  0% {
    transform: translate(15%, 10%) scale(1.3);
  }
  100% {
    transform: translate(-20%, -20%) scale(1.4);
  }
`;

// Create the styled background component
const BackgroundPan = styled.div`
  height: 100%;
  width: 100%;
  z-index: -10;
  background: url(${process.env.PUBLIC_URL}/img/maps/Heartlands-cover-higher-res.jpg) no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  animation: ${slowPan} 115s linear 0s infinite alternate;

  @media only screen and (max-width: 600px) {
    animation: ${slowPan} 35s linear 0s infinite alternate;
  }
`;

const Maps: React.FC = () => {
  return (
  <AnimatedPage>
   <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundPan />
      <div className="w-full text-center py-16 md:py-20 lg:py-48">
         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
    I ❤️ Maps
            </h1>
        </div>
      <div className="max-w-3xl bg-white rounded-lg px-2 pt-4 pb-4 mx-3 mb-3 my-2 lg:my-12 sm:px-6 sm:pt-4 sm:pb-6 md:px-8 md:pt-6 md:pb-8 lg:px-12 lg:pt-8 lg:pb-12 lg:mx-auto md:mx-12 sm:mx-2">
         <TextContainer >
         <Paragraph>
         *Maps hold a dear place in my heart. From the sketchy scrawls that envision space and place to full-color continents, in all their mesmerizing detail.*
            </Paragraph>
            <Heading level={1} color="#882888" visualLevel="h2" alignment="center">
              World Design: The Heartlands
            </Heading>
            <Paragraph>
            This project&apos;s aim was to create a rich overworld for a passion project called Legends of Equestria, a 3D massive multiplayer online game. I led the design of the Heartlands through all stages, acting as the project manager from early conceptualization to final 3D map-building in Unity.
            </Paragraph>
            <Paragraph>
            This project involved an incredible range of collaboration across specialties. There are many areas I won&apos;t get to cover like our Writing team creating the lore, characters, and personality to fill this world, our 3D artists building structure and space, and all the amazing concept art that fueled everyone&apos;s inspiration. But here&apos;s a small slice of that story in top-down form.
            </Paragraph>
            <Heading level={2} color="#882888" visualLevel="h3" alignment="left">
               We needed a connecting zone
            </Heading>
            <Paragraph>
            To connect our big cities and other locations, we needed a middle zone. Based on rough approximations of city location and climate, I diagrammed the world to get us started. Because of scale, I broke this continent into 3 areas to focus on. The Heartlands is the lowest zone with the “X”.
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/overworld.jpg`,
                width: 984,
                height: 863,
                alt: 'Kaji Ulma',
              }
            ]}
            maxWidth="6xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
          />

            <TextContainer>
            <Paragraph>
            For the first cut, I assigned the project to Kaji Ulma, one of our designers. This was one of his early passes, which considered difficulty, terrain, and climate.
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/Kaji-Ulma-heartlands-diagram.jpg`,
                width: 1570,
                height: 1020,
                alt: 'tbd',
                caption: 'Diagram by Kaji Ulma'
              }
            ]}
            maxWidth="6xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
          />
          <TextContainer>
            <Paragraph>
            I divided the Heartlands into 7 zones to break up this large project into smaller pieces. 
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/TransitionMasterZones-Anya-Biryukova.jpg`,
                width: 1500,
                height: 1222,
                alt: 'tbd',
                caption: 'Thanks to Anya Biryukova for the nice map textures.'
              }
            ]}
            maxWidth="6xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
          />
          <TextContainer>
            <Paragraph>
            Here&apos;s a few examples of zone sketchwork. As the design lead for a passion project like this, I focused on enabling each person to improve and meaningfully contribute, no matter how skilled they were. Breaking up zone conceptual work among designers significantly sped up word-building and enabled a more diverse pool of ideas for points of interest. 
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/zone_2_Dread-Coffins.jpg`,
                width: 2054,
                height: 1263,
                alt: 'Zone 2 art by Dread Coffins',
                caption: 'Zone 2 art by Dread Coffins'
              },
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/zone-5-Scott-Forrand.jpg`,
                width: 1894,
                height: 1492,
                alt: 'Zone 5 art by Scott Forrand.',
                caption: 'Zone 5 art by Scott Forrand'
              },
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/zone-7-ben-gross.jpg`,
                width: 1854,
                height: 1238,
                alt: 'Zone 7 art by Ben Gross',
                caption: 'Zone 7 art by Ben Gross'
              }
            ]}
            maxWidth="6xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
          />
          <TextContainer>
            <Paragraph>
            In tandem to these sketches, designers collaborated with writers and concept artists to ensure points of interest went beyond fascinating eye-candy. I ensured all designers held a from-inception teamwork mentality, allowing lore and story arcs to inform map-making and design.
            </Paragraph>
            <Paragraph>
            With all the zones sketched out, I created a final master reference map.
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/Hearlands-topo-zoomed-out.jpg`,
                width: 1200,
                height: 975,
                alt: 'Zone 2 art by Dread Coffins'
              },
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/Hearlands-topo-detail-zone-7.jpg`,
                width: 1894,
                height: 1492,
                alt: 'Zone 7 detail (northeast corner)',
                caption: 'Zone 7 detail (northeast corner)'
              }
            ]}
            maxWidth="6xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
          />
          <TextContainer>
            <Paragraph>
            This map brought everything together, and critically incorporated topographic estimations. These estimations enabled Unity terrain modelers to get a sense of height across the Heartlands.
            </Paragraph>
            <Paragraph>
            Finally, all of the character, structural, modular, terrain, texture, particle, and other assets were combined to create a 3D world!
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/heartlands-in-game1.jpg`,
                width: 2000,
                height: 665,
                alt: 'Heartlands in-game view 1'
              },
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/heartlands-in-game2.jpg`,
                width: 2000,
                height: 889,
                alt: 'Heartlands in-game view 2'
              },
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/maps/heartlands-in-game3.jpg`,
                width: 2000,
                height: 861,
                alt: 'Heartlands in-game view 3',
                caption: 'Lots of people went into the creation of the Heartlands!'
              }
            ]}
            maxWidth="6xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
          />

          <TextContainer>
              <Heading level={3} color="#882888" visualLevel="h3" alignment="center" className="retro-header">
                Retrospective
              </Heading>
              <Paragraph className="retro-body">
              Reflecting back, we made this area a bit too big. The Heartlands was the largest area in the game, and grappling with scale was quite challenging. Keeping the same amount of points of interest, but reducing the overall scale by about 20% would reduce travel time between things to do.
              </Paragraph>
            <ProjectFooter />
          </TextContainer>
        </div>
      
    </div>
  </AnimatedPage>
  );
};

export default Maps;