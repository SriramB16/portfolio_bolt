import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

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
    <div className="pt-32 pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Get In <span className="bg-gradient-to-r from-gray-700 to-black dark:from-golden dark:to-golden-light bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'd love to hear from you. Whether you have a project in mind or just want to chat about technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Let's Talk</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                  Feel free to reach out if you have any questions or just want to say hello!
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email', info: 'Sriram@example.com' },
                { icon: Phone, title: 'Phone', info: '+91 1234567890' },
                { icon: MapPin, title: 'Location', info: 'Bangalore, IND' }
              ].map((contact, index) => (
                <ScrollReveal key={contact.title} direction="left" delay={0.3 + index * 0.1}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black dark:bg-golden rounded-full flex items-center justify-center">
                      <contact.icon size={20} className="text-white dark:text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{contact.info}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal direction="left" delay={0.6}>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-golden focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-golden focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-golden focus:border-transparent transition-all duration-300"
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
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-golden focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black dark:bg-golden text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-golden-light transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional CTA */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="text-center mt-16 bg-gray-50 dark:bg-gray-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. I'm here to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black dark:bg-golden text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-golden-light transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
              <Link 
                to="/projects"
                className="inline-block border-2 border-black dark:border-golden text-black dark:text-golden px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-golden dark:hover:text-black transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;