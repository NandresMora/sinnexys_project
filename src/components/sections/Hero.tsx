/**
 * Hero.tsx
 * Sección principal (above the fold) de la landing.
 *
 * Arquitectura:
 *   HeroStyles      → Keyframes y clases CSS personalizadas
 *   HeroBackground  → Grid de fondo + orbes de luz
 *   HeroLeftColumn  → Badge, título, subtítulo, pills, botones CTA
 *   HeroRightColumn → Tarjeta visual, anillos, badges flotantes
 */

import HeroStyles from './hero/HeroStyles';
import HeroBackground from './hero/HeroBackground';
import HeroLeftColumn from './hero/HeroLeftColumn';
import HeroRightColumn from './hero/HeroRightColumn';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        fontFamily: "'DM Sans', 'Sora', sans-serif",
        background: 'linear-gradient(135deg, #060E1A 0%, #0A1929 50%, #071428 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Estilos e animaciones inyectados una sola vez */}
      <HeroStyles />

      {/* Fondo decorativo: grid + orbes */}
      <HeroBackground />

      {/* Contenido principal — 2 columnas */}
      <div
        style={{
          position: 'relative',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '96px 24px',
          width: '100%',
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Columna izquierda: badge + headline + pills + CTA */}
          <HeroLeftColumn onScrollTo={scrollToSection} />

          {/* Columna derecha: tarjeta visual + badges flotantes */}
          <HeroRightColumn />
        </div>
      </div>
    </section>
  );
}