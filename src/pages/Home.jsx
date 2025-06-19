import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from '../components/IntroAnimation';
import ScrollReveal from '../components/ScrollReveal';
import ScrollTextReveal from '../components/ScrollTextReveal';
import ShinyText from '../components/ShinyText';
import WavingHandSVG from '../components/WavingHandSVG';
import ExpertiseAccordion from '../components/ExpertiseAccordion';

const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);
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
        sessionStorage.setItem('hasSeenIntroThisSession', 'true');
        setShowMainContent(false);
      } else {
        setShowMainContent(true);
      }
      
      // Clear internal navigation flag
      sessionStorage.removeItem('internalNavigation');
    } else {
      setShowMainContent(true);
    }
  }, [location.pathname]);

  const handleIntroComplete = () => {
    setTimeout(() => {
      setShowMainContent(true);
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
    <AnimatePresence mode="wait">
      {!showMainContent ? (
        <IntroAnimation key="intro" onComplete={handleIntroComplete} />
      ) : (
        <motion.div
          key="main-content"
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

          {/* Scroll Text Reveal Section */}
          <ScrollTextReveal />

          {/* Areas of Expertise Accordion */}
          <ExpertiseAccordion />

          {/* Projects Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
                  <ShinyText size="lg">MY WORK</ShinyText>
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
              <div className="bg-white dark:bg-[#111116] rounded-2xl sm:rounded-3xl py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
                <div className="max-w-4xl mx-auto text-center">
                  <ScrollReveal direction="up" delay={0.1}>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <ShinyText size="xl" className="font-medium">
                        Available for work
                      </ShinyText>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;