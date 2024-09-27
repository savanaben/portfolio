import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, children, className = '', external = false }) => {
  const baseClass = 'text-blue-600 hover:text-blue-800 underline';
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a 
      href={href}
      className={`${baseClass} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
};

export default Link;