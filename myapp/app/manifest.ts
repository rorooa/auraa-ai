import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AURAA - Emotion AI Companion',
    short_name: 'AURAA',
    description: 'Your personal, emotion-aware AI companion powered by real-time facial analysis and conversational intelligence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020205',
    theme_color: '#020205',
    orientation: 'portrait',
    icons: [
      {
        src: '/globe.svg', // Fallback icon, ideally replace with high-res logo later
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
