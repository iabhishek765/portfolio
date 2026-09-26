'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { personal } from '@/data/portfolio';
import MagneticButton from '@/components/ui/MagneticButton';

// Beam component for the Aceternity-style background
function BeamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient mesh */}
      <div className="gradient-mesh" />
      {/* Diagonal beams */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="beam absolute"
          style={{
            top: '-20%',
            left: `${10 + i * 16}%`,
            width: '2px',
            height: '60%',
            background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(6,182,212,0.3)'}, transparent)`,
            animationDuration: `${4 + i * 0.8}s`,
            animationDelay: `${i * 0.5}s`,
            transform: 'rotate(-15deg)',
            filter: 'blur(1px)',
          }}
        />
      ))}
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Noise texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

// Particle dots using pure CSS
function ParticleDots() {
  const dots = useRef<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([]);

  if (dots.current.length === 0) {
    dots.current = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 3,
    }));
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.current.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            background: i % 3 === 0 ? 'rgba(59,130,246,0.7)' : i % 3 === 1 ? 'rgba(6,182,212,0.5)' : 'rgba(139,92,246,0.4)',
            animation: `pulse ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
            boxShadow: `0 0 ${dot.size * 2}px currentColor`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {


  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background */}
      <BeamBackground />
      <ParticleDots />

      {/* Radial spotlight from center */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: 800 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="chip mb-6"
          style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
        >
          ✦ Available for Opportunities
        </motion.div>

        {/* Staggered headline */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.15em',
          }}
        >
          {["HEY THERE,", " I'M", " ABHISHEK SINGH "].map((word, wi) => (
            <span key={wi} style={{ display: 'inline-flex', overflow: 'hidden' }}>
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + wi * 0.1 + ci * 0.03,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    color: wi === 3 ? 'transparent' : 'var(--text-primary)',
                    background: wi === 3 ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : 'none',
                    WebkitBackgroundClip: wi === 3 ? 'text' : 'initial',
                    backgroundClip: wi === 3 ? 'text' : 'initial',
                    WebkitTextFillColor: wi === 3 ? 'transparent' : 'inherit',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontFamily: "'Space Grotesk', sans-serif",
            minHeight: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>{'>'}</span>
          <TypeAnimation
            sequence={personal.roles.flatMap((role) => [role, 2200])}
            wrapper="span"
            speed={45}
            deletionSpeed={65}
            repeat={Infinity}
            style={{ color: 'var(--text-secondary)' }}
          />
          <span
            style={{
              width: 2,
              height: '1.2em',
              background: 'var(--accent)',
              display: 'inline-block',
              animation: 'pulse 1s step-end infinite',
            }}
          />
        </motion.div>

        {/* Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: '2.5rem',
          }}
        >
          Passionate about MLOps, deep learning and open-source AI.
          Focused on bridging the gap between research and real-world software.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            type="button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            data-cursor="pointer"
          >
            <Eye size={16} /> View Projects
          </button>
          <MagneticButton
            as="a"
            href="/Abhishek__Singh_Resume__.pdf"
            target="_blank"
            className="btn-outline"
          >
            <Download size={16} /> Resume
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex gap-8 mt-12"
        >
          {[
            { value: '[10]+', label: 'Projects' },
            { value: '[30]+', label: 'Certifications' },
            { value: '[5]+', label: 'Hackathons' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={scrollToAbout}
        data-cursor="pointer"
        className="bounce-arrow absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ background: 'none', border: 'none', cursor: 'none' }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={20} style={{ color: 'var(--accent)' }} />
      </motion.button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
