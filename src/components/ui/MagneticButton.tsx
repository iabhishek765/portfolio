'use client';

import { useRef, ReactNode, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  as?: 'button' | 'a' | 'div';
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  as: Tag = 'div',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    ref.current.style.transition = 'transform 0.15s ease';
  };

  if (Tag === 'a' && href) {
    return (
      <div
        className="magnetic-wrap"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        ref={ref}
        style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
      >
        <a href={href} target={target} rel={rel} className={className} data-cursor="pointer">
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      className="magnetic-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={ref}
      style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      <button className={className} onClick={onClick} data-cursor="pointer">
        {children}
      </button>
    </div>
  );
}
