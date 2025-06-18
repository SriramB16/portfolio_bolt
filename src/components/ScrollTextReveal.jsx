import React, { useEffect, useRef, useState } from 'react';

const ScrollTextReveal = () => {
  const containerRef = useRef(null);
  const [revealedWords, setRevealedWords] = useState(new Set());

  const text = "I'm Devraj Chatribin, with over 5+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products.";
  
  const words = text.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container is visible
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const containerHeight = containerRect.height;
      
      // Start revealing when container enters viewport
      const startReveal = windowHeight;
      const endReveal = -containerHeight;
      
      // Calculate scroll progress through the container
      const scrollProgress = Math.max(0, Math.min(1, (startReveal - containerTop) / (startReveal - endReveal)));
      
      // Calculate how many words should be revealed based on scroll progress
      const totalWords = words.length;
      const wordsToReveal = Math.floor(scrollProgress * totalWords);
      
      // Create new set of revealed word indices
      const newRevealedWords = new Set();
      for (let i = 0; i < wordsToReveal; i++) {
        newRevealedWords.add(i);
      }
      
      setRevealedWords(newRevealedWords);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 justify-center">
          <span className="text-green-500 text-xs sm:text-sm font-medium">✦ ABOUT ME</span>
        </div>

        {/* Animated Text */}
        <div className="text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed font-medium font-satoshi">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-2 sm:mr-3 md:mr-4 transition-all duration-500 ease-out ${
                  revealedWords.has(index)
                    ? 'text-black dark:text-white opacity-100 transform translate-y-0'
                    : 'text-gray-300 dark:text-gray-700 opacity-40 transform translate-y-2'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
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