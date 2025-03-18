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
        className="relative mb-10 pt-10"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
          Travel
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          Capturing moments and experiences from around the world through photography and cultural exploration.
        </p>
        
        <div className="h-px w-40 bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-600 mt-8"></div>
      </motion.div>
      
      {/* Photo Gallery Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative w-full h-64 group overflow-hidden rounded-xl border border-gray-200/30 dark:border-gray-800/30 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
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