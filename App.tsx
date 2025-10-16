import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Tools from './components/Tools';
import Intro from './components/Intro';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('public/Music/Background Music For Videos YouTube VLOG Upbeat Corporate Instrumental Presentation [FREE DOWNLOAD].mp3');
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      audioRef.current?.play().catch(error => console.log("Autoplay was prevented.", error));
    }, 2500); // Intro duration reduced

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <>
      <div id="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      {showIntro && <Intro />}
      <div className={`relative overflow-x-hidden antialiased ${showIntro ? 'opacity-0' : 'fade-in'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.05)_0%,_rgba(0,255,255,0)_40%)] -z-10"></div>
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme}
          isMuted={isMuted}
          toggleMute={toggleMute}
        />
        <main>
          <Hero />
          <Tools />
          <Portfolio />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;