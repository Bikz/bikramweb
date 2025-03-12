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
    "Welcome to Bikram Brar's homepage. Discover my AI projects, product management strategies, and engineering insights.",
}

export default function HomePage() {
  // Fetch blog posts on the server
  const allBlogs = getBlogPosts()

  return (
    <>
      {/* Full-width decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradients only */}
        <div className="absolute top-[5%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-radial from-black/2 via-black/1 to-transparent dark:from-white/2 dark:via-white/1 rounded-full"></div>
        <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-gradient-radial from-black/1 via-black/1 to-transparent dark:from-white/1 dark:via-white/1 rounded-full"></div>
        
        {/* Light glow effect */}
        <div className="absolute top-[20%] -left-[5%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-gradient-conic from-gray-100/5 via-gray-100/0 to-gray-100/5 dark:from-gray-800/5 dark:via-gray-800/0 dark:to-gray-800/5 rounded-full filter blur-[30px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-gradient-conic from-gray-100/5 via-gray-100/0 to-gray-100/5 dark:from-gray-800/5 dark:via-gray-800/0 dark:to-gray-800/5 rounded-full filter blur-[30px]"></div>
      </div>

      {/* Content with relative positioning and z-index */}
      <div className="relative z-10">
        {/* Full-width hero section */}
        <HeroSection />

        {/* Skill Highlights for engineering & PM */}
        <SkillHighlightsSection />

        {/* Empathy-driven approach: user journey */}
        <UserJourneySection />

        {/* Container for experience timeline & blog */}
        <HomePageContent blogs={allBlogs} />
      </div>
    </>
  )
}