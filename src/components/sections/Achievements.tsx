'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar } from 'lucide-react';
import { achievements } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="achievements"
      className="section"
      ref={ref}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <SectionWrapper>
        <p className="section-label">Milestones</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Key milestones, competition results, and recognition across the AI/ML community.
        </p>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginTop: '1rem', marginBottom: '3rem' }} />
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            className="card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            data-cursor="pointer"
          >
            {/* Decorative accent glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 3,
                height: '100%',
                background: 'var(--gradient-accent)',
                borderRadius: '0 0.25rem 0.25rem 0',
              }}
            />

            {/* Icon */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '0.75rem',
                background: 'var(--accent-muted)',
                border: '1px solid var(--border-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}
            >
              {achievement.icon}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.4rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {achievement.title}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={10} />
                  {achievement.year}
                </div>
              </div>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '0.75rem',
                }}
              >
                {achievement.description}
              </p>
              {achievement.link && achievement.link !== '#' && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  <ExternalLink size={11} /> View Details
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
