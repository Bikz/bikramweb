/**
 * ProjectDetailClient.tsx
 * Title: Project Detail Client Component
 * Description: Framer Motion-based client-side component for individual project pages.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export type ProjectDetailProps = {
  title: string
  description: string
  status: string
  categories: Array<{name: string, color: string}>
  sections: Array<{
    title: string
    content: string | React.ReactNode
    image?: string
  }>
  links?: Array<{
    label: string
    url: string
    icon?: string
  }>
}

export default function ProjectDetailClient({
  title,
  description,
  status,
  categories,
  sections,
  links = []
}: ProjectDetailProps) {
  return (
    <section className="relative">
      {/* Project header */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-8"
        >
          <Link href="/projects" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to projects</span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl dark:shadow-2xl-dark border border-gray-100 dark:border-gray-800 p-10 mb-16"
        >
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{title}</h1>
              <span className="mt-2 md:mt-0 text-xs font-medium py-1 px-3 rounded-full bg-black/5 text-gray-800 dark:bg-white/5 dark:text-gray-200 backdrop-blur-sm">
                {status}
              </span>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <span key={index} className={`text-xs py-1 px-3 rounded-full ${cat.color} border border-gray-200 dark:border-gray-700`}>
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project sections */}
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="relative"
          >
            <div className="mb-6 flex items-center">
              <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{section.title}</h2>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 p-8">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {typeof section.content === 'string' ? (
                  <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
              
              {section.image && (
                <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Links section */}
      {links.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="mb-6 flex items-center">
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Project Links</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {link.icon && (
                  <span className="mr-2">{link.icon}</span>
                )}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
} 