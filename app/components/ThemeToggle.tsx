'use client'

import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // On mount, read from localStorage or from the initial system theme
  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      // system preference if no setting in localStorage
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', isSystemDark)
      setIsDark(isSystemDark)
    }
  }, [])

  // Toggle function
  const handleToggle = () => {
    const newDarkValue = !isDark
    setIsDark(newDarkValue)
    document.documentElement.classList.toggle('dark', newDarkValue)
    window.localStorage.setItem('theme', newDarkValue ? 'dark' : 'light')
  }

  return (
    <button
      onClick={handleToggle}
      className="ml-4 py-1 px-2 rounded border border-neutral-300 dark:border-neutral-700 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}