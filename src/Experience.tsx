import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg p-8">
        <h2 id="experience" className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Lead UI/UX Specialist</h3>
            <p className="text-gray-600">Educational Testing Service</p>
            <p className="text-sm text-gray-500">2021–present</p>
            <p className="mt-2">I lead the instructional design team for the National Assessment of Educational Progress (NAEP) and directly create components, prototypes, and digital content across a range of assessment and learning projects.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Consistently collaborate with the NAEP client, presenting complex interactions and projects in understandable terms supported by visuals and prototypes.</li>
              <li>Coordinate design work across content and development teams to ensure schedules are met, design system expansions are carefully weighed, and products are successfully moved through design, study, and integration processes.</li>
              <li>Provide leadership through example in the establishment of design processes, prioritization of research and study to validate assumptions, and promotion of a culture of shared critique, agency, and constant knowledge-sharing.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Senior User Experience Designer</h3>
            <p className="text-gray-600">Educational Testing Service</p>
            <p className="text-sm text-gray-500">2018–2020</p>
            <p className="mt-2">I created digital content and designs for various learning and assessment applications while also leading a team of designers.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Led the user experience design across complex scenario-based student assessments. Responsibilities included design system ownership, content reviews, design mentorship, project assignment/management, and keeping our team nimble and happy.</li>
              <li>Persona/empathy development and iterative usability testing to ensure products meet the goals and wants of the people using them.</li>
              <li>Scrum/Agile/Design Thinking methodologies utilized to cut through big company bloat, create team diversity, and clearly scope goals.</li>
              <li>Ensured all front-end functionality and style specifications were clear for developers - provided front-end development support QC&apos;ing implementation and prioritizing features.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Digital Designer</h3>
            <p className="text-gray-600">Educational Testing Service</p>
            <p className="text-sm text-gray-500">2016–2017</p>
            <p className="mt-2">Created and implemented micro and macro level designs which drive the aesthetics and user experience of multiple enterprise-level applications.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Design projects ranged from standalone interactive components, data visualizations, illustrations, integrated applications with linear experiences, and high-level brand and product design to ensure UX and art style consistency.</li>
              <li>External vendor design reviews and quality control.</li>
              <li>Created and managed style, process, technical, and WCAG compliant guidelines.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Consultant</h3>
            <p className="text-gray-600">Educational Testing Service</p>
            <p className="text-sm text-gray-500">2014–2015</p>
            <p className="mt-2">Worked primarily on the National Assessment of Educational Progress designing UI&apos;s and creating digital assets of all types.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Compositing and layout - Paper-to-digital recreations supporting NAEP&apos;s transition to a fully online assessment delivery.</li>
              <li>Illustration - Maps, scientific phenomena, diagrams, scenic backgrounds, and other art as-necessary (vector and raster).</li>
              <li>Animation - World-building, scientific, subtle, stimulus for assessment.</li>
              <li>UI/UX - assessment platform UI, Scenario Based Task UI, and component design.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Environmental Artist</h3>
            <p className="text-gray-600">Handelabra Games</p>
            <p className="text-sm text-gray-500">2014</p>
            <p className="mt-2">Proposed, acquired, and built all 3D assets and environments for use in final shipped game (Sentinels of the Multiverse). Ensured large 3D Unity scenes were optimized for tablet devices.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Design Director, Consultant</h3>
            <p className="text-gray-600">Legends of Equestria</p>
            <p className="text-sm text-gray-500">2013–2017</p>
            <p className="mt-2">Managed the design of all scenes, systems, and mechanics across multiple sub-teams. Frequently presented at conventions and other publicity events. Directly trained and on-boarded 15+ team members, cultivating a culture of openness and shared critique.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Pipeline management across cloud-based resources like Trello, Bitbucket, and Google Drive.</li>
              <li>Design document writing and critique.</li>
              <li>3D asset creation and world terraforming to create cities, landscapes, and other points of interest.</li>
              <li>Lead the team through the final release of the game, as well as follow-up patches and expansions.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3D Modeler</h3>
            <p className="text-gray-600">Legends of Equestria</p>
            <p className="text-sm text-gray-500">2012</p>
            <p className="mt-2">3D asset creation (hard surface modeling, toon texture work, Unity implementation and terrain support).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;