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
    <div
      className="
        bg-gradient-to-b from-gray-50 to-white
        dark:from-gray-900 dark:to-black
        min-h-screen
        py-12
      "
    >
      <div className="container mx-auto px-4">
        {/* Card Container */}
        <div
          className="
            bg-white dark:bg-neutral-900
            rounded-xl shadow-lg
            p-6 sm:p-10
            max-w-screen-lg mx-auto
          "
        >
          {/* Heading */}
          <h1 className="mb-2 text-3xl font-bold tracking-tighter text-gray-900 dark:text-white text-center">
            Hi, I'm Bikram Brar
          </h1>
          <p className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Senior Product Manager & AI Enthusiast
          </p>

          <section className="animate-fadeIn flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Profile image with subtle border/shadow */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                src="/contact/bikram.jpg"
                alt="Profile picture"
                className="
                  w-40 h-40
                  rounded-full object-cover
                  border border-gray-200 dark:border-gray-700
                  shadow-sm
                "
              />
            </div>

            <div className="flex-1">
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey began in the world of gaming—where a fascination with strategy
                and immersive experiences sparked my transition into coding. Over time,
                that same passion fueled my focus on empathy-based design and product
                management, always keeping user needs front and center. Today, I embrace
                the potential of AI engineering to deliver innovative solutions and help
                shape the products of tomorrow.
              </p>

              {/* Subheading for personal philosophy */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                My Approach
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I strongly believe technology should be fun, frictionless, and seamlessly
                woven into daily life—improving quality of life rather than complicating it.
                By focusing on user experience, I aim to design solutions that simply work,
                bringing delight and simplicity to the forefront. Whether I'm prototyping
                a new feature or refining a product strategy, I'm always driven by the
                question: "How can we make this experience more natural, enjoyable, and
                impactful for people?"
              </p>

              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                When I’m not immersed in AI experiments or designing product roadmaps,
                you’ll often find me chatting with fellow builders, diving into hackathons,
                or exploring the latest developments at crypto conferences. I also love
                traveling—seeking out new perspectives, cultures, and a bit of adventure
                that fuels my creativity.
              </p>

              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                If you share a passion for user experience, emerging tech, or just want
                to talk about building frictionless solutions, feel free to reach out.
                Let’s push boundaries, innovate together, and make technology more fun
                for everyone.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="mailto:mail@bikrambrar.com"
                  className="
                    inline-block px-6 py-3 text-sm font-medium
                    text-white bg-blue-600 rounded-md shadow-sm
                    hover:bg-blue-700 transition-colors
                    dark:bg-blue-500 dark:hover:bg-blue-600
                  "
                >
                  Email Me
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bikrambrar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block px-6 py-3 text-sm font-medium
                    text-blue-600 border border-blue-600 rounded-md
                    shadow-sm hover:bg-blue-50 transition-colors
                    dark:text-blue-400 dark:border-blue-400
                    dark:hover:bg-blue-900
                  "
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}