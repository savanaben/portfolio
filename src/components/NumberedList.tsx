import React from 'react';

interface NumberedListProps {
  items: React.ReactNode[];
  className?: string;
}

const NumberedList: React.FC<NumberedListProps> = ({ items, className = '' }) => {
  return (
    <ol className={`mt-2 mb-4 space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-10">
          {/* Number */}
          <span className="absolute left-0 top-0 font-bold text-gray-700">
            {index + 1}.
          </span>
          
          {/* Content */}
          <div className="space-y-3">
            {item}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default NumberedList;