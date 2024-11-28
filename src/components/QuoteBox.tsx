import React from 'react';
import PropTypes from 'prop-types';

interface QuoteBoxProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'gray';
  attribution?: string;  // Add this line
  className?: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ 
  children, 
  color = 'blue',
  attribution,  // Add this line
  className = '' 
}) => {
  const colorStyles = {
    blue: {
      border: 'border-sky-600',
      bg: 'bg-cyan-100',
      quote: 'text-sky-500',
      attribution: 'text-sky-700'  // Add attribution color
    },
    purple: {
      border: 'border-purple-600',
      bg: 'bg-purple-50',
      quote: 'text-purple-300',
      attribution: 'text-purple-700'
    },
    green: {
      border: 'border-green-600',
      bg: 'bg-green-50',
      quote: 'text-green-300',
      attribution: 'text-green-700'
    },
    gray: {
      border: 'border-gray-400',
      bg: 'bg-gray-50',
      quote: 'text-gray-300',
      attribution: 'text-gray-700'
    }
  };

  return (
    <div className={`
      relative 
      pl-8 
      pr-6 
      py-6 
      my-6
      border-l-4 
      rounded-r-lg
      ${colorStyles[color].border}
      ${colorStyles[color].bg}
      ${className}
    `}>
      <span className={`
        absolute 
        top-2 
        left-4
        font-['Crimson_Text'] 
        text-6xl 
        leading-none
        ${colorStyles[color].quote}
      `}>
        &ldquo;
      </span>

      <div className="relative pl-4 mt-4">
        {children}
        {attribution && (
          <p className={`
            text-right 
            mt-4 
            italic
            text-lg
            ${colorStyles[color].attribution}
          `}>
            &mdash; {attribution}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuoteBox;