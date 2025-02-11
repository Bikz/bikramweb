// app/blog/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'
import { getBlogPosts, formatDate } from 'app/blog/utils'
import { CustomMDX } from 'app/components/mdx'

/**
 * If you use dynamic routes, you might also be generating static params
 * so we keep this function async for compatibility.
 */
export async function generateStaticParams() {
  // Hard-coded list of blog post slugs
  return [
    { slug: 'vim' },
    { slug: 'spaces-vs-tabs' },
    { slug: 'static-typing' },
  ];
}

/**
 * In Next.js 15, `generateMetadata` can be async to match
 * the new type definitions, but the key is just destructuring
 * { params } as a plain object, not a Promise.
 */
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

/**
 * The page component must also be async if it uses `params` or other
 * request-based data so that the types match Next.js 15's updated definitions.
 * Again, just accept { params, searchParams } as a normal object.
 */
export default async function Page(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">Blog post: {slug}</h1>
      <p>This is a placeholder blog post for {slug}.</p>
    </div>
  );
}