/**
 * page.tsx ([slug] Blog Post)
 * Title: Single Blog Post Page
 * Description: Dynamically rendered MDX post based on slug param in Next.js 15.
 */

import React from 'react';
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'
import { getBlogPosts, formatDate } from 'app/blog/utils'
import { serialize } from 'next-mdx-remote/serialize'
import MDXClientWrapper from 'app/components/MDXClientWrapper'

export async function generateStaticParams() {
  return [
    { slug: 'vim' },
    { slug: 'spaces-vs-tabs' },
    { slug: 'static-typing' },
    { slug: 'building-2fa-engine' },
  ];
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
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

export default async function Page(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = getBlogPosts().find((p) => p.slug === slug);
  
  if (!post) notFound();
  
  // Serialize MDX content for client-side rendering
  const mdxSource = await serialize(post.content);
  
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.metadata.title}</h1>
      <div className="text-gray-500 mb-8">
        {formatDate(post.metadata.publishedAt)}
      </div>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXClientWrapper mdxSource={mdxSource} />
      </article>
    </div>
  );
}