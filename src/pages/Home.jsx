import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TechMarquee from '../components/TechMarquee';
import IntroAnimation from '../components/IntroAnimation';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only check for intro animation if we're on the home page
    if (location.pathname === '/') {
      // Check if this is a genuine page load (not navigation from another page)
      const navigationEntries = performance.getEntriesByType('navigation');
      const isPageLoad = navigationEntries.length > 0 && 
        (navigationEntries[0].type === 'reload' || navigationEntries[0].type === 'navigate');
      
      // Check if this is the first time visiting the site in this browser session
      const hasSeenIntroEver = sessionStorage.getItem('hasSeenIntroEver');
      
      // Check if we came from another page (internal navigation)
      const cameFromInternalNavigation = sessionStorage.getItem('internalNavigation');
      
      // Show intro only if:
      // 1. It's a page load (not internal navigation) AND
      // 2. Either it's the first time ever OR it's a reload on home page
      if (isPageLoad && !cameFromInternalNavigation && (!hasSeenIntroEver || navigationEntries[0].type === 'reload')) {
        setShowIntro(true);
        sessionStorage.setItem('hasSeenIntroEver', 'true');
      } else {
        // If navigating from another page or already seen intro, show content immediately
        setContentVisible(true);
      }
      
      // Clear the internal navigation flag
      sessionStorage.removeItem('internalNavigation');
    } else {
      // If not on home page, show content immediately
      setContentVisible(true);
    }
  }, [location.pathname]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Delay content appearance for smooth transition
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
            className="pt-32 pb-24 px-6 md:px-10 lg:px-16"
          >
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <div className="mb-8">
                  <ScrollReveal direction="up" delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
                      Hi, I'm <span className="bg-gradient-to-r from-gray-700 to-black dark:from-golden dark:to-golden-light bg-clip-text text-transparent">Sriram</span>
                    </h1>
                  </ScrollReveal>
                  
                  <ScrollReveal direction="up" delay={0.2}>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                      A passionate full-stack developer crafting beautiful, functional, and user-centered digital experiences.
                    </p>
                  </ScrollReveal>
                </div>
                
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link 
                      to="/projects"
                      className="group flex items-center gap-2 bg-black dark:bg-golden text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-golden-light transition-all duration-300 hover:scale-105"
                      onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                    >
                      View My Work
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="flex items-center gap-2 border-2 border-black dark:border-golden text-black dark:text-golden px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-golden dark:hover:text-black transition-all duration-300">
                      <Download size={20} />
                      Download CV
                    </button>
                  </div>
                </ScrollReveal>

                {/* Social Links */}
                <ScrollReveal direction="up" delay={0.4}>
                  <div className="flex justify-center gap-6">
                    <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                      <Github size={24} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                      <Mail size={24} />
                    </a>
                  </div>
                </ScrollReveal>
              </motion.div>

              {/* Tech Stack Marquee */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-8">
                    Technologies I Work With
                  </h2>
                  <TechMarquee />
                </div>
              </ScrollReveal>

              {/* Skills Preview */}
              <ScrollReveal direction="up" delay={0.6}>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {[
                    {
                      icon: '🎨',
                      title: 'Frontend Development',
                      description: 'Creating beautiful, responsive user interfaces with modern frameworks and technologies.'
                    },
                    {
                      icon: '⚙️',
                      title: 'Backend Development',
                      description: 'Building robust server-side applications and APIs with scalable architecture.'
                    },
                    {
                      icon: '📱',
                      title: 'Mobile Development',
                      description: 'Developing cross-platform mobile applications with native performance.'
                    }
                  ].map((skill, index) => (
                    <ScrollReveal key={index} direction="up" delay={0.7 + index * 0.1}>
                      <div className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105">
                        <div className="w-16 h-16 bg-black dark:bg-golden rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl text-white dark:text-black">{skill.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{skill.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>

              {/* Recent Work Preview */}
              <ScrollReveal direction="up" delay={1}>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Recent Work</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, index) => (
                      <ScrollReveal key={item} direction="up" delay={1.1 + index * 0.1}>
                        <div className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-300"></div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Project {item}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of this amazing project and its key features.</p>
                            <Link 
                              to="/projects"
                              className="text-black dark:text-golden font-semibold hover:underline"
                              onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                            >
                              View Project →
                            </Link>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;