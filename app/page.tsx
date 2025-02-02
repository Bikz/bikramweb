import React from 'react'
import HeroSection from './components/HeroSection'
import ExperienceTimeline from './components/experience-timeline'
import { BlogPosts } from './components/posts'

export default function HomePage() {
  return (
    <>
      {/* Full-width hero with grid behind it */}
      <HeroSection />

      {/* Below-the-fold, centered in layout */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-3 text-center">
          Work Experience
        </h2>
        <ExperienceTimeline />
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-3 text-center">
          Latest Blog Posts
        </h2>
        <BlogPosts />
      </section>
    </>
  )
}