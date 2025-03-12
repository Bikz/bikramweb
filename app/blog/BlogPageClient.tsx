'use client'

import React from 'react'
import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

// Function to estimate reading time
function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
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

export default function BlogPageClient({ posts }: { posts: any[] }) {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );
  
  // Get the latest/featured post
  const featuredPost = sortedPosts[0];
  // Get the rest of the posts
  const regularPosts = sortedPosts.slice(1);
  
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-56 h-56 bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600 mr-3"></div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Thoughts & Insights
          </h1>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600 ml-3"></div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm p-4 rounded-xl border border-gray-200/30 dark:border-gray-800/30"
        >
          I write about AI, blockchain, software engineering, and building digital products that matter.
        </motion.p>
      </motion.div>
      
      {posts.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-neutral-700 dark:text-neutral-300"
        >
          No blog posts available.
        </motion.p>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Featured Post Section */}
          {featuredPost && (
            <motion.div 
              variants={itemVariants}
              className="mb-16 relative"
            >
              <div className="mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 rounded-full mr-2"></div>
                <h2 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                  Latest Post
                </h2>
              </div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg transition-all duration-300"
              >
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition duration-300">
                    {featuredPost.metadata.title}
                  </h2>
                  <div className="flex items-center mt-4 mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <span>{formatDate(featuredPost.metadata.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(featuredPost.content)} min read</span>
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
                    {featuredPost.metadata.summary}
                  </p>
                  <div className="flex items-center text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                    Read more <FaArrowRight className="ml-2 text-xs" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          )}
          
          {/* Other Posts Grid */}
          <motion.div 
            variants={itemVariants}
            className="mt-8"
          >
            <div className="mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 rounded-full mr-2"></div>
              <h2 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                All Articles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  whileHover={{ y: -4 }}
                  className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block flex-grow"
                  >
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      {post.metadata.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm">
                      {post.metadata.summary}
                    </p>
                    <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mt-auto">
                      <span>{formatDate(post.metadata.publishedAt)}</span>
                      <span className="mx-2">•</span>
                      <span>{getReadingTime(post.content)} min read</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
} 