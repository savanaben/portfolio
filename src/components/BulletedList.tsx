import React from 'react';

interface BulletedListProps {
  items: React.ReactNode[];
  className?: string;
}

const BulletedList: React.FC<BulletedListProps> = ({ items, className = '' }) => {
  return (
    <ul className={`mt-2 space-y-2 mb-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-5">
          {/* Bullet point */}
          <span className="absolute left-0 top-[0.8rem] w-1.5 h-1.5 rounded-full bg-gray-600" />
          
          {/* Content */}
          <div className="space-y-3 text-lg">
            {item}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BulletedList;