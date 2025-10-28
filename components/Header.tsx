import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { VolumeUpIcon } from './icons/VolumeUpIcon';
import { VolumeOffIcon } from './icons/VolumeOffIcon';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, isMuted, toggleMute }) => {
  const [scrolled, setScrolled] = useState(false);

  // Add audio management
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // local mute state (initially muted until we know if autoplay works)
  const [localMuted, setLocalMuted] = useState<boolean>(true);
  // track whether the user has tapped the control
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  // track if autoplay was attempted
  const [autoplayAttempted, setAutoplayAttempted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // only let parent prop overwrite local state after user has interacted
  useEffect(() => {
    if (hasInteracted) {
      setLocalMuted(isMuted);
    }
  }, [isMuted, hasInteracted]);

  // create the Audio instance once and attempt autoplay
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Music/Background Music For Videos YouTube VLOG Upbeat Corporate Instrumental Presentation [FREE DOWNLOAD].mp3');
      audioRef.current.loop = true;
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 0.5; // set a reasonable volume
      
      // Attempt autoplay
      const attemptAutoplay = async () => {
        try {
          await audioRef.current?.play();
          // Autoplay succeeded
          setLocalMuted(false);
          setHasInteracted(true);
          if (isMuted) {
            toggleMute(); // sync parent to unmuted state
          }
        } catch (error) {
          // Autoplay blocked - user will need to interact
          setLocalMuted(true);
        } finally {
          setAutoplayAttempted(true);
        }
      };

      attemptAutoplay();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // react to localMuted changes: set muted and play/pause accordingly
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !autoplayAttempted) return;

    if (!localMuted) {
      audio.muted = false;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // play can fail if browser blocks it
        });
      }
    } else {
      audio.pause();
      audio.muted = true;
    }
  }, [localMuted, autoplayAttempted]);

  // When user clicks the button:
  // - On first interaction (if autoplay failed): mark hasInteracted and unmute/play audio
  // - Afterwards: toggle mute
  const handleToggleMute = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setLocalMuted(false); // start playing
      if (isMuted) {
        toggleMute(); // sync parent if needed
      }
    } else {
      setLocalMuted((prev) => !prev);
      toggleMute();
    }
  };

  const navLinks = [
    { name: 'Tools', href: '#tools' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/30 dark:bg-black/50 backdrop-blur-lg border-b border-brand-cyan/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-orbitron font-black uppercase tracking-widest text-dark-text dark:text-white hover:text-brand-cyan transition-colors duration-300">
              Loki<span className="text-brand-cyan">FX</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-montserrat text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-brand-cyan transition-colors duration-300 relative group cursor-pointer"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
               <button
                onClick={handleToggleMute}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-brand-cyan hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors"
                aria-label="Toggle mute"
              >
                {localMuted ? <VolumeOffIcon className="w-6 h-6" /> : <VolumeUpIcon className="w-6 h-6" />}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-brand-cyan hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;