import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-light-bg dark:bg-dark-bg flex items-center justify-center fade-out" style={{ animationDelay: '1.5s' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
        src="https://videos.pexels.com/video-files/3844820/3844820-hd_1920_1080_25fps.mp4"
      />
      <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-[1]"></div>

      <div className="relative z-10 glitch-container">
        <h1
          className="font-orbitron font-black uppercase tracking-widest text-dark-text dark:text-white text-6xl md:text-8xl lg:text-9xl glitch"
          data-text="LokiFX"
        >
          Loki<span className="text-brand-cyan">FX</span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;