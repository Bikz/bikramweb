/**
 * page.tsx (Projects Index)
 * Title: Projects – Bikram Brar
 * Description: Showcases Bikram’s AI and software projects, including app prototypes and R&D.
 */

import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Projects – Bikram Brar',
  description:
    'Explore Bikram Brar’s AI-driven product development and software engineering projects.',
}

import ProjectsClient from './ProjectsClient'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <ProjectsClient />
    </div>
  )
}