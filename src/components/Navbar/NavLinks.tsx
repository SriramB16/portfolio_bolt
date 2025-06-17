import React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, active = false }) => {
  return (
    <a 
      href={href}
      className={`
        relative px-3 py-1 text-sm font-medium transition-colors
        ${active 
          ? 'text-emerald-600 dark:text-emerald-400' 
          : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'}
      `}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 mx-auto w-1 h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
      )}
    </a>
  );
};

const NavLinks: React.FC = () => {
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <NavLink href="#about" label="About" />
      <NavLink href="#contact" label="Contact" />
      <NavLink href="#projects" label="Projects" active />
    </div>
  );
};

export default NavLinks;