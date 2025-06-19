import React, { useEffect, useRef } from 'react';
import { Edit3, Layers, Palette, Code, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DesignProcessCarousel = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

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
    const container = containerRef.current;
    const cards = cardsRef.current;
    
    if (!container || !cards) return;

    // Calculate the total width of all cards
    const cardWidth = 320; // Width of each card including gap
    const totalWidth = designProcess.length * cardWidth;
    const containerWidth = container.offsetWidth;
    const scrollDistance = totalWidth - containerWidth + 200; // Extra space for smooth ending

    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    tl.to(cards, {
      x: -scrollDistance,
      ease: "none",
      duration: 1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden bg-[#f7f8fa] dark:bg-black py-12 sm:py-16 md:py-20"
    >
      {/* Left side content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mb-8 sm:mb-12">
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

      {/* Horizontal scrolling carousel */}
      <div className="relative overflow-hidden">
        <div 
          ref={cardsRef}
          className="flex gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-16"
          style={{ width: 'max-content' }}
        >
          {designProcess.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white dark:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
                style={{ minWidth: '300px' }}
              >
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                  <IconComponent 
                    size={28} 
                    className="sm:w-8 sm:h-8 text-green-500" 
                  />
                </div>
                
                {/* Number and Title */}
                <h3 className="font-clash text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                  {step.number}. {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesignProcessCarousel;