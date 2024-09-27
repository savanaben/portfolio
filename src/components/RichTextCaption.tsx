import React from 'react';
import Link from './Link';

interface RichTextCaptionProps {
  content: string;
}

const RichTextCaption: React.FC<RichTextCaptionProps> = ({ content }) => {
  const parts = content.split(/(<Link.*?<\/Link>)/);

  return (
    <p className="mt-2 text-md text-gray-600 mb-4">
      {parts.map((part, index) => {
        if (part.startsWith('<Link')) {
          const match = part.match(/href="(.*?)".*?external>(.*?)<\/Link>/);
          if (match) {
            return <Link key={index} href={match[1]} external>{match[2]}</Link>;
          }
        }
        return part;
      })}
    </p>
  );
};

export default RichTextCaption;