/**
 * GetInTouchSection.tsx
 * Title: Get In Touch Section
 * Description: Displays a short description and two CTA buttons (Email, LinkedIn)
 *              for users to reach out about new opportunities.
 */

'use client'

import React from 'react'
import Link from 'next/link'

export default function GetInTouchSection() {
  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mb-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        I’m open to joining an early-stage startup or taking on a Product Leader /
        Product Engineer role in a fast-growing team. If you’re looking for someone
        passionate about AI, user empathy, and building frictionless solutions,
        I’d love to connect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="mailto:mail@bikrambrar.com"
          className="
            px-6 py-3 text-sm font-medium
            text-white bg-blue-600 rounded-md shadow-sm
            hover:bg-blue-700 transition-colors
            dark:bg-blue-500 dark:hover:bg-blue-600
          "
        >
          Email Me
        </Link>
        <Link
          href="https://www.linkedin.com/in/bikrambrar/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 text-sm font-medium
            text-blue-600 border border-blue-600 rounded-md
            shadow-sm hover:bg-blue-50 transition-colors
            dark:text-blue-400 dark:border-blue-400
            dark:hover:bg-blue-900
          "
        >
          LinkedIn
        </Link>
      </div>
    </section>
  )
}