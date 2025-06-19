import React, { useState } from 'react';
import { ChevronDown, Code, Palette, Megaphone, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ShinyText from './ShinyText';

const ExpertiseAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const expertiseAreas = [
    {
      id: 0,
      title: 'Development',
      icon: Code,
      description: 'Full-stack web development with modern technologies like React, Node.js, and cloud platforms. I build scalable, performant applications that deliver exceptional user experiences.',
      skills: ['React & Next.js', 'Node.js & Express', 'TypeScript', 'Database Design', 'API Development', 'Cloud Deployment'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 1,
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Creating intuitive and beautiful user interfaces that prioritize user experience. I focus on accessibility, usability, and modern design principles.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Figma & Adobe XD', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Branding',
      icon: Megaphone,
      description: 'Developing comprehensive brand identities that tell your story and connect with your audience. From logos to complete brand guidelines.',
      skills: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Marketing Materials', 'Brand Consistency'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
            <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
            <ShinyText size="lg">SPECIALITY</ShinyText>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-12 sm:mb-16 md:mb-20">
            Areas of Expertise
          </h2>
        </ScrollReveal>

        {/* Accordion and Image Container */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Accordion Section */}
          <div className="space-y-4 sm:space-y-6">
            {expertiseAreas.map((area, index) => (
              <ScrollReveal key={area.id} direction="left" delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-[#111116] rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 overflow-hidden">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[#1a1a20] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center shadow-lg`}>
                        <area.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">
                        {area.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} className="sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                          <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            {area.description}
                          </p>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {area.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                              >
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Dynamic Image Section */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="sticky top-8">
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40 aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeAccordion}
                    src={expertiseAreas[activeAccordion]?.image}
                    alt={expertiseAreas[activeAccordion]?.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Active indicator */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${expertiseAreas[activeAccordion]?.color}`}></div>
                    <span className="text-xs sm:text-sm font-medium text-black dark:text-white">
                      {expertiseAreas[activeAccordion]?.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAccordion;