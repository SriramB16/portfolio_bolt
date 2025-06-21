import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Start progress bar on route change
    setIsVisible(true);
    setProgress(0);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Hide progress bar after completion
          setTimeout(() => {
            setIsVisible(false);
          }, 200);
          return 100;
        }
        // Accelerate progress towards the end
        const increment = prev < 70 ? Math.random() * 15 + 5 : Math.random() * 25 + 10;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
    };
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] h-1">
      <div 
        className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 transition-all duration-100 ease-out shadow-sm"
        style={{ 
          width: `${progress}%`,
          boxShadow: progress > 0 ? '0 0 10px rgba(34, 197, 94, 0.5)' : 'none'
        }}
      />
    </div>
  );
};

export default LoadingProgressBar;