import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/page-flip-2/' // Replace with your GitHub Pages repository name
});
