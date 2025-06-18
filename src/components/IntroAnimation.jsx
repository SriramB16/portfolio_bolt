import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [showSlideUp, setShowSlideUp] = useState(false);
  const letters = ['S', 'R', 'I', 'R', 'A', 'M'];

  useEffect(() => {
    // Start animating letters one by one
    const letterInterval = setInterval(() => {
      setCurrentLetterIndex(prev => {
        if (prev < letters.length - 1) {
          return prev + 1;
        } else {
          clearInterval(letterInterval);
          // Hold for a moment, then slide up
          setTimeout(() => {
            setShowSlideUp(true);
            // Complete animation
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 1000);
          return prev;
        }
      });
    }, 150); // Faster letter appearance

    return () => clearInterval(letterInterval);
  }, [onComplete, letters.length]);

  const letterVariants = {
    hidden: { 
      y: 120,
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: { 
      y: "-100vh",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {!showSlideUp && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ 
            backgroundColor: '#1a1a1a',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
          }}
          variants={containerVariants}
          initial="hidden"
          exit="exit"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Letters container */}
          <div className="flex items-baseline justify-center relative z-10 px-4">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{ 
                  height: '1.2em',
                  display: 'inline-block'
                }}
              >
                <motion.div
                  variants={letterVariants}
                  initial="hidden"
                  animate={index <= currentLetterIndex ? "visible" : "hidden"}
                  className="relative"
                >
                  <span
                    className="block text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none"
                    style={{
                      fontFamily: "'Orbitron', 'Inter', sans-serif",
                      color: '#FFFFFF',
                      fontWeight: 900,
                      letterSpacing: '0.05em',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                      marginRight: index === letters.length - 1 ? '0' : '0.02em'
                    }}
                  >
                    {letter}
                  </span>
                  
                  {/* Subtle glow effect */}
                  <span
                    className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none opacity-20 blur-sm"
                    style={{
                      fontFamily: "'Orbitron', 'Inter', sans-serif",
                      color: '#FFFFFF',
                      fontWeight: 900,
                      letterSpacing: '0.05em',
                      marginRight: index === letters.length - 1 ? '0' : '0.02em'
                    }}
                  >
                    {letter}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Minimal ambient particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                y: [0, -50, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;