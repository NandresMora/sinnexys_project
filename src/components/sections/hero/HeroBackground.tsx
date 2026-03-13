/**
 * HeroBackground.tsx
 * Elementos decorativos del fondo del Hero:
 *   - Grid sutil de líneas azuladas
 *   - Orbes de luz ambiente (glow) que pulsan
 */
export default function HeroBackground() {
    return (
        <>
            {/* Grid de puntos/líneas sutil */}
            <div
                className="hero-grid-bg"
                style={{ position: 'absolute', inset: 0, opacity: 0.5 }}
            />

            {/* Orbe de luz izquierda */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '-10%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'pulseGlow 6s ease-in-out infinite',
                }}
            />

            {/* Orbe de luz derecha */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '-5%',
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'pulseGlow 8s ease-in-out 2s infinite',
                }}
            />
        </>
    );
}
