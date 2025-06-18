import React from 'react';

const ShinyText = ({ children, className = "", size = "base" }) => {
  const sizeClasses = {
    sm: "text-xs sm:text-sm",
    base: "text-sm sm:text-base",
    lg: "text-base sm:text-lg md:text-xl",
    xl: "text-lg sm:text-xl md:text-2xl lg:text-3xl"
  };

  return (
    <span 
      className={`
        inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-600 
        bg-clip-text text-transparent font-medium
        relative overflow-hidden
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        backgroundSize: '200% 100%',
        animation: 'shine 20s ease-in-out infinite'
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;