
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { initGA } from '@/lib/analytics';
import { initAutoTracking } from '@/lib/autoTracking';

// Initialize Google Analytics
if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
  initGA(import.meta.env.VITE_GA_MEASUREMENT_ID);
}

// Initialize automatic tracking after React renders
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);

// Initialize auto tracking once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initAutoTracking();
  });
} else {
  // DOM is already ready
  setTimeout(() => {
    initAutoTracking();
  }, 500);
}
