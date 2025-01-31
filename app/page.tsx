// app/page.tsx
import React from 'react'
import HeroSection from './components/HeroSection'
import ExperienceTimeline from './components/experience-timeline'
import { BlogPosts } from './components/posts'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* 
        The layout wraps this in a container, 
        so just put your below-the-fold content directly here. 
      */}
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