/**
 * UserJourneySection.tsx
 * Displays a slope-like "graph" with steps along a diagonal line.
 * On hover, the step’s details appear in a panel on the right.
 */
'use client'

import React, { useState } from 'react'

type StepInfo = {
  title: string
  description: string
}

export default function UserJourneySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps: StepInfo[] = [
    {
      title: 'User Need',
      description: 'Start with understanding real user pain points.'
    },
    {
      title: 'Problem Framing',
      description: 'Define the scope and ensure everyone aligns on the problem.'
    },
    {
      title: 'Empathy Mapping',
      description: 'Walk in the user’s shoes, gather qual/quant insights.'
    },
    {
      title: 'Hypothesis Testing',
      description: 'Prototype quickly, test assumptions, iterate based on feedback.'
    },
    {
      title: 'Launch',
      description: 'Ship the MVP or feature set and gather real-world usage data.'
    },
    {
      title: 'Iterate',
      description: 'Refine the solution, pivot on user feedback, keep improving.'
    },
  ]

  // Positions each step along the slope (from top-left to bottom-right).
  // We assume 6 steps, so we space them equally in y-axis from 40 to 360.
  // x-axis from 40 to 600 as an example.
  const circlePositions = steps.map((_, i) => {
    const totalSteps = steps.length
    // fraction along the slope
    const fraction = i / (totalSteps - 1)
    const startX = 40
    const endX = 600
    const startY = 40
    const endY = 360
    const x = startX + (endX - startX) * fraction
    const y = startY + (endY - startY) * fraction
    return { x, y }
  })

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">
        My Approach to Building Products
      </h2>

      <div className="relative w-full h-[400px] overflow-hidden">
        {/* The main SVG for the slope line */}
        <svg
          width="100%"
          height="400"
          viewBox="0 0 640 400"
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded"
        >
          {/* Diagonal line as a path */}
          <path
            d="M40,40 L600,360"
            stroke="#999"
            strokeWidth="2"
            fill="none"
          />
          {/* Circles for each step */}
          {circlePositions.map((pos, i) => (
            <circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r={12}
              fill={hoveredIndex === i ? '#555' : '#ccc'}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </svg>

        {/* Hover display on the right side */}
        {hoveredIndex !== null && (
          <div
            className="
              absolute
              top-0 right-0
              w-56
              h-auto
              p-4
              bg-white dark:bg-neutral-900
              border border-gray-200 dark:border-gray-700
              rounded
              shadow-lg
              transition-all
            "
            style={{ transform: 'translateY(60px)' }}
          >
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
              {steps[hoveredIndex].title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {steps[hoveredIndex].description}
            </p>
          </div>
        )}
      </div>

      <p className="mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
        Whether I’m coding from scratch or managing a large product launch,
        I start by asking the right questions and walking in the user’s shoes.
        This empathy-first approach ensures we understand the “why” behind
        each pain point. Then we frame the problem, hypothesize solutions,
        and rapidly test. Once live, we iterate based on feedback—
        always centering on user needs and tangible impact.
      </p>
    </section>
  )
}