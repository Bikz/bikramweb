/**
 * page.tsx
 * The About page - Showcases personal background,
 * experience, and ways to contact Bikram Brar.
 */
'use client'

import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <section className="animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <img
              src="/contact/bikram.jpg"
              alt="Profile picture"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">
              Hi, I'm Bikram Brar
            </h1>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              My journey began in the world of gaming—where a fascination with strategy
              and immersive experiences sparked my transition into coding.
              Over time, that same passion fueled my focus on empathy-based design
              and product management, always keeping user needs front and center.
              Today, I embrace the potential of AI engineering to deliver innovative solutions
              and help shape the products of tomorrow.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Before focusing on AI, I led product teams, built end-to-end solutions,
              and championed cross-functional collaboration in domains like health,
              tech, and creative media. By blending user empathy with technical expertise,
              I aim to create products that truly make a difference.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              When I’m not planning sprints or tinkering with code, you can find me
              experimenting with new coffee brews or leveling up in my favorite RPG.
              I believe these little passions and curiosities outside of work keep me grounded
              and continuously inspired.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Feel free to reach out to chat about AI, product strategy,
              or even gaming recommendations. Let’s build, innovate, and explore together!
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="mailto:mail@bikrambrar.com"
                className="inline-block px-6 py-3 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Email Me
              </Link>
              <Link
                href="https://www.linkedin.com/in/bikrambrar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 font-medium text-blue-600 border border-blue-600 rounded-md shadow-sm hover:bg-blue-50 transition-colors dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}