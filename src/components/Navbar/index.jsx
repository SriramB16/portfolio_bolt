import React, { useState, useEffect } from 'react';
import { Moon, Home, User, Mail, FolderGit2 } from 'lucide-react';
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
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            <Moon size={18} className={`transition-transform ${darkMode ? 'rotate-[35deg]' : 'rotate-0'}`} />
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
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Moon size={18} className={`transition-transform ${darkMode ? 'rotate-[35deg]' : 'rotate-0'}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Bottom navbar for mobile */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 px-2 py-2">
        <nav className="
          bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm
          shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-gray-800/20
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
        transition-colors
        ${active 
          ? 'text-emerald-600 dark:text-emerald-400' 
          : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'}
      `}
    >
      {icon}
      <span className="text-xs md:text-sm font-medium">{label}</span>
    </a>
  );
};

export default Navbar;