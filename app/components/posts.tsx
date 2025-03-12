/**
 * posts.tsx
 * Title: Blog Posts Component
 * Description: Displays a list of blog posts with sorted by date, linking to each post's page.
 */

import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export function BlogPosts({ blogs }: { blogs: any[] }) {
  const sorted = blogs.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1
    }
    return 1
  })

  return (
    <div className="space-y-6">
      {sorted.map((post, index) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block"
        >
          <motion.div 
            whileHover={{ x: 8 }}
            className="group flex items-start bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm p-4 rounded-lg border border-gray-200/30 dark:border-gray-800/30 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 shadow-sm hover:shadow"
          >
            {/* Date column with timeline dot */}
            <div className="w-[140px] mr-6 flex flex-col">
              <div className="flex items-center">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-[6px] h-[6px] mr-3 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400 transition-colors"></div>
                
                {/* Date */}
                <p className="font-medium text-neutral-600 dark:text-neutral-400 tabular-nums whitespace-nowrap text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </div>
            
            {/* Content column */}
            <div className="flex-1">
              <p className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight group-hover:text-gray-800 dark:group-hover:text-gray-200 text-lg">
                {post.metadata.title}
              </p>
              {post.metadata.summary && (
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 line-clamp-2">
                  {post.metadata.summary}
                </p>
              )}
            </div>
            
            {/* Arrow icon */}
            <div className="ml-4 pt-1 text-gray-400 dark:text-gray-600 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
              <FaArrowRight />
            </div>
          </motion.div>
        </Link>
      ))}
      
      {/* View More link */}
      <div className="flex justify-end mt-4">
        <Link href="/blog" className="inline-flex">
          <motion.div 
            whileHover={{ x: 4 }}
            className="group flex items-center py-2 px-3 text-sm"
          >
            <p className="font-medium text-neutral-700 dark:text-neutral-300 mr-2">
              View More Posts
            </p>
            <FaArrowRight className="text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}