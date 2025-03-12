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
    <div className="max-w-4xl mx-auto px-4 mt-16 mb-24">
      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-24 relative"
      >
        <div className="absolute -top-10 -left-20 w-40 h-40 bg-gradient-to-br from-black/5 to-transparent rounded-full dark:from-white/5 blur-xl"></div>
        
        <div className="mb-10 flex items-center">
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Work Experience
          </h2>
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 ml-3"></div>
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
        className="mb-24 relative"
      >
        <div className="absolute -top-10 -right-20 w-40 h-40 bg-gradient-to-bl from-black/5 to-transparent rounded-full dark:from-white/5 blur-xl"></div>
        
        <div className="mb-10 flex items-center">
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Latest Blog Posts
          </h2>
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 ml-3"></div>
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
        className="relative"
      >
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-gradient-to-tr from-black/5 to-transparent rounded-full dark:from-white/5 blur-xl"></div>
        
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
          <GetInTouchSection />
        </div>
      </motion.section>
    </div>
  )
}