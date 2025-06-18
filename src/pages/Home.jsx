import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from '../components/IntroAnimation';
import ScrollReveal from '../components/ScrollReveal';
import WavingHandSVG from '../components/WavingHandSVG';

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSocialLink, setHoveredSocialLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Only check for intro animation if we're on the home page
    if (location.pathname === '/') {
      // Check if this is a fresh page load (not navigation)
      const hasSeenIntroThisSession = sessionStorage.getItem('hasSeenIntroThisSession');
      const isPageReload = performance.navigation?.type === 1 || 
                          (performance.getEntriesByType('navigation')[0]?.type === 'reload');
      
      // Show intro only if:
      // 1. Haven't seen it this session AND it's a fresh load, OR
      // 2. It's a page reload on home page
      if ((!hasSeenIntroThisSession && !sessionStorage.getItem('internalNavigation')) || isPageReload) {
        setShowIntro(true);
        sessionStorage.setItem('hasSeenIntroThisSession', 'true');
      } else {
        setContentVisible(true);
      }
      
      // Clear internal navigation flag
      sessionStorage.removeItem('internalNavigation');
    } else {
      setContentVisible(true);
    }
  }, [location.pathname]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Projects with beautiful background colors
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-200 dark:from-yellow-300 dark:via-yellow-400 dark:to-orange-300',
      year: '2024'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile',
      description: 'A React Native app for team collaboration and project management.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200 dark:from-purple-300 dark:via-purple-400 dark:to-pink-300',
      year: '2024'
    },
    {
      id: 3,
      title: 'Design System',
      category: 'UI/UX',
      description: 'A comprehensive design system with reusable components and guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Storybook', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-gray-200 via-gray-300 to-slate-200 dark:from-gray-300 dark:via-gray-400 dark:to-slate-300',
      year: '2024'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Web Apps',
      description: 'A beautiful weather application with real-time data and forecasts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 dark:from-green-300 dark:via-emerald-400 dark:to-teal-300',
      year: '2024'
    }
  ];

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {contentVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-[#f7f8fa] dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300"
          >
            {/* Hero Section with Flexbox Layout */}
            <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
              <div className="max-w-7xl mx-auto w-full">
                
                {/* Section 1: Hey! It's me Sriram - Full Width Flexbox */}
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="w-full flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <WavingHandSVG className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    <span className="text-green-500 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-satoshi">
                      Hey! It's me Sriram
                    </span>
                  </div>
                </ScrollReveal>

                {/* Section 2: Main Heading - 80% width on larger screens */}
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="w-full lg:w-4/5 mb-8 sm:mb-12 lg:mb-16">
                    <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                      Crafting <span className="text-green-500">purpose driven</span><br />
                      <span className="text-green-500">experiences</span> that inspire<br />
                      & engage.
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Section 3: Flex Container - Line + Description (Equal Width) */}
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="flex flex-col lg:flex-row mb-8 sm:mb-12 w-full">
                    {/* Text - First on mobile, left on desktop */}
                    <div className="flex-1 flex items-center order-1 lg:order-2 mb-6 lg:mb-0">
                      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed font-satoshi">
                        I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
                      </p>
                    </div>

                    {/* Line - Second on mobile, right on desktop */}
                    <div className="flex-1 flex justify-end items-center order-2 lg:order-1 lg:pr-8 xl:pr-12">
                      <div className="w-full h-px bg-gray-400 dark:bg-gray-600"></div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Section 4: Flex Container - Button + Social Links */}
                <ScrollReveal direction="up" delay={0.4}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
                    {/* Button - First on mobile, right on desktop */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                      <Link 
                        to="/about"
                        className="group relative inline-block border border-black dark:border-white text-black dark:text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-medium overflow-hidden transition-all duration-300 text-sm sm:text-base lg:text-lg font-satoshi hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-black/40"
                        onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                          Know me better
                        </span>
                        <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                      </Link>
                    </div>

                    {/* Social Links - Second on mobile, left on desktop */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                      <div 
                        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg font-satoshi"
                        onMouseLeave={() => setHoveredSocialLink(null)}
                      >
                        {[
                          { name: 'LINKEDIN', href: '#' },
                          { name: 'GITHUB', href: '#' },
                          { name: 'INSTAGRAM', href: '#' },
                          { name: 'GMAIL', href: '#' }
                        ].map((social) => (
                          <a 
                            key={social.name}
                            href={social.href} 
                            className={`transition-all duration-300 flex items-center gap-2 group ${
                              hoveredSocialLink && hoveredSocialLink !== social.name
                                ? 'text-gray-400 dark:text-gray-600 opacity-50'
                                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                            }`}
                            onMouseEnter={() => setHoveredSocialLink(social.name)}
                          >
                            {social.name}
                            <ArrowRight 
                              size={16} 
                              className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </section>

            {/* Skills Marquee */}
            <ScrollReveal direction="up" delay={0.5}>
              <section className="py-8 sm:py-12 md:py-16 border-t border-b border-gray-200 dark:border-gray-800">
                <div className="overflow-hidden">
                  <div className="flex animate-marquee-slow whitespace-nowrap">
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-400 dark:text-gray-600 pr-4 sm:pr-6 md:pr-8 font-clash">
                      <span>Development</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Mentor</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Websites</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Designing</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Development</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Mentor</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Websites</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Designing</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Development</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Mentor</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Websites</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                      <span>Designing</span>
                      <span className="text-gray-300 dark:text-gray-700">✦</span>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Projects Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <span className="text-green-500 text-xs sm:text-sm font-medium">✦ MY WORK</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">Selected Projects</h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl">
                    Here's a curated selection showcasing my expertise and the achieved results.
                  </p>
                </ScrollReveal>

                {/* Projects Grid - True Staggered Masonry Layout */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* First Column - Starts at top */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Project 1 - E-Commerce Platform */}
                    <ScrollReveal direction="up" delay={0.4}>
                      <div 
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredProject(1)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={`${projects[0].bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                          hoveredProject && hoveredProject !== 1 ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <img 
                            src={projects[0].image}
                            alt={projects[0].title}
                            className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{projects[0].title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{projects[0].category}</p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{projects[0].year}</span>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Project 3 - Design System */}
                    <ScrollReveal direction="up" delay={0.6}>
                      <div 
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredProject(3)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={`${projects[2].bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                          hoveredProject && hoveredProject !== 3 ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <img 
                            src={projects[2].image}
                            alt={projects[2].title}
                            className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{projects[2].title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{projects[2].category}</p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{projects[2].year}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Second Column - Starts lower to create stagger effect */}
                  <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                    {/* Project 2 - Task Management App */}
                    <ScrollReveal direction="up" delay={0.5}>
                      <div 
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredProject(2)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={`${projects[1].bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                          hoveredProject && hoveredProject !== 2 ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <img 
                            src={projects[1].image}
                            alt={projects[1].title}
                            className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{projects[1].title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{projects[1].category}</p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{projects[1].year}</span>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Project 4 - Weather Dashboard */}
                    <ScrollReveal direction="up" delay={0.7}>
                      <div 
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredProject(4)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={`${projects[3].bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                          hoveredProject && hoveredProject !== 4 ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <img 
                            src={projects[3].image}
                            alt={projects[3].title}
                            className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{projects[3].title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{projects[3].category}</p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{projects[3].year}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section - Pure White with Margins and 3D Effect */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
              <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 xl:mx-24">
                <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal direction="up" delay={0.1}>
                      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-500 text-xs sm:text-sm font-medium">Available for work</span>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2}>
                      <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-black dark:text-white">
                        Let's create your<br />
                        next big idea.
                      </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                      <Link 
                        to="/contact"
                        className="group relative inline-block border border-black dark:border-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium overflow-hidden transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-black/40"
                        onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                          Contact Me
                        </span>
                        <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-16">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <ScrollReveal direction="up" delay={0.1}>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left">
                    © 2025 Sriram. All rights reserved.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <div className="flex gap-4 sm:gap-6">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;