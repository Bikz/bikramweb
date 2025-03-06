/**
 * ThemeProvider.tsx
 * Title: Theme Provider
 * Description: Provides dark/light mode using next-themes for the entire application.
 */

'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      storageKey={undefined} 
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}