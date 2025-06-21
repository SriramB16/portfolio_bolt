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
  
  const isInView = useInView(ref, { 
    once, 
    margin: "-50px 0px -50px 0px"
  });

  // Track if user has actually scrolled after navigation
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      // Set a small delay to ensure this is intentional scrolling, not programmatic
      scrollTimeout = setTimeout(() => {
        setHasUserScrolled(true);
      }, 100);
    };

    // Reset scroll tracking when location changes
    if (lastLocationRef.current !== location.pathname) {
      setHasUserScrolled(false);
      setShouldAnimate(false);
      lastLocationRef.current = location.pathname;
      
      // Add a delay before allowing animations to prevent immediate triggering
      const navigationDelay = setTimeout(() => {
        setHasUserScrolled(true);
      }, 500); // 500ms delay after navigation
      
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
    if (hasUserScrolled && isInView) {
      setShouldAnimate(true);
    } else if (!hasUserScrolled) {
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