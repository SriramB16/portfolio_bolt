import React, { useEffect, useRef, useState } from 'react';
import ShinyText from './ShinyText';

const ScrollTextReveal = () => {
  const containerRef = useRef(null);
  const [revealedWords, setRevealedWords] = useState(new Set());

  const text = "I'm Sriram -- a developer who loves turning ideas into smooth, functional digital experiences. With 2 years of experience, I focus on writing clean code and building things people enjoy using. I'm always exploring, learning, and growing with the tech that keeps me inspired";
  
  // Split text into words
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
      
      // Animation timing - starts earlier and completes faster
      const startReveal = windowHeight * 0.8; // Start when 80% down the viewport
      const endReveal = -containerHeight * 0.2; // End when 20% of container is above viewport
      
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
          <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
          <ShinyText size="lg">ABOUT ME</ShinyText>
        </div>

        {/* Animated Text */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed font-medium font-satoshi tracking-wide">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-300 ease-out mr-2 sm:mr-3 ${
                  revealedWords.has(index)
                    ? 'text-black dark:text-white opacity-100 transform translate-y-0'
                    : 'text-gray-300 dark:text-gray-700 opacity-30 transform translate-y-2'
                }`}
                style={{
                  transitionDelay: `${index * 15}ms` // Faster animation
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