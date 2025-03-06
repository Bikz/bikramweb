/**
 * sitemap.ts
 * Title: Sitemap
 * Description: Generates a static sitemap with blog post URLs and other routes for SEO.
 */

export const dynamic = "force-static"
export const revalidate = 0

import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}