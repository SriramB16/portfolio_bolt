import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ShinyText from '../components/ShinyText';
import SmartLink from '../components/SmartLink';
import ThemedButton from '../components/buttons/ThemedButton';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedStep, setCopiedStep] = useState(null);

  // Technology descriptions mapping
  const techDescriptions = {
    'React': 'Front-End JavaScript library.',
    'Node.js': 'Backend JavaScript runtime environment.',
    'MongoDB': 'NoSQL document database.',
    'Stripe': 'Payment processing platform.',
    'Express': 'Web application framework for Node.js.',
    'JWT': 'JSON Web Tokens for authentication.',
    'React Native': 'Cross-platform mobile app framework.',
    'Firebase': 'Backend-as-a-Service platform.',
    'Redux': 'State management library for JavaScript apps.',
    'TypeScript': 'Typed superset of JavaScript.',
    'Expo': 'Platform for universal React applications.',
    'Figma': 'Collaborative interface design tool.',
    'Storybook': 'Tool for building UI components in isolation.',
    'Sass': 'CSS preprocessor with additional features.',
    'Vue.js': 'Progressive JavaScript framework.',
    'Weather API': 'Service for weather data retrieval.',
    'Chart.js': 'JavaScript charting library.',
    'Vuex': 'State management pattern for Vue.js.',
    'Tailwind CSS': 'Utility-first CSS framework.',
    'JavaScript': 'High-level programming language.',
    'D3.js': 'Data visualization library.',
    'NPM': 'Package manager for JavaScript.',
    'Webpack': 'Module bundler for JavaScript applications.',
    'Jest': 'JavaScript testing framework.',
    'Framer Motion': 'Animation library for React.',
    'Vite': 'Build tool and development server.',
    'Vercel': 'Deployment platform for frontend frameworks.'
  };

  useEffect(() => {
    const projectId = parseInt(id);
    const project = projects.find(p => p.id === projectId);
    const index = projects.findIndex(p => p.id === projectId);
    
    if (project) {
      setCurrentProject(project);
      setCurrentIndex(index);
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  const handlePrevProject = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    navigate(`/projects/${projects[prevIndex].id}`);
  };

  const handleNextProject = () => {
    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    navigate(`/projects/${projects[nextIndex].id}`);
  };

  const copyToClipboard = async (text, stepIndex) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(stepIndex);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!currentProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-20 md:pb-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-[#f7f8fa] dark:bg-black overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Button and Year */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-12">
            <SmartLink 
              to="/projects"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm sm:text-base font-light">Back to Projects</span>
            </SmartLink>
            <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">{currentProject.year}</span>
          </div>
        </ScrollReveal>

        {/* Banner Image */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-6 sm:mb-8 md:mb-12 shadow-xl shadow-black/10 dark:shadow-black/30">
            <img 
              src={currentProject.bannerImage} 
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Project Title and Info */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Left Column - Title and Description */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left" delay={0.3}>
              <h1 className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                {currentProject.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {currentProject.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column - Check it out button and Project Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Check it out button - only show if liveUrl exists */}
            {currentProject.liveUrl && (
              <ScrollReveal direction="right" delay={0.3}>
                <ThemedButton
                  href={currentProject.liveUrl}
                  icon={<ArrowUpRight size={14} className="sm:w-4 sm:h-4" />}
                  size="md"
                  className="w-full sm:w-auto justify-center"
                >
                  Check it out
                </ThemedButton>
              </ScrollReveal>
            )}

            <ScrollReveal direction="right" delay={0.4}>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-clash text-base sm:text-lg font-semibold text-black dark:text-white">Roles:</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                    {currentProject.roles}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5}>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-clash text-base sm:text-lg font-semibold text-black dark:text-white">Client:</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                    {currentProject.client}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Technologies Used */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {currentProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm md:text-base font-light border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Screenshots */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {currentProject.screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src={screenshot} 
                    alt={`${currentProject.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Features Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-clash text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
              Features
            </h2>
            {/* Mild separator below heading */}
            <div className="w-12 sm:w-16 h-px bg-gray-300 dark:bg-gray-600 mb-4 sm:mb-6 md:mb-8"></div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {currentProject.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technologies Used Section */}
        <ScrollReveal direction="up" delay={0.9}>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-clash text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
              Technologies used
            </h2>
            {/* Mild separator below heading */}
            <div className="w-12 sm:w-16 h-px bg-gray-300 dark:bg-gray-600 mb-4 sm:mb-6 md:mb-8"></div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {currentProject.technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                  <div className="text-sm sm:text-base font-light leading-relaxed min-w-0">
                    <span className="text-black dark:text-white font-medium underline">{tech}</span>
                    <span className="text-gray-600 dark:text-gray-400"> - {techDescriptions[tech] || 'Technology description not available.'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Build Steps Section - Only show if buildSteps exist */}
        {currentProject.buildSteps && (
          <ScrollReveal direction="up" delay={1.0}>
            <div className="mb-8 sm:mb-12 md:mb-16">
              {/* Section separator */}
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6 sm:mb-8 md:mb-12"></div>
              
              <h2 className="font-clash text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                Build steps
              </h2>
              {/* Mild separator below heading */}
              <div className="w-12 sm:w-16 h-px bg-gray-300 dark:bg-gray-600 mb-4 sm:mb-6 md:mb-8"></div>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {currentProject.buildSteps.map((step, index) => (
                  <div key={index}>
                    <h3 className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light mb-2 sm:mb-3 md:mb-4">
                      {index + 1}. {step.title}
                    </h3>
                    <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm md:text-base overflow-hidden border border-gray-200 dark:border-gray-700">
                      <div className="overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-200 whitespace-nowrap block">
                          {step.command}
                        </code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(step.command, index)}
                        className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 p-1.5 sm:p-2 rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200 group border border-gray-300 dark:border-gray-500"
                        title="Copy to clipboard"
                      >
                        {copiedStep === index ? (
                          <Check size={14} className="sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy size={14} className="sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Section separator before navigation */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6 sm:mb-8 md:mb-12"></div>

        {/* Navigation */}
        <ScrollReveal direction="up" delay={1.1}>
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
            <button
              onClick={handlePrevProject}
              className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none sm:min-w-0 sm:max-w-[200px]"
            >
              <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px] text-gray-700 dark:text-white group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">Prev</p>
                <p className="text-sm font-medium text-gray-700 dark:text-white truncate">{projects[currentIndex > 0 ? currentIndex - 1 : projects.length - 1].title}</p>
              </div>
            </button>

            <button
              onClick={handleNextProject}
              className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none sm:min-w-0 sm:max-w-[200px]"
            >
              <div className="text-right min-w-0 flex-1">
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">Next</p>
                <p className="text-sm font-medium text-gray-700 dark:text-white truncate">{projects[currentIndex < projects.length - 1 ? currentIndex + 1 : 0].title}</p>
              </div>
              <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px] text-gray-700 dark:text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </button>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={1.2}>
          <div className="text-center bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <ShinyText size="lg">AVAILABLE FOR WORK</ShinyText>
            </div>
            <h2 className="font-clash text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Let's create your<br />next big idea.
            </h2>
            <ThemedButton 
              to="/contact"
              className="shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
            >
              Contact Me
            </ThemedButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProjectDetail;