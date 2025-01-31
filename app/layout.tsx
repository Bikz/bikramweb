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

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

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
    description:
      'Explore Bikram’s AI projects, blog posts, and his background in product management & development.',
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          'antialiased text-black bg-white dark:text-white dark:bg-black',
          'overflow-x-hidden', // no horizontal scroll
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider>
          {/* Sticky nav pinned across all pages */}
          <Navbar />

          {/* 
            Wrap the site’s main content in a container. 
            Any full-width sections (e.g. Hero) can override this as needed.
          */}
          <div className="max-w-4xl mx-auto px-4 mt-4">
            <main>{children}</main>
          </div>

          {/* Footer & analytics (no container, or you can also wrap it if you prefer) */}
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