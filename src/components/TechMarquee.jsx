import React from 'react';
import Marquee from 'react-fast-marquee';

const TechMarquee = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'Python', icon: '🐍', color: 'from-green-500 to-blue-500' },
    { name: 'HTML5', icon: '🧡', color: 'from-orange-400 to-red-500' },
    { name: 'CSS3', icon: '🔵', color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind', icon: '💨', color: 'from-cyan-400 to-blue-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-indigo-600' },
    { name: 'Git', icon: '📝', color: 'from-orange-500 to-red-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-black' },
    { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-green-600' },
    { name: 'Express', icon: '🚀', color: 'from-gray-600 to-gray-800' },
    { name: 'GraphQL', icon: '🔗', color: 'from-pink-400 to-purple-500' },
    { name: 'Redis', icon: '🔴', color: 'from-red-400 to-red-600' },
    { name: 'Figma', icon: '🎨', color: 'from-purple-400 to-pink-500' },
    { name: 'VS Code', icon: '💙', color: 'from-blue-500 to-blue-700' }
  ];

  return (
    <div className="w-full py-6 sm:py-8 relative">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 2xl:w-40 bg-gradient-to-r from-[#f7f8fa] dark:from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 2xl:w-40 bg-gradient-to-l from-[#f7f8fa] dark:from-black to-transparent z-10 pointer-events-none"></div>
      
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        className="bg-white dark:bg-gray-900 py-4 sm:py-6"
      >
        {technologies.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2 sm:gap-3 bg-[#f7f8fa] dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mx-2 sm:mx-4 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
            </div>
            <span className="font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap text-sm sm:text-base">
              {tech.name}
            </span>
            <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`}></div>
          </div>
        ))}
      </Marquee>
      
      {/* Second row with reverse direction */}
      <div className="relative">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 2xl:w-40 bg-gradient-to-r from-[#f7f8fa] dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 2xl:w-40 bg-gradient-to-l from-[#f7f8fa] dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        <Marquee
          gradient={false}
          speed={40}
          direction="right"
          pauseOnHover={false}
          className="bg-white dark:bg-gray-900 py-4 sm:py-6 mt-3 sm:mt-4"
        >
          {technologies.slice().reverse().map((tech, index) => (
            <div
              key={`${tech.name}-reverse-${index}`}
              className="flex items-center gap-2 sm:gap-3 bg-[#f7f8fa] dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mx-2 sm:mx-4 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative">
                <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap text-sm sm:text-base">
                {tech.name}
              </span>
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`}></div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechMarquee;