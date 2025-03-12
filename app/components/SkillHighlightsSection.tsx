/**
 * SkillHighlightsSection.tsx
 * Displays engineering & product management skills side-by-side
 * with short bullet points to showcase combined strengths.
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SkillHighlightsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          What I Can Do
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Skills spanning engineering and product management
        </p>
      </motion.div>
      
      {/* Container for two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {/* Engineering column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-lg relative overflow-hidden"
        >
          <div className="relative">
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white">
              Engineering
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">Full-stack in React, Next.js, Swift, Node, etc.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">Built AI products (Mysti Health, Dayplan, RepoPrompter)</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">2024 dedicated to building advanced AI prototypes</p>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Product Management column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-lg relative overflow-hidden"
        >
          <div className="relative">
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white">
              Product Management
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">Owned product strategy at Series A AI startup</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">2 PM hires → built 2 product divisions, integrated with CRM</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">Led cross-functional teams, empathy-driven design</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}