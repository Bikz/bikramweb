/**
 * layout.tsx
 * Title: Root Layout
 * Description: Global Next.js layout with SEO metadata, theme provider, and global styles.
 */

import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Footer from './components/footer'
import { ThemeProvider } from './components/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'
import { Navbar } from './components/nav'

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // Updated site-wide default SEO
  title: {
    default: 'Bikram Brar – AI Product Engineer & Product Manager',
    template: '%s | Bikram Brar – AI Product Engineer & Product Manager',
  },
  description:
    'Bikram Brar is an AI Product Engineer & Product Manager with deep expertise in building AI-powered solutions and leading product strategy.',
  openGraph: {
    title: 'Bikram Brar – AI Product Engineer & Product Manager',
    description:
      'Explore Bikram’s AI projects, product management experience, and blog posts on technology and innovation.',
    url: baseUrl,
    siteName: 'Bikram Brar – AI Product Engineer & Product Manager',
    locale: 'en_US',
    type: 'website',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          'min-h-screen',
          'bg-white text-neutral-800',
          'dark:bg-black dark:text-neutral-100',
          'antialiased overflow-x-hidden',  
          GeistSans.variable,
          GeistMono.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <div className="max-w-3xl mx-auto w-full px-4 mt-12">
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}