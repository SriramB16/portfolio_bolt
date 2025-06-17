import React, { useState, useEffect } from 'react';
import { Moon, Sun, Cloud } from 'lucide-react';
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
        // Reduce the shrinking effect - only go from 95% to 75% instead of 45%
        width = 95 - ((currentScroll / scrollThreshold) * (95 - 75));
      } else {
        width = 75; // Stop at 75% instead of 45%
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
    <>
      {/* Mobile top logo */}
      <div className="fixed top-0 left-0 w-full md:hidden z-50">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold text-gray-900 dark:text-white">SR</span>
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-5 h-5">
              {/* Moon Icon for Light Mode */}
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}>
                <Moon size={18} className="text-gray-700" />
              </div>
              
              {/* Sun with Clouds Icon for Dark Mode */}
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
              }`}>
                <div className="relative">
                  <Sun size={18} className="text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <Cloud size={8} className="absolute -top-1 -right-1 text-gray-300 animate-pulse" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Top navbar for larger screens */}
      <div className="fixed top-0 left-0 w-full hidden md:flex justify-center z-50 px-2 py-2">
        <nav 
          style={{
            width: `${scrollWidth}%`,
          }}
          className="
            flex items-center justify-between 
            rounded-full bg-white/90 dark:bg-gray-900/90
            backdrop-blur-sm transition-all duration-300 ease-out
            shadow-sm dark:shadow-gray-800/20 py-3
          "
        >
          <div className="flex-1 flex justify-start pl-6">
            <Logo />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              <NavLink href="#about" label="About" icon={<User size={18} />} />
              <NavLink href="#projects" label="Projects" icon={<FolderGit2 size={18} />} active />
              <NavLink href="#contact" label="Contact" icon={<Mail size={18} />} />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end pr-6">
            <button 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative w-5 h-5">
                {/* Moon Icon for Light Mode */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}>
                  <Moon size={18} className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
                </div>
                
                {/* Sun with Clouds Icon for Dark Mode */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`}>
                  <div className="relative">
                    <Sun size={18} className="text-yellow-400 group-hover:text-yellow-300 animate-spin transition-colors duration-200" style={{ animationDuration: '8s' }} />
                    <Cloud size={8} className="absolute -top-1 -right-1 text-gray-300 group-hover:text-gray-200 animate-pulse transition-colors duration-200" />
                  </div>
                </div>
              </div>
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-active:opacity-100 transition-opacity duration-150"></div>
            </button>
          </div>
        </nav>
      </div>

      {/* Bottom navbar for mobile */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 px-2 py-2">
        <nav className="
          bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm
          shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-gray-800/20
          transition-colors duration-300
        ">
          <div className="flex items-center justify-around py-2">
            <NavLink href="/" label="Home" icon={<Home size={20} />} />
            <NavLink href="#about" label="About" icon={<User size={20} />} />
            <NavLink href="#projects" label="Projects" icon={<FolderGit2 size={20} />} active />
            <NavLink href="#contact" label="Contact" icon={<Mail size={20} />} />
          </div>
        </nav>
      </div>
    </>
  );
};

const NavLink = ({ href, label, icon, active = false }) => {
  return (
    <a 
      href={href}
      className={`
        flex flex-col items-center gap-1
        md:flex-row md:gap-2
        transition-all duration-200
        ${active 
          ? 'text-emerald-600 dark:text-emerald-400' 
          : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-105'}
      `}
    >
      {icon}
      <span className="text-xs md:text-sm font-medium">{label}</span>
    </a>
  );
};

export default Navbar;