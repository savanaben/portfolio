import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import PhotoSwipeGallery from '../components/PhotoSwipeGallery';
import ProjectFooter from '../components/ProjectFooter';

interface Image {
  thumbnailURL: string;
  largeURL: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
}

const TestletDesignSystem: React.FC = () => {
  const imageGroupOne: Image[] = [
    {
      thumbnailURL: "/img/testlet-design-system/Tab.png",
      largeURL: "/img/testlet-design-system/Tab.png",
      width: 1074,
      height: 454,
      caption: "Tabs follow a minimalist design and allow for custom icons.",
      alt: "Tab component"
    },
    {
      thumbnailURL: "/img/testlet-design-system/Match.png",
      largeURL: "/img/testlet-design-system/Match.png",
      width: 643,
      height: 223,
      caption: "Drag-and-drop interactions support two categories and include visually accessible styles across all states.",
      alt: "Match component"
    },
    {
      thumbnailURL: "/img/testlet-design-system/accordion.png",
      largeURL: "/img/testlet-design-system/accordion.png",
      width: 749,
      height: 539,
      caption: "Accordions are often used to organize evidence or build a graphic organizer.",
      alt: "Accordion component"
    },
    {
      thumbnailURL: "/img/testlet-design-system/SIP.png",
      largeURL: "/img/testlet-design-system/SIP.png",
      width: 655,
      height: 375,
      caption: "The select in passage component allows students to select text chunks directly in passages, articles, poems, etc as an answer to a question.",
      alt: "Select in passage component"
    },
  ];

  const biometricsImages: Image[] = [
    {
      thumbnailURL: "/img/testlet-design-system/biometrics1.png",
      largeURL: "/img/testlet-design-system/biometrics1.png",
      width: 1366,
      height: 807,
      caption: "Biometrics example 1",
      alt: "Biometrics example 1"
    },
    {
      thumbnailURL: "/img/testlet-design-system/biometrics2.png",
      largeURL: "/img/testlet-design-system/biometrics2.png",
      width: 1366,
      height: 807,
      caption: "Biometrics example 2",
      alt: "Biometrics example 2"
    },
    {
      thumbnailURL: "/img/testlet-design-system/biometrics3.png",
      largeURL: "/img/testlet-design-system/biometrics3.png",
      width: 1366,
      height: 807,
      caption: "Biometrics example 3",
      alt: "Biometrics example 3"
    },
  ];

  return (
    <AnimatedPage>
      <div>
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-4">From Style Guide to Design System</h2>
          <p className="mb-4">One of my longer-running projects at ETS included the creation of a style guide for mini assessments called testlets. Testets are 20 to 30 minute scenario-based assessments that blend the line between a formative (teaching) tool and a diagnostic assessment to determine what students know based on Common Core state standards.</p>
          <p className="mb-4">As the UX lead on this project, I was tasked with creating a style guide to document all of the components necessary for building testlets. Following are some example components.</p>
          <p className="text-center italic mb-8">Design system content owned by Educational Testing Service.</p>

          <PhotoSwipeGallery 
            images={imageGroupOne} 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          />

          <p className="my-8">These components are combined with layout templates and custom digital assets to create the final testlets students see.</p>

          <PhotoSwipeGallery 
            images={biometricsImages} 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          />

          <p className="my-8">As the project matured, we found that supplemental materials (such as editorial guidelines, art guidelines, storyboard templates, or process documentation) were hard to find and not integrated in a way that enabled everyone to understand the relationships between content, design, and development. Using the style guide as the starting point, I lead the effort to consolidate all content and development materials into a single, easily editable design system.</p>

          <img className="mx-auto max-w-full h-auto" src="/img/testlet-design-system/design-system-hierarchy.svg" alt="Design system hierarchy" />

          <p className="mt-8">This new organizational system enables cross-linking and nesting of related materials, a unified location where people with no programming knowledge can create and update pages asynchronously, and better cross-specialty knowledge-sharing as the content and programming teams can more easily understand how their areas of ownership connect to other teams&apos; work.</p>
          <ProjectFooter />
        </section>
      </div>
    </AnimatedPage>
  );
};

export default TestletDesignSystem;