"use client";

import { useEffect, useState } from "react";

export default function GlobalBackground() {
  const [particles, setParticles] = useState<
    Array<{
      left: number;
      top: number;
      size: number;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 45 }, (_, index) => ({
      left: (index * 37.7) % 100,
      top: (index * 61.3) % 100,
      size: 1 + (index % 3),
      delay: (index % 8) * 0.8,
      duration: 4 + (index % 5),
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="global-background"
    >
      {/* Base glow */}
      <div className="global-background__glow global-background__glow--one" />
      <div className="global-background__glow global-background__glow--two" />
      <div className="global-background__glow global-background__glow--three" />

      {/* Animated diagonal beams */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="global-background__beam"
          style={{
            left: `${10 + index * 16}%`,
            animationDuration: `${4 + index * 0.8}s`,
            animationDelay: `${index * 0.5}s`,
          }}
        />
      ))}

      {/* Grid */}
      <div className="global-background__grid" />

      {/* Noise */}
      <div className="global-background__noise" />

      {/* Particles */}
      <div className="global-background__particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="global-background__particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}