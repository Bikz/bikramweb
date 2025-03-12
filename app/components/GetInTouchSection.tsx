/**
 * GetInTouchSection.tsx
 * Title: Get In Touch Section
 * Description: Displays a short description and two CTA buttons (Email, LinkedIn)
 *              for users to reach out about new opportunities with glassmorphism styling.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function GetInTouchSection() {
  return (
    <section className="mt-4 mb-16 relative">
      {/* Decorative elements */}
      <div className="absolute -bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-black/5 to-transparent rounded-full dark:from-white/5 blur-xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-center justify-center"
      >
        <div className="w-10 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <div className="w-10 h-px bg-gray-300 dark:bg-gray-700 ml-3"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.p 
          className="text-center max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 relative"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40"></div>
          <span className="relative">
            I'm open to joining an early-stage startup or taking on a Product Leader /
            Product Engineer role in a fast-growing team. If you're looking for someone
            passionate about AI, user empathy, and building frictionless solutions,
            I'd love to connect.
          </span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="mailto:mail@bikrambrar.com"
            className="
              px-6 py-3 text-sm font-medium
              text-white bg-gray-800 dark:bg-gray-700 rounded-lg shadow-md
              hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300
              backdrop-blur-sm border border-transparent
              hover:scale-105
            "
          >
            Email Me
          </Link>
          <Link
            href="https://www.linkedin.com/in/bikrambrar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 text-sm font-medium
              text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg
              bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-md 
              hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300
              hover:scale-105
            "
          >
            LinkedIn
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}