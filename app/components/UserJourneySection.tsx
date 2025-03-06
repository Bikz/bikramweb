/**
 * UserJourneySection.tsx
 * Draws a curved "hockey stick" path using a cubic Bézier and places steps along it.
 */
'use client'

import React, { useState } from 'react'

type StepInfo = {
  title: string
  description: string
}

export default function UserJourneySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // The steps in our journey
  const steps: StepInfo[] = [
    { title: 'User Need', description: 'Understand real user pain points.' },
    { title: 'Problem Framing', description: 'Align scope & problem statement.' },
    { title: 'Empathy Mapping', description: 'Walk in user’s shoes, gather insights.' },
    { title: 'Hypothesis Testing', description: 'Prototype quickly, iterate on feedback.' },
    { title: 'Launch', description: 'Ship MVP, gather real-world data.' },
    { title: 'Iterate', description: 'Refine solution, pivot as needed.' },
  ]

  // Our cubic Bézier control points in [640x400] space
  const P0 = { x: 40,  y: 360 }
  const P1 = { x: 200, y: 300 }
  const P2 = { x: 420, y: 100 }
  const P3 = { x: 600, y: 40 }

  // Bézier interpolation
  function getCubicPoint(t: number) {
    // (1 - t)^3 * P0 + ...
    const mt = 1 - t
    const x = mt*mt*mt*P0.x
      + 3*mt*mt*t*P1.x
      + 3*mt*t*t*P2.x
      + t*t*t*P3.x
    const y = mt*mt*mt*P0.y
      + 3*mt*mt*t*P1.y
      + 3*mt*t*t*P2.y
      + t*t*t*P3.y
    return { x, y }
  }

  // We place circles at t = i/(steps.length-1)
  const circlePositions = steps.map((_, i) => {
    const t = i / (steps.length - 1)
    return getCubicPoint(t)
  })

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">
        My Approach to Building Products
      </h2>

      <div className="relative w-full h-[400px] overflow-hidden">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 640 400"
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded"
        >
          {/* The Bézier path */}
          <path
            d={`M${P0.x},${P0.y} C ${P1.x},${P1.y} ${P2.x},${P2.y} ${P3.x},${P3.y}`}
            stroke="#999"
            strokeWidth="2"
            fill="none"
          />
          {/* Circles + labels */}
          {circlePositions.map((pos, i) => (
            <g key={i}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={12}
                fill={hoveredIndex === i ? '#555' : '#ccc'}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
              />
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

        {/* Hover detail card */}
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