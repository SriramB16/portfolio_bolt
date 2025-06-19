import React, { useEffect, useRef } from 'react';
import { Edit3, Layers, Palette, Code, Shield } from 'lucide-react';

const DesignProcessCarousel = () => {
  const carouselRef = useRef(null);

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
    const initializeCarousel = async () => {
      try {
        // Dynamically import scroll-carousel
        const ScrollCarousel = (await import('scroll-carousel')).default;
        
        if (carouselRef.current) {
          new ScrollCarousel(carouselRef.current, {
            smartSpeed: true,
            direction: "rtl",
            speed: 1,
            autoplay: false
          });
        }
      } catch (error) {
        console.log('Scroll carousel not available, using fallback');
        // Fallback: manual scroll handling
        const handleScroll = () => {
          if (!carouselRef.current) return;
          
          const rect = carouselRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          // Calculate scroll progress when element is in view
          if (elementTop < windowHeight && elementTop + elementHeight > 0) {
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
            const translateX = (scrollProgress - 0.5) * 200; // Adjust multiplier for speed
            
            const carousel = carouselRef.current.querySelector('.carousel-track');
            if (carousel) {
              carousel.style.transform = `translateX(${translateX}px)`;
            }
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    };

    initializeCarousel();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black dark:bg-black py-12 sm:py-16 md:py-20">
      {/* Left side content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mb-8 sm:mb-12">
        <div className="max-w-md">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
            <span className="text-green-500 text-sm sm:text-base font-medium tracking-wider">STEPS I FOLLOW</span>
          </div>
          
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            My Design Process
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            I have worked with some of the most innovative industry leaders to help build their top-notch products.
          </p>
        </div>
      </div>

      {/* Horizontal scrolling carousel */}
      <div 
        ref={carouselRef}
        className="scroll-carousel overflow-hidden"
        style={{ width: '100vw' }}
      >
        <div className="carousel-track flex gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-16 transition-transform duration-100 ease-out">
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