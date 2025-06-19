import React from 'react';
import { useLocation } from 'react-router-dom';

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <a 
      href="/" 
      className={`flex items-center justify-center ${
        isHomePage 
          ? 'text-black dark:text-white' 
          : 'text-black dark:text-white'
      }`}
    >
      {/* Custom SR Logo SVG */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="hover:scale-105 transition-transform duration-300"
      >
        {/* Background circle with gradient */}
        <circle 
          cx="20" 
          cy="20" 
          r="18" 
          fill="url(#gradient)" 
          stroke="currentColor" 
          strokeWidth="1"
          className="opacity-90"
        />
        
        {/* Letter S */}
        <path 
          d="M12 15C12 13.8954 12.8954 13 14 13H17C18.6569 13 20 14.3431 20 16C20 17.1046 19.1046 18 18 18H16H18C19.1046 18 20 18.8954 20 20C20 21.6569 18.6569 23 17 23H14C12.8954 23 12 22.1046 12 21" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Letter R */}
        <path 
          d="M22 13V23M22 13H26C27.1046 13 28 13.8954 28 15V16C28 17.1046 27.1046 18 26 18H22M22 18L28 23" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};

export default Logo;