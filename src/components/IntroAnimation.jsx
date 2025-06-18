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
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          exit="exit"
        >
          {/* Letters container - smaller and more centered */}
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
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white"
                  style={{
                    fontFamily: "'Ryzes', 'Orbitron', 'Inter', sans-serif",
                  }}
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {letter}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;