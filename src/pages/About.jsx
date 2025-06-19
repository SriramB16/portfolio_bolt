import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import ShinyText from '../components/ShinyText';
import DesignProcessCarousel from '../components/DesignProcessCarousel';
import BlurText from '../components/BlurText';

const About = () => {
  const [hoveredStory, setHoveredStory] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);

  // Story sections with corresponding images
  const storyData = [
    {
      text: "I started my journey in web development 3 years ago, driven by curiosity and a passion for creating digital solutions. What began as a hobby quickly evolved into a career that I absolutely love.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      text: "I specialize in full-stack development, with expertise in React, Node.js, and modern web technologies. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      text: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next project.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Technologies for marquee - using only uploaded logos
  const technologies = [
    { name: 'React', logo: '/src/assets/logos/react_logo.png' },
    { name: 'JavaScript', logo: '/src/assets/logos/javascript_logo.png' },
    { name: 'Node.js', logo: '/src/assets/logos/nodejs_logo.png' },
    { name: 'Python', logo: '/src/assets/logos/Python_logo.png' },
    { name: 'HTML5', logo: '/src/assets/logos/HTML_logo.png' },
    { name: 'CSS3', logo: '/src/assets/logos/CSS_logo.png' },
    { name: 'Tailwind CSS', logo: '/src/assets/logos/tailwind_logo.png' },
    { name: 'Bootstrap', logo: '/src/assets/logos/bootstrap_logo.png' },
    { name: 'MongoDB', logo: '/src/assets/logos/mongodb_logo.png' },
    { name: 'PostgreSQL', logo: '/src/assets/logos/postgresql_logo.png' },
    { name: 'SQL', logo: '/src/assets/logos/sql_logo.png' },
    { name: 'Git', logo: '/src/assets/logos/git_logo.png' },
    { name: 'GitHub', logo: '/src/assets/logos/github_logo.png' },
    { name: 'Express.js', logo: '/src/assets/logos/expressjs_logo.png' },
    { name: 'Figma', logo: '/src/assets/logos/figma_logo.png' }
  ];

  // Work experience data
  const workExperience = [
    {
      company: 'OneShield Software',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100',
      position: 'Software Engineer',
      duration: 'Aug 2022 — Present'
    },
    {
      company: 'Design and Code',
      logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100',
      position: 'Founder',
      duration: 'Jan 2021 — Present'
    },
    {
      company: 'BlackboxAI',
      logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100',
      position: 'Design Engineer',
      duration: 'Feb 2025 — Mar 2025'
    },
    {
      company: 'Social3',
      logo: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=100',
      position: 'UI/UX Designer',
      duration: 'Aug 2022 — Sep 2023'
    },
    {
      company: 'TechCorp',
      logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=100',
      position: 'Frontend Developer',
      duration: 'Jan 2022 — Jul 2022'
    }
  ];

  const handleDownloadResume = () => {
    // This will be updated when you upload your resume
    const link = document.createElement('a');
    link.href = '/assets/resume/sriram-resume.pdf'; // You'll upload your resume here
    link.download = 'Sriram_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show only first 3 experiences initially, show all if more than 3
  const displayedExperience = showAllExperience ? workExperience : workExperience.slice(0, 3);
  const shouldShowMoreButton = workExperience.length > 3;

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-[#f7f8fa] dark:bg-black overflow-x-hidden">
      
      {/* Section 1: Hero with Photo and Spinning Text */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mb-16 sm:mb-20 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left - Photo with Spinning Text */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Main Photo */}
                  <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Sriram"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Spinning Text with Arrow */}
                  <div 
                    className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6"
                    onMouseEnter={() => setHoveredArrow(true)}
                    onMouseLeave={() => setHoveredArrow(false)}
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36">
                      {/* Spinning Text */}
                      <svg 
                        className="w-full h-full animate-spin-slow" 
                        viewBox="0 0 100 100"
                      >
                        <defs>
                          <path
                            id="circle"
                            d="M 50, 50 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
                          />
                        </defs>
                        <text className="text-[6px] sm:text-[7px] md:text-[8px] fill-gray-600 dark:fill-gray-400 font-medium">
                          <textPath href="#circle">
                            AVAILABLE FOR WORK • AVAILABLE FOR WORK • 
                          </textPath>
                        </text>
                      </svg>
                      
                      {/* Center Arrow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
                          <ArrowUpRight 
                            size={16} 
                            className={`sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-300 ${
                              hoveredArrow ? 'rotate-0' : '-rotate-45'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Text Content */}
            <div className="text-center lg:text-left">
              <ScrollReveal direction="right" delay={0.2}>
                <BlurText
                  text="A creative developer & digital designer"
                  delay={120}
                  animateBy="letters"
                  direction="bottom"
                  className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8"
                />
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.3}>
                <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
                  I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.4}>
                <button
                  onClick={handleDownloadResume}
                  className="group relative inline-flex items-center gap-3 border border-black dark:border-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    My Resume
                  </span>
                  <Download size={16} className="sm:w-[18px] sm:h-[18px] relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
                  <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: My Story with Interactive Images */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mb-16 sm:mb-20 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="lg">MY STORY</ShinyText>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left - Dynamic Image */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-black/15 dark:shadow-black/30 aspect-[4/3]">
                <motion.img
                  key={hoveredStory}
                  src={storyData[hoveredStory]?.image}
                  alt="Story illustration"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </ScrollReveal>

            {/* Right - Story Text */}
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal direction="right" delay={0.3}>
                <BlurText
                  text="Experience"
                  delay={120}
                  animateBy="letters"
                  direction="bottom"
                  className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white"
                />
              </ScrollReveal>
              
              <div className="space-y-4 sm:space-y-6">
                {storyData.map((story, index) => (
                  <ScrollReveal key={index} direction="right" delay={0.4 + index * 0.1}>
                    <p 
                      className={`text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base cursor-pointer transition-all duration-300 p-4 rounded-xl ${
                        hoveredStory === index 
                          ? 'bg-green-50 dark:bg-green-900/20 text-black dark:text-white' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                      onMouseEnter={() => setHoveredStory(index)}
                    >
                      {story.text}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technologies Marquee - Smaller Version */}
      <section className="mb-12 sm:mb-16 md:mb-20 relative overflow-hidden py-4 sm:py-6">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-[#f7f8fa] dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-[#f7f8fa] dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 sm:gap-2.5 bg-white dark:bg-gray-800 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full shadow-md border border-gray-200 dark:border-gray-700 mx-1.5 sm:mx-2 hover:scale-105 transition-transform duration-300 group whitespace-nowrap"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
                <img 
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Work History */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mb-16 sm:mb-20 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Left - Title and Description (1/3 width) */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
                  <BlurText
                    text="WORK HISTORY"
                    delay={80}
                    animateBy="letters"
                    direction="bottom"
                    className="text-green-500 text-base sm:text-lg md:text-xl font-medium tracking-wider"
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.2}>
                <BlurText
                  text="Experience"
                  delay={120}
                  animateBy="letters"
                  direction="bottom"
                  className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6"
                />
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.3}>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                  I have worked with some of the most innovative industry leaders to help build their top-notch products.
                </p>
              </ScrollReveal>
            </div>

            {/* Right - Experience List (2/3 width) */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {displayedExperience.map((exp, index) => (
                <ScrollReveal key={index} direction="right" delay={0.4 + index * 0.1}>
                  <div className="flex items-center gap-4 sm:gap-5 py-4 sm:py-5 px-4 sm:px-6 bg-white dark:bg-gray-900/50 rounded-2xl shadow-sm shadow-black/5 dark:shadow-black/10 hover:shadow-md hover:shadow-black/10 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
                    
                    {/* Company Logo - Round */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md flex-shrink-0">
                      <img 
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Company Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-clash text-base sm:text-lg font-semibold text-black dark:text-white mb-0.5 sm:mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                        @{exp.company}
                      </p>
                    </div>
                    
                    {/* Duration */}
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-light">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              
              {/* Show More Button - Only visible if more than 3 experiences */}
              {shouldShowMoreButton && (
                <ScrollReveal direction="right" delay={0.8}>
                  <button 
                    onClick={() => setShowAllExperience(!showAllExperience)}
                    className="text-green-500 hover:text-green-600 dark:hover:text-green-400 font-light text-sm sm:text-base transition-colors duration-300 mt-4 underline underline-offset-4"
                  >
                    {showAllExperience ? 'Show Less' : 'Show More'}
                  </button>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Design Process Carousel with Blur Text */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f7f8fa] dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Header content */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="max-w-md">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
                <BlurText
                  text="STEPS I FOLLOW"
                  delay={80}
                  animateBy="letters"
                  direction="bottom"
                  className="text-green-500 text-sm sm:text-base font-medium tracking-wider"
                />
              </div>
              
              <BlurText
                text="My Design Process"
                delay={120}
                animateBy="letters"
                direction="bottom"
                className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6"
              />
              
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                I have worked with some of the most innovative industry leaders to help build their top-notch products.
              </p>
            </div>
          </div>
        </div>
        <DesignProcessCarousel />
      </section>

      {/* Section 6: Available for Work CTA */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mb-16 sm:mb-20 md:mb-24">
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 xl:mx-24">
          <div className="bg-white dark:bg-[#111116] rounded-2xl sm:rounded-3xl py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <BlurText
                    text="Available for work"
                    delay={100}
                    animateBy="letters"
                    direction="bottom"
                    className="text-green-500 text-base sm:text-lg md:text-xl font-medium tracking-wider"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <BlurText
                  text="Let's create your next big idea."
                  delay={120}
                  animateBy="letters"
                  direction="bottom"
                  className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-black dark:text-white"
                />
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
    </div>
  );
};

export default About;