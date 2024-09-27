import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default ExternalLink;