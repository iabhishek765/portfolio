'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, FolderOpen, Cpu, Award, Trophy, Globe, Mail,
  Github, Linkedin, Twitter, X, Menu
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { personal, navItems } from '@/data/portfolio';

// Kaggle icon as SVG (not in lucide)
const KaggleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
  </svg>
);


const iconMap: Record<string, LucideIcon> = {
  Home, User, FolderOpen, Cpu, Award, Trophy, Globe, Mail,
};

const socialLinks = [
  { icon: Github, href: personal.socials.github, label: 'GitHub', color: '#f0f4ff' },
  { icon: Linkedin, href: personal.socials.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, href: personal.socials.twitter, label: 'X / Twitter', color: '#1DA1F2' },
  { icon: KaggleIcon, href: personal.socials.kaggle, label: 'Kaggle', color: '#20BEFF' },
  { icon: Mail, href: personal.socials.email, label: 'Email', color: '#3b82f6' },
];

interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    if (isMobile) setIsOpen(false);
  };

  const SidebarContent = () => (
    <div className="sidebar flex flex-col h-full" style={isMobile ? { transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' } : {}}>
      {/* Profile */}
      <div className="flex flex-col items-center mb-8 pt-2">
        {/* Avatar */}
        <div className="relative mb-4">
          <div
            className="avatar-ring"
            style={{ padding: 3, borderRadius: '50%', background: 'transparent' }}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400">
              {/* Placeholder avatar — replace src with /images/profile.jpg */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 50%, #1e40af 100%)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'white',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {personal.shortName.charAt(0)}
              </div>
            </div>
          </div>
          {/* Online indicator */}
          <div
            className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2"
            style={{ background: '#22c55e', borderColor: 'var(--bg-sidebar)' }}
          />
        </div>

        {/* Name */}
        <h2
          className="text-center font-bold mb-0.5"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', color: 'var(--text-primary)' }}
        >
          {personal.name}
        </h2>
        <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em' }}>
          AI / ML Engineer
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mb-8">
        {socialLinks.map(({ icon: Icon, href, label, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            data-cursor="pointer"
            whileHover={{ y: -3, color }}
            whileTap={{ scale: 0.9 }}
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex' }}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem' }} />

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              data-cursor="pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick(item.id)}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'var(--accent-muted)', zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon size={16} style={{ flexShrink: 0 }} />
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="ml-auto w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--accent)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6" style={{ borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
          Built with Next.js & ❤️
          <br />
          <span style={{ color: 'var(--accent)', fontSize: '0.65rem' }}>© {new Date().getFullYear()} {personal.shortName}</span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger button (mobile) */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        data-cursor="pointer"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <X size={18} style={{ color: 'var(--text-primary)' }} /> : <Menu size={18} style={{ color: 'var(--text-primary)' }} />}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Sidebar overlay (mobile) */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="sidebar-overlay visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar — always rendered, visibility controlled via CSS/transform */}
      {isMobile ? (
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="sidebar"
              style={{ transform: 'none' }}
            >
              <SidebarContent />
            </motion.aside>
          )}
        </AnimatePresence>
      ) : (
        <aside className="sidebar" style={{ transform: 'none' }}>
          <SidebarContent />
        </aside>
      )}
    </>
  );
}
