import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ProjectFooter from '../components/ProjectFooter';
import Paragraph from '../components/Paragraph';
import TextContainer from '../components/TextContainer';
import Heading from '../components/Heading';
import Link from '../components/Link';
import MediaContainer from '../components/MediaContainer';

const MathMania: React.FC = () => {
  const functionTransformationImages = [
    {
      type: 'image' as const,
      src: `${process.env.PUBLIC_URL}/img/math-mania/function-transformation-before.png`,
      thumbnailSrc: `${process.env.PUBLIC_URL}/img/math-mania/function-transformation-before.png`,
      width: 784,
      height: 614,
      caption: "Function Transformation - Before",
      alt: "Function Transformation - Before"
    },
    {
      type: 'image' as const,
      src: `${process.env.PUBLIC_URL}/img/math-mania/function-transformation-after-1024x807.jpg`,
      thumbnailSrc: `${process.env.PUBLIC_URL}/img/math-mania/function-transformation-after-1024x807.jpg`,
      width: 784,
      height: 614,
      caption: "Function Transformation - After",
      alt: "Function Transformation - After"
    }, 
  ];

  const functionGraphImages = [
    {
      type: 'image' as const,
      src: `${process.env.PUBLIC_URL}/img/math-mania/function graph before.png`,
      thumbnailSrc: `${process.env.PUBLIC_URL}/img/math-mania/function graph before.png`,
      width: 784,
      height: 614,
      caption: "Function Graph - Before",
      alt: "Function Graph - Before"
    },
    {
      type: 'image' as const,
      src: `${process.env.PUBLIC_URL}/img/math-mania/function-graph-after.jpg`,
      thumbnailSrc: `${process.env.PUBLIC_URL}/img/math-mania/function-graph-after.jpg`,
      width: 784,
      height: 614,
      caption: "Function Graph - After",
      alt: "Function Graph - After"
    },
  ];

  const lineAndPointImages = [
    {
      type: 'image' as const,
      src: `${process.env.PUBLIC_URL}/img/math-mania/line and point before.png`,
      thumbnailSrc: `${process.env.PUBLIC_URL}/img/math-mania/line and point before.png`,
      width: 868,
      height: 726,
      caption: "Line and Point - Before",
      alt: "Line and Point - Before"
    },
    {
      type: 'image' as const,
      src: `${process.env.PUBLIC_URL}/img/math-mania/line-and-point-after.jpg`,
      thumbnailSrc: `${process.env.PUBLIC_URL}/img/math-mania/line-and-point-after.jpg`,
      width: 1400,
      height: 1103,
      caption: "Line and Point - After",
      alt: "Line and Point - After"
    },
  ];

  const videoSamples = [
    {
      type: 'video' as const,
      videoType: 'youtube' as const,
      src: "https://www.youtube-nocookie.com/embed/nd0W0DdoSAA?modestbranding=1;showinfo=0;rel=0;fs=1",
      caption: "Line and Point",
    },
    {
      type: 'video' as const,
      videoType: 'youtube' as const,
      src: "https://www.youtube.com/embed/-_YvWtI0WAw?modestbranding=1;showinfo=0;rel=0;fs=1",
      caption: "Fraction Models",
    },
    {
      type: 'video' as const,
      videoType: 'youtube' as const,
      src: "https://www.youtube.com/embed/2N8Cq9ROz-8?modestbranding=1;showinfo=0;rel=0;fs=1",
      caption: "Box and Whisker",
    },
    {
      type: 'video' as const,
      videoType: 'youtube' as const,
      src: "https://www.youtube.com/embed/bCDLy0jz_NY?modestbranding=1;showinfo=0;rel=0;fs=1",
      caption: "Bar Graph",
    },
  ];

  return (
    <AnimatedPage>
      <TextContainer>
        <Heading level={1} visualLevel="h2" alignment="center">
          A Math Tool for Every Occasion
        </Heading>
        <Paragraph>
          The charge was to make math more engaging and improve how we measure math skills by leveraging 21st century technology. Issue was, our company&apos;s existing math component library was dated in its functionality, accessibility, UI, and UX. I lead this project by providing end-to-end project management, client-facing reviews, and the complete UI/UX re-design of 17 math components.
        </Paragraph>

        <Heading level={3} visualLevel="h3" alignment="center" className="mt-8 mb-4">
          Before/After
        </Heading>

        <Heading level={4} visualLevel="h4" alignment="center" className="mb-4">
          Function Transformation
        </Heading>
      </TextContainer>

      <MediaContainer 
        items={functionTransformationImages}
        maxWidth="6xl"
        columns={{ sm: 1, md: 2, lg: 2 }}
        showCaptions={true}
      />

      <TextContainer>
        <Heading level={4} visualLevel="h4" alignment="center" className="mt-8 mb-4">
          Function Graph
        </Heading>
      </TextContainer>

      <MediaContainer 
        items={functionGraphImages}
        maxWidth="6xl"
        columns={{ sm: 1, md: 2, lg: 2 }}
        showCaptions={true}
      />

      <TextContainer>
        <Heading level={4} visualLevel="h4" alignment="center" className="mt-8 mb-4">
          Line and Point
        </Heading>
      </TextContainer>

      <MediaContainer 
        items={lineAndPointImages}
        maxWidth="6xl"
        columns={{ sm: 1, md: 2, lg: 2 }}
        showCaptions={true}
      />

      <TextContainer>
        <Heading level={3} visualLevel="h3" alignment="center" className="mt-8 mb-4">
          UI/UX/Functionality Samples
        </Heading>
      </TextContainer>

      <MediaContainer 
        items={videoSamples}
        maxWidth="6xl"
        columns={{ sm: 1, md: 2, lg: 2 }}
        showCaptions={true}
      />

      <TextContainer>
        <Heading level={2} visualLevel="h2">
          Fully Accessible and Customizable
        </Heading>
        <Paragraph>
          Because this project was for the National Assessment of Educational Progress, we had to meet all <Link href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#E205-content">508 government standards</Link> under the Rehabilitation Act. Generally, this meant following all <Link href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines</Link>. I ensured all of these standards were embraced with contrast compliant colors, large enough touch targets, proper tagging, and full keyboard navigation support to name a few. In many situations, our complex graphing functionality required novel accessibility solutions because we could not find defining standards or exemplars.
        </Paragraph>
        <Paragraph>
          This graphing tool was particularly tricky to make fully keyboard navigable, as it includes multiple objects, deletion functionality, and free-form manipulation of points, lines, and line segments. Collaborating with accessibility specialists and developers, I designed an approach that applies tab grouping and an arrow-key-controlled reticle, leaning on commonly-tried keys and patterns to help keyboard users discover functionality.
        </Paragraph>
      </TextContainer>

      <MediaContainer 
        items={[{
          type: 'video' as const,
          videoType: 'youtube' as const,
          src: "https://www.youtube.com/embed/7q8cwA6CCtI?modestbranding=1;showinfo=0;rel=0;fs=1",
          caption: "Keyboard Navigation",
        }]}
        maxWidth="3xl"
        columns={{ sm: 1, md: 1, lg: 1 }}
        showCaptions={true}
      />

      <TextContainer>
        <Paragraph>
          Another aspect of accessibility was the creation of two additional color themes (dark and low brightness) for all components, allowing students to pick what works best for them.
        </Paragraph>
      </TextContainer>

      <MediaContainer 
        items={[{
          type: 'image' as const,
          src: `${process.env.PUBLIC_URL}/img/math-mania/themes-optimized.gif`,
          alt: "Animated gif of three color themes applied to a math graphing tool. The default theme is white, the dark theme has a black background and dark colors, while the middle theme has a soft creme background.",
          caption: "Color themes: Default, Dark, and Low Contrast",
        }]}
        maxWidth="xl"
        columns={{ sm: 1, md: 1, lg: 1 }}
        showCaptions={true}
      />

      <TextContainer>
      <Heading level={2} visualLevel="h2">
          Results
        </Heading>
      <Paragraph>
        After a round of usability testing confirmed students down to 4th grade could use the tools with no issues, they were successfully integrated into the National Assessment of Educational Progress. Over several large scale administrations hundreds of thousands of students have now used these tools to demonstrate their knowledge and skills in math. 
        </Paragraph>
        <ProjectFooter />
      </TextContainer>
    </AnimatedPage>
  );
};

export default MathMania;