/**
 * page.tsx (Blog Index)
 * Title: Blog – Bikram Brar
 * Description: Read Bikram's posts on AI, software engineering, and product management insights.
 */

import React from 'react'
import Link from 'next/link'
import { getBlogPosts, formatDate } from 'app/blog/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Bikram Brar',
  description:
    'Explore AI, software engineering, and product management articles by Bikram Brar.',
}

// Function to estimate reading time
function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

export default function BlogPage() {
  const posts = getBlogPosts();
  
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );
  
  // Get the latest/featured post
  const featuredPost = sortedPosts[0];
  // Get the rest of the posts
  const regularPosts = sortedPosts.slice(1);
  
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Thoughts & Insights</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I write about AI, blockchain, software engineering, and building digital products that matter.
        </p>
        <div className="w-24 h-1 bg-gray-200 rounded mx-auto mt-8"></div>
      </div>
      
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <>
          {/* Featured Post Section */}
          {featuredPost && (
            <div className="mb-16">
              <div className="border-l-4 border-blue-500 pl-2 mb-4">
                <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Latest Post</h2>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                    {featuredPost.metadata.title}
                  </h2>
                  <div className="flex items-center mt-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{formatDate(featuredPost.metadata.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(featuredPost.content)} min read</span>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {featuredPost.metadata.summary}
                  </p>
                  <span className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    Read more →
                  </span>
                </Link>
              </div>
            </div>
          )}
          
          {/* Other Posts Grid */}
          <div className="mt-8">
            <div className="border-l-4 border-gray-300 pl-2 mb-6">
              <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">All Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition duration-300 flex flex-col"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 mb-2"
                  >
                    {post.metadata.title}
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {post.metadata.summary}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
                    <span>{formatDate(post.metadata.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(post.content)} min read</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}