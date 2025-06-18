import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showSlideUp, setShowSlideUp] = useState(false);
  const letters = ['S', 'R', 'I', 'R', 'A', 'M'];

  useEffect(() => {
    // Animate letters sequentially
    const letterInterval = setInterval(() => {
      setCurrentLetterIndex(prev => {
        if (prev < letters.length - 1) {
          return prev + 1;
        } else {
          clearInterval(letterInterval);
          // Start slide up after a brief pause
          setTimeout(() => {
            setShowSlideUp(true);
            // Complete animation
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 800);
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(letterInterval);
  }, [onComplete, letters.length]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.5,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.8
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
          style={{ backgroundColor: '#000000' }}
          variants={containerVariants}
          initial="hidden"
          exit="exit"
        >
          {/* Subtle animated background elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, rgba(64,64,64,0.1), transparent, rgba(96,96,96,0.1))'
              }}
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(64,64,64,0.1), transparent, rgba(96,96,96,0.1))",
                  "linear-gradient(225deg, rgba(96,96,96,0.1), transparent, rgba(64,64,64,0.1))",
                  "linear-gradient(45deg, rgba(64,64,64,0.1), transparent, rgba(96,96,96,0.1))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(128,128,128,0.05)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(160,160,160,0.05)' }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          {/* Letters container */}
          <div className="flex space-x-2 md:space-x-4 lg:space-x-6 relative z-10">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={letterVariants}
                initial="hidden"
                animate={index <= currentLetterIndex ? "visible" : "hidden"}
              >
                <motion.span
                  className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black"
                  style={{
                    fontFamily: "'Orbitron', 'Inter', sans-serif",
                    color: '#FFFFFF',
                    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.6))'
                  }}
                >
                  {letter}
                </motion.span>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black blur-sm"
                  style={{ 
                    fontFamily: "'Orbitron', 'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.2)'
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                >
                  {letter}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Particle effects */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: '#FFFFFF',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
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