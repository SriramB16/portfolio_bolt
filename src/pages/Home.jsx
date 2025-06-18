import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from '../components/IntroAnimation';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const navigationEntries = performance.getEntriesByType('navigation');
      const isPageLoad = navigationEntries.length > 0 && 
        (navigationEntries[0].type === 'reload' || navigationEntries[0].type === 'navigate');
      
      const hasSeenIntroEver = sessionStorage.getItem('hasSeenIntroEver');
      const cameFromInternalNavigation = sessionStorage.getItem('internalNavigation');
      
      if (isPageLoad && !cameFromInternalNavigation && (!hasSeenIntroEver || navigationEntries[0].type === 'reload')) {
        setShowIntro(true);
        sessionStorage.setItem('hasSeenIntroEver', 'true');
      } else {
        setContentVisible(true);
      }
      
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
            className="bg-black text-white min-h-screen"
          >
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-32 pb-24">
              <div className="max-w-6xl mx-auto w-full">
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 text-sm font-medium">Hey! It's me Sriram.</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
                    Crafting <span className="text-green-500">purpose driven</span><br />
                    <span className="text-green-500">experiences</span> that inspire<br />
                    & engage.
                  </h1>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                  <ScrollReveal direction="up" delay={0.3}>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                      I work with brands globally to build pixel-perfect, engaging, and accessible digital 
                      experiences that drive results and achieve business goals.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4 lg:flex-col xl:flex-row">
                      <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                          LINKEDIN <ArrowRight size={16} className="rotate-45" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                          GITHUB <ArrowRight size={16} className="rotate-45" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                          INSTAGRAM <ArrowRight size={16} className="rotate-45" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                          GMAIL <ArrowRight size={16} className="rotate-45" />
                        </a>
                      </div>
                      <Link 
                        to="/about"
                        className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 text-center"
                        onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                      >
                        Know me better
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* Skills Marquee */}
            <ScrollReveal direction="up" delay={0.5}>
              <section className="py-16 border-t border-gray-800">
                <div className="overflow-hidden">
                  <div className="flex animate-marquee whitespace-nowrap">
                    <div className="flex items-center gap-8 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
                      <span>Development</span>
                      <span className="text-gray-800">✦</span>
                      <span>Mentor</span>
                      <span className="text-gray-800">✦</span>
                      <span>Websites</span>
                      <span className="text-gray-800">✦</span>
                      <span>Designing</span>
                      <span className="text-gray-800">✦</span>
                      <span>Development</span>
                      <span className="text-gray-800">✦</span>
                      <span>Mentor</span>
                      <span className="text-gray-800">✦</span>
                      <span>Websites</span>
                      <span className="text-gray-800">✦</span>
                      <span>Designing</span>
                      <span className="text-gray-800">✦</span>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Projects Section */}
            <section className="py-24 px-6 md:px-10 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-green-500 text-sm font-medium">✦ MY WORK</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Selected Projects</h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <p className="text-gray-400 text-lg mb-16 max-w-2xl">
                    Here's a curated selection showcasing my expertise and the achieved results.
                  </p>
                </ScrollReveal>

                {/* Project Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                  {/* Project 1 - Aora */}
                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="group cursor-pointer">
                      <div className="bg-yellow-200 rounded-3xl p-8 mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                          alt="Aora Project"
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Aora</h3>
                          <p className="text-gray-400 mb-2">Development</p>
                        </div>
                        <span className="text-gray-400">2024</span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Project 2 - Code Screenshot */}
                  <ScrollReveal direction="up" delay={0.5}>
                    <div className="group cursor-pointer">
                      <div className="bg-purple-200 rounded-3xl p-8 mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800" 
                          alt="Code Screenshot Project"
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Code Screenshot</h3>
                          <p className="text-gray-400 mb-2">Development & Design</p>
                        </div>
                        <span className="text-gray-400">2024</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Second Row Projects */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project 3 - Mobile App */}
                  <ScrollReveal direction="up" delay={0.6}>
                    <div className="group cursor-pointer">
                      <div className="bg-yellow-200 rounded-3xl p-8 mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                          alt="Mobile App Project"
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Aora</h3>
                          <p className="text-gray-400 mb-2">Mobile Development</p>
                        </div>
                        <span className="text-gray-400">2024</span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Project 4 - Web Platform */}
                  <ScrollReveal direction="up" delay={0.7}>
                    <div className="group cursor-pointer">
                      <div className="bg-green-200 rounded-3xl p-8 mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                          alt="Web Platform Project"
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Web Platform</h3>
                          <p className="text-gray-400 mb-2">Full Stack Development</p>
                        </div>
                        <span className="text-gray-400">2024</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-10 lg:px-16">
              <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 text-sm font-medium">Available for work</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Let's create your<br />
                    next big idea.
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <Link 
                    to="/contact"
                    className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 text-lg"
                    onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
                  >
                    Contact Me
                  </Link>
                </ScrollReveal>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-8 px-6 md:px-10 lg:px-16">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <ScrollReveal direction="up" delay={0.1}>
                  <p className="text-gray-400 text-sm">
                    © 2025 Sriram. All rights reserved.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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