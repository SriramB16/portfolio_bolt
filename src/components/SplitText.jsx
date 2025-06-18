import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.1,
  animationType = 'slideUp'
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

  const getLetterVariants = () => {
    switch (animationType) {
      case 'slideUp':
        return {
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
      case 'fadeIn':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: duration }
          },
        };
      case 'slideDown':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: duration }
          },
        };
      case 'slideLeft':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: duration }
          },
        };
      case 'slideRight':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: duration }
          },
        };
      case 'scale':
        return {
          hidden: { scale: 0, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: duration 
            }
          },
        };
      case 'rotate':
        return {
          hidden: { rotate: 180, opacity: 0 },
          visible: { 
            rotate: 0, 
            opacity: 1,
            transition: { duration: duration }
          },
        };
      default:
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: duration }
          },
        };
    }
  };

  const letterVariants = getLetterVariants();

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letterVariants}
          style={{ 
            display: letter === ' ' ? 'inline' : 'inline-block',
            marginRight: letter === ' ' ? '0.5em' : '0'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;