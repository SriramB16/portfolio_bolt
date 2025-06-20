import React from 'react';
import SmartLink from '../SmartLink';

const DarkModeButton = ({ 
  children, 
  to, 
  href, 
  onClick, 
  className = '', 
  size = 'md',
  icon,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
    xl: 'px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg'
  };

  // Base classes for dark mode button
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 sm:gap-3
    border border-white bg-transparent text-white font-medium rounded-full 
    overflow-hidden transition-all duration-300 hover:scale-105 
    hover:shadow-lg hover:shadow-black/40 disabled:opacity-50 
    disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]} ${className}
  `;

  const content = (
    <>
      <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
      {icon && (
        <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
          {icon}
        </span>
      )}
      <div className="absolute inset-0 z-10 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
    </>
  );

  // If it's a link
  if (to) {
    return (
      <SmartLink to={to} className={baseClasses} {...props}>
        {content}
      </SmartLink>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  // If it's a button
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default DarkModeButton;