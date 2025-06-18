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

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
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
          <motion.div 
            className="absolute inset-0"
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtle gradient overlay */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(64,64,64,0.1) 0%, transparent 70%)'
              }}
              animate={{
                background: [
                  "radial-gradient(circle at center, rgba(64,64,64,0.1) 0%, transparent 70%)",
                  "radial-gradient(circle at center, rgba(96,96,96,0.15) 0%, transparent 70%)",
                  "radial-gradient(circle at center, rgba(64,64,64,0.1) 0%, transparent 70%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -100, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Main text animation */}
          <div className="relative z-10 text-center px-4">
            {animationStarted && (
              <SplitText
                text="SRIRAM"
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black"
                delay={0.2}
                duration={0.8}
                staggerDelay={0.15}
                animationType="slideUp"
                style={{
                  fontFamily: "'Orbitron', 'Inter', sans-serif",
                  color: '#FFFFFF',
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                }}
              />
            )}
            
            {/* Glow effect behind text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black blur-sm"
                style={{ 
                  fontFamily: "'Orbitron', 'Inter', sans-serif",
                  color: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                SRIRAM
              </div>
            </motion.div>
          </div>

          {/* Subtle pulse effect */}
          <motion.div
            className="absolute inset-0 border border-white/10 rounded-full"
            style={{
              width: '200px',
              height: '200px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;