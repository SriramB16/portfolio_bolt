import React from 'react';
import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 Sriram Baskaran. All rights reserved.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Instagram size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;