import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShinyText from './ShinyText';

const ScrollTextReveal = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const [revealedWords, setRevealedWords] = useState(new Set());
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const lastLocationRef = useRef(location.pathname);

  const text = "I'm Sriram -- a developer who loves turning ideas into smooth, functional digital experiences. With 2 years of experience, I focus on writing clean code and building things people enjoy using. I'm always exploring, learning, and growing with the tech that keeps me inspired";
  
  const words = text.split(' ');

  // Track user scrolling and reset on navigation
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setHasUserScrolled(true);
      }, 100);
    };

    // Reset when location changes
    if (lastLocationRef.current !== location.pathname) {
      setHasUserScrolled(false);
      setRevealedWords(new Set());
      lastLocationRef.current = location.pathname;
      
      // Add delay before allowing scroll animations
      const navigationDelay = setTimeout(() => {
        setHasUserScrolled(true);
      }, 500);
      
      return () => {
        clearTimeout(navigationDelay);
        clearTimeout(scrollTimeout);
      };
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  useEffect(() => {
    // Only run scroll animation if user has actually scrolled
    if (!hasUserScrolled) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const containerHeight = containerRect.height;
      
      // If coming from below (section is above viewport), show completed animation
      if (containerBottom < 0) {
        const allWords = new Set();
        for (let i = 0; i < words.length; i++) {
          allWords.add(i);
        }
        setRevealedWords(allWords);
        return;
      }
      
      // If section hasn't entered viewport from top yet, reset animation
      if (containerTop > windowHeight) {
        setRevealedWords(new Set());
        return;
      }
      
      // Animation timing
      const startReveal = windowHeight * 0.8;
      const endReveal = -containerHeight * 0.2;
      
      const scrollProgress = Math.max(0, Math.min(1, (startReveal - containerTop) / (startReveal - endReveal)));
      
      const totalWords = words.length;
      const wordsToReveal = Math.floor(scrollProgress * totalWords);
      
      const newRevealedWords = new Set();
      for (let i = 0; i < wordsToReveal; i++) {
        newRevealedWords.add(i);
      }
      
      setRevealedWords(newRevealedWords);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call only if user has scrolled
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length, hasUserScrolled]);

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black scroll-reveal-container"
      style={{
        minHeight: '60vh'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 justify-center">
          <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
          <ShinyText size="lg">ABOUT ME</ShinyText>
        </div>

        {/* Animated Text */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed font-medium font-satoshi tracking-wide">
            {words.map((word, index) => (
              <span
                key={`${index}-${location.pathname}`}
                className={`inline-block mr-2 sm:mr-3 ${
                  revealedWords.has(index)
                    ? 'text-black dark:text-white opacity-100'
                    : 'text-gray-300 dark:text-gray-700 opacity-30'
                }`}
                style={{
                  transition: 'color 0.3s ease-out, opacity 0.3s ease-out',
                  transitionDelay: `${index * 15}ms`,
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextReveal;