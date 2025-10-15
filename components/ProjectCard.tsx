import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { PlayIcon } from './icons/PlayIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';

interface ProjectCardProps {
  project: Project;
  nicheId: string;
  onProjectClick: (videoUrl: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, nicheId, onProjectClick }) => {
  const isReels = nicheId === 'social';
  const isCinematic = nicheId === 'cinematic' || nicheId === 'gaming';
  const isTravel = nicheId === 'travel';

  const cardBaseClasses = 'group relative rounded-lg overflow-hidden shadow-lg cursor-pointer';
  const cardAspectRatio = isReels ? 'aspect-[9/16]' : isCinematic ? 'aspect-video' : 'aspect-[4/3]';

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`${cardBaseClasses} ${cardAspectRatio}`}
      onClick={() => onProjectClick(project.videoUrl)}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <motion.img
          src={project.thumbnailUrl}
          alt={project.title}
          className="absolute w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 dark:bg-black/20 dark:group-hover:bg-black/60 transition-all duration-300"></div>
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-white">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="bg-brand-cyan/80 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
             <PlayIcon className="w-8 h-8 text-black" />
           </div>
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h4 className={`font-bold ${isReels ? 'text-lg' : 'text-xl md:text-2xl'} font-orbitron`}>{project.title}</h4>
          <p className={`${isReels ? 'text-sm' : 'text-base'} text-gray-200 dark:text-gray-300`}>{project.description}</p>
        </div>
        
        {isTravel && (
            <div className="absolute top-4 right-4 flex items-center bg-white/30 dark:bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                <LocationPinIcon className="w-4 h-4 text-brand-cyan mr-1" />
                <span className="text-sm font-semibold">{project.title}</span>
            </div>
        )}
      </div>
      
      {/* Cyan Glow Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-cyan rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
           style={{boxShadow: '0 0 15px 5px rgba(0, 255, 255, 0.4)'}}>
      </div>
    </motion.div>
  );
};

export default ProjectCard;