import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/',

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-dom/client'],
          'supabase': ['@supabase/supabase-js'],
          'icons': ['lucide-react'],
        }
      }
    }
  }
})