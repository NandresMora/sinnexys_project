import { useEffect } from 'react';

/**
 * PWATestFeatures - Componente experimental sugerido por el usuario.
 * Propósito: 
 * 1. Solicitar permiso de ubicación al entrar (para validar alcance).
 * 2. Pruebas de interacción móvil PWA.
 * 
 * Este componente es REVERSIBLE. Para desactivarlo, simplemente 
 * cambia la prop 'enabled' a false en App.tsx o comenta su uso.
 */

interface Props {
  enabled: boolean;
}

export default function PWATestFeatures({ enabled }: Props) {
  useEffect(() => {
    if (!enabled) return;

    // Detectar si estamos en modo PWA o móvil para la prueba
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isStandalone || isMobile) {
      console.log('PWA/Mobile detectado, iniciando prueba de ubicación...');
      
      // Solicitar ubicación
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Ubicación permitida:", position.coords.latitude, position.coords.longitude);
            // Aquí se podría enviar a una analítica para el "estudio de alcance"
          },
          (error) => {
            console.warn("Ubicación denegada o error:", error.message);
          },
          {
            enableHighAccuracy: false, // Menos intrusivo para pruebas iniciales
            timeout: 5000,
            maximumAge: 0
          }
        );
      }
    }
  }, [enabled]);

  // Este componente no renderiza nada visual, es pura lógica
  return null;
}
