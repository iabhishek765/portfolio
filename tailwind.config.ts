import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3b82f6',
        'accent-cyan': '#06b6d4',
        'bg-primary': '#050810',
        'bg-secondary': '#0a0f1e',
        'bg-card': '#0d1326',
        'bg-sidebar': '#070c18',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Space Grotesk', 'ui-sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      },
      keyframes: {
        glowRing: {
          '0%, 100%': {
            boxShadow: '0 0 0 3px #3b82f6, 0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.4)',
          },
          '50%': {
            boxShadow: '0 0 0 3px #06b6d4, 0 0 30px rgba(6,182,212,0.5), 0 0 60px rgba(6,182,212,0.3)',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'glow-ring': 'glowRing 3s ease-in-out infinite',
        bounce: 'bounce 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
