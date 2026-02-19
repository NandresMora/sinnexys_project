/**
 * main.tsx - Punto de entrada de la aplicación React
 * 
 * Este archivo es el primero que se ejecuta cuando se carga la página.
 * Su función principal es:
 * 1. Importar el componente raíz (App)
 * 2. Importar los estilos globales (index.css)
 * 3. Montar la aplicación en el elemento HTML con id="root"
 * 
 * StrictMode: Herramienta de desarrollo de React que ayuda a detectar
 * errores potenciales en el código (solo funciona en modo desarrollo).
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Renderiza el componente App dentro del elemento 'root' del HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
