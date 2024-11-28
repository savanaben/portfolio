import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import AnimatedPage from '../components/AnimatedPage';
import TextContainer from '../components/TextContainer';
import MediaContainer from '../components/MediaContainer';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import ProjectFooter from '../components/ProjectFooter';
import Link from '../components/Link';

const TestDesign: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="w-full">
        <TextContainer>
          <Heading alignment="center" level={1}>Assessments Can Look Nice Too</Heading>
          <Paragraph>
            This series of projects consists of four 30-minute reading assessments for 4th and 8th graders. As the UX/digital designer, I provided end-to-end design solutions that encompassed everything from early wireframing and storyboarding to final art and animation asset creation. While the assessment field still struggles with <Link href="https://bengross.co/bland-assessments/" external>ugly interfaces and bland content</Link>, I&apos;d like to show that it doesn&apos;t have to be this way.
          </Paragraph>
          </TextContainer>
          <TextContainer size="2xl">
            <Heading alignment="center" level={3}>Global Attribution</Heading>
            <Paragraph>
              I want to thank Hilary Persky (Content Lead) and Lonnie Smith (Dev Lead) for being such great team members. You were a joy to work with!
            </Paragraph>
            <p className="text-md italic">
              All content owned by the <Link href="https://nces.ed.gov/" external>National Center for Educational Statistics</Link> and the United States Department of Education.
            </p>
          </TextContainer>
          <TextContainer>
          <Heading level={3} className="text-center">Oceans of Plastic</Heading>
          <Paragraph>
            This task teaches students about the problem of microplastics in the ocean while measuring their reading skills in target areas like critique, evaluation, interpretation, and locate/recall.
          </Paragraph>
        </TextContainer>

        <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/oceans-1.jpg`,
              width: 1000,
              height: 557,
              alt: 'Oceans of Plastic design 1',
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/oceans-2.jpg`,
              width: 1000,
              height: 557,
              alt: 'Oceans of Plastic design 2',
            },
          ]}
          columns={{ sm: 1, md: 2, lg: 2 }}
          maxWidth="6xl"
        />

        <TextContainer>
          <Heading level={3} className="text-center">The Tale of Despereaux</Heading>
          <Paragraph>
            This task differs from others in that we experimented with a simpler, character-less design. I quite liked this approach because we were able to lean on the core reading passages and my UI/art for engagement while omitting the added text load characters bring about. Art and UI design was inspired by the source materials (Shel Silverstein&apos;s iconic ink illustrations and Timothy B. Ering&apos;s Despereaux book cover art).
          </Paragraph>
        </TextContainer>

        <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/des-1.jpg`,
              width: 1000,
              height: 557,
              alt: 'The Tale of Despereaux design 1',
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/des-2.jpg`,
              width: 1000,
              height: 557,
              alt: 'The Tale of Despereaux design 2',
            },
          ]}
          columns={{ sm: 1, md: 2, lg: 2 }}
          maxWidth="6xl"
        />

        <TextContainer>
          <Heading level={3} className="text-center">Mango Street</Heading>
          <Paragraph>
            Like Despereaux, Mango Street was another character-less reading task. I pulled inspiration from The House On Mango Street&apos;s book cover art, as well as the architecture surrounding the actual house in Chicago.
          </Paragraph>
        </TextContainer>

        <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/mango-1.jpg`,
              width: 1000,
              height: 557,
              alt: 'Mango Street design 1',
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/mango-2.jpg`,
              width: 1000,
              height: 557,
              alt: 'Mango Street design 2',
            },
          ]}
          columns={{ sm: 1, md: 2, lg: 2 }}
          maxWidth="6xl"
        />

        <TextContainer>
          <Heading level={3} className="text-center">Space Junk</Heading>
          <Paragraph>
            This task introduces students to the problem of space junk, reinforcing the need for international cooperation to keep local space around Earth clean. In addition to UI/UX and background art, I also created two videos for this task.
          </Paragraph>
        </TextContainer>

        <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/space-1.jpg`,
              width: 1000,
              height: 557,
              alt: 'Space Junk design 1',
              caption: 'Character art by Dave Coats.',
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/test-design/space-2.jpg`,              width: 1000,
              height: 557,
              alt: 'Space Junk design 2',
            },
          ]}
          columns={{ sm: 1, md: 2, lg: 2 }}
          maxWidth="6xl"
          showCaptions={true}
        />

        <MediaContainer
          items={[
            {
              type: 'video',
              src: 'https://www.youtube.com/embed/xnnv7gqL3d8?modestbranding=1;showinfo=0;rel=0;fs=1',
              caption: 'Using After Effects, I created a semi-accurate representation of space junk density by combining an ArcGIS representation of Earth with point clouds that equal the amount of space junk bigger than 10cm (based on the most <Link href="https://www.nasa.gov/pdf/692076main_Orbital_Debris_Management_and_Risk_Mitigation.pdf" external>up-to-date data</Link> at the time).',
            },
            {
              type: 'video',
              src: 'https://www.youtube.com/embed/jB7rCDx1qZk?modestbranding=1;showinfo=0;rel=0;fs=1',
              caption: 'Using Autodesk Maya, I created a 3D simulation of capturing a satellite with a space net.',
            },
          ]}
          columns={{ sm: 1, md: 2, lg: 2 }}
          maxWidth="6xl"
          showCaptions={true}
        />

        <TextContainer>
          <ProjectFooter />
        </TextContainer>
      </div>
    </AnimatedPage>
  );
};

export default TestDesign;