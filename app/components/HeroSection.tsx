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
        // Measure the hero container. If zero, fall back to window dimensions.
        const measuredWidth = sectionRef.current.offsetWidth || window.innerWidth
        const measuredHeight = sectionRef.current.offsetHeight || window.innerHeight
        setDimensions({
          width: measuredWidth,
          height: measuredHeight,
        })
      }
    }
    // Delay initial measurement to allow layout to settle.
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
      style={{ height: 'auto' }}
      className={`
        relative
        -mx-4 md:-mx-8 lg:-mx-0
        pt-16 md:pt-20 overflow-hidden
        overflow-y-auto md:overflow-y-hidden
        pb-8 md:pb-0
        md:h-[calc(100vh-64px)]
      `}
    >
      {/* Full‐width interactive dot background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <InteractiveGrid
          width={dimensions.width}
          height={dimensions.height}
          // lineSpacing & highlightRadius are optional, see default props
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full py-8 md:py-0 text-center px-6 sm:px-4 max-w-5xl mx-auto">
        <h1 className="mb-4 text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
          Bikram Brar
        </h1>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed">
          Hi! I'm Bikram, a Senior Product Manager and AI developer with a
          passion for building products that solve real-world problems. At the
          end of December 2023, I left my Senior PM role to spend all of 2024
          diving deeper into AI, becoming a better developer, and building apps
          that bring real utility to the world.
        </p>

        {/* Featured Projects */}
        <div className="mt-4 md:mt-8 flex flex-wrap gap-4 md:gap-6 justify-center px-2 sm:px-0">
          <Link
            href="/projects/mysti-health"
            className="
              group
              w-full sm:w-64 p-5 sm:p-4 rounded-md border border-neutral-200 dark:border-neutral-700 
              bg-white dark:bg-neutral-900
              hover:scale-105 hover:shadow-lg transition-all
            "
          >
            <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-blue-600">
              Mysti Health
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              A personal AI health agent that syncs with Apple/Google Health
              and provides personalized recommendations.
            </p>
          </Link>

          <Link
            href="/projects/dayplan-app"
            className="
              group
              w-full sm:w-64 p-5 sm:p-4 rounded-md border border-neutral-200 dark:border-neutral-700 
              bg-white dark:bg-neutral-900
              hover:scale-105 hover:shadow-lg transition-all
            "
          >
            <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-blue-600">
              Dayplan App
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              A SwiftUI productivity app that uses voice input + AI
              to automatically organize and prioritize tasks.
            </p>
          </Link>

          <Link
            href="/projects/repoprompter"
            className="
              group
              w-full sm:w-64 p-5 sm:p-4 rounded-md border border-neutral-200 dark:border-neutral-700 
              bg-white dark:bg-neutral-900
              hover:scale-105 hover:shadow-lg transition-all
            "
          >
            <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-blue-600">
              Repoprompter
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              An Electron app that helps developers create optimized LLM prompts
              from code repositories and apply AI changes.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}