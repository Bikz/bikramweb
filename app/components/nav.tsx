'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import React from 'react'

const navItems = [
  { path: '/', label: 'home' },
  { path: '/projects', label: 'projects' },
  { path: '/blog', label: 'blog' },
  { path: '/about', label: 'about' },
  { path: '/travel', label: 'travel' },
]

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-2 pr-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Theme Toggle */}
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}