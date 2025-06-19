import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, User, FolderGit2, Mail, Home } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(95);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.4;
      const currentScroll = window.scrollY;
      
      let width;
      if (currentScroll <= scrollThreshold) {
        width = 95 - ((currentScroll / scrollThreshold) * (95 - 55));
      } else {
        width = 55;
      }
      
      setScrollWidth(width);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Custom Sun Component
  const SunIcon = () => (
    <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
      <div className="sun-container">
        <svg
          width="16"
          height="16"
          className="sm:w-[18px] sm:h-[18px]"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Sun rays */}
          <g className="sun-rays">
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </g>
          {/* Sun center */}
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      </div>
    </div>
  );

  // Handle navigation clicks to mark internal navigation
  const handleNavClick = () => {
    sessionStorage.setItem('internalNavigation', 'true');
  };

  // Check if we're on the home page to adjust navbar styling
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Mobile top logo */}
      <div className={`fixed top-0 left-0 w-full md:hidden z-50 transition-colors duration-300 ${
        isHomePage ? 'bg-[#f7f8fa] dark:bg-black' : 'bg-[#f7f8fa] dark:bg-black'
      }`}>
        <div className="flex items-center justify-between p-3 sm:p-4 max-w-full overflow-hidden">
          <span className={`text-lg sm:text-xl font-bold ${isHomePage ? 'text-black dark:text-white' : 'text-black dark:text-white'} truncate`}>SR</span>
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="relative p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden flex-shrink-0"
          >
            <div className="relative w-4 h-4 sm:w-5 sm:h-5">
              {/* Moon Icon for Light Mode */}
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}>
                <Moon size={16} className="sm:w-[18px] sm:h-[18px] text-black" />
              </div>
              
              {/* Sun Icon for Dark Mode */}
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
              }`}>
                <div className="text-golden">
                  <SunIcon />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Top navbar for larger screens */}
      <div className="fixed top-0 left-0 w-full hidden md:flex justify-center z-50 px-2 py-2 overflow-hidden">
        <nav 
          style={{
            width: `${Math.min(scrollWidth, 95)}%`,
            maxWidth: 'calc(100vw - 2rem)'
          }}
          className="
            flex items-center justify-between 
            rounded-full bg-white/90 dark:bg-black/90
            backdrop-blur-sm transition-all duration-300 ease-out
            shadow-sm dark:shadow-gray-800/20 py-2 sm:py-3
          "
        >
          <div className="flex-1 flex justify-start pl-4 sm:pl-6 min-w-0">
            <Logo />
          </div>
          
          <div className="flex-1 flex justify-center min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8">
              <NavLink to="/" label="Home" icon={<Home size={16} className="sm:w-[18px] sm:h-[18px]" />} active={location.pathname === '/'} onClick={handleNavClick} />
              <NavLink to="/about" label="About" icon={<User size={16} className="sm:w-[18px] sm:h-[18px]" />} active={location.pathname === '/about'} onClick={handleNavClick} />
              <NavLink to="/projects" label="Projects" icon={<FolderGit2 size={16} className="sm:w-[18px] sm:h-[18px]" />} active={location.pathname === '/projects'} onClick={handleNavClick} />
              <NavLink to="/contact" label="Contact" icon={<Mail size={16} className="sm:w-[18px] sm:h-[18px]" />} active={location.pathname === '/contact'} onClick={handleNavClick} />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end pr-4 sm:pr-6 min-w-0">
            <button 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="relative p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden group flex-shrink-0"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                {/* Moon Icon for Light Mode */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}>
                  <Moon size={16} className="sm:w-[18px] sm:h-[18px] text-black group-hover:text-gray-800 transition-colors duration-200" />
                </div>
                
                {/* Sun Icon for Dark Mode */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`}>
                  <div className="text-golden group-hover:text-golden-light transition-colors duration-200">
                    <SunIcon />
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
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 px-2 py-2 overflow-hidden">
        <nav className="
          bg-white/90 dark:bg-black/90 backdrop-blur-sm
          shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-gray-800/20
          transition-colors duration-300 rounded-lg
          max-w-full overflow-hidden
        ">
          <div className="flex items-center justify-around py-2 px-1">
            <NavLink to="/" label="Home" icon={<Home size={18} className="sm:w-5 sm:h-5" />} active={location.pathname === '/'} onClick={handleNavClick} />
            <NavLink to="/about" label="About" icon={<User size={18} className="sm:w-5 sm:h-5" />} active={location.pathname === '/about'} onClick={handleNavClick} />
            <NavLink to="/projects" label="Projects" icon={<FolderGit2 size={18} className="sm:w-5 sm:h-5" />} active={location.pathname === '/projects'} onClick={handleNavClick} />
            <NavLink to="/contact" label="Contact" icon={<Mail size={18} className="sm:w-5 sm:h-5" />} active={location.pathname === '/contact'} onClick={handleNavClick} />
          </div>
        </nav>
      </div>
    </>
  );
};

const NavLink = ({ to, label, icon, active = false, onClick }) => {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`
        flex flex-col items-center gap-1
        md:flex-row md:gap-1 lg:gap-2
        transition-all duration-200 px-1 sm:px-2 relative min-w-0
        ${active 
          ? 'text-black dark:text-golden font-semibold' 
          : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-105'}
      `}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="text-xs md:text-xs lg:text-sm font-medium whitespace-nowrap truncate max-w-full">{label}</span>
      {/* Active indicator */}
      {active && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black dark:bg-golden rounded-full md:hidden"></div>
      )}
    </Link>
  );
};

export default Navbar;