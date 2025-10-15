import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AfterEffectsIcon, PremiereProIcon, DaVinciResolveIcon, CapCutIcon } from './icons/ToolIcons';

const tools = [
  { name: 'After Effects', Icon: AfterEffectsIcon },
  { name: 'Premiere Pro', Icon: PremiereProIcon },
  { name: 'DaVinci Resolve', Icon: DaVinciResolveIcon },
  { name: 'CapCut', Icon: CapCutIcon },
];

const Tools: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="tools"
      className="py-20 sm:py-32 bg-gray-200/50 dark:bg-black/30"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-orbitron font-bold uppercase text-dark-text dark:text-white">
          Tools I <span className="text-brand-cyan">Work With</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Leveraging industry-standard software to deliver high-quality, professional video edits.
        </motion.p>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 bg-white/30 dark:bg-black/50 backdrop-blur-md rounded-xl border border-gray-400/20 dark:border-gray-700/50 flex flex-col items-center justify-center space-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-cyan/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-cyan rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
              <tool.Icon className="h-16 w-16 text-dark-text dark:text-white" />
              <p className="font-montserrat font-semibold text-lg text-dark-text dark:text-white">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tools;
