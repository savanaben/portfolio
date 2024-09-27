import React from 'react';

interface TextContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
}

const TextContainer: React.FC<TextContainerProps> = ({ children, className = '', size = '3xl' }) => {
  const getSizeClass = (size: TextContainerProps['size']) => {
    switch (size) {
      case 'sm':
        return 'max-w-sm';
      case 'md':
        return 'max-w-md';
      case 'lg':
        return 'max-w-lg';
      case 'xl':
        return 'max-w-xl';
      case '2xl':
        return 'max-w-2xl';
      case '3xl':
        return 'max-w-3xl';
      case '4xl':
        return 'max-w-4xl';
      case '5xl':
        return 'max-w-5xl';
      case '6xl':
        return 'max-w-6xl';
      case '7xl':
        return 'max-w-7xl';
      case 'full':
        return 'w-full';
      default:
        return '';
    }
  };

  const sizeClass = getSizeClass(size);

  return <div className={`mx-auto px-4 ${sizeClass} ${className}`}>{children}</div>;
};

export default TextContainer;