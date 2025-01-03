import React from 'react';
import ExternalProjectTemplate from '../components/ExternalProjectTemplate';
import TextContainer from '../components/TextContainer';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import BulletedList from '../components/BulletedList';
import IconsWithContent from '../components/IconsWithContent';
import MediaContainer from '../components/MediaContainer';

const DrawProbability: React.FC = () => {
  const iconItems = [
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/DrawProbability/components.svg`,
      imageAlt: 'Components icon',
      title: '13 Components',
      content: 'The project includes 13 reusable components like input cards, accordions, popovers, tabs, and more.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/DrawProbability/usability.svg`,
      imageAlt: 'Usability icon',
      title: 'A focus on usability',
      content: 'Supportive help buttons proximal to tools and features, step-by-step instructions for imputing data, simulation in-progress screens with helpful info, and FAQs that provide methodology all strive to make this dashboard easy to use.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/DrawProbability/svelte.svg`,
      imageAlt: 'Svelte icon',
      title: 'Svelte reactivity, promises, global stores, and more',
      content: 'Svelte reactivity and global stores enable instantaneous movement of data through user inputs, logic calculations, and visual outputs.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/DrawProbability/responsive.svg`,
      imageAlt: 'Responsive icon',
      title: 'Fully responsive',
      content: 'The dashboard gracefully works down to the phone layout, while expanding to best utilize larger screens.',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/img/DrawProbability/analytics.svg`,
      imageAlt: 'Analytics icon',
      title: 'Google Analytics',
      content: 'Google Analytics tracks general usage (page views, demographics) as well as key interactions (such as running a simulation) to enable deeper dives on what parts of the tool are being used.',
    },
  ];


  return (
    <ExternalProjectTemplate
      bannerImage={`${process.env.PUBLIC_URL}/img/DrawProbability/probabilityCover.png`}
      bannerImageStyle={{ objectPosition: 'top' }}
      title="Using simulations to build better decks"
      titleLevel={1}
      color="#612e00"
      titleVisualLevel="h2"
      content={
        <>
       <TextContainer>
          <Paragraph>
            Magic the Gathering is a tabletop card game all about probabilities. In your starting hand, you&apos;re often hoping for a specific combination of cards that accelerate your gameplan and set you up for success.
          </Paragraph>
          <Paragraph>
            I built this tool as a challenge to expand my development skills beyond simple front-end components.
          </Paragraph>
          <Heading visualLevel='h3' color="#612e00" level={2}>Feature 1 - Hypergeometric Calculator</Heading>
        </TextContainer>
        <TextContainer size="3xl">
          <Paragraph>
            A hypergeometric calculator can determine the exact probability of drawing certain cards. I layered a rich set of magic-specific features onto the base mathematics:
          </Paragraph>
          <BulletedList items={[
            <><strong>Multi-group support</strong> - If you have five cards in one group and four cards in another group, the tool can calculate the chance of getting any number of cards from both groups.</>,
            <><strong>Mulligan support</strong> - in Magic, you can redraw your opening hand. The tool supports how this redraw changes probabilities.</>,
            <><strong>Variable draws per turn</strong> - Normally you draw one card per turn in magic. But some decks draw more cards early. The tool lets people account for this.</>
          ]} />
          </TextContainer>
          <MediaContainer 
            items={[{
            type: 'image' as const,
            src: `${process.env.PUBLIC_URL}/img/DrawProbability/hypergeometricScreenshot.png`,
            alt: "Animated gif of three color themes applied to a math graphing tool. The default theme is white, the dark theme has a black background and dark colors, while the middle theme has a soft creme background.",
             caption: "Users can change various configurations and instantly see output probabilities.  ",
            width: 2259,
            height: 1004,
            }]}
            maxWidth="5xl"
             columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={true}
           />
          
          <TextContainer size="3xl">
          <Heading visualLevel='h3' color="#612e00" level={2}>Feature 2 - Monte Carlo Simulator</Heading>
          <Paragraph>
            A Monte Carlo simulation is a brute-force way to calculate probabilities by running thousands of trials and averaging the result.
          </Paragraph>
          <Paragraph>
            Achieving this required complex data management and branching conditional logic. After someone enters their input cards, I run a two-step process:
          </Paragraph>
          <BulletedList items={[
            <><strong>Data cleaning and combination crunching</strong> - First, the simulation condenses the input data and pre-calculates all possible combinations of cards that will meet the users requirements.</>,
            <><strong>Gameplay simulation</strong> - Then, the simulation constructs your deck and &quot;plays&quot; mock games. This involves deep webs of conditional logic that follow the rules of magic and make best-case assumptions on what a person would do.</>
          ]} />
          <Paragraph>
            The ultimate output from the monte carlo simulation is the probability that you&apos;ll get the resources (or colors of mana) you need on certain turns. This is a foundational consideration in magic, and this tool provides deck-specific probability data to help people make informed decisions on what cards (and how many) to add.
          </Paragraph>
          
          <Heading visualLevel='h4' color="#612e00" level={3}>Visual Sample of Running a Simulation</Heading>
        
            <Paragraph>
              First, someone inputs their lands and what color of mana those lands make. Mana is the fundamental resource you use in Magic to play cards. 
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[{
              type: 'image' as const,
              src: `${process.env.PUBLIC_URL}/img/DrawProbability/LandsInput.png`,
              alt: "Interface showing land card input groups with mana symbols and card counts",
              caption: "In this example there are 38 total lands ",
              width: 1400,
              height: 964,
            }]}
            maxWidth="xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={false}
          />

          <TextContainer size="3xl">
            <Paragraph>
              Next, you can optionally add ramp cards, which also provide mana. These options limit simulation complexity while providing the most common attributes ramp cards have. 
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[{
              type: 'image' as const,
              src: `${process.env.PUBLIC_URL}/img/DrawProbability/RampInput.png`,
              alt: "Interface for inputting ramp spells and mana rocks",
              caption: "Ramp cards in Magic can be highly complex and variable. I narrowed the availible parameters to the most common and ",
              width: 876,
              height: 1088,
            }]}
            maxWidth="sm"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={false}
          />

          <TextContainer size="3xl">
            <Paragraph>
              Then, you input your requirements. In this example, I want four different kinds of mana (Plains, colorless, Swamp, Island).
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[{
              type: 'image' as const,
              src: `${process.env.PUBLIC_URL}/img/DrawProbability/RequirementsInput.png`,
              alt: "Interface showing mana requirements input for different turns",
              caption: "",
              width: 1276,
              height: 700,
            }]}
            maxWidth="xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={false}
          />

          <TextContainer size="3xl">
            <Paragraph>
              The simulation runs thousands of games, tracking the probability of achieving your requirements. Given this is an intensive calculation, feedback is provided on what&apos;s going on and how much longer it will take.
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[{
              type: 'image' as const,
              src: `${process.env.PUBLIC_URL}/img/DrawProbability/SimulationRunning.png`,
              alt: "Progress screen showing simulation running with status updates",
              caption: "",
              width: 1212,
              height: 918,
            }]}
            maxWidth="xl"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={false}
          />

          <TextContainer size="3xl">
            <Paragraph>
              The simulation completes and outputs the probability of getting the mana you required for each turn of the game. For this use-case, I achieved an 88% chance of getting the four mana I need by turn four. Those are good odds, and show my lands and ramp cards will work well!
            </Paragraph>
          </TextContainer>
          <MediaContainer 
            items={[{
              type: 'image' as const,
              src: `${process.env.PUBLIC_URL}/img/DrawProbability/SimulationOutput.png`,              alt: "Results screen showing probability charts and statistics",
              caption: "",
              width: 751,
              height: 1566,
            }]}
            maxWidth="sm"
            columns={{ sm: 1, md: 1, lg: 1 }}
            showCaptions={false}
          />


          <IconsWithContent items={iconItems} />
          <TextContainer size="3xl">
          <Heading visualLevel='h3' color="#612e00" level={2}>Results</Heading>
          <Paragraph>
              This tool was released to the magic community via a number of magic-themed sub-reddits and discord groups. At the time of writing, over 2,400 people have used the tool.
          </Paragraph>
          </TextContainer>
      </>
      }
      projectLink="https://savanaben.github.io/Draw-Probability-Calculator/"
    />
  );
};

export default DrawProbability;