import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.1,
  animationType = 'slideUp',
  style = {}
}) => {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateX: -90,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: duration
      }
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={style}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block split-text-letter"
          variants={letterVariants}
          style={{ 
            display: 'inline-block',
            marginRight: letter === ' ' ? '0.5em' : '0',
            color: '#FFFFFF',
            fontWeight: 800,
            fontFamily: "'Coda', 'Inter', sans-serif"
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;