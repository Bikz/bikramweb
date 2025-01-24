import { BlogPosts } from 'app/components/posts'
import ExperienceTimeline from 'app/components/experience-timeline'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <>
      {/* Hero-style section taking up full screen */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="mb-4 text-4xl font-semibold tracking-tighter">
          Welcome to My Profile
        </h1>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200 max-w-xl">
          Hi! I’m Bikram, a Senior Product Manager and AI developer with a
          passion for building products that solve real-world problems.
        </p>
        <p className="mb-8 text-neutral-800 dark:text-neutral-200 max-w-xl">
          At the end of December 2023, I left my Senior Product Manager role to
          spend all of 2024 diving deeper into AI, becoming a better developer,
          and building apps that I believe can bring real utility to the world.
        </p>

        {/* Featured AI Projects near the bottom of the hero */}
        <div className="mt-auto mb-8 w-full max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-3">Featured AI Projects</h2>
          <div className="space-y-4">
            {/* Mysti Health */}
            <Link
              href="/projects/mysti-health"
              className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition hover:scale-[1.01]"
            >
              <h3 className="font-bold text-lg">Mysty Health</h3>
              <p className="text-sm mt-1">
                A personal AI health agent that syncs with Apple/Google Health
                and provides personalized health recommendations.
              </p>
            </Link>

            {/* Dayplan App */}
            <Link
              href="/projects/dayplan-app"
              className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition hover:scale-[1.01]"
            >
              <h3 className="font-bold text-lg">Dayplan App</h3>
              <p className="text-sm mt-1">
                SwiftUI productivity app that uses voice input and AI to
                automatically organize and prioritize tasks.
              </p>
            </Link>

            {/* Repo Prompter is hidden/removed */}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-12 px-4">
        <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
        <ExperienceTimeline />
      </section>

      {/* Latest Blog Posts */}
      <section className="px-4">
        <h2 className="text-xl font-semibold mb-3">Latest Blog Posts</h2>
        <BlogPosts />
      </section>
    </>
  )
}
