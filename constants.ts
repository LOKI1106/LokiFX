import { Niche } from './types';

export const PORTFOLIO_DATA: Niche[] = [
  {
    id: 'events',
    title: 'Event / Aftermovie',
    description: 'Dynamic edits capturing the energy and emotion of live events.',
    projects: [
      { id: 1, title: '2024 Freshers', description: 'High-energy aftermovie.', thumbnailUrl: 'src/thumnails/freshers.png', videoUrl: 'src/Videos/freshers.MOV' },
      { id: 2, title: 'Nirvana', description: 'Capturing the festival vibe.', thumbnailUrl: 'src/thumnails/nirvana.png', videoUrl: 'src/Videos/nirvana.MOV' },
    ]
  },
  {
    id: 'cinematic',
    title: 'Cinematic / Short Film',
    description: 'Story-driven visuals with professional color grading and effects.',
    projects: [
      { id: 3, title: 'Short Film', description: 'A gripping narrative short.', thumbnailUrl: 'src/thumnails/shortfilm.png', videoUrl: 'https://youtu.be/PzOK8GWkllE?si=RXV-2aWvMNZorsrb' },
      { id: 4, title: 'New York', description: 'Cinematic city scape.', thumbnailUrl: 'src/thumnails/newyork.png', videoUrl: 'src/Videos/new york.MOV' },
    ]
  },
  {
    id: 'travel',
    title: 'Travel / Vlog',
    description: 'Visual stories crafted with emotion, depth, and atmosphere—shot like scenes straight out of New York cinema.',
    projects: [
      { id: 5, title: 'Hyderabad', description: 'Exploring the city of pearls.', thumbnailUrl: 'src/thumnails/hyderabda.png', videoUrl: 'src/Videos/hdyerabad.MOV' },
      { id: 6, title: 'Dubai', description: 'A journey through the desert metropolis.', thumbnailUrl: 'src/thumnails/Dubai.png', videoUrl: 'src/Videos/dubai.MOV' },
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial / Product Ad',
    description: 'Logo animation, typography, focus pulls, motion graphics',
    projects: [
      { id: 7, title: 'iPhone 17', description: 'Concept ad.', thumbnailUrl: 'src/thumnails/iphone.png', videoUrl: 'src/Videos/iphone17.MOV' },
      { id: 8, title: '3D Text', description: 'Text animation.', thumbnailUrl: 'src/thumnails/fx.png', videoUrl: 'src/Videos/PENZOID CLASSIC.mkv' },
      { id: 9, title: 'Diet Coke', description: 'Refreshing product spot.', thumbnailUrl: 'src/thumnails/coke.png', videoUrl: 'src/Videos/Coke.MOV' },
    ]
  },
  {
    id: 'music',
    title: 'Music Video / Montage',
    description: 'Beat sync, effects, motion rhythm',
    projects: [
      { id: 10, title: 'CR7', description: 'Music video montage.', thumbnailUrl: 'src/thumnails/cr7.png', videoUrl: 'src/Videos/cr7.MOV' },
      { id: 11, title: 'anime', description: 'High-speed montage.', thumbnailUrl: 'src/thumnails/Anime.png', videoUrl: 'src/Videos/anime.mp4' },
    ]
  },
   {
    id: 'social',
    title: 'Social Media / Reels',
    description: 'Vertical short edits (trendy, energetic)',
    projects: [
      { id: 14, title: 'Spider-Man', description: 'Workout montage.', thumbnailUrl: 'src/thumnails/spidy.png', videoUrl: 'src/Videos/spidy.MOV' },
      { id: 15, title: 'DeadPool Motion-Effects', description: 'Trendy style reel.', thumbnailUrl: 'src/thumnails/deapool1.png', videoUrl: 'src/Videos/hotdeadpool.mp4' },
      { id: 16, title: 'DeadPool--Captions', description: 'Text Animation-reel.', thumbnailUrl: 'src/thumnails/deadpool.png', videoUrl: 'src/Videos/deadpool.mp4' },
      { id: 17, title: 'BMW', description: 'Slow-Phased Car edit.', thumbnailUrl: 'src/thumnails/bmw.png', videoUrl: 'src/Videos/BMW.mp4' },
    ]
  },
];