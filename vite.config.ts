import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import UnoCSS from 'unocss/vite'
import svgr from 'vite-plugin-svgr'
export default defineConfig({
  plugins: [ UnoCSS(),react(), svgr()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/datas': {
        target: 'http://39.99.42.82:8002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/datas/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  
})
