import { Suspense, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface LazySectionProps {
  children: ReactNode;
  fallback: ReactNode;
  /** Alto reservado mientras la sección no ha sido vista, para evitar
   *  saltos de layout (CLS) cuando finalmente se monta. */
  minHeight?: number;
}

/**
 * LazySection
 *
 * Antes, las 6 secciones "lazy" de App.tsx compartían un único <Suspense>,
 * lo que dispara los 6 `import()` casi al mismo tiempo apenas monta la
 * página — el code splitting reducía el JS inicial parseado, pero no
 * retrasaba la descarga por red hasta que el usuario realmente llegara
 * a cada sección.
 *
 * Con este wrapper, cada sección se observa con IntersectionObserver y
 * solo se importa (Suspense + lazy) cuando está a ~300px de entrar al
 * viewport. En conexiones lentas o cuando el usuario no hace scroll
 * hasta el final, esto ahorra descargas de red innecesarias.
 */
export default function LazySection({ children, fallback, minHeight = 400 }: LazySectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} style={!isInView ? { minHeight } : undefined}>
      {isInView && <Suspense fallback={fallback}>{children}</Suspense>}
    </div>
  );
}
