import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ShinyText from '../components/ShinyText';
import SmartLink from '../components/SmartLink';
import ThemedButton from '../components/buttons/ThemedButton';
import { projects } from '../data/projectsData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const filters = ['All', 'Web Apps', 'Mobile', 'UI/UX', 'Open Source'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="xl">MY WORK</ShinyText>
            </div>
            <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              My <span className="text-green-500">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              A collection of projects that showcase my skills and passion for creating digital solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons - Moved to right on larger screens */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg shadow-black/10 dark:shadow-black/20 hover:shadow-xl hover:shadow-black/15 dark:hover:shadow-black/30 overflow-hidden ${
                  activeFilter === filter
                    ? 'bg-green-500 text-white border border-green-500'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500'
                }`}
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeFilter === filter 
                    ? 'text-white' 
                    : 'group-hover:text-green-500'
                }`}>
                  {filter}
                </span>
                {activeFilter !== filter && (
                  <div className="absolute inset-0 bg-green-50 dark:bg-green-900/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid - True Staggered Masonry Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* First Column - Starts at top */}
          <div className="space-y-6 sm:space-y-8">
            {filteredProjects.filter((_, index) => index % 2 === 0).map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={0.3 + index * 0.1}>
                <SmartLink 
                  to={`/projects/${project.id}`}
                  className="group cursor-pointer block"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`${project.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                    hoveredProject && hoveredProject !== project.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-black dark:text-white group-hover:text-green-500 transition-colors duration-300">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{project.category}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">2024</span>
                  </div>
                </SmartLink>
              </ScrollReveal>
            ))}
          </div>

          {/* Second Column - Starts lower to create stagger effect */}
          <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            {filteredProjects.filter((_, index) => index % 2 === 1).map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={0.4 + index * 0.1}>
                <SmartLink 
                  to={`/projects/${project.id}`}
                  className="group cursor-pointer block"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`${project.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 hover:-translate-y-2 ${
                    hoveredProject && hoveredProject !== project.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-black/30 dark:shadow-black/50"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-black dark:text-white group-hover:text-green-500 transition-colors duration-300">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">{project.category}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">2024</span>
                  </div>
                </SmartLink>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-12 sm:mt-16 bg-white dark:bg-[#111116] rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="lg">HAVE A PROJECT IN MIND?</ShinyText>
            </div>
            <h2 className="font-clash text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3 sm:mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together.
            </p>
            <ThemedButton 
              to="/contact"
              className="shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
            >
              Start a Project
            </ThemedButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}