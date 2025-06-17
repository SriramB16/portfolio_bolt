import React, { useState, useEffect } from 'react';
import { Moon, Sun, Cloud } from 'lucide-react';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(95);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.4;
      const currentScroll = window.scrollY;
      
      let width;
      if (currentScroll <= scrollThreshold) {
        width = 95 - ((currentScroll / scrollThreshold) * (95 - 75));
      } else {
        width = 75;
      }
      
      setScrollWidth(width);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 py-3">
      <nav 
        style={{
          width: `${scrollWidth}%`,
        }}
        className="
          flex items-center justify-between 
          rounded-full bg-white/90 dark:bg-gray-900/90
          backdrop-blur-sm transition-all duration-600 ease-out
          shadow-sm dark:shadow-gray-800/20 py-3
        "
      >
        <div className="flex-1 flex justify-start pl-4 md:pl-6">
          <Logo />
        </div>
        
        <div className="flex-1 flex justify-center">
          <NavLinks />
        </div>
        
        <div className="flex-1 flex justify-end pr-4 md:pr-6">
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-400 overflow-hidden group"
          >
            <div className="relative w-5 h-5">
              {/* Moon icon for light mode */}
              <Moon 
                size={20} 
                className={`absolute inset-0 transition-all duration-600 ${
                  darkMode 
                    ? 'opacity-0 rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              
              {/* Sun with cloud icon for dark mode */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-600 ${
                darkMode 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 -rotate-180 scale-0'
              }`}>
                <Sun 
                  size={20} 
                  className="animate-spin-slow text-yellow-400"
                />
                <Cloud 
                  size={12} 
                  className="absolute -bottom-1 -right-1 text-gray-300 animate-pulse-slow"
                />
              </div>
            </div>
            
            {/* Animated background glow */}
            <div className={`absolute inset-0 rounded-full transition-all duration-600 ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 animate-pulse-slow' 
                : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
            }`} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;