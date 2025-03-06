/**
 * nav.tsx
 * Title: Navbar Component
 * Description: Responsive site navigation with hamburger menu and route links.
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cx } from '../lib/utils'

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
        bg-white dark:bg-black 
        border-b border-neutral-200 dark:border-neutral-800
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-lg font-semibold transition-all">
            Bikram Brar
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900"
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

        <nav className="hidden md:flex space-x-4">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-2 space-y-2 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}