// app/projects/ProjectsClient.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * A client component that safely imports Framer Motion
 * and shows all your project links/animations.
 */
export default function ProjectsClient() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <p className="mb-4">
        Here you'll find an overview of my major AI and product development
        projects.
      </p>

      <div className="space-y-4">
        {/* Mysti Health */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition"
        >
          <Link href="/projects/mysti-health">
            <h3 className="font-bold text-lg">Mysti Health</h3>
            <p className="text-sm mt-1">
              Personal AI health agent syncing with Apple/Google Health
              for personalized recommendations.
            </p>
          </Link>
        </motion.div>

        {/* Dayplan App */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition"
        >
          <Link href="/projects/dayplan-app">
            <h3 className="font-bold text-lg">Dayplan App</h3>
            <p className="text-sm mt-1">
              SwiftUI productivity app that uses voice input + AI
              to organize and prioritize tasks.
            </p>
          </Link>
        </motion.div>

        {/* Repo Prompter */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition"
        >
          <Link href="/projects/repoprompter">
            <h3 className="font-bold text-lg">Repoprompter</h3>
            <p className="text-sm mt-1">
              Electron app that helps developers turn code repositories
              into optimized prompts for LLMs and apply AI changes.
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}