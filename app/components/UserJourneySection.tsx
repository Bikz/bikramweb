/**
 * UserJourneySection.tsx
 * Hockey-stick style upward slope from bottom-left to top-right.
 * On hover, we still show the detail panel on the right, plus inline labels.
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
    { title: 'User Need', description: 'Understand real user pain points.' },
    { title: 'Problem Framing', description: 'Align scope & problem statement.' },
    { title: 'Empathy Mapping', description: 'Walk in user’s shoes, gather insights.' },
    { title: 'Hypothesis Testing', description: 'Prototype quickly, iterate on feedback.' },
    { title: 'Launch', description: 'Ship MVP, gather real-world usage data.' },
    { title: 'Iterate', description: 'Refine solution, pivot as needed.' },
  ]

  // We'll place them along x from 40 -> 600, y from 360 -> 40
  // So the slope goes upward
  const circlePositions = steps.map((_, i) => {
    const total = steps.length
    const frac = i / (total - 1)
    const startX = 40
    const endX = 600
    const startY = 360
    const endY = 40
    const x = startX + (endX - startX) * frac
    const y = startY + (endY - startY) * frac
    return { x, y }
  })

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">
        My Approach to Building Products
      </h2>

      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Main SVG for hockey-stick line */}
        <svg
          width="100%"
          height="400"
          viewBox="0 0 640 400"
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded"
        >
          {/* Upward path */}
          <path
            d="M40,360 L600,40"
            stroke="#999"
            strokeWidth="2"
            fill="none"
          />

          {circlePositions.map((pos, i) => (
            <g key={i}>
              {/* The circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={12}
                fill={hoveredIndex === i ? '#555' : '#ccc'}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
              />
              {/* Step label (above the circle) */}
              <text
                x={pos.x + 15}
                y={pos.y - 5}
                fill="#555"
                fontSize="12"
              >
                {steps[i].title}
              </text>
            </g>
          ))}
        </svg>

        {/* Hover display on the right */}
        {hoveredIndex !== null && (
          <div
            className="
              absolute
              top-0 right-0
              w-56
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
        Whether I’m coding from scratch or managing a large product launch, I start
        by asking the right questions and walking in the user’s shoes. This empathy-first
        approach ensures we understand the “why” behind each pain point. Then we frame
        the problem, hypothesize solutions, and test rapidly. Once live, we iterate based
        on feedback—always centering on user needs and tangible impact.
      </p>
    </section>
  )
}