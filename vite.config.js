// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No Tailwind here — it's managed by postcss.config.js

export default defineConfig({
  plugins: [react()],
});