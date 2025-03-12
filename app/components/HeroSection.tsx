/**
 * HeroSection.tsx
 * Title: Hero Section
 * Description: The top hero banner introducing Bikram Brar, highlighting key AI projects with glassmorphism design.
 */

'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import InteractiveGrid from '../InteractiveGrid'

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
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 10 } }
}

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleResize() {
      if (sectionRef.current) {
        const measuredWidth = sectionRef.current.offsetWidth || window.innerWidth
        const measuredHeight = sectionRef.current.offsetHeight || window.innerHeight
        
        setDimensions({
          width: measuredWidth,
          height: measuredHeight,
        })
      }
    }
    const timeoutId = setTimeout(handleResize, 100)
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: 'calc(100vh - 64px)' }}
      className="
        relative
        -mx-4 md:-mx-8 lg:-mx-0
        pt-20 md:pt-0 overflow-hidden
        flex md:items-center md:justify-center
      "
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <InteractiveGrid
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full flex flex-col items-center py-8 md:py-0 text-center px-8 sm:px-4 max-w-5xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight"
        >
          Bikram Brar
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed bg-white/30 dark:bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50"
        >
          Hi! I'm Bikram, a Product Engineer with a
          passion for building products that solve real-world problems. At the
          end of December 2023, I left my Senior PM role to spend all of 2024
          diving deeper into AI, becoming a better developer, and building apps
          that bring real utility to the world.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white flex items-center"
        >
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3"></div>
          Stuff I've Built
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 ml-3"></div>
        </motion.h2>
       
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-6 md:mt-8 flex flex-wrap gap-6 justify-center px-0"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/projects/mysti-health"
              className="
                group
                block w-full sm:w-64 p-5 rounded-xl border border-gray-200/80 dark:border-gray-800/80 
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                hover:scale-105 hover:shadow-xl transition-all duration-300
                mx-2 sm:mx-0
              "
            >
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                  Mysti Health
                </h3>
                <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  A personal AI health agent that syncs with Apple/Google Health
                  and provides personalized recommendations.
                </p>
                <div className="mt-4 flex items-center text-xs text-neutral-600 dark:text-neutral-400 group-hover:translate-x-1 transition-transform duration-300">
                  View project <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/projects/dayplan-app"
              className="
                group
                block w-full sm:w-64 p-5 rounded-xl border border-gray-200/80 dark:border-gray-800/80 
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                hover:scale-105 hover:shadow-xl transition-all duration-300
                mx-2 sm:mx-0
              "
            >
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                  Dayplan App
                </h3>
                <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  A SwiftUI productivity app that uses voice input + AI
                  to automatically organize and prioritize tasks.
                </p>
                <div className="mt-4 flex items-center text-xs text-neutral-600 dark:text-neutral-400 group-hover:translate-x-1 transition-transform duration-300">
                  View project <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/projects/repoprompter"
              className="
                group
                block w-full sm:w-64 p-5 rounded-xl border border-gray-200/80 dark:border-gray-800/80 
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                hover:scale-105 hover:shadow-xl transition-all duration-300
                mx-2 sm:mx-0
              "
            >
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full dark:from-gray-800/40 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                  Repoprompter
                </h3>
                <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  An Electron app that helps developers create optimized LLM prompts
                  from code repositories and apply AI changes.
                </p>
                <div className="mt-4 flex items-center text-xs text-neutral-600 dark:text-neutral-400 group-hover:translate-x-1 transition-transform duration-300">
                  View project <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}