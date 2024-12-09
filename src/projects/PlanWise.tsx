import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ProjectFooter from '../components/ProjectFooter';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Container from '../components/Container';
import MediaContainer from '../components/MediaContainer';
import Link from '../components/Link';
import BulletedList from '../components/BulletedList';




const PlanWise: React.FC = () => {
  
  return (
<AnimatedPage>
<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
      <Heading color="#3C8148" alignment="center" level={1}>Bringing in-class activities to teachers</Heading>  
</Container>


<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = 'full'
  verticalAlignment="center"
  gap="sm"
  columnSplit="50/50"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  leftContent={
      <>
      <Heading color="#3C8148" alignment="left" level={2}>Brief</Heading>
      <Paragraph>
      Planwise is a chrome extension that integrates into google docs, providing <Link href={`https://en.wikipedia.org/wiki/Formative_assessment`}>formative</Link> activities and recommended math questions based on a teachers lesson plan. I acted as the designer and artist on a small cross-functional team, bringing team ideas to life through rapid iterative design, all fidelity mockups, and art creation.  
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
   columns={{ sm: 1, md: 1, lg: 1 }}
   maxWidth="md"
   showCaptions={false}
  items={[
    {
      type: 'gif',
      src: `${process.env.PUBLIC_URL}/img/PlanWise/PlanWiseTestnoloop.gif`,
      width: 713,
      height: 690,
      alt: 'Animation description',
      caption: 'Optional caption',
      gifOptions: {
        playOnce: true,
        showReplayButton: true,
        duration: 27000 
      }
    }
  ]}
/>
  }
/>

<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'sm'
  >
      <Heading color="#3C8148" alignment="center" level={2}>Attribution</Heading>  
      <Paragraph>
The PlanWise tool is <Link href={`https://www.ets.org/k12/teacher-solutions.html`}>owned by ETS</Link>. Thanks to all of my tight-nit colleagues and their critical roles in completing this project. More people went into this, but our core cross-functional team consisted of: 
    </Paragraph>
    <Paragraph className="italic">
      Laura Hullingner - Project Manager | Spencer Denauski - Frontend dev | Jason Litowitz - Backend dev | Ben Gross - Design | Jen Strouse - Marking and Research | Caroline Wylie - Content and Research  
    </Paragraph>
</Container>

<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="center" level={2}>The Teacher Experience</Heading>
      <Heading color="#3C8148" alignment="left" level={3}>Recommendations based on lesson plan text</Heading>
      <Paragraph>
      Our early research showed that teachers were exhausted from ed-tech churn, and they felt that our area of focus (formative assessment) was often challenging to implement. We responded to these findings by creating a tool that met teachers where they already were - in their lesson plan.      
      </Paragraph>
</Container>
    

<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = 'md'
  verticalAlignment="center"
  gap="sm"
  columnSplit="40/60"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  leftContent={
      <>
      <Paragraph>
      PlanWise detects phrases relevant to common core standards and six major categories of formative assessment. Categories include promoting foundational student skills like self and peer assessment, giving students formative feedback, and eliciting student understanding. This method brings formative to teachers at specific points in the lesson where they are already focusing on related topics.  
      </Paragraph>
      </>
  }
  rightContent={
<MediaContainer
      items={[
        {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/PlanWise/PeerFeedback.png`,
          width: 1282,
          height: 1361,
          alt: 'Space Junk design 1',
          caption: "Peer feedback activities.",
        },
        {
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/PlanWise/FormativeFeedback.png`,
          width: 1299,
          height: 1366,
          alt: 'Space Junk design 1',
          caption: "Formative feedback activities.",
        }
      ]}
      columns={{ sm: 1, md: 1, lg: 2 }}
      maxWidth="6xl"
      showCaptions={true}
      />
  }
/>

<Container
  layout="two-column"
  size="7xl"
  leftStackedSize="2xl"
  rightStackedSize = '2xl'
  verticalAlignment="top"
  gap="sm"
  columnSplit="40/60"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  leftContent={
      <>
      <Paragraph>
      The formative categories are each mapped to a variety of five to ten minute activities teachers can do with there students. A key aspect of this tool was translating formative strategies from pedagogy to practical, step-by-step classroom activities any teacher could add to their toolkit. 
      </Paragraph>

      <Paragraph>
        In studies with teachers, the Target Their Learning activity received a lot of positive feedback for it&apos;s more engaging way to poll students on their understanding. 
   </Paragraph>
      </>
  }
  rightContent={
    <>
<div className="bg-white rounded-lg  p-6 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">

      <Heading color="#804300" alignment="center" level={3}>Target their learning</Heading>
        <Container
          layout="two-column"
          size="7xl"
          leftStackedSize="2xl"
          rightStackedSize = 'sm'
          verticalAlignment="top"
          gap="sm"
          columnSplit="60/40"
          removeHorizontalPadding={true}
          marginBottom = 'sm'
          leftContent={
            <>
            <Heading color="#804300" alignment="left" level={5}>Step 1</Heading>
              <Paragraph className = 'text-[18px] leading-6'>
              Create a digital or physical representation of a target with 3 rings that say &quot;understand&quot;, &quot;getting there&quot;, and &quot;have some questions&quot;.
              </Paragraph>
              </>
          }
            rightContent={
            <MediaContainer
                items={[
                  {
                    type: 'image',
                    src: `${process.env.PUBLIC_URL}/img/PlanWise/fp-1-3-1.svg`,
                    width: 1282,
                    height: 1361,
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
          layout="two-column"
          size="7xl"
          leftStackedSize="2xl"
          rightStackedSize = 'sm'
          verticalAlignment="center"
          gap="sm"
          columnSplit="60/40"
          removeHorizontalPadding={true}
          marginBottom = 'sm'
          leftContent={
            <>
            <Heading color="#804300" alignment="left" level={5}>Step 2</Heading>
              <Paragraph className = 'text-[18px] leading-6'>
              Ask each student to self-assess their progress towards the learning goal and jot their thinking onto a digital or paper sticky note.
              </Paragraph>
              <BulletedList items={[
                  <>
                  <Paragraph className = 'text-[18px] leading-6'>If they think they understand, write one thing they learned.
                  </Paragraph>
                  </>,
                  <>
                  <Paragraph className = 'text-[18px] leading-6'>If they think they are getting there, write where they might need some help.
                  </Paragraph>
                  </>,
                  <>
                  <Paragraph className = 'text-[18px] leading-6'>If they have some questions, write their questions.
                  </Paragraph>
                  </>
                 ]} />
            </>
          }
            rightContent={
            <MediaContainer
                items={[
                  {
                    type: 'image',
                    src: `${process.env.PUBLIC_URL}/img/PlanWise/fp-1-3-2.svg`,
                    width: 1282,
                    height: 1361,
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
          layout="two-column"
          size="7xl"
          leftStackedSize="2xl"
          rightStackedSize = 'sm'
          verticalAlignment="top"
          gap="sm"
          columnSplit="60/40"
          removeHorizontalPadding={true}
          marginBottom = 'sm'
          leftContent={
            <>
            <Heading color="#804300" alignment="left" level={5}>Step 3</Heading>
              <Paragraph className = 'text-[18px] leading-6'>
              Have students place their sticky note on the target.
              </Paragraph>
              </>
          }
            rightContent={
            <MediaContainer
                items={[
                  {
                    type: 'image',
                    src: `${process.env.PUBLIC_URL}/img/PlanWise/fp-1-3-3.svg`,
                    width: 1282,
                    height: 1361,
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
          layout="two-column"
          size="7xl"
          leftStackedSize="2xl"
          rightStackedSize = 'sm'
          verticalAlignment="center"
          gap="sm"
          columnSplit="60/40"
          removeHorizontalPadding={true}
          marginBottom = 'sm'
          leftContent={
            <>
            <Heading color="#804300" alignment="left" level={5}>Step 4</Heading>
              <Paragraph className = 'text-[18px] leading-6'>
              Discuss student thinking. Engage the class and/or work in small groups to help any students move categories (e.g., from &quot;have some questions&quot; to &quot;getting there&quot;).
              </Paragraph>
              </>
          }
            rightContent={
            <MediaContainer
                items={[
                  {
                    type: 'image',
                    src: `${process.env.PUBLIC_URL}/img/PlanWise/fp-1-3-4.svg`,
                    width: 1282,
                    height: 1361,
                    alt: 'Space Junk design 1',
                  }
                ]}
                columns={{ sm: 1, md: 1, lg: 1 }}
                maxWidth="3xl"
                showCaptions={true}
                />
            }
        />


    </div>
    </>
  }
/>

<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="center" level={2}>My key responsibilities</Heading>
      <Heading color="#3C8148" alignment="left" level={3}>Rapid iterative UX/UI design</Heading>
      <Paragraph>
      I acted as the visual arm for the team creating real-time sketches as we ideated together, prototypes to test our assumptions, final UI specs, and art for content and marketing.     
      </Paragraph>





      <Heading color="#3C8148" alignment="left" level={3}>Activity images</Heading>
      <Paragraph>
      I created all activity images, bringing visuals to scores of of formative activities. We used a simple diagrammatic style that focused on supplementing the text and aiding in understanding.
      </Paragraph>




</Container>


      <ProjectFooter />
    </AnimatedPage>
  );
};

export default PlanWise;