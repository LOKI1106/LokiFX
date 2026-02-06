LokiFX Video Editor Portfolio

A cinematic, motion-forward portfolio site for LokiFX, built to showcase editing niches and highlight video work with rich interactions, audio, and full-screen previews.

## Features

- Glitch intro overlay and hero background video
- Portfolio grouped by niche with modal video playback
- Theme toggle (light/dark) and audio mute control
- Scroll progress indicator and motion-driven section reveals
- About section with skills, social links, and a front-end contact form

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Framer Motion
- React Intersection Observer

## Getting Started

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`

## Build and Preview

- Build for production:
  `npm run build`
- Preview the production build:
  `npm run preview`

## Content and Data

- Portfolio items live in [constants.ts](constants.ts).
- Update videos and thumbnails in public folders:
  - public/Videos
  - public/thumnails
  - public/Music

## Notes

- The contact form is front-end only; it does not send data to a backend.
- Browser autoplay policies may block audio until user interaction.
