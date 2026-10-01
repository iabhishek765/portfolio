'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { personal, expertise } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section" ref={ref}>
      {/* Header */}
      <SectionWrapper>
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginBottom: '3rem' }} />
      </SectionWrapper>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Bio column */}
        <SectionWrapper delay={0.1}>
          <div className="space-y-5">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              {personal.bio}
            </p>
            <p style={{ textAlign: 'justify', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I am a Computer Science undergraduate specializing in AI/ML, focused on 
    building impactful artificial intelligence software systems. My interests
    span machine learning, deep learning, and software development.
    I enjoy working across the ML development lifecycle from data preprocessing
    and feature engineering to model development, evaluation, API integration, 
    and deployment and create projects which can solve some real world problems
    like detecting deepfakes before they spread, reading emotion from raw audio,
    student placement readiness systems and many more, I believe in learning by
    building.
              
              Alongside academics, I work on improving my problem solving and leaderhip skills,
              participate in hackathons, explore new technologies, and read newsletters. My
              current goal is to grow as an AI/ML Engineer and contribute to meaningful products
              which can create measurable impact.
              
              
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: MapPin, text: personal.location },
                
                { icon: GraduationCap, text: 'B.Tech CSE (AI & ML), JECRC University' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2"
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '0.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Icon size={13} style={{ color: 'var(--accent)' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Portrait + tilt */}
        <SectionWrapper delay={0.2}>
          <div className="flex justify-center lg:justify-end">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.08}
              glareColor="#3b82f6"
              glareBorderRadius="1rem"
              transitionSpeed={500}
            >
              <div
                style={{
                  width: 320,
                  height: 360,
                  borderRadius: '1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Placeholder portrait — replace with <Image> */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: 'inherit',
                  }}
                >
                  <img
                    src="/images/Photo.png"
                    alt="Abhishek Singh"
                    style={{
                      width: '100%',
      height: '150%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block',
                    }}
                  />
                
                


                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: 'white',
                      fontFamily: "'Space Grotesk', sans-serif",
                      boxShadow: '0 0 40px rgba(59,130,246,0.4)',
                    }}
                  >
                    {personal.shortName.charAt(0)}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {personal.name}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: 4 }}>
                      AI / ML Engineer
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 80,
                    background: 'radial-gradient(circle at top right, rgba(59,130,246,0.2), transparent 70%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 80,
                    height: 80,
                    background: 'radial-gradient(circle at bottom left, rgba(6,182,212,0.15), transparent 70%)',
                  }}
                />
              </div>
            </Tilt>
          </div>
        </SectionWrapper>
      </div>

      {/* Core Expertise chips */}
      <SectionWrapper delay={0.3} className="mt-14">
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Core Expertise
        </h3>
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {expertise.map((tag, i) => (
            <motion.span
              key={tag}
              className="chip"
              custom={i}
              variants={chipVariants}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
