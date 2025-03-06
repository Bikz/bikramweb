/**
 * page.tsx
 * Title: Home Page
 * Description: Displays the homepage hero, skill highlights, user journey, experience timeline, and recent blog posts.
 */

import { getBlogPosts } from './blog/utils'
import HeroSection from './components/HeroSection'
import SkillHighlightsSection from './components/SkillHighlightsSection'
import UserJourneySection from './components/UserJourneySection'
import HomePageContent from './components/HomePageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home – Bikram Brar',
  description:
    'Welcome to Bikram Brar’s homepage. Discover my AI projects, product management strategies, and engineering insights.',
}

export default function HomePage() {
  // Fetch blog posts on the server
  const allBlogs = getBlogPosts()

  return (
    <>
      {/* Full-width hero section */}
      <HeroSection />

      {/* Skill Highlights for engineering & PM */}
      <SkillHighlightsSection />

      {/* Empathy-driven approach: user journey */}
      <UserJourneySection />

      {/* Container for experience timeline & blog */}
      <HomePageContent blogs={allBlogs} />
    </>
  )
}