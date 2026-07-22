import { useEffect, useRef, useState } from 'react';

/**
 * useInView
 *
 * Detecta cuándo un elemento entra (o está a punto de entrar) al viewport,
 * usando el IntersectionObserver nativo del navegador — sin dependencias
 * externas.
 *
 * Se usa para disparar el `import()` de una sección recién cuando el
 * usuario se acerca a ella al hacer scroll, en vez de disparar los 6
 * imports de golpe apenas monta la página (que es lo que pasaba antes
 * con un único <Suspense> envolviendo todas las secciones).
 *
 * `rootMargin` por defecto adelanta la carga ~300px antes de que la
 * sección sea visible, para que el usuario no vea el loader al llegar.
 */
export function useInView<T extends HTMLElement>(rootMargin = '300px') {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) return;

    // Si el navegador no soporta IntersectionObserver (muy poco probable
    // hoy en día), se degrada a "siempre visible" para no romper el sitio.
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, isInView]);

  return { ref, isInView };
}
