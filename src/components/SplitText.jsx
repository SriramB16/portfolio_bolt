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
      scale: 0.5
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
      className={`inline-block split-text-container ${className}`}
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
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            background: 'inherit',
            WebkitBackgroundClip: 'inherit',
            WebkitTextFillColor: 'inherit',
            backgroundClip: 'inherit',
            filter: 'inherit'
          }}
          whileHover={{ 
            scale: 1.1,
            filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.8))'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;