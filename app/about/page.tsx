'use client'
import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <section className="animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile image - update the src if you have a specific image */}
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
              I'm a Senior Product Manager and AI enthusiast with years of experience in driving innovation through technology. My journey spans building AI-powered solutions, leading cross-functional teams, and delivering impactful products in various domains including health, tech, and creative media.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I believe in the power of technology to solve real-world problems and am continually inspired by the potential of AI and machine learning to transform industries. When I'm not immersed in product strategy or managing teams, I love to travel, explore diverse cultures, and capture moments of beauty through photography.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm always excited about new opportunities to collaborate, innovate, and make a difference. Feel free to reach out and connect with me!
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {/* Primary button styling for Email, works in light and dark mode */}
              <Link
                href="mailto:mail@bikrambrar.com"
                className="inline-block px-6 py-3 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Email Me
              </Link>
              {/* Secondary button styling for LinkedIn */}
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
