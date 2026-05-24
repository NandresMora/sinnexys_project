/**
 * StrictMode: Herramienta de desarrollo de React que ayuda a detectar
 * errores potenciales en el código (solo funciona en modo desarrollo).
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// Renderiza el componente App dentro del elemento 'root' del HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
