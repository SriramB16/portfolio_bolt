import React, { useEffect, useRef } from 'react';
import { Edit3, Layers, Palette, Code, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DesignProcessCarousel = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);

  const designProcess = [
    {
      number: '01',
      title: 'Strategize',
      description: 'To create something awesome, one must first talk about the details. Planning is essential.',
      icon: Edit3
    },
    {
      number: '02',
      title: 'Wireframe',
      description: 'After hashing out the details of the website, it\'s easy to throw the ideas onto pen & paper.',
      icon: Layers
    },
    {
      number: '03',
      title: 'Design',
      description: 'The most fun part of all - adding pizzaz to the wireframes and bring it to life.',
      icon: Palette
    },
    {
      number: '04',
      title: 'Development',
      description: 'The design may be final but it needs to be functional and practical. Development is key.',
      icon: Code
    },
    {
      number: '05',
      title: 'Quality Assurance',
      description: 'Website load times, SEO, file optimization, etc., weigh in to the quality of the site.',
      icon: Shield
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    
    if (!section || !cards) return;

    // Only apply horizontal scroll on larger screens
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const setupAnimation = () => {
      if (mediaQuery.matches) {
        // Calculate the total width of all cards
        const cardWidth = 280; // Width of each card including gap
        const totalWidth = designProcess.length * cardWidth;
        const containerWidth = section.offsetWidth;
        const scrollDistance = totalWidth - containerWidth + 100;

        // Create horizontal scroll animation that starts when section is fully visible
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 20%", // Start when section is 20% from top
            end: "bottom 80%", // End when section is 80% from bottom
            scrub: 1.5,
            invalidateOnRefresh: true,
          }
        });

        tl.to(cards, {
          x: -scrollDistance,
          ease: "none",
          duration: 1
        });
      }
    };

    setupAnimation();

    // Re-setup on resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      setupAnimation();
    };

    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f7f8fa] dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Left side content */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <span className="text-green-500 text-sm sm:text-base font-medium tracking-wider">STEPS I FOLLOW</span>
            </div>
            
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              My Design Process
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              I have worked with some of the most innovative industry leaders to help build their top-notch products.
            </p>
          </div>
        </div>

        {/* Cards container */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
        >
          <div 
            ref={cardsRef}
            className="flex gap-4 sm:gap-6 lg:gap-8"
            style={{ width: 'max-content' }}
          >
            {designProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-800"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent 
                      size={20} 
                      className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500" 
                    />
                  </div>
                  
                  {/* Number and Title */}
                  <h3 className="font-clash text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                    {step.number}. {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Show cards in grid on smaller screens */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {designProcess.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={`mobile-${index}`}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <IconComponent 
                    size={20} 
                    className="sm:w-6 sm:h-6 text-green-500" 
                  />
                </div>
                
                {/* Number and Title */}
                <h3 className="font-clash text-lg sm:text-xl font-bold text-black dark:text-white mb-3">
                  {step.number}. {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignProcessCarousel;