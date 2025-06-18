import React from 'react';
import { motion } from 'framer-motion';

const WavingHandSVG = ({ className = "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{ 
        rotate: [0, 14, -8, 14, -4, 10, 0],
        scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut"
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0,0,256,256" 
        className="w-full h-full"
        fill="currentColor"
      >
        <g fill="#30af5b" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
          <g transform="translate(-51.57172,94.95822) rotate(-40) scale(2,2)">
            <path d="M34.7,114.1h41.1c1.7,0 3,-1.3 3,-3v-11.2c0,-2.4 0.7,-4.7 1.9,-6.6l19.3,-29.8c2.4,-3.7 1.7,-8.7 -1.7,-11.6c-1.5,-1.3 -3.4,-2 -5.5,-2c-2.5,0 -4.8,1 -6.5,2.7l-5.3,5.5v-26.5c0,-5 -3.8,-9.2 -8.6,-9.6c-1.4,-0.1 -2.8,0.1 -4,0.7c-0.9,-4.2 -4.6,-7.4 -9,-7.4h-0.7c-4.9,0 -9,3.9 -9.2,8.8c-1.2,-0.5 -2.5,-0.7 -3.9,-0.6c-4.8,0.3 -8.6,4.5 -8.6,9.6v6.4c-0.7,-0.2 -1.4,-0.3 -2.1,-0.3c-4.5,0 -8.1,3.7 -8.1,8.2v25.1c0,5.6 0.9,11.1 2.7,16.4c1.6,4.7 2.4,9.5 2.4,14.4v7.8c-0.2,1.7 1.2,3 2.8,3zM32.6,47.5c0,-1.2 1,-2.2 2.1,-2.2c1.1,0 2.1,1 2.1,2.2v14.9c0,1.7 1.3,3 3,3v0v0.1c0.8,0.4 1.5,-0.1 2,-0.7c0.2,-0.2 0.3,-0.4 0.4,-0.6c0.3,-0.4 0.5,-0.9 0.6,-1.5c0.1,-0.4 0.1,-0.7 0.1,-1.1v-14.1v-14.7c0,-0.3 0,-0.5 0.1,-0.8c0.4,-1.4 1.5,-2.5 2.9,-2.5c1.8,-0.1 3.4,1.4 3.5,3.3v0.1v20.6c0,1.7 1.3,3 3,3c1.7,0 3,-1.3 3,-3v-20.6v0v-8.2c0,-1.9 1.5,-3.4 3.2,-3.4h0.7c1.8,0 3.2,1.5 3.2,3.4v6.6v0.1v0v0v0l0.1,20.7c0,1.7 1.3,3 3,3v0c1.7,0 3,-1.4 3,-3l-0.1,-20.7c0,-1.9 1.6,-3.5 3.5,-3.4c1.7,0.1 3,1.7 3,3.6v33.9c0,1.2 0.7,2.3 1.9,2.8c1.1,0.5 2.4,0.2 3.3,-0.7l10.5,-10.7c0.9,-0.9 2.8,-1.1 3.8,-0.3c1.1,0.9 1.3,2.6 0.5,3.8l-24.3,29.6c-1.4,2.1 -2.2,4.4 -2.6,6.9c-0.3,-0.1 -19.7,-0.2 -19.7,-0.2c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h13.7c0.2,0 0.5,0 0.7,-0.1v5.4h-25.1v-4.8c0,-5.6 -0.9,-11.1 -2.7,-16.4c-1.6,-4.7 -2.4,-9.5 -2.4,-14.4z"></path>
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default WavingHandSVG;