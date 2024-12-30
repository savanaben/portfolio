import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ProjectFooter from '../components/ProjectFooter';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Container from '../components/Container';
import MediaContainer from '../components/MediaContainer';
import Link from '../components/Link';
import BulletedList from '../components/BulletedList';




const Prototopia: React.FC = () => {
  
  return (
<AnimatedPage>
<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  >
    <Heading color="#078575" alignment="center" level={1}>From Style Guides to Design Systems</Heading>  
    <Paragraph>
    Over the years I’ve grown with the industry in embracing the expanding importance of design systems. My experience began with the creation of style guides for various aspects of assessment (e.g. mapping techniques, visual representations of data, color usage) and shifted to design system contributions and management.       
    </Paragraph>
</Container>



<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
        <Heading color="#078575" alignment="center" level={2}>Accessible maps</Heading>  

      <Paragraph>
      My earlier work focused on art standards and meeting the latest WCAG Accessibility guidelines. Especially <Link href={`https://www.w3.org/TR/WCAG22/#non-text-contrast`}>non-text contrast</Link>, which revolutionized visual accessibility standards at the time of release by creating a quantifiable metric for making art visually accessible.         
      </Paragraph>
      <Paragraph>
      For the National Assessment of Educational Progress (NAEP), visual accessibility is critical so that we don’t unfairly disadvantage some students. Maps were particularly challenging as we needed to balance mapping standards and complexity with contrast requirements. Working with our cartography experts and the artists who would be applying these standards, I created a style guide that covered everything mapping related. This is now used across NAEP to drive how maps are made.       
      </Paragraph>
  </Container>
  

  <Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = '2xl'
  verticalAlignment="top"
  gap="sm"
  columnSplit="60/40"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  leftContent={
        <MediaContainer
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/DesignSystems/GeographyExtract.svg`,
                width: 743,
                height: 693,
                alt: 'Space Junk design 1',
                caption: "Excerpt of the symbology section of the Cartography guidelines.",
              }
            ]}
        columns={{ sm: 1, md: 1, lg: 1 }}
        maxWidth="7xl"
        showCaptions={true}
      />
  }
  rightContent={
            <MediaContainer
            items={[
              {
                type: 'image',
                src: `${process.env.PUBLIC_URL}/img/DesignSystems/ChoroplethMap.svg`,
                width: 471,
                height: 459,
                alt: 'Space Junk design 1',
                caption: "Choropleth maps are practically impossible to make contrast compliant! We tried our best and came up with a 3-color palette that works (any more steps and it's impossible via color alone).",
              }
            ]}
        columns={{ sm: 1, md: 1, lg: 1 }}
        maxWidth="7xl"
        showCaptions={true}
        />
  }
  />

<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
        <Heading color="#078575" alignment="center" level={2}>Design systems from the ground up</Heading>  

      <Paragraph>
      I led the component design for a large-scale formative assessment platform. This involved:    
      </Paragraph>
      <BulletedList
        items={[
          "Designing and specifying dozens of components",
          "Maintaining comprehensive design system documentation",
          "user flow and experience.",
          "Guiding the design team in creating scenario-based assessments"
        ]}
      />
      <Paragraph>
      You can learn more about the design and content side of this project on the <Link href={`${process.env.PUBLIC_URL}/#/FormativeAssessment`}>Formative Assessments</Link> page.       
      </Paragraph>
  </Container>


  <Container
  layout="single"
  size="7xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/DesignSystems/testletComponent1.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "Multiple Choice",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/DesignSystems/testletComponent2.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "Tabs",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/DesignSystems/testletComponent3.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "Select-in-text",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/DesignSystems/testletComponent4.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "Drag and drop",
            }
          ]}
      columns={{ sm: 1, md: 1, lg: 2 }}
      maxWidth="7xl"
      showCaptions={true}
    />
    </Container>


    <Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
      <Paragraph>
      I’ve also made a portfolio-centric design system for this site! My focus was learning the react-based development side of things and creating a system that was flexible in enabling unique article layouts. You can learn more about this on my <Link href={`${process.env.PUBLIC_URL}/#/Folio`}>folio</Link> page.
      </Paragraph>
      <Heading color="#078575" alignment="center" level={2}>Component deep-dives</Heading> 
      <Paragraph>
      Lately my focus has been on solving some unique challenges surrounding responsive and accessibility support for components. 
      </Paragraph>
  </Container>



<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = '3xl'
  verticalAlignment="top"
  gap="sm"
  columnSplit="40/60"
  removeHorizontalPadding={true}
  marginBottom = 'lg'
  leftContent={
      <>
      <Heading style={{ marginBottom: 8 }} color="#078575" alignment="left" level={3}>Click-and-click</Heading>
      <Paragraph>
      Drag actions are formally <Link href={`https://www.w3.org/TR/WCAG22/#dragging-movements`}>no longer accessible</Link>! And a keyboard-based solution isn&apos;t enough - you need a single-pointer click-based approach. In our studies with students, we’ve learned that dragging isn&apos;t just a challenge for those with mobility differences - the majority of students encountered some challenges dragging on trackpads. I’ve been working with our accessibility team to implement a “click and click” approach, layering a simpler method of moving objects without removing familiar drag functionality. 
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
  items={[
    {
      type: 'iframe',
      src: 'https://savanaben.github.io/click-click-style-tester/',
      width: 800,
      caption: '',
      iframeOptions: {
        scrolling: true,
        height: '600px',
        sandbox: 'allow-scripts allow-same-origin',  // Important for GitHub Pages functionality
        allowFullScreen: true
      }
    }
  ]}
  columns={{ sm: 1, md: 1, lg: 1 }}
  maxWidth="4xl"
  showCaptions={true}
/>
  }
/>


<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = '3xl'
  verticalAlignment="top"
  gap="sm"
  columnSplit="40/60"
  removeHorizontalPadding={true}
  marginBottom = 'lg'
  leftContent={
      <>
      <Heading style={{ marginBottom: 8 }} color="#078575" alignment="left" level={3}>Screen reader support</Heading>
      <Paragraph>
      Sometimes we provide students with a helper button that takes them to certain parts of a passage and highlights referenced content. Problem is, this shift in context was never made screen reader accessible. 
      </Paragraph>
      <Paragraph>
      This project is still in-progress at the time of writing, but I’ve been working with our accessibility engineering team to determine the best way we can label, announce, and landmark these highlights so a screen reader student can also jump to a highlight and understand where it is. The prototype doesn’t look like much, but it enables us to quickly test screen reader support. 
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
  items={[
    {
      type: 'iframe',
      src: 'https://savanaben.github.io/Accessible-LBB/',
      width: 800,
      caption: '',
      iframeOptions: {
        scrolling: true,
        height: '600px',
        sandbox: 'allow-scripts allow-same-origin',  // Important for GitHub Pages functionality
        allowFullScreen: true
      }
    }
  ]}
  columns={{ sm: 1, md: 1, lg: 1 }}
  maxWidth="4xl"
  showCaptions={true}
/>
  }
/>




      <ProjectFooter />
    </AnimatedPage>
  );
};

export default Prototopia;