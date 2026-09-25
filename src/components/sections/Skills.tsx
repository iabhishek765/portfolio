'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  index: number;
  inView: boolean;
}

function SkillCard({ name, icon, level, index, inView }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="skill-icon-card tooltip-trigger"
      data-cursor="pointer"
    >
      <div style={{ fontSize: '1.75rem', lineHeight: 1 }}>{icon}</div>
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          textAlign: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '0.02em',
        }}
      >
        {name}
      </span>

      {/* Proficiency bar */}
      <div
        style={{
          width: '100%',
          height: 2,
          background: 'var(--border)',
          borderRadius: 1,
          overflow: 'hidden',
          marginTop: 2,
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: index * 0.06 + 0.3, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'var(--gradient-accent)',
            borderRadius: 1,
          }}
        />
      </div>

      {/* Tooltip */}
      <div
        className="tooltip absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap"
        style={{
          padding: '0.3rem 0.6rem',
          borderRadius: '0.375rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-hover)',
          fontSize: '0.7rem',
          color: 'var(--accent)',
          fontWeight: 600,
          zIndex: 10,
        }}
      >
        {level}% proficiency
      </div>
    </motion.div>
  );
}

interface SkillGroupProps {
  title: string;
  emoji: string;
  items: Array<{ name: string; icon: string; level: number }>;
  inView: boolean;
  baseDelay: number;
}

function SkillGroup({ title, emoji, items, inView, baseDelay }: SkillGroupProps) {
  return (
    <SectionWrapper delay={baseDelay}>
      <div className="mb-6">
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>{emoji}</span> {title}
        </h3>
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"
          style={{ position: 'relative' }}
        >
          {items.map((skill, i) => (
            <SkillCard
              key={skill.name}
              {...skill}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const groups = [
    { title: 'Languages', emoji: '💻', items: skills.languages, baseDelay: 0 },
    { title: 'ML / DL Frameworks & Libraries', emoji: '🧠', items: skills.mlFrameworksAndLibraries, baseDelay: 0.1 },
    { title: 'Tools & DevOps', emoji: '🛠️', items: skills.tools, baseDelay: 0.2 },
    { title: 'Software Development', emoji: '☁️', items: skills.softwareDevelopment, baseDelay: 0.3 },
  ];

  return (
    <section
      id="skills"
      className="section"
      ref={ref}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <SectionWrapper>
        <p className="section-label">Technical Arsenal</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with daily — from research to production.
        </p>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginTop: '1rem', marginBottom: '3rem' }} />
      </SectionWrapper>

      <div className="space-y-10">
        {groups.map((group) => (
          <SkillGroup key={group.title} {...group} inView={inView} />
        ))}
      </div>
    </section>
  );
}
