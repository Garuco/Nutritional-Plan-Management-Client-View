import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Esto asegura que el service worker se actualice automáticamente.
      includeAssets: ['favicon.ico', 'robots.txt'], // Archivos que quieres que estén disponibles sin conexión.
      manifest: {
        name: 'Nutritional Plan Management',
        short_name: 'Nutritional Plan',
        description: 'Descripción de mi app',
        theme_color: '#ffffff', // Color de la barra de herramientas en dispositivos Android
        background_color: '#ffffff', // Color de fondo cuando se inicia la aplicación
        display: 'standalone', // Esto hace que se vea como una app nativa
        start_url: '.', // Página inicial
        icons: [
          {
            src: '/icons/test.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/test.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
