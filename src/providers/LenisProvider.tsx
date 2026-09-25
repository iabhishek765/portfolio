'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import type Lenis from 'lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const LenisModule = await import('lenis');
        const LenisClass = LenisModule.default;

        lenis = new LenisClass({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
          infinite: false,
        });

        lenisRef.current = lenis;

        // Sync GSAP ScrollTrigger with Lenis
        const syncGSAP = async () => {
          try {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);
            lenis!.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time: number) => lenis!.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
          } catch {
            // Fallback RAF if GSAP not available
            const raf = (time: number) => {
              lenis!.raf(time);
              rafId = requestAnimationFrame(raf);
            };
            rafId = requestAnimationFrame(raf);
          }
        };
        syncGSAP();
      } catch {
        console.warn('Lenis not available, using native scroll');
      }
    };

    initLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);
