/**
 * TravelGallery.tsx
 * Title: Travel Gallery
 * Description: Displays a grid of travel images from various destinations.
 */

'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TravelPhoto {
  src: string
  alt: string
}

interface TravelGalleryProps {
  photos: TravelPhoto[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 50,
      damping: 10
    }
  }
}

export default function TravelGallery({ photos }: TravelGalleryProps) {
  return (
    <section className="relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600 mr-3"></div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white text-center">
            Travel Gallery
          </h1>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600 ml-3"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg mb-10"
        >
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Traveling is one of my biggest passions. I love immersing myself in new
            cultures and exploring iconic landmarks around the world.
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
      >
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative w-full h-64 group overflow-hidden rounded-xl border border-gray-200/30 dark:border-gray-800/30 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium text-sm">
                {photo.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 