import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  // Rutas relativas en el build para que el dist/ funcione abierto
  // directamente con doble click (file://) sin necesidad de servidor.
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    // Empaqueta TODO (JS, CSS, imágenes) dentro del index.html
    // como un único archivo autocontenido.
    assetsInlineLimit: 100000000, // inlinea cualquier asset
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})
