import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero section for demo purposes */}
      <div className="pt-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Scroll down to see the navbar animation in action. This page demonstrates the navbar component with smooth width reduction on scroll.
          </p>
          
          {/* Content to enable scrolling */}
          <div className="space-y-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Section {index + 1}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
                  Cras porttitor, ex in tempor facilisis, felis massa fermentum nibh, ut commodo nulla arcu vitae enim.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;