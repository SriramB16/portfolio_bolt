import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ShinyText from '../components/ShinyText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f7f8fa] dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="xl">GET IN TOUCH</ShinyText>
            </div>
            <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              Let's start a <span className="text-green-500">conversation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              I'd love to hear from you. Whether you have a project in mind or just want to chat about technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
                  <ShinyText size="lg">LET'S TALK</ShinyText>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                  Feel free to reach out if you have any questions or just want to say hello!
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, title: 'Email', info: 'Sriram@example.com' },
                { icon: Phone, title: 'Phone', info: '+91 1234567890' },
                { icon: MapPin, title: 'Location', info: 'Bangalore, IND' }
              ].map((contact, index) => (
                <ScrollReveal key={contact.title} direction="left" delay={0.3 + index * 0.1}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#111116] rounded-full flex items-center justify-center shadow-lg shadow-black/20 dark:shadow-black/30 border border-green-500">
                      <contact.icon size={18} className="sm:w-5 sm:h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white text-sm sm:text-base">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{contact.info}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal direction="left" delay={0.6}>
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
                  <ShinyText size="base">FOLLOW ME</ShinyText>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#111116] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg shadow-black/10 dark:shadow-black/20 hover:shadow-xl hover:shadow-black/15 dark:hover:shadow-black/30 border border-gray-200 dark:border-gray-700 hover:border-green-500"
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-white dark:bg-[#111116] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
                <ShinyText size="lg">SEND A MESSAGE</ShinyText>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#f7f8fa] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base shadow-sm shadow-black/5 dark:shadow-black/10"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#f7f8fa] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base shadow-sm shadow-black/5 dark:shadow-black/10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#f7f8fa] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base shadow-sm shadow-black/5 dark:shadow-black/10"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#f7f8fa] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base shadow-sm shadow-black/5 dark:shadow-black/10"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full border border-black dark:border-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    Send Message
                  </span>
                  <Send size={18} className="sm:w-5 sm:h-5 relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
                  <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional CTA */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="text-center mt-12 sm:mt-16 bg-white dark:bg-[#111116] rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 hover:shadow-3xl hover:shadow-black/15 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-green-500 text-xs sm:text-sm font-medium">✦ </span>
              <ShinyText size="lg">READY TO START YOUR PROJECT?</ShinyText>
            </div>
            <h2 className="font-clash text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3 sm:mb-4">Let's turn your ideas into <span className="text-green-500">reality</span></h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss your ideas and turn them into reality. I'm here to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="group relative border border-black dark:border-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg shadow-black/20 dark:shadow-black/30 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-black/50">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                  Schedule a Call
                </span>
                <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>
              <Link 
                to="/projects"
                className="group relative border border-green-500 text-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium overflow-hidden transition-all duration-300 text-sm sm:text-base shadow-lg shadow-black/10 dark:shadow-black/20 hover:shadow-xl hover:shadow-black/15 dark:hover:shadow-black/30"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  View My Work
                </span>
                <div className="absolute inset-0 bg-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;