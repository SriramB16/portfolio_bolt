import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ShinyText from '../components/ShinyText';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // All projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      year: '2024',
      description: 'A comprehensive e-commerce solution built with modern web technologies. This platform features a complete shopping experience with user authentication, product catalog, shopping cart, payment processing, and order management.',
      longDescription: 'This full-stack e-commerce platform represents a complete digital shopping solution designed for modern businesses. Built with React and Node.js, it provides a seamless user experience from product discovery to checkout completion. The platform includes advanced features like real-time inventory management, secure payment processing through Stripe, user account management, and comprehensive admin dashboard for business owners.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/example/ecommerce',
      bgColor: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-200 dark:from-yellow-300 dark:via-yellow-400 dark:to-orange-300',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Order tracking and management',
        'Admin dashboard for inventory management',
        'Responsive design for all devices',
        'Real-time notifications'
      ],
      challenges: 'The main challenge was implementing a scalable architecture that could handle high traffic while maintaining fast load times. We solved this by implementing efficient caching strategies and optimizing database queries.',
      outcome: 'Successfully launched with 99.9% uptime, handling over 10,000 daily active users and processing $500K+ in monthly transactions.'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile',
      year: '2024',
      description: 'A React Native application designed for team collaboration and project management with real-time synchronization.',
      longDescription: 'This mobile-first task management application revolutionizes how teams collaborate on projects. Built with React Native and Firebase, it provides real-time synchronization across all devices, ensuring team members stay updated on project progress. The app features intuitive drag-and-drop interfaces, customizable workflows, and comprehensive reporting tools.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
      liveUrl: null, // No live URL available
      githubUrl: 'https://github.com/example/task-management',
      bgColor: 'bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200 dark:from-purple-300 dark:via-purple-400 dark:to-pink-300',
      features: [
        'Cross-platform mobile application',
        'Real-time task synchronization',
        'Team collaboration tools',
        'Project timeline visualization',
        'File sharing and comments',
        'Push notifications',
        'Offline mode support',
        'Custom workflow creation'
      ],
      challenges: 'Implementing real-time synchronization while maintaining offline functionality was complex. We used Firebase Firestore with local caching to ensure seamless user experience.',
      outcome: 'Deployed to both iOS and Android app stores with 4.8/5 rating and over 50,000 downloads in the first quarter.'
    },
    {
      id: 3,
      title: 'Design System',
      category: 'UI/UX',
      year: '2024',
      description: 'A comprehensive design system with reusable components and detailed guidelines for consistent user interfaces.',
      longDescription: 'This design system serves as the foundation for all digital products within the organization. It includes a complete library of reusable components, design tokens, and comprehensive guidelines that ensure consistency across all platforms. Built with Figma and implemented in React with Storybook documentation.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['Figma', 'Storybook', 'React', 'TypeScript', 'Sass'],
      liveUrl: 'https://design-system-docs.com',
      githubUrl: null, // No GitHub URL available
      bgColor: 'bg-gradient-to-br from-gray-200 via-gray-300 to-slate-200 dark:from-gray-300 dark:via-gray-400 dark:to-slate-300',
      features: [
        'Complete component library',
        'Design tokens and variables',
        'Accessibility guidelines',
        'Interactive documentation',
        'Figma component library',
        'Code snippets and examples',
        'Version control and updates',
        'Multi-platform support'
      ],
      challenges: 'Creating a system that works across different platforms while maintaining design consistency required extensive planning and collaboration with multiple teams.',
      outcome: 'Reduced design and development time by 40% and improved consistency across 15+ products used by over 100,000 users.'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Web Apps',
      year: '2024',
      description: 'A beautiful weather application with real-time data, forecasts, and interactive visualizations.',
      longDescription: 'This weather dashboard provides comprehensive meteorological information through an intuitive and visually appealing interface. Built with Vue.js and integrated with multiple weather APIs, it offers real-time weather data, extended forecasts, and interactive charts that help users understand weather patterns and trends.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['Vue.js', 'Weather API', 'Chart.js', 'Vuex', 'Tailwind CSS'],
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/example/weather-dashboard',
      bgColor: 'bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 dark:from-green-300 dark:via-emerald-400 dark:to-teal-300',
      features: [
        'Real-time weather data',
        '7-day weather forecast',
        'Interactive weather maps',
        'Historical weather data',
        'Location-based services',
        'Weather alerts and notifications',
        'Customizable dashboard',
        'Data visualization charts'
      ],
      challenges: 'Integrating multiple weather APIs while handling rate limits and ensuring data accuracy required implementing smart caching and fallback mechanisms.',
      outcome: 'Achieved 95% user satisfaction rate with over 25,000 monthly active users and featured in several tech blogs for its innovative design.'
    },
    {
      id: 5,
      title: 'Open Source Library',
      category: 'Open Source',
      year: '2024',
      description: 'A lightweight JavaScript library for data visualization with customizable charts and graphs.',
      longDescription: 'This open-source JavaScript library simplifies data visualization for web developers. It provides a lightweight, dependency-free solution for creating interactive charts and graphs. The library focuses on performance and customization, allowing developers to create beautiful visualizations with minimal code.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['JavaScript', 'D3.js', 'NPM', 'Webpack', 'Jest'],
      liveUrl: null, // No live URL available
      githubUrl: 'https://github.com/example/data-viz-library',
      bgColor: 'bg-gradient-to-br from-blue-200 via-blue-300 to-cyan-200 dark:from-blue-300 dark:via-blue-400 dark:to-cyan-300',
      features: [
        'Lightweight and fast',
        'Zero dependencies',
        'Multiple chart types',
        'Responsive design',
        'Customizable themes',
        'Animation support',
        'TypeScript definitions',
        'Comprehensive documentation'
      ],
      challenges: 'Creating a library that works across different browsers while maintaining small bundle size required careful optimization and extensive testing.',
      outcome: 'Gained 2,500+ GitHub stars, 50+ contributors, and is used by 500+ projects worldwide with over 100K weekly NPM downloads.'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Apps',
      year: '2024',
      description: 'A responsive portfolio website built with modern web technologies and smooth animations.',
      longDescription: 'This portfolio website showcases modern web development techniques with a focus on performance, accessibility, and user experience. Built with React and enhanced with Framer Motion animations, it demonstrates advanced CSS techniques, responsive design principles, and optimized loading strategies.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
      liveUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/example/portfolio',
      bgColor: 'bg-gradient-to-br from-pink-200 via-rose-300 to-red-200 dark:from-pink-300 dark:via-rose-400 dark:to-red-300',
      features: [
        'Responsive design',
        'Smooth animations',
        'Dark mode support',
        'SEO optimized',
        'Fast loading times',
        'Accessibility compliant',
        'Contact form integration',
        'Blog functionality'
      ],
      challenges: 'Balancing visual appeal with performance while ensuring accessibility across all devices required careful optimization and testing.',
      outcome: 'Achieved 98+ Lighthouse scores across all metrics and received positive feedback from the design community.'
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

  if (!currentProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-6xl mx-auto">
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

        {/* Project Header */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className={`${currentProject.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-2xl shadow-black/10 dark:shadow-black/30`}>
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-black/20 dark:shadow-black/40">
                <span className="text-2xl sm:text-3xl md:text-4xl">💻</span>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-gray-900 mb-2 sm:mb-3">
                  {currentProject.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-800 font-light">
                  {currentProject.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Column - Project Info */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <h3 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">Roles</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                  Full-stack Developer, UI/UX Designer
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div>
                <h3 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">Client</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                  Personal Project
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <div>
                <h3 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">Result</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs sm:text-sm font-light">
                    Launched
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs sm:text-sm font-light">
                    Featured
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.6}>
              <div>
                <h3 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">Responsible</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                  HTML, CSS, JavaScript, React, Node.js
                </p>
              </div>
            </ScrollReveal>

            {/* Check it out button - only show if liveUrl exists */}
            {currentProject.liveUrl && (
              <ScrollReveal direction="left" delay={0.7}>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    Check it out
                  </span>
                  <ExternalLink size={16} className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
                  <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </a>
              </ScrollReveal>
            )}
          </div>

          {/* Right Column - Project Images */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="space-y-4 sm:space-y-6">
                {currentProject.images.map((image, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-1">
                    <img 
                      src={image} 
                      alt={`${currentProject.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Features Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="lg">FEATURES</ShinyText>
            </div>
            <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 sm:mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {currentProject.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technologies Used */}
        <ScrollReveal direction="up" delay={0.9}>
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="lg">TECHNOLOGIES USED</ShinyText>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {currentProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm sm:text-base font-light shadow-lg shadow-black/10 dark:shadow-black/20 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Description */}
        <ScrollReveal direction="up" delay={1.0}>
          <div className="mb-12 sm:mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light mb-6">
                {currentProject.longDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                    {currentProject.challenges}
                  </p>
                </div>
                <div>
                  <h4 className="font-clash text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">Outcome</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                    {currentProject.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Build Steps */}
        <ScrollReveal direction="up" delay={1.1}>
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="lg">BUILD STEPS</ShinyText>
            </div>
            <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 sm:mb-8">
              Development Process
            </h2>
            <div className="space-y-4">
              {[
                'Research and planning phase',
                'UI/UX design and prototyping',
                'Frontend development with React',
                'Backend API development',
                'Database design and implementation',
                'Testing and quality assurance',
                'Deployment and optimization',
                'Monitoring and maintenance'
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200 dark:border-gray-800">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-light">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal direction="up" delay={1.2}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={handlePrevProject}
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <div className="text-left">
                <p className="text-xs sm:text-sm font-light">Prev</p>
                <p className="text-sm sm:text-base font-medium">{projects[currentIndex > 0 ? currentIndex - 1 : projects.length - 1].title}</p>
              </div>
            </button>

            <button
              onClick={handleNextProject}
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <div className="text-right">
                <p className="text-xs sm:text-sm font-light">Next</p>
                <p className="text-sm sm:text-base font-medium">{projects[currentIndex < projects.length - 1 ? currentIndex + 1 : 0].title}</p>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={1.3}>
          <div className="text-center mt-16 sm:mt-20 bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
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