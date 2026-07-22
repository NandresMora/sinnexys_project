/**
 * StrictMode: Herramienta de desarrollo de React que ayuda a detectar
 * errores potenciales en el código (solo funciona en modo desarrollo).
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Se importa solo el subset 'latin' (cubre tildes, "ñ", "¿", "¡") en vez del
// paquete completo, que por defecto incluye cirílico, griego, vietnamita y
// latin-ext — subsets que este sitio en español nunca usa. Esto reduce el
// peso de las fuentes de ~669 KB a ~90 KB.
// También se agrega el peso 800 (usado por `font-extrabold` en About.tsx)
// que antes no estaba cargado y caía a una negrita sintética del navegador.
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/inter/latin-800.css';

// Renderiza el componente App dentro del elemento 'root' del HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
