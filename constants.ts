import { Niche } from './types';

export const PORTFOLIO_DATA: Niche[] = [
  {
    id: 'events',
    title: 'Event / Aftermovie',
    description: 'Dynamic edits capturing the energy and emotion of live events.',
    projects: [
      { id: 1, title: '2024 Freshers', description: 'High-energy aftermovie.', thumbnailUrl: '/thumnails/freshers.png', videoUrl: '/Videos/freshers.MOV' },
      { id: 2, title: 'Nirvana', description: 'Capturing the festival vibe.', thumbnailUrl: '/thumnails/nirvana.png', videoUrl: '/Videos/nirvana.MOV' },
    ]
  },
  {
    id: 'cinematic',
    title: 'Cinematic / Short Film',
    description: 'Story-driven visuals with professional color grading and effects.',
    projects: [
      { id: 3, title: 'Short Film', description: 'A gripping narrative short.', thumbnailUrl: '/thumnails/shortfilm.png', videoUrl: '/Videos/shortfilm.mp4' },
      { id: 4, title: 'New York', description: 'Cinematic city scape.', thumbnailUrl: '/thumnails/newyork.png', videoUrl: '/Videos/new york.MOV' },
    ]
  },
  {
    id: 'travel',
    title: 'Travel / Vlog',
    description: 'Visual stories crafted with emotion, depth, and atmosphere—shot like scenes straight out of New York cinema.',
    projects: [
      { id: 5, title: 'Hyderabad', description: 'Exploring the city of pearls.', thumbnailUrl: '/thumnails/hyderabda.png', videoUrl: '/Videos/hdyerabad.MOV' },
      { id: 6, title: 'Dubai', description: 'A journey through the desert metropolis.', thumbnailUrl: '/thumnails/Dubai.png', videoUrl: '/Videos/dubai.MOV' },
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial / Product Ad',
    description: 'Logo animation, typography, focus pulls, motion graphics',
    projects: [
      { id: 7, title: 'iPhone 17', description: 'Concept ad.', thumbnailUrl: '/thumnails/iphone.png', videoUrl: '/Videos/iphone17.MOV' },
      { id: 8, title: '3D Text', description: 'Text animation.', thumbnailUrl: '/thumnails/fx.png', videoUrl: '/Videos/PENZOID CLASSIC.mkv' },
      { id: 9, title: 'Diet Coke', description: 'Refreshing product spot.', thumbnailUrl: '/thumnails/coke.png', videoUrl: '/Videos/Coke.MOV' },
    ]
  },
  {
    id: 'music',
    title: 'Music Video / Montage',
    description: 'Beat sync, effects, motion rhythm',
    projects: [
      { id: 10, title: 'CR7', description: 'Music video montage.', thumbnailUrl: '/thumnails/cr7.png', videoUrl: '/Videos/cr7.MOV' },
      { id: 11, title: 'anime', description: 'High-speed montage.', thumbnailUrl: '/thumnails/Anime.png', videoUrl: '/Videos/anime.mp4' },
    ]
  },
   {
    id: 'social',
    title: 'Social Media / Reels',
    description: 'Vertical short edits (trendy, energetic)',
    projects: [
      { id: 14, title: 'Spider-Man', description: 'Workout montage.', thumbnailUrl: '/thumnails/spidy.png', videoUrl: '/Videos/spidy.MOV' },
      { id: 15, title: 'DeadPool Motion-Effects', description: 'Trendy style reel.', thumbnailUrl: '/thumnails/deapool1.png', videoUrl: '/Videos/hotdeadpool.mp4' },
      { id: 16, title: 'DeadPool--Captions', description: 'Text Animation-reel.', thumbnailUrl: '/thumnails/deadpool.png', videoUrl: '/Videos/deadpool.mp4' },
      { id: 17, title: 'BMW', description: 'Slow-Phased Car edit.', thumbnailUrl: '/thumnails/bmw.png', videoUrl: '/Videos/BMW.mp4' },
    ]
  },
];