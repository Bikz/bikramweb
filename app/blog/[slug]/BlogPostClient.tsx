'use client'

import React from 'react'
import { formatDate } from 'app/blog/utils'
import MDXClientWrapper from 'app/components/MDXClientWrapper'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function BlogPostClient({ post, mdxSource }: { post: any, mdxSource: any }) {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-56 h-56 bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Link href="/blog" className="inline-flex items-center mb-8 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
          <FaArrowLeft className="mr-2 text-xs" /> Back to all posts
        </Link>
        
        <header className="mb-10 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">{post.metadata.title}</h1>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 mb-6">
            <span>{formatDate(post.metadata.publishedAt)}</span>
            <span className="mx-2">•</span>
            <span className="italic">Written by Bikram Brar</span>
          </div>
          <div className="h-[1px] w-24 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
        </header>
        
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-lg"
        >
          <MDXClientWrapper mdxSource={mdxSource} />
        </motion.article>
      </motion.div>
    </div>
  )
} 