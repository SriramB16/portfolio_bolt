import React, { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
        className={`
          flex items-center justify-between 
          rounded-full bg-white/90 dark:bg-gray-900/90
          backdrop-blur-sm transition-all duration-500 ease-in-out
          shadow-sm dark:shadow-gray-800/20
          ${scrolled 
            ? 'w-[85%] md:w-[75%] lg:w-[65%] py-2' 
            : 'w-[95%] md:w-[90%] lg:w-[85%] py-3'}
        `}
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
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Moon size={20} className={`transition-transform ${darkMode ? 'rotate-[35deg]' : 'rotate-0'}`} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;