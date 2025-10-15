import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PORTFOLIO_DATA } from '../constants';
import NicheSection from './NicheSection';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && 'vibrate' in navigator) {
      navigator.vibrate(50); // Short vibration
    }
  }, [inView]);

  const handleProjectClick = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedVideoUrl(null);
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={titleVariants}
            className="text-4xl sm:text-5xl font-orbitron font-bold uppercase text-dark-text dark:text-white"
          >
            My <span className="text-brand-cyan">Portfolio</span>
          </motion.h2>
          <motion.p
            variants={descriptionVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A curated collection of my work across various editing niches. Click on any project to see it in action.
          </motion.p>
        </motion.div>
        
        <div className="space-y-24">
          {PORTFOLIO_DATA.map((niche) => (
            <NicheSection key={niche.id} niche={niche} onProjectClick={handleProjectClick} />
          ))}
        </div>
      </div>
      <VideoModal 
        isOpen={!!selectedVideoUrl}
        onClose={handleCloseModal}
        videoUrl={selectedVideoUrl}
      />
    </section>
  );
};

export default Portfolio;