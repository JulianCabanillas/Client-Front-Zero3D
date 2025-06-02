import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig(({ command, mode }) => {
  return {
    base: mode === 'production' ? '/' : '/',
    plugins: [preact()],
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://backend:8000',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'dist',
    },
  }
})
