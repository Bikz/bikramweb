/**
 * HeroSection.tsx
 * Title: Hero Section
 * Description: The top hero banner introducing Bikram Brar, highlighting key AI projects.
 */

'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import InteractiveGrid from '../InteractiveGrid'

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleResize() {
      if (sectionRef.current) {
        const measuredWidth = sectionRef.current.offsetWidth || window.innerWidth
        const measuredHeight = sectionRef.current.offsetHeight || window.innerHeight
        
        setDimensions({
          width: measuredWidth,
          height: measuredHeight,
        })
      }
    }
    const timeoutId = setTimeout(handleResize, 100)
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: 'calc(100vh - 64px)' }}
      className="
        relative
        -mx-4 md:-mx-8 lg:-mx-0
        pt-20 md:pt-0 overflow-hidden
        flex md:items-center md:justify-center
      "
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <InteractiveGrid
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center py-8 md:py-0 text-center px-8 sm:px-4 max-w-5xl mx-auto">
        <h1 className="mb-4 text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
          Bikram Brar
        </h1>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed">
          Hi! I'm Bikram, a Product Engineer with a
          passion for building products that solve real-world problems. At the
          end of December 2023, I left my Senior PM role to spend all of 2024
          diving deeper into AI, becoming a better developer, and building apps
          that bring real utility to the world.
          <br />
          <br />
        </p>

        <h2 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
          Stuff I've Built:
        </h2>
       
        <div className="mt-4 md:mt-8 flex flex-wrap gap-6 justify-center px-0">
          <Link
            href="/projects/mysti-health"
            className="
              group
              w-full sm:w-64 p-4 rounded-md border border-neutral-200 dark:border-neutral-700 
              bg-white dark:bg-neutral-900
              hover:scale-105 hover:shadow-lg transition-all
              mx-2 sm:mx-0
            "
          >
            <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-blue-600">
              Mysti Health
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              A personal AI health agent that syncs with Apple/Google Health
              and provides personalized recommendations.
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 italic">React Native →</p>
          </Link>

          <Link
            href="/projects/dayplan-app"
            className="
              group
              w-full sm:w-64 p-4 rounded-md border border-neutral-200 dark:border-neutral-700 
              bg-white dark:bg-neutral-900
              hover:scale-105 hover:shadow-lg transition-all
              mx-2 sm:mx-0
            "
          >
            <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-blue-600">
              Dayplan App
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              A SwiftUI productivity app that uses voice input + AI
              to automatically organize and prioritize tasks.
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 italic">Swift →</p>
          </Link>

          <Link
            href="/projects/repoprompter"
            className="
              group
              w-full sm:w-64 p-4 rounded-md border border-neutral-200 dark:border-neutral-700 
              bg-white dark:bg-neutral-900
              hover:scale-105 hover:shadow-lg transition-all
              mx-2 sm:mx-0
            "
          >
            <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-blue-600">
              Repoprompter
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              An Electron app that helps developers create optimized LLM prompts
              from code repositories and apply AI changes.
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 italic">React Electron →</p>
          </Link>
        </div>
      </div>
    </section>
  )
}