import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 50,
  className = '',
  once = true 
}) => {
  const ref = useRef(null);
  const location = useLocation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [key, setKey] = useState(0);

  // Reset animation state when location changes
  useEffect(() => {
    setHasAnimated(false);
    setKey(prev => prev + 1); // Force re-render with new key
  }, [location.pathname]);

  const isInView = useInView(ref, { 
    once: false, // Always allow re-triggering
    margin: "-50px 0px -50px 0px"
  });

  // Track if animation should play
  const shouldAnimate = isInView && (!hasAnimated || !once);

  // Mark as animated when it comes into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    fade: { opacity: 0 }
  };

  return (
    <motion.div
      key={`${key}-${location.pathname}`} // Unique key per page
      ref={ref}
      initial={directionVariants[direction]}
      animate={shouldAnimate ? { 
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;