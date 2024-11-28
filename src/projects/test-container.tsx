import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ProjectFooter from '../components/ProjectFooter';
import Paragraph from '../components/Paragraph';
import TextContainer from '../components/TextContainer';
import Heading from '../components/Heading';
import Container from '../components/Container';
import MediaContainer from '../components/MediaContainer';


interface Image {
  thumbnailURL: string;
  largeURL: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
}

const TestletDesignSystem: React.FC = () => {
  
  
  return (
    <AnimatedPage>
        <TextContainer>
          <Heading level={1} visualLevel="h2" alignment="center" color="">
            From Style Guide to Design System
          </Heading>
          <Paragraph>
            One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
          </Paragraph>
          <Paragraph>
            As the UX lead on this project, I was tasked with creating a style guide to document all of the components necessary for building testlets. Following are some example components.
          </Paragraph>
          <Paragraph className="text-center italic">
            Design system content owned by Educational Testing Service.
          </Paragraph>
        </TextContainer>


<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="3xl"
  rightStackedSize = 'full'
  verticalAlignment="center"
  gap="sm"
  columnSplit="40/60"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  leftContent={
      <>
      <Heading level={2}>Title</Heading>
      <Paragraph>
        One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
      </Paragraph>
      <Paragraph>
        One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
      </Paragraph>
      </>
  }
  rightContent={
    <MediaContainer
      items={[
        {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/test-design/space-1.jpg`,
          width: 1000,
          height: 557,
          alt: 'Space Junk design 1',
        },
        {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/test-design/space-1.jpg`,
          width: 1000,
          height: 557,
          alt: 'Space Junk design 1',
        },
      ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="6xl"
      showCaptions={true}
    />
  }
/>


<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="full"
  rightStackedSize = 'full'
  verticalAlignment="center"
  gap="sm"
  columnSplit="50/50"
  removeHorizontalPadding={false}
  leftContent={
    <>
    <Heading level={2}>Title</Heading>
    <Paragraph>
      One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
    </Paragraph>
    <Paragraph>
      One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
    </Paragraph>
    </>
  }
  rightContent={
    <MediaContainer
    items={[
      {
        type: 'image',
        src: `${process.env.PUBLIC_URL}/img/test-design/space-1.jpg`,
        width: 1000,
        height: 557,
        alt: 'Space Junk design 1',
      },
      {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/test-design/space-2.jpg`,              width: 1000,
          height: 557,
          alt: 'Space Junk design 2',
      },
    ]}
    columns={{ sm: 1, md: 1, lg: 1 }}
    maxWidth="6xl"
    showCaptions={true}
  />
  }
/>



<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="full"
  rightStackedSize = 'full'
  verticalAlignment="center"
  gap="sm"
  columnSplit="50/50"
  removeHorizontalPadding={false}
  leftContent={
    <MediaContainer
    items={[
      {
        type: 'image',
        src: `${process.env.PUBLIC_URL}/img/test-design/space-1.jpg`,
        width: 1000,
        height: 557,
        alt: 'Space Junk design 1',
      },
    ]}
    columns={{ sm: 1, md: 1, lg: 1 }}
    maxWidth="6xl"
    showCaptions={true}
  />
  }
  rightContent={
    <MediaContainer
    items={[
      {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/test-design/space-2.jpg`,              width: 1000,
          height: 557,
          alt: 'Space Junk design 2',
      },
    ]}
    columns={{ sm: 1, md: 1, lg: 1 }}
    maxWidth="6xl"
    showCaptions={true}
  />
  }
/>


<Container
  layout="single"
  size="3xl"
  removeHorizontalPadding={false}
  >
      <Heading level={2}>Title</Heading>
      <Paragraph>
        One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
      </Paragraph>
      <Paragraph>
        One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.
      </Paragraph>
</Container>


        <TextContainer>
          <Paragraph>
            These components are combined with layout templates and custom digital assets to create the final testlets students see.
          </Paragraph>
          <ProjectFooter />
        </TextContainer>


    </AnimatedPage>
  );
};

export default TestletDesignSystem;