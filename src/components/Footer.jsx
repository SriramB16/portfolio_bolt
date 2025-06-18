import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-800 dark:hover:text-gray-300' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-500 dark:hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    { name: 'Email', icon: Mail, href: 'mailto:sriram@example.com', color: 'hover:text-red-600 dark:hover:text-red-400' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Consulting'
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            
            {/* Brand Section */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-clash font-bold text-black dark:text-white mb-4">
                    Sriram
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                    Crafting purpose-driven digital experiences that inspire and engage. 
                    Let's build something amazing together.
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/20`}
                      aria-label={social.name}
                    >
                      <social.icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal direction="up" delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm sm:text-base"
                        onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal direction="up" delay={0.3}>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Section */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © {currentYear} Devraj Chatribin. All rights reserved.
              </p>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;