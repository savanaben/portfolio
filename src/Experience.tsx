import React from 'react';
import TextContainer from './components/TextContainer';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import BulletedList from './components/BulletedList';
import Accordion, { AccordionGroup } from './components/Accordion';



const Experience: React.FC = () => {
  return (
    <TextContainer size="3xl" removeHorizontalPadding>
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
      <Heading 
          level={1} 
          visualLevel="h2" 
          color="#00719c"
          alignment="center" 
          style={{ marginTop: 0, marginBottom: '2rem' }}
        >
          Experience
        </Heading>
        <div className="space-y-8">
          <div>
          <Heading level={3} style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">Lead User Experience Designer</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Educational Testing Service</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic mb-0">2021–present</Paragraph>
            <Paragraph>I lead the instructional design and content UX teams for the National Assessment of Educational Progress (NAEP) and directly create components, prototypes, and digital content across a range of assessment and learning projects.</Paragraph>
            
            <Accordion
              id="accordion1"
              header="Key stuff I do"
            >
              <BulletedList items={[
              "Consistently collaborate with our NAEP client, presenting complex projects and interactions in understandable terms supported by research and prototypes.",
              "Coordinate design work across content and development teams to ensure schedules are met, design system expansions are carefully weighed, and products are successfully moved through design, study, and integration processes.",
              "Rigorously pursue accessibility initiatives, developing novel techniques to meet new WCAG standards in the context of NAEP and large-scale assessment. ",
              "Provide leadership through example in the establishment of design processes, prioritization of research and study to validate assumptions, and promotion of a culture of shared critique, agency, and knowledge-sharing."
            ]} />
            </Accordion>
            
          </div>
          <div>
            <Heading level={3} style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">Senior User Experience Designer</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Educational Testing Service</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic">2018–2020</Paragraph>
            <Paragraph>I created digital content and designs for various learning and assessment applications while also leading a team of designers.</Paragraph>
            
            <Accordion
              id="accordion1"
              header="Key stuff I did"
            >
            <BulletedList items={[
              "Led the user experience design across complex scenario-based student assessments. Responsibilities included design system ownership, content reviews, design mentorship, project assignment/management, and keeping our team nimble and happy.",
              "Persona/empathy development and iterative usability testing to ensure products meet the goals and wants of the people using them.",
              "Scrum/Agile/Design Thinking methodologies utilized to cut through big company bloat, create team diversity, and clearly scope goals.",
              "Ensured all front-end functionality and style specifications were clear for developers - provided front-end development support QC'ing implementation and prioritizing features."
            ]} />
            </Accordion>
            

          </div>
          <div>
            <Heading level={3} style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">Digital Designer</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Educational Testing Service</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic">2016–2017</Paragraph>
            <Paragraph>Created and implemented micro and macro level designs which drive the aesthetics and user experience of multiple enterprise-level applications.</Paragraph>
            <Accordion
              id="accordion1"
              header="Key stuff I did"
            >
            <BulletedList items={[
              "Design projects ranged from standalone interactive components, data visualizations, illustrations, integrated applications with linear experiences, and high-level brand and product design to ensure UX and art style consistency.",
              "External vendor design reviews and quality control.",
              "Created and managed style, process, technical, and WCAG compliant guidelines."
            ]} />
            </Accordion>

          </div>
          <div>
            <Heading level={3}  style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">Consultant</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Educational Testing Service</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic">2014–2015</Paragraph>
            <Paragraph>Worked primarily on the National Assessment of Educational Progress designing UI&apos;s and creating digital assets of all types.</Paragraph>
            <Accordion
              id="accordion1"
              header="Key stuff I did"
            >
            <BulletedList items={[
              "Compositing and layout - Paper-to-digital recreations supporting NAEP's transition to a fully online assessment delivery.",
              "Illustration - Maps, scientific phenomena, diagrams, scenic backgrounds, and other art as-necessary (vector and raster).",
              "Animation - World-building, scientific, subtle, stimulus for assessment.",
              "UI/UX - assessment platform UI, Scenario Based Task UI, and component design."
            ]} />
            </Accordion>

          </div>
          <div>
            <Heading level={3} style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">Environmental Artist</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Handelabra Games</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic">2014</Paragraph>
            <Paragraph>Proposed, acquired, and built all 3D assets and environments for use in final shipped game (Sentinels of the Multiverse). Ensured large 3D Unity scenes were optimized for tablet devices.</Paragraph>
          </div>
          <div>
            <Heading level={3} style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">Design Director, Consultant</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Legends of Equestria</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic">2013–2017</Paragraph>
            <Paragraph>Managed the design of all scenes, systems, and mechanics across multiple sub-teams. Frequently presented at conventions and other publicity events. Directly trained and on-boarded 15+ team members, cultivating a culture of openness and shared critique.</Paragraph>

            <Accordion
              id="accordion1"
              header="Key stuff I did"
            >
            <BulletedList items={[
              "Pipeline management across cloud-based resources like Trello, Bitbucket, and Google Drive.",
              "Design document writing and critique.",
              "3D asset creation and world terraforming to create cities, landscapes, and other points of interest.",
              "Lead the team through the final release of the game, as well as follow-up patches and expansions."
            ]} />
            </Accordion>

          </div>
          <div>
            <Heading level={3} style={{ marginBottom: 0 }} className="text-xl font-semibold mb-0">3D Modeler</Heading>
            <Paragraph overrideMargin className="text-gray-600 mb-0">Legends of Equestria</Paragraph>
            <Paragraph className="text-sm text-gray-500 italic">2012</Paragraph>
            <Paragraph>3D asset creation (hard surface modeling, toon texture work, Unity implementation and terrain support).</Paragraph>
          </div>
        </div>
      </div>
    </TextContainer>
  );
}

export default Experience;