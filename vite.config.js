import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Never inline assets as base64 — preserve full quality image files
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Keep asset filenames predictable for CDN caching
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  // Dev server: serve assets with long cache and no transform
  server: {
    headers: {
      // Allow high-res images to be cached aggressively during development
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})


