import React, { ReactNode } from 'react';
import DOMPurify from 'dompurify';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  overrideMargin?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '', overrideMargin = false }) => {
  const baseClasses = 'text-lg';
  const marginClass = overrideMargin ? '' : 'mb-4';
  const combinedClasses = `${baseClasses} ${marginClass} ${className}`.trim();

  if (typeof children === 'string') {
    const sanitizeConfig = {
      ADD_ATTR: ['target', 'rel'],
    };
    const sanitizedContent = DOMPurify.sanitize(children, sanitizeConfig);
    
    // Add external link styles to all links
    const styledContent = sanitizedContent.replace(
      /<a /g,
      '<a class="text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2" target="_blank" rel="noopener noreferrer" '
    );

    return (
      <p 
        className={combinedClasses}
        dangerouslySetInnerHTML={{ __html: styledContent }}
      />
    );
  }

  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
};

export default Paragraph;