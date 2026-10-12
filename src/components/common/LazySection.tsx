//importes de estados
import { Suspense, useState, useEffect, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';


interface LazySectionProps {
  id: string;
  delay?: number;
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
export default function LazySection({ id, delay, children, fallback, minHeight = 400 }: LazySectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  //estado para forzar tiempo de carga
  const [forceLoad, setForceLoad] = useState(false);

  //useEfect para forzar tiempo de carga
  useEffect(() => {
    if (!delay || isInView || forceLoad) return;

    const timer = setTimeout(() => {
      setForceLoad(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, isInView, forceLoad]);

  //renderiza su el usuario hizo scroll o si el tiempo se agoto
  const shouldRender = isInView || forceLoad;



  return (
    // EL ID VA AQUÍ: Este div siempre existe en el DOM, así el Navbar funciona desde el inicio
    <div id={id} ref={ref} style={!shouldRender ? { minHeight } : undefined} className="w-full">
      {shouldRender && <Suspense fallback={fallback}>{children}</Suspense>}
    </div>
  );
}
