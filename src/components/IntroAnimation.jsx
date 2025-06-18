import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState('letters'); // 'letters', 'slideUp', 'complete'
  const [lettersVisible, setLettersVisible] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    // Animate letters one by one
    const letterTimings = [200, 400, 600, 800, 1000, 1200];
    
    letterTimings.forEach((delay, index) => {
      setTimeout(() => {
        setLettersVisible(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, delay);
    });

    // Start slide up animation after all letters are visible
    setTimeout(() => {
      setAnimationStage('slideUp');
    }, 2000);

    // Complete animation and call onComplete
    setTimeout(() => {
      setAnimationStage('complete');
      onComplete();
    }, 2800);
  }, [onComplete]);

  if (animationStage === 'complete') {
    return null;
  }

  const letters = ['S', 'R', 'I', 'R', 'A', 'M'];

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-transform duration-800 ease-in-out ${
        animationStage === 'slideUp' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex space-x-4 md:space-x-8">
        {letters.map((letter, index) => (
          <div
            key={index}
            className={`text-6xl md:text-8xl lg:text-9xl font-bold text-white transition-all duration-700 ease-out ${
              lettersVisible[index] 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-8 scale-75'
            }`}
            style={{
              fontFamily: "'Ryze', 'Inter', sans-serif",
              textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
              background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF8C00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transitionDelay: `${index * 100}ms`
            }}
          >
            {letter}
          </div>
        ))}
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-golden/20 via-transparent to-golden-light/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      </div>
    </div>
  );
};

export default IntroAnimation;