'use client'

import Link from 'next/link'
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
    <aside className="mb-16 tracking-tight">
      <div className="flex justify-center">
        <nav
          className="flex flex-row items-center space-x-2"
          id="nav"
        >
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
    </aside>
  )
}
