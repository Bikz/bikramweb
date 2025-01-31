'use client'

import React, { useState, useEffect, useRef } from 'react'
import InteractiveGrid from '../InteractiveGrid'
import Link from 'next/link'
import { Navbar } from './nav'

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
      ref={heroRef}
      className="
        relative 
        w-screen      /* full browser width */
        h-screen      /* exactly one screen tall, no scroll below fold */
        overflow-hidden
        bg-black      /* optional if you want the background behind grid to be black in light mode */
      "
    >
      {/* Canvas behind everything */}
      <div className="absolute inset-0 z-0">
        <InteractiveGrid 
          width={dimensions.width}
          height={dimensions.height}
          lineSpacing={50}
          highlightRadius={12}
        />
      </div>

      {/* Nav pinned at top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* 
        Main hero content
        - We create a container centered in the leftover vertical space (below the nav).
      */}
      <div className="
        relative 
        z-20          /* above the grid + nav container's background */
        flex 
        flex-col 
        items-center 
        justify-center 
        text-center 
        px-4 
        h-full
        pt-20         /* push content below the nav bar, adjust if you want more or less space */
      ">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white">
          Welcome to My Portfolio
        </h1>
        <p className="mb-4 text-neutral-300 leading-relaxed max-w-2xl">
          Hi! I’m Bikram, a Senior Product Manager and AI developer with a
          passion for building products that solve real-world problems.
        </p>
        <p className="text-neutral-300 leading-relaxed max-w-2xl">
          At the end of December 2023, I left my Senior Product Manager role
          to spend all of 2024 diving deeper into AI, becoming a better
          developer, and building apps that I believe can bring real utility
          to the world.
        </p>

        {/* Featured AI Projects near bottom of hero */}
        <div className="mt-8 max-w-4xl w-full">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Featured AI Projects
          </h2>
          <div className="flex flex-row flex-wrap gap-6 justify-center">
            <Link
              href="/projects/mysti-health"
              className="bg-white dark:bg-neutral-900 w-64 p-4 rounded border 
                         border-neutral-200 dark:border-neutral-700 
                         shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg mb-2">Mysti Health</h3>
              <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
                A personal AI health agent that syncs with Apple/Google Health
                and provides personalized health recommendations.
              </p>
            </Link>

            <Link
              href="/projects/dayplan-app"
              className="bg-white dark:bg-neutral-900 w-64 p-4 rounded border 
                         border-neutral-200 dark:border-neutral-700 
                         shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg mb-2">Dayplan App</h3>
              <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
                SwiftUI productivity app that uses voice input and AI
                to automatically organize and prioritize tasks.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}