import React, { useEffect } from 'react';
import { CloseIcon } from './icons/CloseIcon';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen || !videoUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-dark-bg rounded-lg overflow-hidden shadow-2xl shadow-brand-cyan/20 border border-brand-cyan/30"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the video container
      >
        <div className="aspect-video">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white bg-white/50 dark:bg-black/50 rounded-full transition-colors duration-200"
          aria-label="Close video player"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoModal;