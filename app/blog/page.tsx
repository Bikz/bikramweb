/**
 * page.tsx (Blog Index)
 * Title: Blog – Bikram Brar
 * Description: Read Bikram's posts on AI, software engineering, and product management insights.
 */

import { getBlogPosts } from 'app/blog/utils'
import BlogPageClient from './BlogPageClient'

export default function BlogPage() {
  const posts = getBlogPosts();
  return <BlogPageClient posts={posts} />;
}