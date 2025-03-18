/**
 * page.tsx ([slug] Blog Post)
 * Title: Single Blog Post Page
 * Description: Dynamically rendered MDX post based on slug param in Next.js 15.
 */

import React from 'react';
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/blog/utils'
import { serialize } from 'next-mdx-remote/serialize'
import BlogPostClient from './BlogPostClient'

// Define params as Promise according to Next.js 15 requirements
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return [
    { slug: 'building-2fa-engine' },
    { slug: 'ai-finance-blockchain' },
    { slug: 'future-of-nfts' },
    { slug: 'technological-singularity-revisited' }
  ];
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug)
  if (!post) notFound()

  const { title, publishedAt, summary, image } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: publishedAt,
      url: `${baseUrl}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage],
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);
  
  if (!post) notFound();
  
  // Serialize MDX content for client-side rendering
  const mdxSource = await serialize(post.content);
  
  return <BlogPostClient post={post} mdxSource={mdxSource} />;
}