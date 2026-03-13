/**
 * HeroStyles.tsx
 * Estilos e animaciones del Hero — extraídos para mantener Hero.tsx limpio.
 * Se inyectan como un <style> tag en el DOM una sola vez.
 */
export default function HeroStyles() {
    return (
        <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50%       { transform: translateY(-18px) rotate(3deg); }
      }
      @keyframes floatDelay {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50%       { transform: translateY(-12px) rotate(-2deg); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeSlideLeft {
        from { opacity: 0; transform: translateX(24px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50%       { opacity: 1;   transform: scale(1.08); }
      }
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes ping-slow {
        0%   { transform: scale(1);   opacity: 0.8; }
        80%  { transform: scale(2.2); opacity: 0; }
        100% { transform: scale(2.2); opacity: 0; }
      }

      /* Entrada animada por pasos */
      .animate-fade-up-1 { animation: fadeSlideUp 0.7s ease          forwards; opacity: 0; }
      .animate-fade-up-2 { animation: fadeSlideUp 0.7s ease 0.15s    forwards; opacity: 0; }
      .animate-fade-up-3 { animation: fadeSlideUp 0.7s ease 0.30s    forwards; opacity: 0; }
      .animate-fade-up-4 { animation: fadeSlideUp 0.7s ease 0.45s    forwards; opacity: 0; }
      .animate-fade-up-5 { animation: fadeSlideUp 0.7s ease 0.60s    forwards; opacity: 0; }
      .animate-fade-left { animation: fadeSlideLeft 0.8s ease 0.30s  forwards; opacity: 0; }

      /* Flotación de tarjetas */
      .card-float       { animation: float      4s ease-in-out infinite; }
      .card-float-delay { animation: floatDelay 5s ease-in-out 1s infinite; }

      /* Texto con shimmer cian→blanco→azul */
      .shimmer-text {
        background: linear-gradient(90deg, #00D9FF 0%, #ffffff 40%, #0066FF 60%, #00D9FF 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      /* Botón primario con overlay hover */
      .hero-btn-primary {
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #0066FF, #0055DD);
        color: #fff;
        border: none;
        border-radius: 14px;
        padding: 15px 32px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 24px rgba(0,102,255,0.35);
        font-family: inherit;
        letter-spacing: 0.01em;
      }
      .hero-btn-primary::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #00D9FF, #0066FF);
        opacity: 0;
        transition: opacity 0.3s;
      }
      .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,102,255,0.5); }
      .hero-btn-primary:hover::before { opacity: 1; }
      .hero-btn-primary span,
      .hero-btn-primary svg { position: relative; z-index: 1; }

      /* Botón secundario outline */
      .hero-btn-secondary {
        background: transparent;
        color: #00D9FF;
        border: 1.5px solid rgba(0,217,255,0.4);
        border-radius: 14px;
        padding: 15px 32px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.25s;
        font-family: inherit;
        letter-spacing: 0.01em;
        backdrop-filter: blur(8px);
      }
      .hero-btn-secondary:hover {
        background: rgba(0,217,255,0.1);
        border-color: #00D9FF;
        transform: translateY(-2px);
      }

      /* Pill de servicio */
      .hero-service-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(0,102,255,0.12);
        border: 1px solid rgba(0,102,255,0.25);
        border-radius: 999px;
        padding: 8px 16px;
        font-size: 0.8rem;
        font-weight: 500;
        color: #7EB8FF;
        transition: all 0.2s;
      }
      .hero-service-pill:hover {
        background: rgba(0,102,255,0.22);
        color: #fff;
      }

      /* Tarjeta visual (columna derecha) */
      .hero-visual-card {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 28px;
        padding: 32px;
        backdrop-filter: blur(16px);
        position: relative;
      }

      /* Badge flotante */
      .hero-float-badge {
        position: absolute;
        background: rgba(10,25,41,0.85);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 16px;
        padding: 12px 18px;
        backdrop-filter: blur(20px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.4);
      }

      /* Punto de estado activo (verde pulsante) */
      .hero-glow-dot {
        width: 8px; height: 8px;
        background: #22C55E;
        border-radius: 50%;
        position: relative;
        flex-shrink: 0;
      }
      .hero-glow-dot::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #22C55E;
        animation: ping-slow 2s cubic-bezier(0,0,0.2,1) infinite;
      }

      /* Anillo giratorio de fondo */
      .hero-ring-spin { animation: spin-slow 12s linear infinite; }

      /* Grid de fondo sutil */
      .hero-grid-bg {
        background-image:
          linear-gradient(rgba(0,102,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,102,255,0.06) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      /* Responsive: en tablet/móvil solo se muestra la columna de texto */
      @media (max-width: 1023px) {
        .hero-grid  { grid-template-columns: 1fr !important; }
        .hero-visual-col { display: none !important; }
      }
    `}</style>
    );
}
