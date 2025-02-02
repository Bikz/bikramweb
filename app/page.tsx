import React from 'react'
import HeroSection from './components/HeroSection'
import ExperienceTimeline from './components/experience-timeline'
import { BlogPosts } from './components/posts'

export default function HomePage() {
  return (
    <>
      {/* Render the hero section full-width */}
      <HeroSection />

      {/* Wrap subsequent sections in a container */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <section>
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
      </div>
    </>
  )
}