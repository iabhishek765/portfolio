'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Twitter, Mail, MapPin, CheckCircle } from 'lucide-react';
import { personal } from '@/data/portfolio';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Contact() {
  const { ref } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send (replace with your API route or Formspree/Resend)
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const socials = [
    { icon: Github, href: personal.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.socials.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personal.socials.twitter, label: 'X / Twitter' },
    { icon: Mail, href: personal.socials.email, label: 'Email' },
  ];

  return (
    <section
      id="contact"
      className="section"
      ref={ref}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <SectionWrapper>
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a project in mind, a question, or just want to connect? My inbox is always open.
        </p>
        <div style={{ width: 48, height: 3, background: 'var(--gradient-accent)', borderRadius: 2, marginTop: '1rem', marginBottom: '3rem' }} />
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Info */}
        <SectionWrapper delay={0.1}>
          <div className="space-y-8">
            <div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                Let&apos;s build something amazing together
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                Whether you&apos;re looking for an AI/ML engineer, want to collaborate
                on an open-source project, or just want to talk tech — I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '0.5rem',
                    background: 'var(--accent-muted)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={15} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 1 }}>Email</div>
                  <a
                    href={personal.socials.email}
                    data-cursor="pointer"
                    style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '0.5rem',
                    background: 'var(--accent-muted)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={15} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 1 }}>Location</div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-cursor="pointer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '0.625rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px var(--accent-glow)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Right: Form */}
        <SectionWrapper delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="[Your Name]"
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="form-input"
                />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block' }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Collaboration Opportunity"
                className="form-input"
              />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block' }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="form-input"
                style={{ resize: 'vertical', minHeight: 120 }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              data-cursor="pointer"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {sending ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    style={{
                      width: 14,
                      height: 14,
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                    }}
                  />
                  Sending...
                </span>
              ) : sent ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle size={16} /> Message Sent!
                </span>
              ) : (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Send size={15} /> Send Message
                </span>
              )}
            </button>
          </motion.form>
        </SectionWrapper>
      </div>

      {/* Bottom copyright bar */}
      <div
        style={{
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}
      >
        Designed & built by{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{personal.name}</span>
        {' '}· {new Date().getFullYear()} · Powered by Next.js
      </div>
    </section>
  );
}
