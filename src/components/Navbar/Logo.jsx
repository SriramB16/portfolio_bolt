import React from 'react';
import { useLocation } from 'react-router-dom';

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <a 
      href="/" 
      className={`text-xl font-extrabold tracking-tighter ${
        isHomePage 
          ? 'text-black dark:text-white' 
          : 'bg-gradient-to-r from-black to-gray-600 dark:from-golden dark:to-golden-light bg-clip-text text-transparent'
      }`}
    >
      SR
    </a>
  );
};

export default Logo;