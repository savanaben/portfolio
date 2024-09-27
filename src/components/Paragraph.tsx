import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => {
  return <p className={`text-lg mb-4 ${className}`}>{children}</p>;
};

export default Paragraph;