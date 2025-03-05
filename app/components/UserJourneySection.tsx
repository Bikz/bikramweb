/**
 * UserJourneySection.tsx
 * Displays a vertical user journey timeline for better mobile responsiveness,
 * plus a paragraph describing an empathy-driven product approach.
 */
'use client'

import React from 'react'

export default function UserJourneySection() {
  const steps = [
    {
      title: 'User Need',
      description: 'Start with understanding real user pain points.',
    },
    {
      title: 'Problem Framing',
      description: 'Define the scope and ensure everyone aligns on the problem.',
    },
    {
      title: 'Empathy Mapping',
      description: 'Walk in the user’s shoes, gather qualitative/quantitative insights.',
    },
    {
      title: 'Hypothesis Testing',
      description: 'Prototype quickly, test assumptions, iterate based on feedback.',
    },
    {
      title: 'Launch',
      description: 'Ship the MVP or feature set and gather real-world usage data.',
    },
    {
      title: 'Iterate',
      description: 'Refine the solution, build on successes, pivot where needed.',
    },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">
        My Approach to Building Products
      </h2>

      {/* Vertical timeline container */}
      <div className="relative border-l border-neutral-200 dark:border-neutral-700 pl-6 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="relative mb-8">
            {/* The circle indicator */}
            <span className="absolute -left-[13px] flex items-center justify-center w-6 h-6 bg-white dark:bg-black border-2 border-blue-600 rounded-full">
            </span>
            {/* Title + description */}
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
        Whether I’m coding from scratch or managing a large product launch,
        I start by asking the right questions and walking in the user’s shoes.
        This empathy-first approach ensures we understand the “why” behind
        each pain point. From there, we frame the problem, hypothesize solutions,
        and rapidly test. Once live, we iterate based on feedback—always centering
        on user needs and tangible impact.
      </p>
    </section>
  )
}