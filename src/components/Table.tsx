import React from 'react';

interface TableProps {
  data: {
    headers?: string[];
    rows: (string | number)[][];
  };
  className?: string;
  maxWidth?: number;
  boldFirstColumn?: boolean;
}

const Table: React.FC<TableProps> = ({ 
  data, 
  className = '', 
  maxWidth,
  boldFirstColumn = false 
}) => {
  const tableStyles: React.CSSProperties = {
    maxWidth: maxWidth ? `${maxWidth}px` : undefined,
    margin: maxWidth ? '0 auto' : undefined
  };

  return (
    <div className="overflow-x-auto my-6">
      <table 
        className={`tablepress w-full border-collapse ${className}`}
        style={tableStyles}
      >
        {data.headers && (
          <thead>
            <tr>
              {data.headers.map((header, index) => (
                <th 
                  key={index}
                  className="p-2 text-left border-b border-gray-300"
                >
                  <span className="font-bold">{header}</span>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-gray-300">
          {data.rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex}
                  className={`p-2 ${cellIndex === 0 && boldFirstColumn ? 'font-bold' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;