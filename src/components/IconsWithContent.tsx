import React from 'react';
import TextContainer from './TextContainer';
import Heading from './Heading';
import Paragraph from './Paragraph';

interface ContentItem {
  imageUrl: string;
  imageAlt: string;
  title: string;
  content: string;
  bgColor?: string; // New property for background color
}

interface IconsWithContentProps {
  items: ContentItem[];
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
}

const IconsWithContent: React.FC<IconsWithContentProps> = ({ items, containerSize = '3xl' }) => {
    return (
      <TextContainer size={containerSize} removeHorizontalPadding>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-3/10 pr-4 flex-shrink-0">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: item.bgColor || 'transparent' }}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.imageAlt} 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div className="w-7/10 mr-4">
                <Heading level={4} 
                className="mb-2"
                style={{ 
                    marginTop: 0,
                    marginBottom: 0
                    }}
                >
                  {item.title}
                </Heading>
                <Paragraph>
                  {item.content}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </TextContainer>
    );
  };
  
  export default IconsWithContent;