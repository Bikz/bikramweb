/**
 * nav.tsx
 * Title: Navbar Component
 * Description: Responsive site navigation with hamburger menu, route links, and glassmorphism styling.
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cx } from '../lib/utils'
import { motion } from 'framer-motion'

const navItems = [
  { path: '/', label: 'home' },
  { path: '/projects', label: 'projects' },
  { path: '/travel', label: 'travel' },
  { path: '/blog', label: 'blog' },
  { path: '/about', label: '[ contact ]' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="
        sticky top-0 z-50 
        bg-white/80 dark:bg-black/80 backdrop-blur-md
        border-b border-neutral-200/50 dark:border-neutral-800/50
      "
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3"></div>
        <div className="absolute top-3 right-1/4 w-16 h-16 rounded-full border border-gray-200/30 dark:border-gray-800/30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-2 relative"
        >
          <Link href="/" className="text-lg font-semibold transition-all hover:text-neutral-600 dark:hover:text-neutral-300">
            Bikram Brar
          </Link>
        </motion.div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 backdrop-blur-sm transition-all duration-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-1">
          {navItems.map(({ path, label }, index) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-3 rounded-md hover:bg-black/5 dark:hover:bg-white/5 backdrop-blur-sm"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col px-6 py-3 space-y-3 bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-neutral-200/50 dark:border-neutral-800/50"
        >
          {navItems.map(({ path, label }, index) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Link
                href={path}
                className="block transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-3 rounded-md hover:bg-black/5 dark:hover:bg-white/5 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </header>
  )
}