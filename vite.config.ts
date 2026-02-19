import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite para el proyecto Sinnexys
// Se usa 'base' para que funcione correctamente en GitHub Pages
export default defineConfig({
  base: '/sinnexys_project/', // Ruta base para GitHub Pages (debe coincidir con el nombre del repositorio)
  plugins: [react()], // Plugin para soporte de React
  optimizeDeps: {
    exclude: ['lucide-react'], // Excluir librería de iconos de la pre-optimización
  },
});
