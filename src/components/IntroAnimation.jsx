import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from './SplitText';

const IntroAnimation = ({ onComplete }) => {
  const [showSlideUp, setShowSlideUp] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start animation immediately
    setAnimationStarted(true);
    
    // After 3.5 seconds, start slide up animation
    const slideUpTimer = setTimeout(() => {
      setShowSlideUp(true);
      // Complete animation after slide up
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 3500);

    return () => clearTimeout(slideUpTimer);
  }, [onComplete]);

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
          {/* Main text animation - centered */}
          <div className="relative z-10 text-center px-4 flex items-center justify-center min-h-screen">
            {animationStarted && (
              <SplitText
                text="SRIRAM"
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black intro-text"
                delay={0.2}
                duration={0.8}
                staggerDelay={0.15}
                animationType="slideUp"
                style={{
                  fontFamily: "'Coda', 'Inter', sans-serif",
                  color: '#FFFFFF',
                  fontWeight: 800,
                  letterSpacing: '0.1em'
                }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;