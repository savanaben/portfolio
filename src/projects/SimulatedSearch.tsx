import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import TextContainer from '../components/TextContainer';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import MediaContainer from '../components/MediaContainer';
import BulletedList from '../components/BulletedList';
import NumberedList from '../components/NumberedList';
import Link from '../components/Link';
import Table from '../components/Table';
import ProjectFooter from '../components/ProjectFooter';


const SimulatedSearch: React.FC = () => {
  return (
    <AnimatedPage>
    <TextContainer size="3xl">
      <Heading level={1} alignment="center" color="#008e71">
        Simulating Searches
      </Heading>

      <Paragraph>
        This project&apos;s goal was to figure out if someone can perform a good web search. 
        Collaborating with content specialists, psychometricians, and assessment developers, 
        I lead the design and UI/UX to create a simulated search engine.
      </Paragraph>

      <Heading level={3} color="#008e71">
        Focus
      </Heading>

      <Paragraph>
        After initial pitches and consideration between research, content, and design teams, 
        the focus settled on two specific skills used when performing a web search:
      </Paragraph>

      <NumberedList
  items={[
         <>
          <Paragraph>The initial search engine query.</Paragraph>  
          </>,
          <>
          <Paragraph>Choosing the best site to explore from the standardized search engine results list (comprised of page titles, URLs, and summaries).</Paragraph>  
           </>
  ]}
/>

      <Paragraph>
        We would create a simulated search engine to learn how good people are at these two skills. 
        Our client, the <Link href="https://nces.ed.gov/">National Center for Educational Statistics</Link> (NCES), 
        accepted this design and we moved forward!
      </Paragraph>

      <Heading level={3} color="#008e71">
        Design
      </Heading>

      <Paragraph>
        I lead the design by proposing a collection of systems to improve the simulative qualities 
        of our search engine. These systems were also chosen based on an earlier market analysis, 
        which found that comparable simulated search engines were particularly weak in fixing user 
        input errors and providing dynamic search results (some engines would spit out the same 
        canned results as long as the users query included one key term).
      </Paragraph>

      
        <Heading color="#008e71" level={4}>Weight System</Heading>
        
        <Paragraph>
          The weighting system was designed to deliver relevant results based on the unique term(s) 
          searched. Content specialists can assign a 0 to 1 weight value for each term and source, 
          ensuring that search results are relevant to the terms searched.
        </Paragraph>

        <Paragraph>
          For example, let&apos;s say the weighting was set up as follows
        </Paragraph>

        <Table
          maxWidth={600}
          boldFirstColumn
          className="my-8"
          data={{
            headers: ["", "Term 1*", "Term 2", "Term 3", "Term 4", "…"],
            rows: [
              ["Source 1", "1", "0.3", "0.75", "0.9", "…"],
              ["Source 2", "0.5", "1", "0.33", "0.75", "…"],
              ["Source 3", "0.65", "0.5", "1", "0.33", "…"],
              ["Source 4", "0.3", "0.75", "0.85", "1", "…"],
              ["…", "…", "…", "…", "…", "…"]
            ]
          }}
        />

        <Paragraph className="text-md italic mt-2">
          * &quot;Term&quot; can be any text, and multiple forms of a Term can also be inserted. 
          For example, if your Term was &quot;meme&quot;, you could enter &quot;meme, memes, dank memes&quot;, 
          and the algorithm would know that those 3 comma-separated items would all count 
          as getting that that Term.
        </Paragraph>

        <Paragraph>
          I then perform a search for Term 2 and Term 3.
        </Paragraph>

        <MediaContainer
          items={[{
            type: 'image',
            src: `${process.env.PUBLIC_URL}/img/simulatedSearch/demo SS search.svg`,
            alt: "Image of a search engine with term 2 and term 3 typed in.",
            width: 600,
            height: 400
          }]}
          maxWidth="md"
          columns={{ sm: 1, md: 1, lg: 1 }}
        />

        <Paragraph>
          The total weights for those two Terms would be calculated
        </Paragraph>

        <Table
          maxWidth={500}
          data={{
            headers: ["", "Term 2", "Term 3", "Total"],
            rows: [
              ["Source 1", "0.30", "0.75", "1.05"],
              ["Source 2", "1.00", "0.33", "1.33"],
              ["Source 3", "0.50", "1.00", "1.50"],
              ["Source 4", "0.75", "0.85", "1.60"]
            ]
          }}
        />

        <Paragraph>
          and the user would be displayed the source results in order based on highest-to-lowest total weight values.
        </Paragraph>

        <MediaContainer
          items={[{
            type: 'image',
            src: `${process.env.PUBLIC_URL}/img/simulatedSearch/demo SS results.svg`,
            alt: "Image of search results ordered by weight",
            width: 1241,
            height: 1087
          }]}
          maxWidth="xl"
          columns={{ sm: 1, md: 1, lg: 1 }}
        />

        <Paragraph>
          While actual search engines like Google are much smarter and multifactorial, it would have been impossible to recreate or use these engines due to their proprietary nature and the constraints of the project (such as needing a walled-garden system that limited the number of sources and Terms so it would be easier to quantify and automate measurement). By implementing this weighting system, we could simulate the core functionality of search engines—matching search queries to sources based on weighted relevance.
        </Paragraph>
   
      <Paragraph>
        In addition to the weighting system, I designed error correction systems that included 
        spell-checking and whitelisting, a suite of front-end parameters to allow for customization, 
        data capture logic, and the overall UI/UX.
      </Paragraph>

      <Heading level={3} color="#008e71">
        Results
      </Heading>

      <Paragraph>
        The final deliverable, a new form of assessment focused on measuring the first steps of a 
        good web search, was completed on-time and accepted by our client. I wrote an end-to-end 
        design document that covered all aspects of this tool, including
      </Paragraph>

      <BulletedList
        items={[
          "clear, human-readable descriptions of all underlying systems to be handed off to programming for implementation.",
          "all aspects of data capture, based on my collaborations with the statisticians and psychometricians who would be using the data.",
          "user flow and experience.",
          "parameter requirements to ensure common customizations were easy and didn't require programming.",
          "interface styling."
        ]}
      />

      <MediaContainer
        items={[{
          type: 'image',
          src: `${process.env.PUBLIC_URL}/img/simulatedSearch/ssIIC_cards.svg`,
          alt: "Interface cards showing different aspects of the search system",
          width: 800,
          height: 400
        }]}
        maxWidth="3xl"
        columns={{ sm: 1, md: 1, lg: 1 }}
      />

      <Paragraph>
        The Simulated Search tool went through user testing, cog labs, a large scale pilot, and is 
        now a part of the <Link href="https://nces.ed.gov/nationsreportcard/">National Assessment of Educational Progress.</Link> I 
        wrote follow-up documentation covering all aspects of setting up the weighting system and 
        changing various unique parameters, ensuring a clean hand-off.
      </Paragraph>
      <ProjectFooter />
    </TextContainer>
    </AnimatedPage>
  );
};

export default SimulatedSearch;