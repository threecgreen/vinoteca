import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' })
  ],
  root: '.',
  base: '/static/',
  publicDir: false,  // Static assets already in place, no copying needed
  build: {
    outDir: 'static',
    emptyOutDir: false,  // Don't delete img folder
    rollupOptions: {
      input: resolve(__dirname, 'front_end/index.tsx'),
      output: {
        format: 'es',
        entryFileNames: 'vinoteca.bundle.js',
        chunkFileNames: '[name].bundle.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'vinoteca.bundle.css'
          return 'assets/[name][extname]'
        },
        inlineDynamicImports: true
      }
    }
  },
  resolve: {
    alias: {
      'lib': resolve(__dirname, 'lib'),
      'components': resolve(__dirname, 'components'),
      'front_end': resolve(__dirname, 'front_end'),
      'generated': resolve(__dirname, 'generated')
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions', 'slash-div', 'mixed-decls'],
      }
    }
  },
  // Optimize date-fns - only include English locale
  optimizeDeps: {
    include: ['date-fns/locale/en-US']
  }
})
