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
    <div className="relative w-5 h-5 flex items-center justify-center">
      <div className="sun-container">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="sun-icon"
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
      <div className={`fixed top-0 left-0 w-full md:hidden z-50 ${isHomePage ? 'bg-black' : 'bg-white dark:bg-black'}`}>
        <div className="flex items-center justify-between p-4">
          <span className={`text-xl font-bold ${isHomePage ? 'text-white' : 'text-black dark:text-white'}`}>SR</span>
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`relative p-2 rounded-full transition-all duration-300 overflow-hidden ${
              isHomePage 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <div className="relative w-5 h-5">
              {/* Moon Icon for Light Mode */}
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}>
                <Moon size={18} className={isHomePage ? "text-white" : "text-black"} />
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
      <div className="fixed top-0 left-0 w-full hidden md:flex justify-center z-50 px-2 py-2">
        <nav 
          style={{
            width: `${scrollWidth}%`,
          }}
          className={`
            flex items-center justify-between 
            rounded-full transition-all duration-300 ease-out
            shadow-sm py-3
            ${isHomePage 
              ? 'bg-black/90 backdrop-blur-sm' 
              : 'bg-white/90 dark:bg-black/90 backdrop-blur-sm dark:shadow-gray-800/20'
            }
          `}
        >
          <div className="flex-1 flex justify-start pl-6">
            <div className={isHomePage ? 'text-white' : ''}>
              <Logo />
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              <NavLink to="/" label="Home" icon={<Home size={18} />} active={location.pathname === '/'} onClick={handleNavClick} isHomePage={isHomePage} />
              <NavLink to="/about" label="About" icon={<User size={18} />} active={location.pathname === '/about'} onClick={handleNavClick} isHomePage={isHomePage} />
              <NavLink to="/projects" label="Projects" icon={<FolderGit2 size={18} />} active={location.pathname === '/projects'} onClick={handleNavClick} isHomePage={isHomePage} />
              <NavLink to="/contact" label="Contact" icon={<Mail size={18} />} active={location.pathname === '/contact'} onClick={handleNavClick} isHomePage={isHomePage} />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end pr-6">
            <button 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`relative p-2 rounded-full transition-all duration-300 overflow-hidden group ${
                isHomePage 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="relative w-5 h-5">
                {/* Moon Icon for Light Mode */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}>
                  <Moon size={18} className={`group-hover:text-gray-800 transition-colors duration-200 ${
                    isHomePage ? 'text-white' : 'text-black'
                  }`} />
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
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 px-2 py-2">
        <nav className={`
          backdrop-blur-sm
          shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-gray-800/20
          transition-colors duration-300
          ${isHomePage 
            ? 'bg-black/90' 
            : 'bg-white/90 dark:bg-black/90'
          }
        `}>
          <div className="flex items-center justify-around py-2">
            <NavLink to="/" label="Home" icon={<Home size={20} />} active={location.pathname === '/'} onClick={handleNavClick} isHomePage={isHomePage} />
            <NavLink to="/about" label="About" icon={<User size={20} />} active={location.pathname === '/about'} onClick={handleNavClick} isHomePage={isHomePage} />
            <NavLink to="/projects" label="Projects" icon={<FolderGit2 size={20} />} active={location.pathname === '/projects'} onClick={handleNavClick} isHomePage={isHomePage} />
            <NavLink to="/contact" label="Contact" icon={<Mail size={20} />} active={location.pathname === '/contact'} onClick={handleNavClick} isHomePage={isHomePage} />
          </div>
        </nav>
      </div>
    </>
  );
};

const NavLink = ({ to, label, icon, active = false, onClick, isHomePage = false }) => {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`
        flex flex-col items-center gap-1
        md:flex-row md:gap-2
        transition-all duration-200
        ${active 
          ? (isHomePage ? 'text-white' : 'text-gray-700 dark:text-golden')
          : (isHomePage 
              ? 'text-gray-400 hover:text-white hover:scale-105' 
              : 'text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-200 hover:scale-105'
            )
        }
      `}
    >
      {icon}
      <span className="text-xs md:text-sm font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;