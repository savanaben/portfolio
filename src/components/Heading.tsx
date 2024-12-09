import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  visualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  alignment?: 'left' | 'center';
  color?: string;
  style?: React.CSSProperties; // New prop for custom styles
}

const Heading: React.FC<HeadingProps> = ({ 
  level, 
  children, 
  className = '', 
  visualLevel,
  alignment = 'left',
  color,
  style = {} // Default to an empty object. like this style={{marginTop: 0}}
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = {
    h1: 'text-4xl font-weight-700 mt-8 mb-5',
    h2: 'text-3xl font-weight-700 mt-7 mb-4',
    h3: 'text-2xl font-weight-600 mt-6 mb-3',
    h4: 'text-xl font-weight-600 mt-5 mb-2',
    h5: 'text-lg font-weight-500 mt-4 mb-2',
    h6: 'text-base font-weight-500 mt-3 mb-2',
  };

  const visualStyle = visualLevel ? baseStyles[visualLevel] : baseStyles[`h${level}`];
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left';

  const combinedStyle: React.CSSProperties = {
    ...style, // Spread the custom styles first
    ...(color ? { color } : {}) // Add color if provided
  };

  return (
    <Tag 
       className={`${visualStyle} ${alignmentClass} font-family-rethink ${className}`} // Moved className to the end
        style={combinedStyle}
    >
      {children}
    </Tag>
  );
};

export default Heading;