import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env for the GenAI SDK as per requirements
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});