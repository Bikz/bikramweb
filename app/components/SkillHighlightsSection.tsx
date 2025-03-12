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
    <section className="max-w-5xl mx-auto px-6 py-20 relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-20 w-40 h-40 bg-gradient-to-br from-black/5 to-transparent rounded-full dark:from-white/5 blur-xl"></div>
      <div className="absolute bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-black/3 to-transparent rounded-full dark:from-white/3 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border border-gray-200/30 dark:border-gray-800/30 opacity-60"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-center justify-center"
      >
        <div className="w-10 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          What I Can Do
        </h2>
        <div className="w-10 h-px bg-gray-300 dark:bg-gray-700 ml-3"></div>
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
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40"></div>
          
          <div className="relative">
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white flex items-center">
              <div className="w-6 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
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
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40"></div>
          
          <div className="relative">
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white flex items-center">
              <div className="w-6 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
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