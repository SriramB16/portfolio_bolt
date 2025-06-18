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
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-golden/10 via-transparent to-golden-light/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(255,215,0,0.1), transparent, rgba(255,165,0,0.1))",
                  "linear-gradient(225deg, rgba(255,165,0,0.1), transparent, rgba(255,215,0,0.1))",
                  "linear-gradient(45deg, rgba(255,215,0,0.1), transparent, rgba(255,165,0,0.1))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-golden-light/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          {/* Main text animation - centered */}
          <div className="relative z-10 text-center px-4 flex items-center justify-center min-h-screen">
            {animationStarted && (
              <SplitText
                text="SRIRAM"
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black intro-text-ryzes"
                delay={0.2}
                duration={0.8}
                staggerDelay={0.15}
                animationType="slideUp"
                style={{
                  fontFamily: "'Ryzes', 'Orbitron', 'Inter', sans-serif",
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                  filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))',
                }}
              />
            )}
          </div>

          {/* Particle effects */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-golden rounded-full"
              style={{
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