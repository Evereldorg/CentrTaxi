import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', '>1%'],
        })
      ]
    }
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500,
  }
});