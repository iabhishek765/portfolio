import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import { LenisProvider } from '@/providers/LenisProvider';
import GlobalBackground from '@/components/ui/GlobalBackground';

export const metadata: Metadata = {
  title: 'Abhishek Singh | Machine Learning Engineer ',
  description:
    'Personal portfolio of Abhishek Singh, a Machine Learning Engineer and AI/ML student specializing in machine learning, deep learning, NLP, computer vision, and intelligent systems.',
  keywords: ['AI Engineer', 'ML Engineer', 'Deep Learning', 'AI/ML', 'Scikit-learn', 'Tensorflow', 'MLOps', 'Portfolio'],
  authors: [{ name: 'Abhishek Singh' }],
  openGraph: {
    title: 'Abhishek Singh | Machine Learning Engineer',
    description: 'Machine Learning Engineer focused on AI/ML, deep learning, NLP, computer vision, and intelligent systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Singh | Machine Learning Engineer',
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
  <GlobalBackground />

  <LenisProvider>
    <CustomCursor />
    <ScrollProgressBar />
    {children}

  </LenisProvider>
</body>
    </html>
  );
}
