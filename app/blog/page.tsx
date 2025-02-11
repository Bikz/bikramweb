import React from 'react';
import Link from 'next/link';
import { getBlogPosts, formatDate } from 'app/blog/utils';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition">
              <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-black hover:underline">
                {post.metadata.title}
              </Link>
              <p className="mt-2 text-sm text-gray-600">{post.metadata.summary}</p>
              <p className="mt-1 text-xs text-gray-500">{formatDate(post.metadata.publishedAt)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
