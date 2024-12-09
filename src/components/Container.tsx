import React from 'react';


//consider adding a setting to have mediaContainer include left/right padding
//when they are side-by-side. right now it's auto-detecting if there are
// 2 side-by-side media containers and removing global padding if so


interface ContainerProps {
  children?: React.ReactNode;
  layout?: 'single' | 'two-column';
  columnSplit?: '50/50' | '40/60' | '60/40';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  leftStackedSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  rightStackedSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  verticalAlignment?: 'top' | 'center' | 'bottom';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  reverseOnMobile?: boolean;
  removeHorizontalPadding?: boolean;
  marginBottom?: 'sm' | 'md' | 'lg'; 
  className?: string;
}


const Container: React.FC<ContainerProps> = ({
  children,
  layout = 'single',
  size = '3xl',
  leftStackedSize = '3xl',
  rightStackedSize = '3xl',
  leftContent,
  rightContent,
  verticalAlignment = 'top',
  gap = 'sm',
  columnSplit = '50/50',
  reverseOnMobile = false,
  removeHorizontalPadding = false,
  marginBottom = 'sm', 
  className = '',
}) => {
  const sizeClass = `max-w-${size}`;
  const gapClass = gap === 'none' ? 'gap-0' : gap === 'sm' ? 'gap-4' : gap === 'md' ? 'gap-8' : 'gap-12';
  const alignClass = verticalAlignment === 'center' ? 'items-center' : 
                    verticalAlignment === 'bottom' ? 'items-end' : 'items-start';
  const marginBottomClass = marginBottom === 'sm' ? 'mb-4' : 
                            marginBottom === 'md' ? 'mb-8' : 
                            'mb-12';
   
  const paddingClass = removeHorizontalPadding 
    ? 'mx-auto' 
    : layout === 'two-column'
      ? 'mx-auto px-4 lg:px-12'  // px-4 on mobile, px-12 on desktop for two-column
      : layout === 'single'
        ? 'mx-auto px-4'         // simple px-4 for single column
        : 'mx-auto px-12';       // default case
  
  const getGridCols = () => {
    switch (columnSplit) {
      case '40/60':
        return 'lg:grid-cols-[40fr_60fr]';
      case '60/40':
        return 'lg:grid-cols-[60fr_40fr]';
      default:
        return 'lg:grid-cols-2';
    }
  };

  if (layout === 'two-column') {
    // Add this check for dual MediaContainers
    const bothColumnsAreMedia = React.isValidElement(leftContent) && 
      React.isValidElement(rightContent) &&
      typeof leftContent.type === 'function' &&
      typeof rightContent.type === 'function' &&
      leftContent.type.name === 'MediaContainer' &&
      rightContent.type.name === 'MediaContainer';

      return (
        <>
          <div className={`
            mx-auto 
            ${sizeClass} 
            ${className} 
            ${marginBottomClass}
            ${!removeHorizontalPadding && !bothColumnsAreMedia ? 'px-12' : ''} 
            lg:block hidden
          `}>
            <div className={`
              grid grid-cols-1 
              ${getGridCols()}
              ${gapClass} 
              ${alignClass}
              ${reverseOnMobile ? 'flex-row-reverse' : ''}
            `}>
              <div className={`
                w-full 
                ${!removeHorizontalPadding && !bothColumnsAreMedia ? 'px-4' : ''}
              `}>
                {leftContent}
              </div>
              <div className={`
                w-full 
                ${!removeHorizontalPadding && !bothColumnsAreMedia ? 'px-4' : ''}
              `}>
                {rightContent}
              </div>
            </div>
          </div>
    
          <div className={`
            mx-auto 
            ${sizeClass} 
            ${className} 
            ${marginBottomClass}
            lg:hidden
          `}>
            <div className={`
              flex flex-col
              ${gapClass}
              ${reverseOnMobile ? 'flex-col-reverse' : ''}
            `}>
              <div className={`
                w-full 
                ${leftStackedSize !== 'full' ? `max-w-${leftStackedSize}` : ''} 
                mx-auto
                ${!removeHorizontalPadding && !(
                  React.isValidElement(leftContent) && 
                  typeof leftContent.type === 'function' && 
                  leftContent.type.name === 'MediaContainer'
                ) ? 'px-4' : ''}
              `}>
                {leftContent}
              </div>
              <div className={`
                w-full
                ${rightStackedSize !== 'full' ? `max-w-${rightStackedSize}` : ''} 
                mx-auto
                ${!removeHorizontalPadding && !(
                  React.isValidElement(rightContent) && 
                  typeof rightContent.type === 'function' && 
                  rightContent.type.name === 'MediaContainer'
                ) ? 'px-4' : ''}
              `}>
                {rightContent}
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <div className={`
        ${paddingClass} 
        ${sizeClass} 
        ${className}
        ${marginBottomClass}
      `}>
        {children}
      </div>
    );
};

export default Container;