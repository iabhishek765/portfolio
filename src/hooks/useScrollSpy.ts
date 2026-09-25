'use client';

import { useState, useEffect, useCallback } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0.35) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    let current = sectionIds[0];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + scrollY;
      const threshold = top - windowH * offset;
      if (scrollY >= threshold) {
        current = id;
      }
    }
    setActiveSection(current);
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { activeSection, scrollToSection };
}
