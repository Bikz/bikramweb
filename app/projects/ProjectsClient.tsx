/**
 * ProjectsClient.tsx
 * Title: Projects Client Component
 * Description: Framer Motion-based client-side component to showcase project cards.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Project category types and colors - monochromatic scheme
const categories = {
  ai: { name: 'AI', color: 'bg-black/10 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm' },
  mobile: { name: 'Mobile', color: 'bg-black/5 text-gray-700 dark:bg-white/5 dark:text-gray-100 backdrop-blur-sm' },
  desktop: { name: 'Desktop', color: 'bg-black/15 text-gray-900 dark:bg-white/15 dark:text-gray-300 backdrop-blur-sm' },
  reactnative: { name: 'React Native', color: 'bg-black/15 text-gray-900 dark:bg-white/15 dark:text-gray-300 backdrop-blur-sm' },
  swiftui: { name: 'SwiftUI', color: 'bg-black/15 text-gray-900 dark:bg-white/15 dark:text-gray-300 backdrop-blur-sm' },
  electron: { name: 'Electron', color: 'bg-black/15 text-gray-900 dark:bg-white/15 dark:text-gray-300 backdrop-blur-sm' }
}

// Project data
const projects = [
  {
    id: 'mysti-health',
    title: 'Mysti Health',
    description: 'Personal AI health agent syncing with Apple/Google Health for personalized recommendations.',
    categories: ['ai', 'mobile', 'reactnative'],
    featured: true,
    status: 'Released 2024',
    link: '/projects/mysti-health'
  },
  {
    id: 'dayplan-app',
    title: 'Dayplan App',
    description: 'SwiftUI productivity app that uses voice input + AI to organize and prioritize tasks.',
    categories: ['ai', 'mobile', 'swiftui'],
    featured: false,
    status: 'Beta',
    link: '/projects/dayplan-app'
  },
  {
    id: 'repoprompter',
    title: 'Repoprompter',
    description: 'Electron app that helps developers turn code repositories into optimized prompts for LLMs and apply AI changes.',
    categories: ['ai', 'desktop', 'electron'],
    featured: false,
    status: 'Open Source',
    link: '/projects/repoprompter'
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 10 } }
}

export default function ProjectsClient() {
  // Separate featured and regular projects
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-20 pt-10"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl backdrop-blur-sm">
          Exploring the intersection of AI, product design, and software development through tangible applications and tools.
        </p>
        
        <div className="h-px w-40 bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-600 mt-8"></div>
      </motion.div>

      {/* Featured Projects (if any) */}
      {featuredProjects.length > 0 && (
        <div className="mb-24">
          <div className="mb-10 flex items-center">
            <div className="w-8 h-px bg-gray-400 dark:bg-gray-600 mr-3"></div>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Featured Work</h2>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-12"
          >
            {featuredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl dark:shadow-2xl-dark border border-gray-100 dark:border-gray-800 transition-all duration-300"
              >
                <Link href={project.link} className="block">
                  <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40 group-hover:scale-125 transition-transform duration-700"></div>
                  </div>
                  
                  <div className="p-10 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-bold text-3xl text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                      <span className="text-xs font-medium py-1 px-3 rounded-full bg-black/5 text-gray-800 dark:bg-white/5 dark:text-gray-200 backdrop-blur-sm">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-3xl">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.categories.map(cat => (
                        <span key={cat} className={`text-xs py-1 px-3 rounded-full ${categories[cat].color} border border-gray-200 dark:border-gray-700`}>
                          {categories[cat].name}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-8 inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">
                      View project <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Other Projects */}
      <div>
        <div className="mb-10 flex items-center">
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest">All Projects</h2>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {regularProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                translateY: -5,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg dark:shadow-xl-dark border border-gray-100 dark:border-gray-800 transition-all duration-300"
            >
              <Link href={project.link} className="block p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-black/5 text-gray-800 dark:bg-white/5 dark:text-gray-200 backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map(cat => (
                    <span key={cat} className={`text-xs py-1 px-2 rounded-full ${categories[cat].color} border border-gray-200 dark:border-gray-700`}>
                      {categories[cat].name}
                    </span>
                  ))}
                </div>
                <div className="mt-2 inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">
                  View details <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}