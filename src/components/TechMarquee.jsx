import React from 'react';

const TechMarquee = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML5', icon: '🧡' },
    { name: 'CSS3', icon: '🔵' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Express', icon: '🚀' },
    { name: 'GraphQL', icon: '🔗' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Figma', icon: '🎨' },
    { name: 'VS Code', icon: '💙' }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden bg-gray-50 dark:bg-gray-900 py-8">
      <div className="flex animate-marquee space-x-8">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 whitespace-nowrap flex-shrink-0"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;