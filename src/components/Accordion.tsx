import React, { useState, useContext, createContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Context for managing connected accordions
const AccordionGroupContext = createContext<{
  openId: string | null;
  setOpenId: (id: string | null) => void;
  groupId?: string;
} | null>(null);

interface AccordionGroupProps {
  children: React.ReactNode;
  groupId?: string;
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ children, groupId }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  
  return (
    <AccordionGroupContext.Provider value={{ openId, setOpenId, groupId }}>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </AccordionGroupContext.Provider>
  );
};

interface AccordionProps {
  id: string;
  header: React.ReactNode;
  children: React.ReactNode;
  connected?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  header,
  children,
  connected = false,
  defaultOpen = false,
  disabled = false,
  className = '',
  headerClassName = '',
  contentClassName = '',
  onOpen,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const groupContext = useContext(AccordionGroupContext);
  
  useEffect(() => {
    if (connected && groupContext) {
      if (groupContext.openId === id) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, [connected, groupContext?.openId, id]);

  const handleToggle = () => {
    if (disabled) return;

    if (connected && groupContext) {
      const newOpenId = groupContext.openId === id ? null : id;
      groupContext.setOpenId(newOpenId);
      if (newOpenId) {
        onOpen?.();
      } else {
        onClose?.();
      }
    } else {
      setIsOpen(!isOpen);
      if (!isOpen) {
        onOpen?.();
      } else {
        onClose?.();
      }
    }
  };

  return (
    <div className={`border border-t-1 border-l-0 border-r-0 border-b-1 border-gray-300 overflow-hidden ${className}`}>
      <button
        onClick={handleToggle}
        disabled={disabled}
        className={`
            w-full px-4 py-3 flex justify-between items-center
            text-left bg-white text-purple-700 hover:bg-purple-50
            transition-colors duration-200 ease-in-out
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            ${headerClassName}
        `}
        aria-expanded={isOpen}
      >
        <div>{header}</div>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="w-5 h-5 text-purple-700"
          aria-hidden="true"
        />
      </button>
      
      <div
        className={`
          overflow-hidden transition-[max-height,opacity]
          duration-300 ease-in-out
          ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
          ${contentClassName}
        `}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;