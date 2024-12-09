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
      content: 'Moving from one page to another is done via a nice fade effect. Skeleton screens provide a graceful loading experience for heavier pages on slow connections. On the homepage I have a deferred loading system implemented so larger background images can continue to load after the main page to reduce up-front wait time.',
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
  marginBottom = 'lg'
  >
      <Heading color="#94007c" level={2}>Modernizing my folio and learning along the way</Heading>
      <Paragraph>
      My old portfolio was decent enough at first glance. But beneath the surface laid a foundation of chaos - no supportive frameworks, no logic in the CSS beyond a half-hearted attempt at utility classes, and NO COMPONENTS (yes, I copy-pasted the toolbar code to every page).  
      </Paragraph>
      <Paragraph>
      This was unsustainable, and with my growing interest in frontend dev I wanted a site to be proud of. 
      </Paragraph>
      <Paragraph>
      Though I love Svelte and that framework served me well for a <Link href={`${process.env.PUBLIC_URL}/#/DrawProbability`}>more complex project</Link>, I chose React given it&apos;s popularity and the opportunity to try something different. I also wanted to be more in-tune with the developers I work with on a day-to-day basis, who use React for our design system.  
      </Paragraph>
</Container>


<Container
  layout="two-column"
  size="5xl"
  leftStackedSize="2xl"
  rightStackedSize = 'full'
  verticalAlignment="top"
  gap="sm"
  columnSplit="60/40"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  leftContent={
      <>
      <Heading color="#94007c" level={3}>Component structure</Heading>
      <Paragraph>
      Starting out, I wanted to avoid using an all-in-one component library, as that’d homogenize my site and lessen the opportunity to learn some lower-level design system principles. I ended up using tailwind, however, after learning how much easier that framework makes style management.
      </Paragraph>
      <Paragraph>
      Establishing components and their structure was an organic process that mainly followed one rule - if something was used more than once, it should be a component.  This led to a nested system that aligns to atomic design methodology. I allow all project pages to be flexible in layout and color to mix-up what the reader experiences, while implementing a template for the simpler project pages that link out to external sites.  
      </Paragraph>
      </>
  }
  rightContent={
    <MediaContainer
      items={[
        {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/folio/siteStructure.svg`,
          width: 364,
          height: 690,
          alt: 'Space Junk design 1',
        }
      ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="xs"
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
      <Paragraph>
      Most components are self-explanatory, though the container component was particularly challenging. I needed to support a variety of layouts, content types (text, media), and margin sizes across the mobile and desktop views. 
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
          src: `${process.env.PUBLIC_URL}/img/folio/containerComponent.png`,
          width: 2222,
          height: 992,
          alt: 'Space Junk design 1',
        }
      ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="6xl"
      showCaptions={true}
    />
    </Container>

    <IconsWithContent items={iconItems} />


          <ProjectFooter />
    </AnimatedPage>
  );
};

export default TestletDesignSystem;