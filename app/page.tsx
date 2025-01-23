import { BlogPosts } from 'app/components/posts'
import ExperienceTimeline from 'app/components/experience-timeline'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-3xl font-semibold tracking-tighter">
        Welcome to My Portfolio
      </h1>

      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        Hi! I’m Bikram, a Senior Product Manager and AI developer with a passion
        for building products that solve real-world problems.
      </p>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        At the end of December 2023, I left my Senior Product Manager role to
        spend all of 2024 diving deeper into AI, becoming a better developer,
        and building apps that I believe can bring real utility to the world.
      </p>

      {/* Featured AI Projects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Featured AI Projects</h2>
        <div className="space-y-4">
          {/* Mysty Health */}
          <Link
            href="/projects/mysty-health"
            className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition hover:scale-[1.01]"
          >
            <h3 className="font-bold text-lg">Mysty Health</h3>
            <p className="text-sm mt-1">
              A personal AI health agent that syncs with Apple/Google Health and
              provides personalized health recommendations.
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

          {/* RepoPrompter */}
          <Link
            href="/projects/repoprompter"
            className="block bg-neutral-100 dark:bg-neutral-900 p-4 rounded transition hover:scale-[1.01]"
          >
            <h3 className="font-bold text-lg">Repoprompter</h3>
            <p className="text-sm mt-1">
              Transforms your code repositories into prompts for LLMs, making
              AI-assisted coding more efficient.
            </p>
          </Link>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
        <ExperienceTimeline />
      </div>

      {/* Blog Section */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Latest Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}