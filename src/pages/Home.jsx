import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import TechMarquee from '../components/TechMarquee';

const Home = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-gray-700 to-black dark:from-golden dark:to-golden-light bg-clip-text text-transparent">Sriram</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A passionate full-stack developer crafting beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/projects"
              className="group flex items-center gap-2 bg-black dark:bg-golden text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-2 border-2 border-black dark:border-golden text-black dark:text-golden px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-golden dark:hover:text-black transition-all duration-300">
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-8">
            Technologies I Work With
          </h2>
          <TechMarquee />
        </div>

        {/* Skills Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white dark:text-black">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Creating beautiful, responsive user interfaces with modern frameworks and technologies.</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white dark:text-black">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Building robust server-side applications and APIs with scalable architecture.</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white dark:text-black">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Mobile Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Developing cross-platform mobile applications with native performance.</p>
          </div>
        </div>

        {/* Recent Work Preview */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Recent Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of this amazing project and its key features.</p>
                  <Link 
                    to="/projects"
                    className="text-black dark:text-golden font-semibold hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;