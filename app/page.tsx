/**
 * page.tsx
 * Home Page - Renders the HeroSection,
 * newly added SkillHighlightsSection,
 * UserJourneySection, and then HomePageContent.
 */

import { getBlogPosts } from './blog/utils'
import HeroSection from './components/HeroSection'
import SkillHighlightsSection from './components/SkillHighlightsSection'
import UserJourneySection from './components/UserJourneySection'
import HomePageContent from './components/HomePageContent'

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