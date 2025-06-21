import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 30,
  className = '',
  once = true 
}) => {
  const ref = useRef(null);
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const lastLocationRef = useRef(location.pathname);
  const isNavigatingRef = useRef(false);
  
  const isInView = useInView(ref, { 
    once, 
    margin: "-50px 0px -50px 0px"
  });

  // Track navigation state and user scrolling
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Only count as user scroll if we're not in navigation state
      if (isNavigatingRef.current) return;
      
      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      // Set a small delay to ensure this is intentional scrolling
      scrollTimeout = setTimeout(() => {
        if (!isNavigatingRef.current) {
          setHasUserScrolled(true);
        }
      }, 50);
    };

    // Reset everything when location changes
    if (lastLocationRef.current !== location.pathname) {
      setHasUserScrolled(false);
      setShouldAnimate(false);
      isNavigatingRef.current = true;
      lastLocationRef.current = location.pathname;
      
      // Clear navigation state after a brief delay
      const navigationDelay = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 200);
      
      return () => {
        clearTimeout(navigationDelay);
        clearTimeout(scrollTimeout);
      };
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  // Only allow animation if user has scrolled and element is in view
  useEffect(() => {
    if (hasUserScrolled && isInView && !isNavigatingRef.current) {
      setShouldAnimate(true);
    } else if (!hasUserScrolled || isNavigatingRef.current) {
      setShouldAnimate(false);
    }
  }, [hasUserScrolled, isInView]);

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    scale: { scale: 0.95, opacity: 0 },
    fade: { opacity: 0 }
  };

  return (
    <motion.div
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
        delay: shouldAnimate ? delay : 0,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "tween"
      }}
      className={`scroll-reveal-element ${className}`}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;