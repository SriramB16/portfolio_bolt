import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { name: 'linkedin', icon: Linkedin, href: '#' },
    { name: 'github', icon: Github, href: '#' },
    { name: 'instagram', icon: Instagram, href: '#' },
    { name: 'mail', icon: Mail, href: '#' },
    { name: 'twitter', icon: Twitter, href: '#' }
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black mb-16 md:mb-0">
      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left font-light">
            © 2025 Sriram Baskaran. All rights reserved.
          </p>

          <div 
            className="flex gap-4 sm:gap-6"
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.href} 
                  className={`transition-all duration-300 ${
                    hoveredIcon && hoveredIcon !== social.name
                      ? 'text-gray-400 dark:text-gray-600 opacity-40'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                >
                  <IconComponent size={18} className="sm:w-5 sm:h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;