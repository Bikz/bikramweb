/**
 * SkillHighlightsSection.tsx
 * Displays engineering & product management skills side-by-side
 * with short bullet points to showcase combined strengths.
 */

'use client'

import React from 'react'

export default function SkillHighlightsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-8 text-center text-neutral-900 dark:text-white">
        What I Can Do
      </h2>
      {/* Container for two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {/* Engineering column */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">
            Engineering
          </h3>
          <ul className="list-disc pl-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-3 self-start mx-auto max-w-md">
            <li>Full-stack in React, Next.js, Swift, Node, etc.</li>
            <li>Built AI products (Mysti Health, Dayplan, RepoPrompter)</li>
            <li>2024 dedicated to building advanced AI prototypes</li>
          </ul>
        </div>
        {/* Product Management column */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">
            Product Management
          </h3>
          <ul className="list-disc pl-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-3 self-start mx-auto max-w-md">
            <li>Owned product strategy at Series A AI startup</li>
            <li>2 PM hires → built 2 product divisions, integrated with CRM</li>
            <li>Led cross-functional teams, empathy-driven design</li>
          </ul>
        </div>
      </div>
    </section>
  )
}