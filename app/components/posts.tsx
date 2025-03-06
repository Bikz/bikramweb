/**
 * posts.tsx
 * Title: Blog Posts Component
 * Description: Displays a list of blog posts with sorted by date, linking to each post's page.
 */

import Link from 'next/link'
import { formatDate } from 'app/blog/utils'

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
    <div>
      {sorted.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}