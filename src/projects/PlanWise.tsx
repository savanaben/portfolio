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
      Planwise is a chrome extension that integrates into google docs, providing <Link href={`https://en.wikipedia.org/wiki/Formative_assessment`}>formative</Link> activities and recommended math questions based on a teachers lesson plan. As the designer and artist I brought team ideas to life through rapid iterative design, all fidelity mockups, and art creation.  
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
      coverImage: `${process.env.PUBLIC_URL}/img/PlanWise/PlanWiseTestnoloop_cover.png`,  // Add cover image
      width: 713,
      height: 690,
      alt: 'Animation description',
      caption: 'Optional caption',
      gifOptions: {
        playOnce: true,
        autoPlay: false, 
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
The PlanWise tool is <Link href={`https://www.ets.org/k12/teacher-solutions.html`}>owned by ETS</Link>. Thanks to all of my tight-nit colleagues and their critical roles in completing this project. More people went into this, but our core team consisted of: 
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
      <Paragraph>
      PlanWise detects phrases relevant to common core standards and six major categories of formative assessment. Categories include promoting foundational student skills like self and peer assessment, giving students formative feedback, and eliciting student understanding. 
      </Paragraph>
      <Paragraph>
       When a phrase is detected, teachers can select it to browse related content, find an activity they like, and copy it to their lesson plan.
      </Paragraph>
</Container>
    

 <Container
  layout="single"
  size="6xl"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  >
<MediaContainer
      items={[
        {
          type: 'video',
          videoType: 'youtube' as const,
          src: "https://www.youtube.com/embed/Y6CnrXrDddc?si=brMPafbqsjakMvv-",
          width: 1076,
          height: 575,
          alt: 'Space Junk design 1',
          caption: "",
        }
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
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="center" level={2}>My key responsibilities</Heading>
      <Heading color="#3C8148" alignment="left" level={3}>Rapid iterative UX/UI design</Heading>
      <Paragraph>
      I acted as the visual arm for the team creating real-time sketches as we ideated together, prototypes to test our assumptions, final UI specs, and art for content and marketing. PlanWise went through three significant versions as we learned what teachers wanted via regular small-scale studies. 
      </Paragraph>
      <Heading color="#3C8148" alignment="left" level={4}>V1 - Standalone app (mockups)</Heading>
      <Paragraph>
      Our original idea started with a standalone app, but we quickly learned teachers did not want yet another app to manage, and building an all-in-one learning management system would have blown our scope.    
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
              src: `${process.env.PUBLIC_URL}/img/PlanWise/app_version1.png`,
              width: 2345,
              height: 1376,
              alt: 'Space Junk design 1',
              caption: "Our original designs included a misconception question library teachers could browse and add to their schedule.",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/app_version2.png`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "Teachers could share questions with the class. The app would have supported a teacher and student view.",
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
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="left" level={4}>V2 - Google docs add-on (built)</Heading>
      <Paragraph>
      Our second major test was integrating formative activities and misconception questions into google docs via an add-on. A followup study showed teachers liked this model, as we integrated into an app ecosystem they were familiar with.
      </Paragraph>
      <Paragraph>
      Issue was, add-ons are very limited in their functionality and the architecture would not have been extendable to other web-based apps.   
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
              src: `${process.env.PUBLIC_URL}/img/PlanWise/add_on.png`,
              width: 2519,
              height: 1751,
              alt: 'Space Junk design 1',
              caption: "Mockups of add-on sidebar.",
            },
            {
              type: 'video',
              videoType: 'youtube' as const,
              src: "https://www.youtube.com/embed/MuOb8vtBfcg?si=5TfxEiEmPLgVs3BC",
              width: 1080,
              height: 500,
              alt: 'Space Junk design 1',
              caption: "The add-on approach was built and tested with teachers. They liked the content, but the sidebar was disconnected with the key terms and limited in width due to google docs add-ons constraints.",
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
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="left" level={4}>V3 - Chrome extension (built)</Heading>
      <Paragraph>
      Our final solution was a chrome extension. This enabled us to embed more directly into lesson plans (via a Grammerly style popover) and more easy expand to other web-based lesson planning platforms.  
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
              src: `${process.env.PUBLIC_URL}/img/PlanWise/planwiseExtensionVersions.png`,
              width: 2896,
              height: 903,
              alt: 'Space Junk design 1',
              caption: "",
            }
          ]}
      columns={{ sm: 1, md: 1, lg: 1 }}
      maxWidth="7xl"
      showCaptions={true}
    />
     </Container>


     <Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
     <Heading color="#3C8148" alignment="left" level={3}>Activity images</Heading>
      <Paragraph>
      I created all of the image and custom icon content, bringing visuals to scores of formative activities. We used a simple diagrammatic style that focused on supplementing the text and aiding in understanding. 
      </Paragraph>
</Container>


     <Container
  layout="two-column"
  size="7xl"
  leftStackedSize="xl"
  rightStackedSize = 'xl'
  verticalAlignment="top"
  gap="sm"
  columnSplit="60/40"
  removeHorizontalPadding={false}
  marginBottom = 'lg'
  leftContent={
      
    <>
    <Paragraph className="italic">
      Example of activity images in context. 
    </Paragraph>
    <Paragraph className="italic">
    Teachers particularly valued how the Target Their Learning activity made student polling more engaging and interactive.
   </Paragraph>

    <div className="bg-white rounded-lg  p-6 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          <Heading color="#804300" alignment="center" level={3}>Target Their Learning</Heading>
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
                  Create a digital or physical representation of a target with 3 rings that say &quot;have some questions&quot;, &quot;getting there&quot;, and &quot;understand&quot;.
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
                  Ask each student to self-assess their progress towards the learning goal and write their thinking onto a digital or paper sticky note.
                  </Paragraph>
                  <BulletedList items={[
                      <>
                      <Paragraph className = 'text-[18px] leading-6'>If they have some questions, write their questions.
                       </Paragraph>
                      </>,
                      <>
                      <Paragraph className = 'text-[18px] leading-6'>If they think they are getting there, write where they might need some help.
                      </Paragraph>
                      </>,
                      <>
                      <Paragraph className = 'text-[18px] leading-6'>If they think they understand, write one thing they learned.
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
  rightContent={
    <>
        <Paragraph className="italic">
      Sample of Activity images.
    </Paragraph>
    <MediaContainer
           items={[
             {
               type: 'image',
               src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img1.svg`,
               width: 500,
               height: 500,
               alt: 'Space Junk design 1',
               caption: "",
             },
             {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img2.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img3.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img4.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img5.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img6.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img7.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            },
            {
              type: 'image',
              src: `${process.env.PUBLIC_URL}/img/PlanWise/strategy_img8.svg`,
              width: 2365,
              height: 1540,
              alt: 'Space Junk design 1',
              caption: "",
            }


           ]}
       columns={{ base: 2, sm: 2, md: 2, lg: 2 }}
       maxWidth="7xl"
       gap="xl"
       showCaptions={true}
     />
     </>
  }
/>



<Container
  layout="single"
  size="2xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="left" level={3}>Marketing</Heading>
      <Paragraph>
      I also worked on the marketing side creating an explainer video for our sales team, teacher-facing videos, as well as ads for a facebook ad campaign. 
      </Paragraph>
</Container>


<Container
  layout="single"
  size="6xl"
  removeHorizontalPadding={false}
  marginBottom = 'md'
  >
      <MediaContainer
      items={[
        {
          type: 'video',
          videoType: 'youtube' as const,
          src: "https://www.youtube.com/embed/PBWi_FRnAXY?si=bKJBxQJtGvktU4NY",
          width: 1920,
          height: 1080,
          alt: 'Space Junk design 1',
          caption: "Video created in After Effects.",
        }
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
  marginBottom = 'md'
  >
      <Heading color="#3C8148" alignment="left" level={2}>Conclusions</Heading>
      <Paragraph>
      PlanWise was piloted and launched to select school districts. It was also bundled with the ETS PRAXIS assessment, increasing ETS offerings to newly licensed teachers. 
      </Paragraph>
</Container>


      <ProjectFooter />
    </AnimatedPage>
  );
};

export default PlanWise;