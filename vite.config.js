import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  server: {
    host: true, // This makes it listen on all local IPs
    port: 5173,
    allowedHosts: [
      'webdeveloper.engineer',
      '.webdeveloper.engineer' // The dot allows subdomains too
    ]
  }
})
