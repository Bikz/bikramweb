/**
 * footer.tsx
 * Title: Footer Component
 * Description: A simple site footer with social links and copyright.
 */

'use client'

import React, { useRef } from 'react'
import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  const currentYearRef = useRef(new Date().getFullYear())

  return (
    <footer className="container mx-auto py-8 px-4 mt-8">
      <div className="flex justify-center space-x-4">
        <Link 
          href="https://www.linkedin.com/in/bikrambrar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          LinkedIn
        </Link>
        <Link 
          href="https://x.com/bikbrar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          X
        </Link>
        <Link 
          href="https://github.com/Bikz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          GitHub
        </Link>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {currentYearRef.current} Bikram Brar. All rights reserved.
      </p>
    </footer>
  )
}