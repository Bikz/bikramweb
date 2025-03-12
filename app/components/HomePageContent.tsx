/**
 * HomePageContent.tsx
 * Title: Home Page Content
 * Description: Displays experience timeline, latest blog posts, and a "Get in Touch" section on the home page.
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceTimeline from './experience-timeline'
import { BlogPosts } from './posts'
import GetInTouchSection from './GetInTouchSection'

export default function HomePageContent({ blogs }: { blogs: any[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-16">
      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16"
      >
        <h2 className="text-xl font-semibold mb-3 text-center">
          Work Experience
        </h2>
        <ExperienceTimeline />
      </motion.section>

      {/* Latest Blog Posts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-xl font-semibold mb-3 text-center">
          Latest Blog Posts
        </h2>
        <BlogPosts blogs={blogs} />
      </motion.section>

      {/* Get in Touch Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GetInTouchSection />
      </motion.section>
    </div>
  )
}