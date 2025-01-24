// app/blog/[slug]/page.tsx
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
  return getBlogPosts().map((post) => ({
    slug: post.slug
  }))
}

/**
 * In Next.js 15, `generateMetadata` must accept and (optionally) await `params`
 * and `searchParams` if they rely on request-specific data. Making it async
 * ensures the type definitions align with the Next.js 15 requirements.
 */
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) notFound()

  const { title, publishedAt, summary, image } = post.metadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: publishedAt,
      url: `${baseUrl}/blog/${params.slug}`,
      images: [{ url: ogImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage]
    }
  }
}

/**
 * The page component must also be async if it uses `params` or other
 * request-based data so that the types match Next.js 15's updated definitions.
 */
export default async function BlogPage(
  props: {
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const params = await props.params;
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Bikram Brar'
            }
          })
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}