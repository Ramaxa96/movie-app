import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    server: {
    host: true, 
    allowedHosts: ['verecund-saniya-predestinately.ngrok-free.dev'],
    hmr: {
      protocol: 'wss',
      host: 'verecund-saniya-predestinately.ngrok-free.dev',
      port: 443,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
