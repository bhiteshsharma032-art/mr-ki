import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/components/sections/Navigation';
import ThemeColor from '@/components/ui/ThemeColor';
import CookieBanner from '@/components/ui/CookieBanner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mr Ki — Intelligent Automation That Delivers',
  description: 'Premium AI automation solutions that transform manual workflows into intelligent, automated systems. Proven results in 4 weeks with 280% average ROI.',
  keywords: ['AI automation', 'workflow automation', 'chatbot development', 'document processing', 'business automation', 'AI solutions'],
  authors: [{ name: 'Mr Ki' }],
  creator: 'Mr Ki',
  publisher: 'Mr Ki',
  metadataBase: new URL('https://mrki.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mrki.ai',
    title: 'Mr Ki — Intelligent Automation That Delivers',
    description: 'Premium AI automation solutions that transform manual workflows into intelligent, automated systems.',
    siteName: 'Mr Ki',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mr Ki - Intelligent Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr Ki — Intelligent Automation That Delivers',
    description: 'Premium AI automation solutions that transform manual workflows into intelligent, automated systems.',
    images: ['/og-image.png'],
    creator: '@mrki',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FAFAF9" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <ThemeColor />
          <Navigation />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
