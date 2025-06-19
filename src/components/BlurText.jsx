import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlurText = ({
  text,
  delay = 50,
  animateBy = 'letters',
  direction = 'bottom',
  onAnimationComplete,
  className = '',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: once
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else if (!once) {
      setIsVisible(false);
    }
  }, [inView, once]);

  // Split text based on animateBy prop
  const getTextArray = () => {
    if (animateBy === 'letters') {
      return text.split('');
    } else if (animateBy === 'words') {
      return text.split(' ');
    }
    return [text];
  };

  const textArray = getTextArray();

  // Animation variants based on direction
  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        filter: 'blur(10px)',
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.4,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    };

    switch (direction) {
      case 'top':
        baseVariants.hidden.y = -20;
        baseVariants.visible.y = 0;
        break;
      case 'bottom':
        baseVariants.hidden.y = 20;
        baseVariants.visible.y = 0;
        break;
      case 'left':
        baseVariants.hidden.x = -20;
        baseVariants.visible.x = 0;
        break;
      case 'right':
        baseVariants.hidden.x = 20;
        baseVariants.visible.x = 0;
        break;
      default:
        baseVariants.hidden.y = 20;
        baseVariants.visible.y = 0;
    }

    return baseVariants;
  };

  const variants = getVariants();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.1,
        onComplete: onAnimationComplete
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          variants={variants}
          className="inline-block"
          style={{
            marginRight: animateBy === 'words' && char !== '' ? '0.25em' : '0',
            marginLeft: char === ' ' ? '0.25em' : '0'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BlurText;