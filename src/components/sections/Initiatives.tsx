'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Users } from 'lucide-react';
import { initiatives } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Initiatives() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="initiatives"
      className="section"
      ref={ref}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <SectionWrapper>
        <p className="section-label">Community</p>
        <h2 className="section-title">Initiatives</h2>
        <p className="section-subtitle">
          Communities, open-source programs, and mentoring initiatives I&apos;m actively part of.
        </p>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginTop: '1rem', marginBottom: '3rem' }} />
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {initiatives.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="card"
            style={{
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
            }}
            data-cursor="pointer"
          >
            {/* Background accent */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent-muted), transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '0.875rem',
                background: 'var(--accent-muted)',
                border: '1px solid var(--border-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
              }}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  marginBottom: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {item.role}
              </p>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Users size={11} style={{ color: 'var(--accent)' }} />
                {item.impact}
              </div>
              {item.link && item.link !== '#' && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  <ExternalLink size={11} /> Visit
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
