import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from '../components/IntroAnimation';
import ScrollReveal from '../components/ScrollReveal';
import ScrollTextReveal from '../components/ScrollTextReveal';
import ShinyText from '../components/ShinyText';
import WavingHandSVG from '../components/WavingHandSVG';
import ExpertiseAccordion from '../components/ExpertiseAccordion';
import SmartLink from '../components/SmartLink';
import ThemedButton from '../components/buttons/ThemedButton';
import { projects as allProjects } from '../data/projectsData';

const Home = () => {
  // Initialize showMainContent based on initial conditions to prevent flicker
  const [showMainContent, setShowMainContent] = useState(() => {
    // Only check for intro animation if we're on the home page initially
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      // Check if this is internal navigation (coming from another page)
      const isInternalNavigation = sessionStorage.getItem('internalNavigation') === 'true';
      
      // Check if user has seen intro in this browser session
      const hasSeenIntroThisSession = sessionStorage.getItem('hasSeenIntroThisSession') === 'true';
      
      // If it's internal navigation or user has already seen intro, show main content immediately
      if (isInternalNavigation || hasSeenIntroThisSession) {
        return true;
      }
      
      // Otherwise, check for page reload
      const isPageReload = performance.navigation?.type === 1 || 
                          (performance.getEntriesByType('navigation')[0]?.type === 'reload');
      
      // If it's not a page reload and not first visit, show main content
      return !isPageReload && hasSeenIntroThisSession;
    }
    
    // For non-home pages, always show main content
    return true;
  });

  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSocialLink, setHoveredSocialLink] = useState(null);
  const location = useLocation();

  // Define which projects to display on homepage (1st, 4th, 5th, 6th)
  const homePageProjectIds = [1, 4, 5, 6];
  
  // Filter projects for homepage
  const homePageProjects = allProjects.filter(project => 
    homePageProjectIds.includes(project.id)
  );

  // Distribute projects into columns for masonry layout
  // Column 1: Projects 1 and 5 (indices 0 and 2 in homePageProjects)
  // Column 2: Projects 4 and 6 (indices 1 and 3 in homePageProjects)
  const column1Projects = homePageProjects.filter((_, index) => index % 2 === 0);
  const column2Projects = homePageProjects.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    // Only check for intro animation if we're on the home page
    if (location.pathname === '/') {
      // Check if this is a page reload/refresh or first visit to the site
      const isPageReload = performance.navigation?.type === 1 || 
                          (performance.getEntriesByType('navigation')[0]?.type === 'reload');
      
      // Check if this is internal navigation (coming from another page)
      const isInternalNavigation = sessionStorage.getItem('internalNavigation') === 'true';
      
      // Check if user has seen intro in this browser session
      const hasSeenIntroThisSession = sessionStorage.getItem('hasSeenIntroThisSession') === 'true';
      
      // Check if this is the very first visit (no session storage set at all)
      const isFirstVisit = !sessionStorage.getItem('hasSeenIntroThisSession');
      
      console.log('Intro animation check:', {
        isPageReload,
        isInternalNavigation,
        hasSeenIntroThisSession,
        isFirstVisit,
        pathname: location.pathname
      });
      
      // Show intro animation ONLY if:
      // 1. User is reloading/refreshing the page, OR
      // 2. This is the very first visit to the site (no session storage exists)
      const shouldShowIntro = isPageReload || (isFirstVisit && !isInternalNavigation);
      
      if (shouldShowIntro) {
        console.log('Showing intro animation');
        // Mark that user has seen the intro this session
        sessionStorage.setItem('hasSeenIntroThisSession', 'true');
        setShowMainContent(false);
      } else {
        console.log('Skipping intro animation - internal navigation or already seen');
        // Ensure main content is shown immediately for internal navigation
        if (!showMainContent) {
          setShowMainContent(true);
        }
      }
      
      // Clear internal navigation flag after checking
      if (isInternalNavigation) {
        sessionStorage.removeItem('internalNavigation');
      }
    } else {
      // Not on home page, always show main content
      if (!showMainContent) {
        setShowMainContent(true);
      }
    }
  }, [location.pathname, showMainContent]);

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
                    <ThemedButton 
                      to="/about"
                      size="xl"
                      className="font-satoshi"
                    >
                      Know me better
                    </ThemedButton>
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
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 md:mb-16">
                  Here's a curated selection showcasing my expertise and the achieved results.
                </p>
              </ScrollReveal>

              {/* Projects Grid - True Staggered Masonry Layout */}
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {/* First Column - Starts at top */}
                <div className="space-y-6 sm:space-y-8">
                  {column1Projects.map((project, index) => (
                    <ScrollReveal key={project.id} direction="up" delay={0.4 + index * 0.2}>
                      <SmartLink 
                        to={`/projects/${project.id}`}
                        className="group cursor-pointer block"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={`${project.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                          hoveredProject && hoveredProject !== project.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{project.category}</p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{project.year}</span>
                        </div>
                      </SmartLink>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Second Column - Starts lower to create stagger effect */}
                <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                  {column2Projects.map((project, index) => (
                    <ScrollReveal key={project.id} direction="up" delay={0.5 + index * 0.2}>
                      <SmartLink 
                        to={`/projects/${project.id}`}
                        className="group cursor-pointer block"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={`${project.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                          hoveredProject && hoveredProject !== project.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{project.category}</p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{project.year}</span>
                        </div>
                      </SmartLink>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* View More Projects Button */}
              <ScrollReveal direction="up" delay={0.9}>
                <div className="text-center mt-8 sm:mt-12 md:mt-16">
                  <ThemedButton 
                    to="/projects"
                    size="lg"
                    className="shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
                  >
                    View More Projects
                  </ThemedButton>
                </div>
              </ScrollReveal>
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
                    <ThemedButton to="/contact">
                      Contact Me
                    </ThemedButton>
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