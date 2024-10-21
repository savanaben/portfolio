import React from 'react';

interface BulletedListProps {
  items: React.ReactNode[];
  className?: string;
}

const BulletedList: React.FC<BulletedListProps> = ({ items, className = '' }) => {
  return (
    <ul className={`list-disc list-inside mt-2 space-y-1 mb-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-base text-lg">{item}</li>
      ))}
    </ul>
  );
};

export default BulletedList;