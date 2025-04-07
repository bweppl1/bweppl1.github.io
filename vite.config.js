import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  //base: process.env.VITE_BASE_PATH || '/',  // Use the VITE_BASE_PATH environment variable
  plugins: [react()],
});
