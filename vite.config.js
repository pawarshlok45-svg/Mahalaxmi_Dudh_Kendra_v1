import { defineConfig } from 'vite';

export default defineConfig({
  // Proxy /api calls to the Express server during development
  server: {
    port: 4173,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
  // Serve static assets from public/
  publicDir: 'public',
});
