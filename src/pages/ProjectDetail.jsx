import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ShinyText from '../components/ShinyText';

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

  // All projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      year: '2024',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      bannerImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      screenshots: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      liveUrl: 'https://example-ecommerce.com',
      roles: 'Full-stack Developer, UI/UX Designer',
      client: 'Personal Project',
      buildSteps: [
        {
          title: 'Clone this repo',
          command: 'git clone https://github.com/sriram/ecommerce-platform && cd ecommerce-platform'
        },
        {
          title: 'Install project dependencies',
          command: 'npm install'
        },
        {
          title: 'Build the project and start a local server',
          command: 'npm run build && npm run serve'
        }
      ],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Order tracking and management',
        'Admin dashboard for inventory management',
        'Responsive design for all devices',
        'Real-time notifications'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile',
      year: '2024',
      description: 'A React Native app for team collaboration and project management.',
      bannerImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      screenshots: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
      liveUrl: null, // No live URL available
      roles: 'Mobile Developer, UI/UX Designer',
      client: 'Startup Company',
      features: [
        'Cross-platform mobile application',
        'Real-time task synchronization',
        'Team collaboration tools',
        'Project timeline visualization',
        'File sharing and comments',
        'Push notifications',
        'Offline mode support',
        'Custom workflow creation'
      ]
    },
    {
      id: 3,
      title: 'Design System',
      category: 'UI/UX',
      year: '2024',
      description: 'A comprehensive design system with reusable components and guidelines.',
      bannerImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      screenshots: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['Figma', 'Storybook', 'React', 'TypeScript', 'Sass'],
      liveUrl: 'https://design-system-docs.com',
      roles: 'UI/UX Designer, Frontend Developer',
      client: 'Enterprise Client',
      buildSteps: [
        {
          title: 'Clone this repo',
          command: 'git clone https://github.com/sriram/design-system && cd design-system'
        },
        {
          title: 'Install project dependencies',
          command: 'npm install'
        },
        {
          title: 'Start Storybook development server',
          command: 'npm run storybook'
        }
      ],
      features: [
        'Complete component library',
        'Design tokens and variables',
        'Accessibility guidelines',
        'Interactive documentation',
        'Figma component library',
        'Code snippets and examples',
        'Version control and updates',
        'Multi-platform support'
      ]
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Web Apps',
      year: '2024',
      description: 'A beautiful weather application with real-time data and forecasts.',
      bannerImage: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
      screenshots: [
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['Vue.js', 'Weather API', 'Chart.js', 'Vuex', 'Tailwind CSS'],
      liveUrl: 'https://weather-dashboard-demo.com',
      roles: 'Frontend Developer',
      client: 'Personal Project',
      features: [
        'Real-time weather data',
        '7-day weather forecast',
        'Interactive weather maps',
        'Historical weather data',
        'Location-based services',
        'Weather alerts and notifications',
        'Customizable dashboard',
        'Data visualization charts'
      ]
    },
    {
      id: 5,
      title: 'Open Source Library',
      category: 'Open Source',
      year: '2024',
      description: 'A lightweight JavaScript library for data visualization.',
      bannerImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      screenshots: [
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['JavaScript', 'D3.js', 'NPM', 'Webpack', 'Jest'],
      liveUrl: null, // No live URL available
      roles: 'Open Source Developer',
      client: 'Community Project',
      features: [
        'Lightweight and fast',
        'Zero dependencies',
        'Multiple chart types',
        'Responsive design',
        'Customizable themes',
        'Animation support',
        'TypeScript definitions',
        'Comprehensive documentation'
      ]
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Apps',
      year: '2024',
      description: 'A responsive portfolio website built with modern web technologies.',
      bannerImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      screenshots: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
      liveUrl: 'https://portfolio-demo.com',
      roles: 'Full-stack Developer, Designer',
      client: 'Personal Project',
      features: [
        'Responsive design',
        'Smooth animations',
        'Dark mode support',
        'SEO optimized',
        'Fast loading times',
        'Accessibility compliant',
        'Contact form integration',
        'Blog functionality'
      ]
    }
  ];

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
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button and Year */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <Link 
              to="/projects"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm sm:text-base font-light">Back to Projects</span>
            </Link>
            <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">{currentProject.year}</span>
          </div>
        </ScrollReveal>

        {/* Banner Image */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-2xl shadow-black/10 dark:shadow-black/30">
            <img 
              src={currentProject.bannerImage} 
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Project Title and Info */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Column - Title and Description */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left" delay={0.3}>
              <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
                {currentProject.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {currentProject.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column - Check it out button and Project Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Check it out button - only show if liveUrl exists */}
            {currentProject.liveUrl && (
              <ScrollReveal direction="right" delay={0.3}>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    Check it out
                  </span>
                  <ArrowUpRight size={16} className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
                  <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </a>
              </ScrollReveal>
            )}

            <ScrollReveal direction="right" delay={0.4}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white">Roles:</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                    {currentProject.roles}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white">Client:</span>
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
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {currentProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm sm:text-base font-light border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Screenshots */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8">
              {currentProject.screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-1">
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
          <div className="mb-12 sm:mb-16">
            <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              Features
            </h2>
            {/* Mild separator below heading */}
            <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mb-6 sm:mb-8"></div>
            <div className="space-y-3 sm:space-y-4">
              {currentProject.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technologies Used Section */}
        <ScrollReveal direction="up" delay={0.9}>
          <div className="mb-12 sm:mb-16">
            <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              Technologies used
            </h2>
            {/* Mild separator below heading */}
            <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mb-6 sm:mb-8"></div>
            <div className="space-y-3 sm:space-y-4">
              {currentProject.technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div className="text-sm sm:text-base font-light leading-relaxed">
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
            <div className="mb-12 sm:mb-16">
              {/* Section separator */}
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8 sm:mb-12"></div>
              
              <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                Build steps
              </h2>
              {/* Mild separator below heading */}
              <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mb-6 sm:mb-8"></div>
              
              <div className="space-y-6 sm:space-y-8">
                {currentProject.buildSteps.map((step, index) => (
                  <div key={index}>
                    <h3 className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light mb-3 sm:mb-4">
                      {index + 1}. {step.title}
                    </h3>
                    <div className="relative bg-gray-900 dark:bg-gray-800 rounded-lg p-4 sm:p-6 font-mono text-sm sm:text-base overflow-x-auto">
                      <code className="text-gray-300 dark:text-gray-200 whitespace-pre-wrap break-all">
                        {step.command}
                      </code>
                      <button
                        onClick={() => copyToClipboard(step.command, index)}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-md bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200 group"
                        title="Copy to clipboard"
                      >
                        {copiedStep === index ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-300 group-hover:text-white" />
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
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8 sm:mb-12"></div>

        {/* Navigation */}
        <ScrollReveal direction="up" delay={1.1}>
          <div className="flex flex-row justify-between items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={handlePrevProject}
              className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none sm:min-w-[180px] md:min-w-[200px]"
            >
              <ChevronLeft size={18} className="text-gray-700 dark:text-white group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
              <div className="text-left min-w-0">
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">Prev</p>
                <p className="text-sm font-medium text-gray-700 dark:text-white truncate">{projects[currentIndex > 0 ? currentIndex - 1 : projects.length - 1].title}</p>
              </div>
            </button>

            <button
              onClick={handleNextProject}
              className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none sm:min-w-[180px] md:min-w-[200px]"
            >
              <div className="text-right min-w-0 flex-1">
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">Next</p>
                <p className="text-sm font-medium text-gray-700 dark:text-white truncate">{projects[currentIndex < projects.length - 1 ? currentIndex + 1 : 0].title}</p>
              </div>
              <ChevronRight size={18} className="text-gray-700 dark:text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </button>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={1.2}>
          <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <ShinyText size="lg">AVAILABLE FOR WORK</ShinyText>
            </div>
            <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              Let's create your<br />next big idea.
            </h2>
            <Link 
              to="/contact"
              className="group relative inline-block border border-black dark:border-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProjectDetail;