'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      // System-based dark/light mode automatically
      enableSystem={true}
      defaultTheme="system"
      // We omit localStorage override entirely, so it always matches device
      storageKey={undefined} 
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}