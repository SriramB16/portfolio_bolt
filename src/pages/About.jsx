import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Coffee, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-gray-700 to-black dark:from-golden dark:to-golden-light bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Photo and Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="text-3xl font-bold text-black dark:text-golden mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="text-3xl font-bold text-black dark:text-golden mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">My Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I started my journey in web development 3 years ago, driven by curiosity and a passion for creating 
              digital solutions. What began as a hobby quickly evolved into a career that I absolutely love.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in full-stack development, with expertise in React, Node.js, and modern web technologies. 
              I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while planning my next project.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-black dark:text-golden">
                <Code size={20} />
                <span>Clean Code Advocate</span>
              </div>
              <div className="flex items-center gap-2 text-black dark:text-golden">
                <Coffee size={20} />
                <span>Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-black dark:text-golden">
                <Heart size={20} />
                <span>Open Source Contributor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Frontend</h3>
              <div className="space-y-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="h-full bg-black dark:bg-golden rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Backend</h3>
              <div className="space-y-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="h-full bg-black dark:bg-golden rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Tools</h3>
              <div className="space-y-2">
                {['Git', 'Docker', 'AWS', 'Figma', 'VS Code'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="h-full bg-black dark:bg-golden rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-black dark:bg-golden text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-golden-light transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;