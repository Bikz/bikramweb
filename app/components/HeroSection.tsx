'use client'

import React, { useState, useEffect, useRef } from 'react'
import InteractiveGrid from '../InteractiveGrid'
import Link from 'next/link'

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleResize() {
      if (heroRef.current) {
        setDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        })
      }
    }
    handleResize() // get initial size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-around px-4 pt-12 pb-16"
      ref={heroRef}
    >
      {/* 
        The InteractiveGrid canvas is placed behind the hero content (z-0).
        It uses the measured width/height of the section to fill the entire hero.
      */}
      <div className="absolute inset-0 z-0">
        <InteractiveGrid
          width={dimensions.width}
          height={dimensions.height}
          lineSpacing={50}       // distance between lines
          highlightRadius={12}   // how close the mouse must be to highlight
        />
      </div>

      {/* Hero text/content (stacked above the canvas using z-10) */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Welcome to My Portfolio
        </h1>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
          Hi! I’m Bikram, a Senior Product Manager and AI developer with a
          passion for building products that solve real-world problems.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
          At the end of December 2023, I left my Senior Product Manager role
          to spend all of 2024 diving deeper into AI, becoming a better
          developer, and building apps that I believe can bring real utility
          to the world.
        </p>
      </div>

      {/* Featured AI Projects */}
      <div className="relative z-10 mt-8 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-3">Featured AI Projects</h2>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          <Link
            href="/projects/mysti-health"
            className="bg-white dark:bg-neutral-900 w-64 p-4 rounded border border-neutral-200 
                       dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2">Mysti Health</h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              A personal AI health agent that syncs with Apple/Google Health
              and provides personalized health recommendations.
            </p>
          </Link>

          <Link
            href="/projects/dayplan-app"
            className="bg-white dark:bg-neutral-900 w-64 p-4 rounded border border-neutral-200 
                       dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2">Dayplan App</h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
              SwiftUI productivity app that uses voice input and AI to
              automatically organize and prioritize tasks.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
