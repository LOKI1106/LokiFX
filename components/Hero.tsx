import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5, // Delay after intro fades
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-center p-4">
      
      <video
        key="hero-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-25"
        src="src/Videos/Showreel24.mp4"
      />
      
      <div 
        key="hero-overlay"
        className="absolute inset-0 bg-white/30 dark:bg-black/50 z-[2]"
        style={{ pointerEvents: 'none' }}
      />
      
      <motion.div
        className="relative z-20 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className={`font-orbitron font-black uppercase tracking-widest text-dark-text dark:text-white
            text-6xl md:text-8xl lg:text-9xl`}
        >
          Loki
          <span className="text-brand-cyan relative">FX
            <div>
                <span className="absolute -top-1 -right-2 w-3 h-3 bg-brand-cyan rounded-full"></span>
            </div>
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="mt-4 text-xl md:text-2xl font-montserrat text-gray-800 dark:text-gray-300">
            From Hype Reels to Heartfelt Films – I Cut It All
          </p>
          
          <div className="mt-8">
            <a 
              href="#events" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-brand-cyan rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-brand-cyan rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>
              <span className="relative text-white group-hover:text-black transition-colors duration-300">View My Work</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;