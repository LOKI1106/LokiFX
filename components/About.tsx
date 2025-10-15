import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './icons/SocialIcons';
import { CheckmarkIcon } from './icons/CheckmarkIcon';

const About: React.FC = () => {
  const socialLinks = [
    { Icon: InstagramIcon, href: 'instagram.com/lokii.i2p', name: 'Instagram' },
    { Icon: TwitterIcon, href: 'lokesh_navale', name: 'Twitter' },
    { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lokesh-navale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', name: 'LinkedIn' },
  ];
  
  const skills = [
    'Motion Graphics',
    'Color Grading',
    'Storytelling',
    'Typography',
    'Visual Effects (VFX)',
    '2D Animation',
    'Beat Sync',
    'Creative Transitions',
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }, [inView]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or email service.
    // For this example, we'll just simulate a successful submission.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 sm:py-32 bg-gray-200/50 dark:bg-black/30"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-orbitron font-bold uppercase text-dark-text dark:text-white">
          About <span className="text-brand-cyan">&</span> Contact
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Hey, I’m Loki — a passionate video editor, visual creator, and storyteller who loves turning ideas into cinematic experiences.
From after movies and short films to product ads, music videos, and gaming edits, I bring emotion, rhythm, and style to every frame.

I blend motion graphics, beat sync, typography, and color grading to give each project a unique vibe — whether it’s a vibrant travel vlog, an intense esports montage, or a bold commercial ad.

Beyond editing, I’m constantly learning, experimenting, and pushing my creative limits.
My goal? To make visuals that feel alive, connect with people, and leave an impact.

🎧 Passion. 🎬 Precision. ⚡ Energy.
That’s LokiFX.
        </motion.p>
        
        <motion.div 
            className="mt-12 max-w-3xl mx-auto"
            variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-orbitron font-bold text-dark-text dark:text-white mb-6">
            My Expertise
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {skills.map(skill => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-brand-cyan/20 text-dark-text dark:text-light-text rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-brand-cyan/20"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 max-w-xl mx-auto">
          {isSubmitted ? (
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="p-4 border border-green-500 rounded-lg bg-green-500/10 text-green-300 text-center flex flex-col items-center"
              >
                <CheckmarkIcon />
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="font-bold text-xl mt-4"
                >
                  Thank You!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Your message has been sent successfully. I'll get back to you shortly.
                </motion.p>
              </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-300/50 dark:bg-black/50 border border-gray-400/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-300/50 dark:bg-black/50 border border-gray-400/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-300/50 dark:bg-black/50 border border-gray-400/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-brand-cyan rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-brand-cyan rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>
                  <span className="relative text-white group-hover:text-black transition-colors duration-300">Send Message</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href, name }) => (
            <motion.a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-brand-cyan transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <Icon className="w-8 h-8" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;