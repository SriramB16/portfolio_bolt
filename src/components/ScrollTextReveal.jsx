import React, { useEffect, useRef, useState } from 'react';

const ScrollTextReveal = () => {
  const containerRef = useRef(null);
  const [revealedLetters, setRevealedLetters] = useState(new Set());

  const text = "I'm Sriram -- a developer who loves turning ideas into smooth, functional digital experiences. With 2 years of experience, I focus on writing clean code and building things people enjoy using. I'm always exploring, learning, and growing with the tech that keeps me inspired";
  
  // Split text into letters while preserving spaces
  const letters = text.split('').map((char, index) => ({
    char: char === ' ' ? '\u00A0' : char, // Use non-breaking space
    index,
    isSpace: char === ' '
  }));

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
      
      // Start revealing when container enters viewport, end when it exits
      const startReveal = windowHeight * 0.8; // Start earlier for smoother effect
      const endReveal = -containerHeight * 0.2;
      
      // Calculate scroll progress through the container
      const scrollProgress = Math.max(0, Math.min(1, (startReveal - containerTop) / (startReveal - endReveal)));
      
      // Calculate how many letters should be revealed based on scroll progress
      const totalLetters = letters.length;
      const lettersToReveal = Math.floor(scrollProgress * totalLetters);
      
      // Create new set of revealed letter indices
      const newRevealedLetters = new Set();
      for (let i = 0; i < lettersToReveal; i++) {
        newRevealedLetters.add(i);
      }
      
      setRevealedLetters(newRevealedLetters);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [letters.length]);

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
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed font-light font-satoshi tracking-wide">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out ${
                  revealedLetters.has(index)
                    ? 'text-black dark:text-white opacity-100 transform translate-y-0 scale-100'
                    : 'text-gray-300 dark:text-gray-700 opacity-30 transform translate-y-1 scale-95'
                } ${letter.isSpace ? 'w-2 sm:w-3' : ''}`}
                style={{
                  transitionDelay: `${index * 20}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {letter.char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextReveal;