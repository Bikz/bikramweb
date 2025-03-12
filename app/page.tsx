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
        {/* Large gradient blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        
        {/* Decorative circles */}
        <div className="absolute right-[25%] top-[10%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full border border-gray-200 dark:border-gray-800 opacity-30"></div>
        <div className="absolute left-[15%] top-[30%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full border border-gray-200 dark:border-gray-800 opacity-20"></div>
        <div className="absolute right-[35%] bottom-[10%] w-[15vw] h-[15vw] max-w-[250px] max-h-[250px] rounded-full border border-gray-200 dark:border-gray-800 opacity-25"></div>
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