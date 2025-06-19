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

    // Only apply horizontal scroll on larger screens (1024px+)
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const setupHorizontalScroll = () => {
      if (mediaQuery.matches) {
        // Calculate scroll distance
        const cardWidth = 320; // Width of each card including gap
        const totalWidth = designProcess.length * cardWidth;
        const containerWidth = section.offsetWidth;
        const scrollDistance = Math.max(0, totalWidth - containerWidth + 200);

        if (scrollDistance > 0) {
          // Create horizontal scroll animation
          gsap.to(cards, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
              invalidateOnRefresh: true,
            }
          });
        }
      }
    };

    setupHorizontalScroll();

    // Re-setup on resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      setTimeout(setupHorizontalScroll, 100);
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
        {/* Header content */}
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

        {/* Desktop: Horizontal scrolling cards (1024px+) */}
        <div 
          ref={containerRef}
          className="hidden lg:block relative overflow-hidden"
        >
          <div 
            ref={cardsRef}
            className="flex gap-6 xl:gap-8"
            style={{ width: 'max-content' }}
          >
            {designProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 xl:w-80 bg-white dark:bg-gray-900 rounded-2xl p-6 xl:p-8 border border-gray-200 dark:border-gray-800"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                    <IconComponent 
                      size={24} 
                      className="xl:w-7 xl:h-7 text-green-500" 
                    />
                  </div>
                  
                  {/* Number and Title */}
                  <h3 className="font-clash text-xl xl:text-2xl font-bold text-black dark:text-white mb-4">
                    {step.number}. {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Infinite scroll animation (below 1024px) */}
        <div className="lg:hidden relative overflow-hidden">
          {/* First row - left to right */}
          <div className="flex animate-marquee whitespace-nowrap mb-4">
            {[...designProcess, ...designProcess].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-64 sm:w-72 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 mx-2 sm:mx-3"
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

          {/* Second row - right to left */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...designProcess.slice().reverse(), ...designProcess.slice().reverse()].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-64 sm:w-72 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 mx-2 sm:mx-3"
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
      </div>
    </section>
  );
};

export default DesignProcessCarousel;