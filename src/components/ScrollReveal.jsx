import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 20, // Reduced default distance to minimize layout shifts
  className = '',
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-10px 0px -10px 0px" // Reduced margin for smoother triggering
  });

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    scale: { scale: 0.98, opacity: 0 }, // Minimal scale change
    fade: { opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { 
        x: 0, 
        y: 0, 
        scale: 1, 
        opacity: 1 
      } : directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "tween"
      }}
      className={`scroll-reveal-container ${className}`}
      data-scroll-reveal="true"
      style={{
        // Ensure the container maintains its space to prevent layout shifts
        minHeight: 'fit-content',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;