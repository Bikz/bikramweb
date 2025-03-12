'use client';

/**
 * mdx.tsx
 * Title: Custom MDX Rendering
 * Description: Renders MDX content with sugar-high syntax highlighting and Next.js client components.
 */

import React, { useState, useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteProps } from 'next-mdx-remote'
import Link from 'next/link'
import Image from 'next/image'
import { highlight } from 'sugar-high'

// Custom pre component to handle code blocks
function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700 my-6"
      {...props}
    />
  );
}

function Code({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: string }) {
  const codeHTML = highlight(children)
  return (
    <code 
      className="text-gray-800 dark:text-gray-200" 
      dangerouslySetInnerHTML={{ __html: codeHTML }} 
      {...props} 
    />
  )
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href || ''
  if (href.startsWith('/')) {
    return <Link href={href}>{props.children}</Link>
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return function Heading({ children }: { children: React.ReactNode }) {
    const slug = slugify(String(children))
    return React.createElement(
      `h${level}`,
      { id: slug },
      <a key={`link-${slug}`} href={`#${slug}`} className="anchor" />,
      children
    )
  }
}

const components = {
  pre: Pre,
  code: Code,
  a: CustomLink,
  Image: (props: any) => (
    <Image alt={props.alt} className="rounded-lg" {...props} />
  ),
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
}

export function CustomMDX({ mdxSource }: { mdxSource: any }) {
  // Ensure we're running in a browser environment before rendering MDX
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Only render the MDX content after component mounts on the client
  if (!isMounted) {
    return <div className="animate-pulse bg-gray-100 dark:bg-gray-800 h-96 rounded-lg"></div>;
  }
  
  return (
    <MDXRemote
      {...mdxSource}
      components={components as MDXRemoteProps['components']}
    />
  )
}