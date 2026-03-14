/**
 * HeroRightColumn.tsx
 * Columna derecha del Hero:
 *   - Anillos giratorios decorativos de fondo
 *   - Tarjeta principal con imagen y filas de características
 *   - Badge flotante superior izquierdo ("Diseño a tu medida")
 *   - Badge flotante inferior derecho ("Disponible 24/7")
 */
import { Sparkles } from 'lucide-react';
import heroImg from '../../../assets/hero.png';

const FEATURE_ROWS = [
    {
        color: '#0066FF',
        label: 'Desarrollo Web Profesional',
        sub: 'Landing pages · E-commerce · Sistemas',
    },
    {
        color: '#00D9FF',
        label: 'Soporte & Mantenimiento',
        sub: 'Respuesta rápida · Monitoreo continuo',
    },
];

export default function HeroRightColumn() {
    return (
        <div className="hero-visual-col animate-fade-left" style={{ position: 'relative' }}>

            {/* Anillo exterior giratorio */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: 440,
                    height: 440,
                    zIndex: 0,
                }}
            >
                <div
                    className="hero-ring-spin"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '1px dashed rgba(0,102,255,0.2)',
                        borderRadius: '50%',
                    }}
                />
            </div>

            {/* Anillo interior contra-giratorio */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: 340,
                    height: 340,
                    zIndex: 0,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '1px solid rgba(0,217,255,0.08)',
                        borderRadius: '50%',
                        animation: 'spin-slow 18s linear reverse infinite',
                    }}
                />
            </div>

            {/* Tarjeta principal */}
            <div className="hero-visual-card card-float" style={{ position: 'relative', zIndex: 1 }}>

                {/* Resplandor interior */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(ellipse at 60% 30%, rgba(0,102,255,0.12) 0%, transparent 65%)',
                        borderRadius: 28,
                        pointerEvents: 'none',
                    }}
                />

                {/* Imagen principal */}
                <div style={{ borderRadius: 18, overflow: 'hidden', marginBottom: 24, position: 'relative' }}>
                    <img
                        src={heroImg}
                        alt="Equipo tecnológico"
                        style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
                    />
                    {/* Gradiente inferior sobre imagen */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(6,14,26,0.6) 0%, transparent 60%)',
                        }}
                    />
                </div>

                {/* Filas de características */}
                {FEATURE_ROWS.map(({ color, label, sub }) => (
                    <div
                        key={label}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            padding: '14px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                flexShrink: 0,
                                background: `${color}22`,
                                border: `1px solid ${color}44`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ width: 10, height: 10, borderRadius: 3, background: color }} />
                        </div>
                        <div>
                            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{label}</div>
                            <div style={{ color: 'rgba(180,200,220,0.5)', fontSize: '0.75rem', marginTop: 2 }}>{sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Badge flotante — superior izquierdo */}
            <div
                className="hero-float-badge card-float-delay"
                style={{ top: -20, left: -32, zIndex: 10 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: 'linear-gradient(135deg, #0066FF, #00D9FF)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Sparkles size={16} color="#fff" />
                    </div>
                    <div>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>Diseño a tu medida</div>
                        <div style={{ color: 'rgba(180,200,220,0.5)', fontSize: '0.72rem' }}>Confía en nosotros</div>
                    </div>
                </div>
            </div>

            {/* Badge flotante — inferior derecho */}
            <div
                className="hero-float-badge"
                style={{ bottom: -20, right: -32, zIndex: 10 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="hero-glow-dot" />
                    <div>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>Chat disponible 24/7</div>
                        <div style={{ color: 'rgba(180,200,220,0.5)', fontSize: '0.72rem' }}>Sin interrupciones</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
