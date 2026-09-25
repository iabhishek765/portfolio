'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

const gradientColors = [
  'from-blue-600 to-cyan-500',
  'from-purple-600 to-blue-500',
  'from-cyan-500 to-teal-500',
  'from-indigo-600 to-purple-500',
  'from-blue-500 to-indigo-600',
  'from-teal-500 to-cyan-600',
];

const iconMap: Record<string, string> = {
  Python: '🐍', PyTorch: '🔥', TensorFlow: '🌊', FastAPI: '🚀',
  Docker: '🐳', Kubernetes: '☸️', MLflow: '📊', Airflow: '🌬️',
  HuggingFace: '🤗', LangChain: '🔗', Pinecone: '📌',
  'Next.js': '▲', Rust: '🦀', ONNX: '⚙️', TensorRT: '⚡',
  Python3: '🐍', Pandas: '🐼', Plotly: '📈', Dash: '📊',
  OpenCV: '👁️', Streamlit: '🎈', GCP: '🌤️', AWS: '☁️',
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="card"
      style={{
        overflow: 'hidden',
        cursor: 'default',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: hovered ? '0 20px 60px rgba(59,130,246,0.12)' : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'box-shadow 0.3s ease',
      }}
      data-cursor="pointer"
    >
      {/* Project preview area */}
      <div
        style={{
          height: 180,
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(145deg, #0d1326, #1e3a8a)`,
        }}
      >
        {/* Gradient preview — replace with actual image */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} opacity-20`}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              fontSize: '2.5rem',
              filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.5))',
            }}
          >
            {project.tags[0] && iconMap[project.tags[0]] ? iconMap[project.tags[0]] : '🤖'}
          </div>
          <div
            style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            {project.tags[0]}
          </div>
        </div>

        {/* Hover overlay with tech tags + links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,8,16,0.97) 0%, rgba(5,8,16,0.75) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '1rem',
            gap: '0.5rem',
          }}
        >
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="chip"
                style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}
              >
                {iconMap[tag] && <span className="mr-0.5">{iconMap[tag]}</span>}
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '0.3rem 0.65rem',
                  borderRadius: '0.375rem',
                  background: 'rgba(59,130,246,0.2)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  color: '#93c5fd',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <Github size={12} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '0.3rem 0.65rem',
                  borderRadius: '0.375rem',
                  background: 'rgba(6,182,212,0.2)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#67e8f9',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <ExternalLink size={12} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              padding: '0.2rem 0.5rem',
              borderRadius: '0.375rem',
              background: 'rgba(234,179,8,0.15)',
              border: '1px solid rgba(234,179,8,0.3)',
              color: '#fbbf24',
              fontSize: '0.65rem',
              fontWeight: 700,
            }}
          >
            <Star size={10} fill="currentColor" /> Featured
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section" ref={ref}>
      <SectionWrapper>
        <p className="section-label">What I&apos;ve Built</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A collection of ML/DL projects, research implementations,
          and tools I&apos;ve built or contributed to.
        </p>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginTop: '1rem', marginBottom: '3rem' }} />
      </SectionWrapper>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} inView={inView} />
        ))}
      </div>

      {/* GitHub CTA */}
      <SectionWrapper delay={0.4} className="flex justify-center mt-10">
        <a
          href={`https://github.com/[username]`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          data-cursor="pointer"
        >
          <Github size={16} /> View All on GitHub
        </a>
      </SectionWrapper>
    </section>
  );
}
