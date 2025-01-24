import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-4">
        Here you’ll find an overview of my major AI and product development
        projects.
      </p>
      <div className="space-y-4">
        {/* Mysti Health */}
        <Link
          href="/projects/mysti-health"
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition hover:scale-[1.01]"
        >
          <h3 className="font-bold text-lg">Mysti Health</h3>
          <p className="text-sm mt-1">
            Personal AI health agent syncing with Apple/Google Health for
            personalized recommendations.
          </p>
        </Link>

        {/* Dayplan App */}
        <Link
          href="/projects/dayplan-app"
          className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition hover:scale-[1.01]"
        >
          <h3 className="font-bold text-lg">Dayplan App</h3>
          <p className="text-sm mt-1">
            SwiftUI productivity app that uses voice input and AI to organize
            and prioritize tasks.
          </p>
        </Link>

        {/* Repo Prompter is hidden/removed */}
      </div>
    </section>
  )
}
