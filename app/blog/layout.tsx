/**
 * Blog layout with metadata configuration
 */
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog – Bikram Brar",
  description: "Read Bikram's posts on AI, software engineering, and product management insights.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
} 