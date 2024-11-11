import React from 'react';
import TextContainer from './components/TextContainer';
import Paragraph from './components/Paragraph';
import Heading from './components/Heading';

const About: React.FC = () => {
  return (
    <TextContainer size="5xl">
      <div className="flex flex-col justify-center md:flex-row items-start gap-8">
        <div className="md:w-1/2">
          <Heading level={1} alignment="center" className="md:text-left mb-6">
           Nice to meet! I’m Ben. 
          </Heading>

          <Paragraph>
          I got my start in 3D/digital design, expanded to UX, and now enjoy tinkering in frontend dev. 
          </Paragraph>
          <Paragraph>
          I’ve worked across the design and creation spectrum making art, animation, UIs, and novel tools. As a project lead I’ve managed the completion of a design system, various accessibility initiatives, and the day-to-day client/team collaboration critical to moving projects forward. 
          </Paragraph>
          <Paragraph>
          My greatest drive has been challenging the status quo of assessment. We can do better - push for richer, more engaging, and more authentic experiences for students. 
          </Paragraph>
        </div>

        <div className="md:w-2/5 flex items-center justify-center md:pt-12">
          <img 
            className="rounded-full object-cover mx-auto" 
            src={`${process.env.PUBLIC_URL}/img/bengross-square.jpg`} 
            alt="Image of Ben Gross being licked by a wolf." 
          />
        </div>
      </div>
    </TextContainer>
  );
};

export default About;