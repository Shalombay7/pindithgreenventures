import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        // Injects the bundled assets into the <head> of your index.html
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: '/src/index.tsx', // The plugin will resolve this correctly
            },
          },
        ],
      },
    }),
  ],
})