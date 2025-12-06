import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // This will load .env, .env.local, .env.[mode], .env.[mode].local
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // If you are using a library that requires process.env.API_KEY, this is the way to do it.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});