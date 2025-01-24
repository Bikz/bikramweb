'use client'

import React from 'react'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'
import Image from 'next/image'
import { highlight } from 'sugar-high'

function Code({ children, ...props }) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
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
    .toString()
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
      [<a key={`link-${slug}`} href={`#${slug}`} className="anchor" />],
      children
    )
  }
}

const components = {
  code: Code,
  a: CustomLink,
  Image: (props: any) => <Image alt={props.alt} className="rounded-lg" {...props} />,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
}

/**
 * Renders the *serialized* MDX content from the server.
 * Must be a client component (hence 'use client') 
 * and import MDXRemote from 'next-mdx-remote' (NOT /rsc).
 */
export function CustomMDX({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />
}