import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Coffee, Heart, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TechMarquee from '../components/TechMarquee';

const About = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-gray-700 to-black dark:from-golden dark:to-golden-light bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              I'm a passionate developer who loves creating digital experiences that make a difference.
            </p>
          </div>
        </ScrollReveal>

        {/* Tech Stack Marquee */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-12 sm:mb-16">
            <h2 className="font-clash text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-6 sm:mb-8">
              Technologies I Work With
            </h2>
            <TechMarquee />
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Column - Photo and Stats */}
          <div className="space-y-6 sm:space-y-8">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl h-64 sm:h-80 md:h-96 flex items-center justify-center shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
                <span className="text-4xl sm:text-5xl md:text-6xl">👨‍💻</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.4}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-black dark:text-golden mb-1 sm:mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Projects Completed</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-black dark:text-golden mb-1 sm:mb-2">3+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Story */}
          <div className="space-y-4 sm:space-y-6">
            <ScrollReveal direction="right" delay={0.3}>
              <h2 className="font-clash text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 sm:mb-6">My Story</h2>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                I started my journey in web development 3 years ago, driven by curiosity and a passion for creating 
                digital solutions. What began as a hobby quickly evolved into a career that I absolutely love.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.5}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                I specialize in full-stack development, with expertise in React, Node.js, and modern web technologies. 
                I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.6}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying a good cup of coffee while planning my next project.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.7}>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="flex items-center gap-2 text-black dark:text-golden text-sm sm:text-base">
                  <Code size={18} className="sm:w-5 sm:h-5" />
                  <span>Clean Code Advocate</span>
                </div>
                <div className="flex items-center gap-2 text-black dark:text-golden text-sm sm:text-base">
                  <Coffee size={18} className="sm:w-5 sm:h-5" />
                  <span>Coffee Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 text-black dark:text-golden text-sm sm:text-base">
                  <Heart size={18} className="sm:w-5 sm:h-5" />
                  <span>Open Source Contributor</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Skills Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mb-12 sm:mb-16">
            <h2 className="font-clash text-2xl sm:text-3xl font-bold text-black dark:text-white text-center mb-8 sm:mb-12">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'Frontend',
                  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
                },
                {
                  title: 'Backend',
                  skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express']
                },
                {
                  title: 'Tools',
                  skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code']
                }
              ].map((category, index) => (
                <ScrollReveal key={category.title} direction="up" delay={0.9 + index * 0.1}>
                  <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
                    <h3 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{skill}</span>
                          <div className="w-20 sm:w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-full bg-black dark:bg-golden rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={1.2}>
          <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
            <h2 className="font-clash text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3 sm:mb-4">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-black dark:bg-golden text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-golden-light transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
              onClick={() => sessionStorage.setItem('internalNavigation', 'true')}
            >
              Get In Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;