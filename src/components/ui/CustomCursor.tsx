'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, [data-cursor="pointer"], .nav-item, .skill-icon-card, .flip-card, .magnetic-wrap');
      setIsHovering(!!hoverable);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', updateHover);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    // Animate ring with lerp
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', updateHover);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-all duration-100"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: isHovering ? '#06b6d4' : '#3b82f6',
          boxShadow: isHovering ? '0 0 8px #06b6d4' : '0 0 6px #3b82f6',
          transform: 'translate(-100px, -100px)',
          mixBlendMode: 'normal',
          transition: 'background 0.15s, box-shadow 0.15s',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(6,182,212,0.6)' : 'rgba(59,130,246,0.4)'}`,
          transform: 'translate(-100px, -100px)',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease, border-radius 0.2s ease',
          ...(isHovering && {
            width: 48,
            height: 48,
          }),
          ...(isClicking && {
            width: 24,
            height: 24,
          }),
        }}
      />
    </>
  );
}
