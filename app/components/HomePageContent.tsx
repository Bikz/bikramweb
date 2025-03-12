/**
 * HomePageContent.tsx
 * Title: Home Page Content
 * Description: Displays experience timeline, latest blog posts, and a "Get in Touch" section on the home page with glassmorphism styling.
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceTimeline from './experience-timeline'
import { BlogPosts } from './posts'
import GetInTouchSection from './GetInTouchSection'

export default function HomePageContent({ blogs }: { blogs: any[] }) {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-16 mb-16">
      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 py-16 relative"
      >
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My professional journey and accomplishments
          </p>
        </div>
        
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
          <ExperienceTimeline />
        </div>
      </motion.section>

      {/* Latest Blog Posts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 py-16 relative"
      >
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Thoughts on AI, product, and technology
          </p>
        </div>
        
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
          <BlogPosts blogs={blogs} />
        </div>
      </motion.section>

      {/* Get in Touch Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 py-16 relative"
      >
        <GetInTouchSection />
      </motion.section>
    </div>
  )
}