/**
 * HeroLeftColumn.tsx
 * Columna izquierda del Hero:
 *   - Badge de categoría
 *   - Título Sinnexys + subtítulo shimmer
 *   - Párrafo descriptivo
 *   - Pills de servicios
 *   - Botones CTA (Ver servicios / Contactar ahora)
 */
import { ArrowRight, Sparkles, Zap, Shield, Wifi } from 'lucide-react';

interface Props {
    onScrollTo: (id: string) => void;
}

const SERVICE_PILLS = [
    { icon: <Zap size={12} />, label: 'Desarrollo Web' },
    { icon: <Shield size={12} />, label: 'Soporte Técnico' },
    { icon: <Wifi size={12} />, label: 'Redes & Conectividad' },
];

export default function HeroLeftColumn({ onScrollTo }: Props) {
    return (
        <div>
            {/* Badge */}
            <div className="animate-fade-up-1" style={{ marginBottom: 28 }}>
                <span
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(0,217,255,0.08)',
                        border: '1px solid rgba(0,217,255,0.2)',
                        borderRadius: 999,
                        padding: '8px 18px',
                        fontSize: '0.8rem',
                        color: '#00D9FF',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                    }}
                >
                    <Sparkles size={13} />
                    Soluciones tecnológicas profesionales
                </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up-2">
                <h1
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                        fontWeight: 800,
                        lineHeight: 1.08,
                        letterSpacing: '-0.03em',
                        color: '#fff',
                        marginBottom: 8,
                    }}
                >
                    Sinnexys
                </h1>

                <h2
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        marginBottom: 24,
                    }}
                >
                    <span className="shimmer-text">
                        Soluciones que impulsan
                        <br />
                        tu crecimiento
                    </span>
                </h2>
            </div>

            {/* Descripción */}
            <div className="animate-fade-up-3">
                <p
                    style={{
                        fontSize: '1.05rem',
                        color: 'rgba(200,215,235,0.8)',
                        lineHeight: 1.75,
                        maxWidth: 480,
                        marginBottom: 36,
                        fontWeight: 300,
                    }}
                >
                    Transforma tu pyme con soluciones IT integrales: desarrollo web profesional,
                    soporte técnico especializado y tecnología a tu medida.
                </p>
            </div>

            {/* Pills de servicios */}
            <div
                className="animate-fade-up-3"
                style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}
            >
                {SERVICE_PILLS.map(({ icon, label }) => (
                    <span key={label} className="hero-service-pill">
                        {icon} {label}
                    </span>
                ))}
            </div>

            {/* Botones CTA */}
            <div
                className="animate-fade-up-4"
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
                <button
                    className="hero-btn-primary"
                    onClick={() => onScrollTo('servicios')}
                >
                    <span>Ver servicios</span>
                    <ArrowRight size={16} />
                </button>

                <button
                    className="hero-btn-secondary"
                    onClick={() => onScrollTo('contacto')}
                >
                    Contactar ahora
                </button>
            </div>
        </div>
    );
}
