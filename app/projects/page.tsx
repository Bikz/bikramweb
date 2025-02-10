// app/projects/page.tsx
import React from 'react'
// Next.js 15 "metadata" can stay here as a server export:
export const metadata = {
  title: 'Projects',
}

import ProjectsClient from './ProjectsClient'

/**
 * Server Component that returns a client child.
 * This avoids running Framer Motion on the server.
 */
export default function ProjectsPage() {
  return <ProjectsClient />
}