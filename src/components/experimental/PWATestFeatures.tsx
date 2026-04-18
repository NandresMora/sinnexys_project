import { useEffect, useState } from 'react';

/**
 * PWATestFeatures - Componente experimental sugerido por el usuario.
 * Propósito:
 *  1. Solicitar permiso de ubicación al entrar (para validar alcance geográfico).
 *  2. Mostrar banner visual informativo antes de pedir el permiso del navegador.
 *
 * Este componente es REVERSIBLE. Para desactivarlo, simplemente
 * cambia la prop 'enabled' a false en App.tsx o comenta su uso.
 */

interface Props {
  enabled: boolean;
}

type LocationState = 'idle' | 'granted' | 'denied' | 'unsupported';

export default function PWATestFeatures({ enabled }: Props) {
  const [showBanner, setShowBanner] = useState(false);
  const [locationState, setLocationState] = useState<LocationState>('idle');

  useEffect(() => {
    if (!enabled) return;

    // Mostrar banner solo si la API está disponible y no se pidió antes
    if (!('geolocation' in navigator)) {
      setLocationState('unsupported');
      return;
    }

    // Verificar si ya se dio permiso previamente (evitar preguntar de nuevo)
    if ('permissions' in navigator) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((result) => {
          if (result.state === 'granted') {
            // Ya tiene permiso: obtener posición silenciosamente
            requestLocation();
          } else if (result.state === 'denied') {
            setLocationState('denied');
          } else {
            // 'prompt' → mostrar nuestro banner explicativo primero
            setShowBanner(true);
          }
        })
        .catch(() => {
          // Si no se puede consultar permisos, mostrar banner directamente
          setShowBanner(true);
        });
    } else {
      setShowBanner(true);
    }
  }, [enabled]);

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(
          '📍 Ubicación obtenida:',
          position.coords.latitude,
          position.coords.longitude
        );
        setLocationState('granted');
        setShowBanner(false);
      },
      (error) => {
        console.warn('🚫 Ubicación denegada o error:', error.message);
        setLocationState('denied');
        setShowBanner(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 0,
      }
    );
  };

  const handleAllow = () => {
    setShowBanner(false);
    requestLocation();
  };

  const handleDeny = () => {
    setShowBanner(false);
    setLocationState('denied');
  };

  if (!enabled || !showBanner) return null;

  return (
    <>
      {/* Overlay oscuro de fondo */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(4px)',
          zIndex: 9998,
        }}
        onClick={handleDeny}
      />

      {/* Banner / Modal de permiso de ubicación */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-banner-title"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '0 16px 24px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #0d1b2e 0%, #0a1929 100%)',
            border: '1px solid rgba(0, 102, 255, 0.3)',
            borderRadius: '20px',
            padding: '24px',
            maxWidth: '480px',
            width: '100%',
            boxShadow:
              '0 -4px 40px rgba(0, 102, 255, 0.2), 0 20px 60px rgba(0,0,0,0.5)',
            animation: 'slideUpBanner 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <style>{`
            @keyframes slideUpBanner {
              from { transform: translateY(120%); opacity: 0; }
              to   { transform: translateY(0);    opacity: 1; }
            }
          `}</style>

          {/* Ícono */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0066FF, #00C6FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              marginBottom: 16,
              boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)',
            }}
          >
            📍
          </div>

          {/* Título */}
          <h3
            id="location-banner-title"
            style={{
              color: '#ffffff',
              fontSize: '1.15rem',
              fontWeight: 700,
              margin: '0 0 8px',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Sinnexys necesita tu ubicación
          </h3>

          {/* Descripción */}
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              margin: '0 0 20px',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Usamos tu ubicación <strong style={{ color: '#60a5fa' }}>únicamente</strong>{' '}
            para conocer el alcance geográfico de nuestros servicios y ofrecerte
            soporte en tu zona. No compartimos tus datos con terceros.
          </p>

          {/* Botones */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              id="location-allow-btn"
              onClick={handleAllow}
              style={{
                flex: 1,
                padding: '12px 0',
                borderRadius: 12,
                border: 'none',
                background: 'linear-gradient(135deg, #0066FF, #0044cc)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 4px 16px rgba(0, 102, 255, 0.35)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              Permitir acceso
            </button>
            <button
              id="location-deny-btn"
              onClick={handleDeny}
              style={{
                flex: 1,
                padding: '12px 0',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)')
              }
            >
              Ahora no
            </button>
          </div>

          {/* Nota de privacidad */}
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.75rem',
              textAlign: 'center',
              margin: '16px 0 0',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            🔒 Tu privacidad está protegida. Puedes revocar el acceso en cualquier momento desde la configuración del navegador.
          </p>
        </div>
      </div>
    </>
  );
}
