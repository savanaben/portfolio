import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  visualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  alignment?: 'left' | 'center';
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  level, 
  children, 
  className = '', 
  visualLevel,
  alignment = 'left',
  color
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = {
    h1: 'text-4xl font-bold mt-8 mb-6',
    h2: 'text-3xl font-semibold mt-7 mb-5',
    h3: 'text-2xl font-medium mt-6 mb-4',
    h4: 'text-xl font-medium mt-5 mb-3',
    h5: 'text-lg font-medium mt-4 mb-2',
    h6: 'text-base font-medium mt-3 mb-2',
  };

  const visualStyle = visualLevel ? baseStyles[visualLevel] : baseStyles[`h${level}`];
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left';

  const style: React.CSSProperties = {};
  if (color) {
    style.color = color;
  }

  return (
    <Tag 
      className={`${visualStyle} ${alignmentClass} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Heading;