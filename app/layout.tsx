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

// Merge multiple classes
function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bikram Brar Portfolio',
    template: '%s | Bikram Brar Portfolio',
  },
  description:
    'Welcome to Bikram Brar’s personal portfolio site. Explore his AI projects, blog posts, and product management highlights.',
  openGraph: {
    title: 'Bikram Brar Portfolio',
    description: 'Explore Bikram’s AI projects, blog posts, and background.',
    url: baseUrl,
    siteName: 'Bikram Brar Portfolio',
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
    // NextThemes adds or removes 'dark' class on <html> to match OS or user toggle
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          'min-h-screen',
          'bg-white text-neutral-800',       // Light default
          'dark:bg-black dark:text-neutral-100', // Dark overrides
          'antialiased overflow-x-hidden',  // Utility classes
          GeistSans.variable, GeistMono.variable
        )}
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