import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Projects</h1>
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
              Personal AI health agent syncing with Apple/Google Health for
              personalized recommendations.
            </p>
          </Link>
        </motion.div>

        {/* Dayplan App */}
        <motion.div
          as="div"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition"
        >
          <Link href="/projects/dayplan-app">
            <h3 className="font-bold text-lg">Dayplan App</h3>
            <p className="text-sm mt-1">
              SwiftUI productivity app that uses voice input and AI to organize
              and prioritize tasks.
            </p>
          </Link>
        </motion.div>

        {/* Repo Prompter is hidden/removed in UI—uncomment if needed */}
        {/* <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition"
        >
          <Link href="/projects/repo-prompter">
            <h3 className="font-bold text-lg">Repo Prompter</h3>
            <p className="text-sm mt-1">
              Helps developers turn their code repositories into rich,
              context-aware prompts for LLMs.
            </p>
          </Link>
        </motion.div> */}
      </div>
    </section>
  )
}