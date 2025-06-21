export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    year: '2024',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    bannerImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: '#',
    bgColor: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-200 dark:from-yellow-300 dark:via-yellow-400 dark:to-orange-300',
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
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
    liveUrl: null,
    githubUrl: '#',
    bgColor: 'bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200 dark:from-purple-300 dark:via-purple-400 dark:to-pink-300',
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
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    technologies: ['Figma', 'Storybook', 'React', 'TypeScript', 'Sass'],
    liveUrl: 'https://design-system-docs.com',
    githubUrl: '#',
    bgColor: 'bg-gradient-to-br from-gray-200 via-gray-300 to-slate-200 dark:from-gray-300 dark:via-gray-400 dark:to-slate-300',
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
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    technologies: ['Vue.js', 'Weather API', 'Chart.js', 'Vuex', 'Tailwind CSS'],
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: '#',
    bgColor: 'bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 dark:from-green-300 dark:via-emerald-400 dark:to-teal-300',
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
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    technologies: ['JavaScript', 'D3.js', 'NPM', 'Webpack', 'Jest'],
    liveUrl: null,
    githubUrl: '#',
    bgColor: 'bg-gradient-to-br from-blue-200 via-blue-300 to-cyan-200 dark:from-blue-300 dark:via-blue-400 dark:to-cyan-300',
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
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
    liveUrl: 'https://portfolio-demo.com',
    githubUrl: '#',
    bgColor: 'bg-gradient-to-br from-pink-200 via-rose-300 to-red-200 dark:from-pink-300 dark:via-rose-400 dark:to-red-300',
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