'use client';


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

interface CertCardProps {
  cert: typeof certifications[0];
  index: number;
  inView: boolean;
}

function CertCard({ cert, index, inView }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="flip-card"
      style={{ height: 220 }}
      data-cursor="pointer"
    >
      <div className="flip-card-inner" style={{ width: '100%', height: '100%' }}>
        {/* Front */}
        <div
          className="flip-card-front card"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'var(--accent-muted)',
              border: '1px solid var(--border-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
            }}
          >
            {cert.icon}
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
            }}
          >
            {cert.title}
          </h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
            {cert.issuer}
          </p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{cert.date}</p>
          <div
            style={{
              position: 'absolute',
              bottom: 10,
              right: 12,
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Award size={10} /> Hover to see details
          </div>
        </div>

        {/* Back */}
        <div
          className="flip-card-back"
          style={{
            background: 'linear-gradient(145deg, #0d1a3a, #0f2050)',
            border: '1px solid var(--border-hover)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2rem' }}>{cert.icon}</div>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}
          >
            {cert.description}
          </p>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '0.4rem 1rem',
              borderRadius: '0.375rem',
              background: 'var(--accent-muted)',
              border: '1px solid var(--border-hover)',
              color: 'var(--accent)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <ExternalLink size={12} /> View Credential
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="certifications"
      className="section"
      ref={ref}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <SectionWrapper>
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications that validate my expertise across AI and other fields.
        </p>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginTop: '1rem', marginBottom: '3rem' }} />
      </SectionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
