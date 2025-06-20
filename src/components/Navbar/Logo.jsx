import React from 'react';
import { useLocation } from 'react-router-dom';

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <a 
      href="/" 
      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
    >
      <img 
        src="/src/assets/logos/Downpic.cc-1459298651.jpg"
        alt="SR Logo"
        className="w-full h-full object-contain dark:invert transition-all duration-300"
      />
    </a>
  );
};

export default Logo;