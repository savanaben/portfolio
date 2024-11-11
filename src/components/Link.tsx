import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  decorationHover?: boolean;  // Optional prop for the decoration animation
}

const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  external = true,
  decorationHover = true 
}) => {
  const baseClass = 'text-blue-600 hover:text-blue-800 underline';
  const decorationClass = decorationHover ? 'decoration-1 hover:decoration-2' : '';
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a 
      href={href}
      className={`${baseClass} ${decorationClass} ${className}`.trim()}
      {...externalProps}
    >
      {children}
    </a>
  );
};

export default Link;