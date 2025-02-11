'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={false}
      // By omitting defaultTheme, Next Themes uses 'light' if no localStorage key is found
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}