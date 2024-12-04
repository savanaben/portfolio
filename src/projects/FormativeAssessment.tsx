import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ProjectFooter from '../components/ProjectFooter';
import Paragraph from '../components/Paragraph';
import TextContainer from '../components/TextContainer';
import Heading from '../components/Heading';
import Container from '../components/Container';
import MediaContainer from '../components/MediaContainer';
import Link from '../components/Link';
import IconsWithContent from '../components/IconsWithContent';
import BulletedList from '../components/BulletedList';
import NumberedList from '../components/NumberedList';
import QuoteBox from '../components/QuoteBox';


interface Image {
  thumbnailURL: string;
  largeURL: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
}

const TestletDesignSystem: React.FC = () => {
  
  const iconItems = [
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/folio/components.svg`,
      imageAlt: 'Components icon',
      title: '20 components so far',
      content: 'Component range from simple paragraphs and headings to more complex page templates and configuration-rich containers.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/folio/Tailwind_Logo.svg`,
      imageAlt: 'Usability icon',
      title: 'Supportive frameworks',
      content: 'React and JSX are at the core, Tailwind simplifies the styling, framer motion enables simpler animations, and photoswipe powers the image lightbox’s.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/folio/skeleton.svg`,
      imageAlt: 'Svelte icon',
      title: 'Page transitions, deferred loading, skeleton screens',
      content: 'Moving from one page to another is done via a nice fade effect. Skeleton screens provide a graceful loading experience for heavier pages on slow connections. And, on the homepage I have a deferred loading system implemented so larger background images can continue to load after the main page to reduce up-front wait time.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/folio/Fun.svg`,
      imageAlt: 'Svelte icon',
      title: 'Fun stuff',
      content: 'Did you know you can click on my picture on the home page? I wanted this site to include small bursts of the unexpected. My project tiles include a hover-over 3D effect, headers and background colors can change to align to a pages’ theme, and some pages include custom effects to further immerse the reader. ',
    },
  ];



  
  return (
<AnimatedPage>
<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
      <Heading color="#0078a7" alignment="center" level={1}>Modernizing formative assessments</Heading>  
</Container>


<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = 'full'
  verticalAlignment="center"
  gap="sm"
  columnSplit="40/60"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  leftContent={
      <>
      <Heading color="#0078a7" alignment="left" level={2}>Brief</Heading>
      <Paragraph>
      Our charge was to create a comprehensive suite of <Link href={`https://en.wikipedia.org/wiki/Formative_assessment`}>formative assessments</Link> for 8th grade. Together with a team of designers, artists, content specialists, and developers, we created 68 30-minute tasks aligned to common core state standards for Math and English Language Arts. These tasks particularly focused on engagement through scenario - students are immersed in problems and topics that give meaning to the knowledge and skills assessed.    
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
      items={[
        {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/testletTiles.png`,
          width: 1850,
          height: 1093,
          alt: 'Space Junk design 1',
        }
      ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="3xl"
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
      <Heading color="#0078a7" alignment="center" level={2}>Attribution</Heading>  
      <Paragraph>
The tasks discussed and shown on this page are <Link href={`https://www.ets.org/k12/classroom-solutions.html`}>owned by ETS</Link>. I can&apos;t list everyone who worked on this project, but know that a really special team of designers, content specialists, item authors, developers, artists, marketers, and more went into this product suite. Throughout this page I&apos;ll attribute those who worked specifically on certain tasks or art. 
    </Paragraph>
</Container>

<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
      <Heading color="#0078a7" alignment="center" level={2}>Key responsibilities as the UX lead</Heading>
      <Heading color="#0078a7" alignment="left" level={3}>Component designs and management</Heading>
      <Paragraph>
      I designed and handed off specifications for all initially required components. You can learn more about this projects design system on the dedicated design systems page.        
      </Paragraph>
      <Heading color="#0078a7" alignment="left" level={3}>Advocating for the student experience</Heading>
      <Paragraph>
      An inherent challenge with an assessment is how to keep it interesting while still asking all the questions you need to ensure validity. We established a number of methods to achieve this:</Paragraph>
      <BulletedList items={[
            <>
            <Paragraph><strong>Intro and rest screens</strong> - A fundamental task concept we employed was ensuring students got a break every once and a while. If the student just answered four questions back-to-back, we&apos;d provide a non-question “rest” screen. These screens often brought back in the characters and either consolidated information or transitioned to the next part.</Paragraph>
            <MediaContainer
              items={[
                {
                  type: 'image',
                  src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/biometrics1.png`,
                  width: 1816,
                  height: 996,
                  alt: 'Space Junk design 1',
                  caption: "The task begins with two intro screens bringing in the context. | Character and background art by Kyle Czepiel. Task content by Ellen Gluck.",
                },
                {
                  type: 'image',
                  src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/biometrics2.png`,
                  width: 1854,
                  height: 1043,
                  alt: 'Space Junk design 1',
                  caption: "After the intro and a video, the student answers three questions.",
                },
                {
                  type: 'image',
                  src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/biometrics3.png`,
                  width: 1768,
                  height: 944,
                  alt: 'Space Junk design 1',
                  caption: "A rest screen follows the questions and transitions the student to an article.",
                },
                // {
                //   type: 'image',
                //   src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/biometrics4.png`,
                //   width: 1856,
                //   height: 1043,
                //   alt: 'Space Junk design 1',
                //   caption: "The next three questions focus on the article.",
                // },
              ]}
              columns={{ sm: 1, md: 1, lg: 2 }}
              maxWidth="3xl"
              showCaptions={true}
              className="mt-3"
              />
            </>,
            <>
              <Paragraph><strong>Media</strong> - As the UX lead I advocated for a variety of art styles, coordinated asset libraries, and reviewed all media for consistency and quality. Animations and images were utilized not just for question-centric purposes, but to also fill out the world and scenario. We also employed diagrammatic and visual representations of content so text wasn&apos;t the only way for the student to understand complex spatial concepts.</Paragraph>
             <MediaContainer
              items={[
                {
                  type: 'image',
                  src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/woodenbridge1.png`,
                  width: 1850,
                  height: 1093,
                  alt: 'Space Junk design 1',
                  caption: "In the Wooden Bridges task, diagrams focus the student on certain parts.",
                },
                {
                  type: 'image',
                  src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/woodenbridge2.png`,
                  width: 1850,
                  height: 1093,
                  alt: 'Space Junk design 1',
                  caption: "The student must carefully consider construction to determine if their bridge meets the competitions requirements.",
                },
              ]}
              columns={{ sm: 1, md: 1, lg: 2 }}
              maxWidth="3xl"
              showCaptions={true}
              className="mt-3"
              />
              <MediaContainer
              items={[
                {
                  type: 'video',
                  videoType: 'youtube' as const,
                  src: "https://www.youtube.com/embed/lzoIn6-4KQ4?si=Ek63NvwI2RIEslgU",
                  width: 1080,
                  height: 930,
                  alt: 'Space Junk design 1',
                  caption: "The Tiny Homes task includes isometric animations of how parts of the house are constructed.",
                },
              ]}
              columns={{ sm: 1, md: 1, lg: 1 }}
              maxWidth="md"
              showCaptions={true}
              className="mt-3"
              />
            </>,
            <>
            <Paragraph> <strong>Don&apos;t forget the copy!</strong> - One aspect often overlooked in assessment UX is the text on the page. There can be an over-focus on technicality and accuracy, which while rightfully important when asking questions, often leads to stuffy and fake-sounding dialog. I pushed the UX team to become more deeply involved in the copy, proposing ways to simplify and informalize wherever possible.</Paragraph>
            <Paragraph>In study&apos;s with student&apos;s, we received positive feedback to validate our efforts were working!</Paragraph>
            <QuoteBox color="blue" attribution="8th grade student">
            <Paragraph>
            I think when it&apos;s written like someone is speaking, it makes it easier to understand it, rather than it written like it&apos;s a test… </Paragraph>
            </QuoteBox>
            <QuoteBox color="blue" attribution="8th grade student">
            <Paragraph>
            I think they [the characters] were very relatable to what you would see in real life. Like the teacher would ask the question and the students would answer it, but then I remember at one point one person didn&apos;t agree with the other so they had to figure out why and then try to come up with a reasonable compromise...</Paragraph>
            </QuoteBox>
       </>
       ]} />
      <Heading color="#0078a7" alignment="left" level={3}>Testing Assumptions and Incorporating Findings</Heading>
      <Paragraph>
      This project involved numerous small and mid-scale studies. I supported the studies with script-writing, analyzed results, and lead the necessary usability-related follow-ups. Following are two quick examples of studies we conducted and what we learned.</Paragraph>
      <Heading color="#0078a7" alignment="left" level={4}>Teacher Feedback</Heading>
      <Paragraph>Nine teachers administered one to two ELA tasks (referred to as “Testlets”) to their students. Overall teachers were impressed, commenting that the testlets provided actionable data, aligned to their curriculum, and were easy to implement. The following teacher quotes were most relevant to my areas of responsibility (student experience, engagement, and task usability).</Paragraph>
      <QuoteBox color="blue" attribution="Teacher 1">
       <Paragraph>
       ...One key advantage is the novel and interactive way in which the material is presented and the standards are assessed...</Paragraph>
       </QuoteBox>
       <QuoteBox color="blue" attribution="Teacher 2">
       <Paragraph>
       The best thing about the Testlet was the engagement that I saw in students working through the activities. This allowed them to try and learn the information. One student said “This program should be used in classes since it better helps to understand complicated things by first understanding easier things.”</Paragraph>
       </QuoteBox>
       <QuoteBox color="blue" attribution="Teacher 3">
       <Paragraph>
       The Testlets were accessible for most of the students without the need for significant scaffolding and/or differentiation. The supports, such as the graphic organizer and the videos were identified by the students as being very helpful.</Paragraph>
       </QuoteBox>

      <Heading color="#0078a7" alignment="left" level={4}>Look Back Button Improvements</Heading>
      <Paragraph>Sometimes we provide a reference, or “look back” button that students can use to jump to a certain part of a passage.</Paragraph>
      <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/oldLBB.png`,
              width: 1080,
              height: 930,
              alt: 'Space Junk design 1',
              caption: "",
            },
          ]}
          columns={{ sm: 1, md: 1, lg: 1 }}
          maxWidth="md"
          showCaptions={false}
          className="mt-3"
        />
      <Paragraph>We found in a study that this button didn&apos;t work so great. <strong>11 of 14</strong> students did not realize it was interactive!</Paragraph>
      <Paragraph>We changed our approach in two key ways:</Paragraph>
      <NumberedList
         items={[
          <>
          <Paragraph>We moved the button from an inline position to standalone, added stronger call-to-action signaling (“Go to...”), and went with more interactive-looking blue borders. </Paragraph>
          <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/LBB new.png`,
              width: 1080,
              height: 930,
              alt: 'Space Junk design 1',
              caption: "",
            },
          ]}
          columns={{ sm: 1, md: 1, lg: 1 }}
          maxWidth="xs"
          showCaptions={true}
          className="mt-3"
        />
          </>,
          <>
          <Paragraph>The ELA team shifted approach and leaned more on quoteboxes so the student did not have to navigate back to the passage. </Paragraph>
          <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/testletQuotebox.png`,
              width: 1080,
              height: 930,
              alt: 'Space Junk design 1',
              caption: "",
            },
          ]}
          columns={{ sm: 1, md: 1, lg: 1 }}
          maxWidth="lg"
          showCaptions={true}
          className="mt-3"
        /> 
          </>
           ]}
        />
      <Heading color="#0078a7" alignment="left" level={3}>Outcomes</Heading>
      <Paragraph>The testlet project was completed on schedule, significantly expanding ETS&apos;s product offering in the K-12 and formative assessment space. The design system and authoring platform have since been utilized for other projects at ETS, providing a flexible platform for any interactive assessment.</Paragraph>
    </Container>
    

<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
     <Heading color="#0078a7" alignment="left" level={3}>Task Samples</Heading>
      <Heading color="#0078a7" alignment="left" level={4}>Going to Ceres</Heading>
      <Paragraph>
        Students join a crew traveling to the asteroid Ceres. They must ration the food supply for the long space voyage and survey nearby asteroids for mining viability. 
      </Paragraph>
      <Paragraph className="italic">
       Background art by Peter Yeager. Character art by Kyle Czepiel. Task UX by Ben Gross. Content by Shona Ruiz Diaz. Task authoring by Alex Poulos.  
      </Paragraph>
</Container>

<Container
  layout="single"
  size="5xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/ceres1.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/ceres2.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "Many tasks include an intro with clear goals that are checked off as you progress.",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/ceres3.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/ceres4.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "This task included an outro animation of autonomous vehicles collecting ore from an asteroid.",
            },
          ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="6xl"
      showCaptions={true}
    />
    </Container>


    <Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
      <Heading color="#0078a7" alignment="left" level={4}>Not Just Jazz</Heading>
      <Paragraph>
        Students take on an entrepreneurial venture setting up a scooter tour to different music venues in New Orleans. 
      </Paragraph>
      <Paragraph className="italic">
       Intro background art purchased. Character art by Kyle Czepiel.  Task UX and map art by Ben Gross. Content by Shona Ruiz Diaz. Task authoring by Alex Poulos.  
      </Paragraph>
</Container>

<Container
  layout="single"
  size="5xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <MediaContainer
          items={[
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/jazz1.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/jazz2.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/jazz3.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "Throughout the task a map is updated to visually convey the routes discussed.",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/FormativeAssessment/jazz4.jpg`,
              width: 1816,
              height: 996,
              alt: 'Space Junk design 1',
              caption: "In this task, the rest screens let the student sample three different music genres from the New Orleans region.",
            },
          ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="6xl"
      showCaptions={true}
    />
    </Container>

      <ProjectFooter />
    </AnimatedPage>
  );
};

export default TestletDesignSystem;