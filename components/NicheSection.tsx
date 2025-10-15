import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Niche } from '../types';
import ProjectCard from './ProjectCard';

interface NicheSectionProps {
  niche: Niche;
  onProjectClick: (videoUrl: string) => void;
}

const NicheSection: React.FC<NicheSectionProps> = ({ niche, onProjectClick }) => {
  const isReels = niche.id === 'social';
  const gridClasses = isReels
    ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'
    : 'grid grid-cols-1 md:grid-cols-2 gap-8';

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }, [inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      id={niche.id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div>
        <h3 className="text-3xl font-orbitron font-bold text-dark-text dark:text-white mb-2 relative inline-block">
          {niche.title}
          <span className="absolute -bottom-1 left-0 w-2/3 h-0.5 bg-brand-cyan"></span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">{niche.description}</p>
      </div>
      
      <motion.div
        className={gridClasses}
        variants={containerVariants}
      >
        {niche.projects.map((project) => (
          <ProjectCard key={project.id} project={project} nicheId={niche.id} onProjectClick={onProjectClick} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NicheSection;