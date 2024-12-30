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
    <Heading color="#494f67" alignment="center" level={1}>Prototopia</Heading>  
    <Paragraph>
      This page shows some of the prototypes I&apos;ve made over the years.  
      </Paragraph>
      <Paragraph>
      I&apos;ve moderated on the need for prototypes lately, and only suggest them under certain circumstances (testing your riskiest assumptions, demoing something particularly complex to a client). Otherwise, it may be best (and lead to less dead-end code) to prototype on your existing platform.
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
      <Heading style={{ marginBottom: 8 }} color="#494f67" alignment="left" level={3}>Click-and-click</Heading>
      <Heading style={{ marginTop: 0 }} className="italic" color="#494f67" alignment="left" level={5}>HTML/CSS/JS</Heading>
      <Paragraph>
        Drag and drop alone is <Link href={`https://www.w3.org/TR/WCAG22/#dragging-movements`}>officially</Link> not accessible anymore. You need a &quot;single pointer&quot; alternative to all drag actions (not just keyboard support!). 
      </Paragraph>
      <Paragraph>
        This project revamped the NAEP assessments match/drag-and-drop question type, bringing click-and-click support. You simply click on a drag object, then click where you want it to go. Ironically my prototype does not actually support click-click, but it was instrumental in testing various state, style, and keyboard navigation updates and easing spec handoff to developers. 
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
       <Heading style={{ marginBottom: 8 }} color="#494f67" alignment="left" level={3}>Learning and assessment platform</Heading>
       <Heading style={{ marginTop: 0 }} className="italic" color="#494f67" alignment="left" level={5}>Figma</Heading>
      
       <Paragraph>
        This project envisioned a mobile app that could deliver assessment and learning courses. It incorporates various gamification techniques (completion, streaks, rewards, pathways) to support learners in completing courses. While I think &quot;gamification&quot; has become a bad word now-adays, we were genuine in our reward system and planned to experiment with providing shorts-style learning content to give meaning and engagement to the material assessed.
      </Paragraph>
      <Paragraph>
        Shout out to the Duolingo team for publishing some great research (<Link href={`https://blog.duolingo.com/new-duolingo-home-screen-design/`}>1</Link>, <Link href={`https://blog.duolingo.com/how-duolingo-streak-builds-habit/`}>2</Link>, <Link href={`https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth`}>3</Link>) on various gamification and other engagement methods they tested.
      </Paragraph>
      <Paragraph>
        I worked with Kyle Czepiel on this project, splitting design and Figma prototype responsibilities.
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
  items={[
    {
      type: 'iframe',
      src: 'https://embed.figma.com/proto/2YX3FtrSt8VMYd1nP5fIIn/Workfit?page-id=229%3A821&node-id=701-1631&node-type=canvas&viewport=325%2C897%2C0.04&scaling=contain&content-scaling=fixed&starting-point-node-id=701%3A1631&show-proto-sidebar=1&hide-ui=1&embed-host=share',
      width: 800,
      caption: '',
      iframeOptions: {
        scrolling: true,
        height: '800px',
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
      <Heading color="#494f67" alignment="left" level={3}>Converting a large scale assessment to responsive</Heading>
      <Heading color="#494f67" alignment="left" level={5}>svelte</Heading>
      <Paragraph>
        The NAEP assessment leads the way in creating engaging assessments with genuine scenarios, but is behind in moving to responsive design. This massive project involves converting scores of uniquely laid-out screens from a fixed aspect ratio to responsive.
      </Paragraph>
      <Paragraph>
        As the content UX lead, I led this initiative by identifying and prioritizing all the global and one-off changes we&apos;d need to make. This prototype acted as my sandbox where I solutioned some of the more challenging layout shifts.  
      </Paragraph>
      <Paragraph>
        This prototype was integral to sharing responsive methods to internal teams and our government client.   
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
  items={[
    {
      type: 'iframe',
      src: 'https://savanaben.github.io/responsive-sbts/',
      width: 800,
      caption: '',
      iframeOptions: {
        scrolling: true,
        height: '750px',
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
      <Heading color="#494f67" alignment="left" level={3}>Motivation App</Heading>
      <Heading color="#494f67" alignment="left" level={5}>Axure</Heading>
      <Paragraph>
        This student project envisioned an app that helped people create and stick to their goals. It taps into intrinsic and extrinsic motivation research, utilizing a variety of techniques:
      </Paragraph>
      <BulletedList items={[
            <>encouragement and positive reinforcement</>,
            <>breaking down large goals into achievable micro-tasks and scheduling those tasks</>,
            <>incorporating extrinsic motivation in the peer support feature. Tapping into scrum methodology, users would be paired up and report out on their progress via weekly meetings. The app would guide these meetings with speaking prompts and encourage constructive criticism.</>,  
          ]} />
      </>
  }
  rightContent={
<MediaContainer
  items={[
    {
      type: 'iframe',
      src: `${process.env.PUBLIC_URL}/img/Prototopia/MotivationAppl/index.html?id=629d3o&p=page_1&sc=2&c=1`,
      width: 800,
      caption: '',
      iframeOptions: {
        scrolling: true,
        height: '650px',
        sandbox: 'allow-scripts allow-same-origin', 
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