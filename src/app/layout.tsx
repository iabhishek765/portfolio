import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import { LenisProvider } from '@/providers/LenisProvider';

export const metadata: Metadata = {
  title: '[YOUR NAME] — AI/ML Engineer & Deep Learning Enthusiast',
  description:
    'Personal portfolio of [YOUR NAME], an AI/ML Engineer specializing in deep learning, NLP, computer vision, and MLOps. Building intelligent systems that solve real-world problems.',
  keywords: ['AI Engineer', 'ML Engineer', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'Portfolio'],
  authors: [{ name: '[YOUR NAME]' }],
  openGraph: {
    title: '[YOUR NAME] — AI/ML Engineer',
    description: 'Building intelligent systems with deep learning, NLP, and MLOps.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[YOUR NAME] — AI/ML Engineer',
    description: 'Building intelligent systems with deep learning, NLP, and MLOps.',
    creator: '@[username]',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <LenisProvider>
          <CustomCursor />
          <ScrollProgressBar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
