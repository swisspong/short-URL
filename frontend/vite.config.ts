import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Specify the output directory for the production build
    outDir: 'dist',

    // Enable minification for production
    // minify: 'terser',

    // Enable CSS extraction for better performance
    cssCodeSplit: true,

    // Add any other production-specific optimizations here
    // For example, you can configure asset hashing:
    // assetDir: 'assets',
    // assetsInlineLimit: 4096,
  },
  server: {
    host: true,
    port: 8080
  }
})
