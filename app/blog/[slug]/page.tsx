import { notFound } from 'next/navigation'
import { getBlogPosts, formatDate } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { serialize } from 'next-mdx-remote/serialize'
import { CustomMDX } from 'app/components/mdx'

/** 
 * Type for the dynamic route param 
 */
type BlogParams = {
  slug: string
}

/**
 * Next.js uses this to statically generate each route at build time, e.g. "/blog/spaces-vs-tabs".
 * Must return an array of objects with the shape { slug: string }.
 */
export async function generateStaticParams(): Promise<BlogParams[]> {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

/** 
 * generateMetadata can be async, so we await no data but simply keep it consistent. 
 * Using "params" here must be done in an async function so that "params" is properly resolved.
 */
export async function generateMetadata({ params }: { params: BlogParams }) {
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) return

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${params.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/** 
 * The page itself. Must be async if we do any I/O like "await serialize(...)". 
 */
export default async function BlogPostPage({ params }: { params: BlogParams }) {
  // Find the post from your local MDX files
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) {
    notFound()
  }

  // Serialize the raw MDX so it can be rendered client-side
  const mdxSource = await serialize(post.content)

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
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
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
        {/* Client Component that renders the serialized MDX */}
        <CustomMDX source={mdxSource} />
      </article>
    </section>
  )
}