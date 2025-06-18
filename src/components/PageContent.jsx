import React from 'react';

const PageContent = ({ children, isVisible }) => {
  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 transform translate-y-0 blur-0' 
          : 'opacity-0 transform translate-y-8 blur-sm'
      }`}
    >
      {children}
    </div>
  );
};

export default PageContent;