import React, { useState } from 'react';
import { ChevronDown, Code, Palette, Megaphone, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ShinyText from './ShinyText';

const ExpertiseAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [lastOpenedAccordion, setLastOpenedAccordion] = useState(0);

  const expertiseAreas = [
    {
      id: 0,
      title: 'Development',
      icon: Code,
      description: 'Full-stack web development with modern technologies like React, Node.js, and cloud platforms.',
      skills: ['React & Next.js', 'Node.js & Express', 'TypeScript', 'Database Design'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 1,
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Creating intuitive and beautiful user interfaces that prioritize user experience.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Branding',
      icon: Megaphone,
      description: 'Developing comprehensive brand identities that tell your story and connect with your audience.',
      skills: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Building responsive mobile applications with React Native and modern mobile technologies.',
      skills: ['React Native', 'iOS Development', 'Android Development', 'Mobile UI/UX'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      // If closing the current accordion, keep the last opened image
      setActiveAccordion(-1);
    } else {
      // If opening a new accordion, update both active and last opened
      setActiveAccordion(index);
      setLastOpenedAccordion(index);
    }
  };

  // Determine which image to show: active accordion or last opened if none are active
  const displayedAccordion = activeAccordion !== -1 ? activeAccordion : lastOpenedAccordion;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12">
            <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
            <ShinyText size="lg">SPECIALITY</ShinyText>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white mb-8 sm:mb-12 md:mb-16">
            Areas of Expertise
          </h2>
        </ScrollReveal>

        {/* Accordion and Image Container */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Accordion Section */}
          <div className="space-y-2 sm:space-y-3">
            {expertiseAreas.map((area, index) => (
              <ScrollReveal key={area.id} direction="left" delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-[#111116] rounded-xl shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[#1a1a20] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center shadow-md`}>
                        <area.icon size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                      </div>
                      <h3 className="font-clash text-base sm:text-lg md:text-xl font-normal text-black dark:text-white">
                        {area.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px] text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1">
                          <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm font-light">
                            {area.description}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {area.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 font-light"
                              >
                                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
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
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-black/15 dark:shadow-black/30 aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={displayedAccordion}
                    src={expertiseAreas[displayedAccordion]?.image}
                    alt={expertiseAreas[displayedAccordion]?.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Active indicator */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg shadow-md`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${expertiseAreas[displayedAccordion]?.color}`}></div>
                    <span className="text-xs font-light text-black dark:text-white">
                      {expertiseAreas[displayedAccordion]?.title}
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