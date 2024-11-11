import React from 'react';
import Heading from './components/Heading';
import IconsWithContent from './components/IconsWithContent';
import TextContainer from './components/TextContainer';

const Education: React.FC = () => {
    const educationItems = [
      {
        imageUrl: `${process.env.PUBLIC_URL}/img/PrattLogo.svg`,
        imageAlt: "Pratt Institute logo",
        title: "Master of Science, Information Experience Design",
        content: "Pratt Institute<br><i>With Distinction</i>",
        bgColor: "#FFB900" // Light gray background
      },
      {
        imageUrl: `${process.env.PUBLIC_URL}/img/NJITLogo.svg`,
        imageAlt: "New Jersey Institute of Technology logo",
        title: "Bachelor of Arts, Digital Design",
        content: "New Jersey Institute of Technology<br><i>Cum Laude • Albert Dorman Honors College Graduate • Kappa Xi Kappa Alumni</i>",
        bgColor: "#f7f7f7" // Slightly darker gray background
      }
    ];

  return (
    <TextContainer size="3xl" removeHorizontalPadding>
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
        <Heading 
          level={1} 
          visualLevel="h2" 
          alignment="center" 
          style={{ 
            marginTop: 0,
            marginBottom: '2rem'
          }}
        >
          Education
        </Heading>
        <IconsWithContent items={educationItems} containerSize="full" />
      </div>
    </TextContainer>
  );
}

export default Education;