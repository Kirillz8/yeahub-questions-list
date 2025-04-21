import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      shared: path.resolve(__dirname, 'src/shared'),
      entities: path.resolve(__dirname, 'src/entities'),
      features: path.resolve(__dirname, 'src/features'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      pages: path.resolve(__dirname, 'src/pages'),
      processes: path.resolve(__dirname, 'src/processes'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
  build: {
    outDir: 'build', // здесь указываешь название папки
  },
});
