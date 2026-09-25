'use client';

import { navItems } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import Sidebar from '@/components/layout/Sidebar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Initiatives from '@/components/sections/Initiatives';
import Contact from '@/components/sections/Contact';

const sectionIds = navItems.map((n) => n.id);

export default function Home() {
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds);

  return (
    <div className="layout-container">
      <Sidebar activeSection={activeSection} onNavClick={scrollToSection} />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Initiatives />
        <Contact />
      </main>
    </div>
  );
}
