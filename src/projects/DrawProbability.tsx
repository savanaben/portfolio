import React from 'react';
import ExternalProjectTemplate from '../components/ExternalProjectTemplate';
import TextContainer from '../components/TextContainer';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import BulletedList from '../components/BulletedList';
import IconsWithContent from '../components/IconsWithContent';


const DrawProbability: React.FC = () => {
  const iconItems = [
    {
      imageUrl: '/img/DrawProbability/components.svg',
      imageAlt: 'Components icon',
      title: '13 Components',
      content: 'The project includes 13 reusable components like input cards, accordions, popovers, tabs, and more.',
    },
    {
      imageUrl: '/img/DrawProbability/usability.svg',
      imageAlt: 'Usability icon',
      title: 'A focus on usability',
      content: 'Supportive help buttons proximal to tools and features, step-by-step instructions for imputing data, and FAQs that provide logic and background all strive to make this dashboard easy to use.',
    },
    {
      imageUrl: '/img/DrawProbability/svelte.svg',
      imageAlt: 'Svelte icon',
      title: 'Svelte reactivity, promises, global stores, and more',
      content: 'Svelte reactivity and global stores enable instantaneous movement of data through user inputs, logic calculations, and visual outputs.',
    },
    {
      imageUrl: '/img/DrawProbability/responsive.svg',
      imageAlt: 'Responsive icon',
      title: 'Fully responsive',
      content: 'The dashboard gracefully works down to the phone layout, while expanding to best utilize larger screens.',
    },
    {
      imageUrl: '/img/DrawProbability/analytics.svg',
      imageAlt: 'Analytics icon',
      title: 'Google Analytics',
      content: 'Google Analytics tracks general usage (page views, demographics) as well as key interactions (such as running a simulation) to enable deeper dives on what parts of the tool are being used.',
    },
  ];


  return (
    <ExternalProjectTemplate
      bannerImage="/img/DrawProbability/probabilityCover.png"
      bannerImageStyle={{ objectPosition: 'top' }}
      title="Using simulations to build better decks"
      titleLevel={1}
      titleVisualLevel="h2"
      content={
        <TextContainer size="3xl">
          <Paragraph>
            Magic the Gathering is a tabletop card game all about probabilities. In your starting hand, you&apos;re often hoping for a specific combination of cards that accelerate your gameplan and set you up for success.
          </Paragraph>
          <Paragraph>
            I built this tool as a challenge to expand my development skills beyond simple front-end components.
          </Paragraph>
          
          <Heading visualLevel='h3' level={2}>Hypergeometric Calculator</Heading>
          <Paragraph>
            A hypergeometric calculator can determine the exact probability of drawing certain cards. I layered a rich set of magic-specific features onto the base mathematics:
          </Paragraph>
          <BulletedList items={[
            <><strong>Multi-group support</strong> - If you have 8 cards in one group and 10 cards in another group, the tool can calculate the chance of getting any number of cards from both groups.</>,
            <><strong>Mulligan support</strong> - in Magic, you can redraw your opening hand. The tool supports how this redraw changes probabilities.</>,
            <><strong>Variable draws per turn</strong> - Normally you draw 1 card per turn in magic. But some decks draw more cards early. The tool lets people account for this.</>
          ]} />
          
          <Heading visualLevel='h3' level={2}>Monte Carlo Simulation</Heading>
          <Paragraph>
            A Monte Carlo simulation is a brute-force way to calculate probabilities by running thousands of trials and averaging the result.
          </Paragraph>
          <Paragraph>
            Achieving this required complex data management and branching conditional logic. After someone enters their input cards, I run a two-step process:
          </Paragraph>
          <BulletedList items={[
            <><strong>Data cleaning and combination crunching</strong> - first the simulation condenses the input data and pre-calculates all possible combinations of cards that will meet the users requirements.</>,
            <><strong>Gameplay simulation</strong> - Then, the simulation constructs your deck and &quot;plays&quot; mock games. This involves deep webs of conditional logic that follow the rules of magic and make best-case assumptions on what a person would do.</>
          ]} />
          <Paragraph>
            The ultimate output from the monte carlo simulation is the probability that you&apos;ll get the resources (or colors of mana) you need on certain turns. This is a foundational consideration in magic, and this tool provides deck-specific probability data to help people make informed decisions on what cards (and how many) to add.
          </Paragraph>
          <IconsWithContent items={iconItems} />
          <Heading visualLevel='h3' level={2}>Results</Heading>
        </TextContainer>
      }
      projectLink="https://savanaben.github.io/Draw-Probability-Calculator/"
    />
  );
};

export default DrawProbability;