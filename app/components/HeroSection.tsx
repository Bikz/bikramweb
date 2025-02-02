'use client'

import React, { useState, useEffect, useRef } from 'react'
import InteractiveGrid from '../InteractiveGrid'
import Link from 'next/link'

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleResize() {
      if (sectionRef.current) {
        // Get the measured dimensions; if 0, fall back to window dimensions.
        const measuredWidth = sectionRef.current.offsetWidth || window.innerWidth
        const measuredHeight = sectionRef.current.offsetHeight || window.innerHeight
        setDimensions({
          width: measuredWidth,
          height: measuredHeight,
        })
      }
    }
    // Delay measurement slightly to ensure layout has settled.
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
      className={`
        relative 
        h-screen
        -mx-4      /* Allows the hero to break out of parent padding */
        md:-mx-8   
        lg:-mx-0   
        pt-20      /* Leave room for the sticky nav */
        overflow-hidden 
        bg-white dark:bg-black
      `}
    >
      {/* Full-width grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <InteractiveGrid
          width={dimensions.width}
          height={dimensions.height}
          lineSpacing={50}
          highlightRadius={12}
        />
      </div>

      {/* Hero content, centered horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Bikram Brar
        </h1>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
          Hi! I’m Bikram, a Senior Product Manager and AI developer with a
          passion for building products that solve real-world problems.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
          At the end of December 2023, I left my Senior Product Manager role to
          spend all of 2024 diving deeper into AI, becoming a better developer,
          and building apps that I believe can bring real utility to the world.
        </p>

        {/* Featured AI Projects */}
        <div className="mt-8 flex flex-row flex-wrap gap-6 justify-center">
          <Link
            href="/projects/mysti-health"
            className="bg-white dark:bg-neutral-900 w-64 p-4 rounded border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2">Mysti Health</h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              A personal AI health agent that syncs with Apple/Google Health and
              provides personalized health recommendations.
            </p>
          </Link>

          <Link
            href="/projects/dayplan-app"
            className="bg-white dark:bg-neutral-900 w-64 p-4 rounded border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2">Dayplan App</h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              SwiftUI productivity app that uses voice input and AI to automatically
              organize and prioritize tasks.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}