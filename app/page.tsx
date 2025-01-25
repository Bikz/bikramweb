// app/page.tsx (server component by default)
import { BlogPosts } from 'app/components/posts'
import ExperienceTimeline from 'app/components/experience-timeline'
import HeroSection from './components/HeroSection' // a new client component
import React from 'react'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* The rest of the site below the fold */}
      <section className="px-4 mt-16 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-3 text-center">
          Work Experience
        </h2>
        <ExperienceTimeline />
      </section>

      <section className="px-4 mt-16 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-3 text-center">
          Latest Blog Posts
        </h2>
        <BlogPosts />
      </section>
    </>
  )
}
