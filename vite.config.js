import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  sbuild: {
    outDir: 'dist', // Ensure the build output directory is 'dist'
  },
  server: {
    open: true, // Automatically open the app in the browser on start
  },
  base: '/', // Set the base URL
});
