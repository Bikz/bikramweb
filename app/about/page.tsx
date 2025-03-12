/**
 * page.tsx
 * The About page - Showcases personal background,
 * experience, and ways to contact Bikram Brar.
 */
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full border border-gray-200/20 dark:border-gray-800/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-lg max-w-screen-lg mx-auto"
        >
          {/* Profile and Heading at the top */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10"
          >
            {/* Profile image with subtle border/shadow */}
            <div className="flex-shrink-0">
              <img
                src="/contact/bikram.jpg"
                alt="Profile picture"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border border-gray-200/50 dark:border-gray-800/50 shadow-md"
              />
            </div>
            
            {/* Heading */}
            <div className="flex flex-col justify-center">
              <h1 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white text-center sm:text-left">
                Hi, I'm Bikram Brar
              </h1>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="h-[1px] w-8 bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-600 mr-3"></div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Senior Product Manager & AI Enthusiast
                </p>
              </div>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30 dark:border-gray-800/30 shadow-sm">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                My journey began in the world of gaming—where a fascination with strategy
                and immersive experiences sparked my transition into coding. Over time,
                that same passion fueled my focus on empathy-based design and product
                management, always keeping user needs front and center. Today, I embrace
                the potential of AI engineering to deliver innovative solutions and help
                shape the products of tomorrow.
              </p>
            </div>

            {/* Subheading for personal philosophy */}
            <div className="mt-10">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 rounded-full mr-2"></div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  My Approach
                </h2>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30 dark:border-gray-800/30 shadow-sm">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  I strongly believe technology should be fun, frictionless, and seamlessly
                  woven into daily life—improving quality of life rather than complicating it.
                  By focusing on user experience, I aim to design solutions that simply work,
                  bringing delight and simplicity to the forefront. Whether I'm prototyping
                  a new feature or refining a product strategy, I'm always driven by the
                  question: "How can we make this experience more natural, enjoyable, and
                  impactful for people?"
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  When I'm not immersed in AI experiments or designing product roadmaps,
                  you'll often find me chatting with fellow builders, diving into hackathons,
                  or exploring the latest developments at crypto conferences. I also love
                  traveling—seeking out new perspectives, cultures, and a bit of adventure
                  that fuels my creativity.
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  If you share a passion for user experience, emerging tech, or just want
                  to talk about building frictionless solutions, feel free to reach out.
                  Let's push boundaries, innovate together, and make technology more fun
                  for everyone.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="mailto:mail@bikrambrar.com"
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-lg backdrop-blur-sm shadow-sm hover:shadow transition-all duration-200 hover:scale-105"
              >
                <FaEnvelope className="text-lg" />
                <span>Email Me</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bikrambrar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-lg backdrop-blur-sm shadow-sm hover:shadow transition-all duration-200"
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
              </Link>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}