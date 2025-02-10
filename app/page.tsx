import { getBlogPosts } from './blog/utils'
import HeroSection from './components/HeroSection'
import HomePageContent from './components/HomePageContent'

export default function HomePage() {
  // 1) Fetch blog posts on the server (using `fs`) 
  const allBlogs = getBlogPosts()

  // 2) Render your HeroSection (can remain server or client),
  //    and pass blog data to a *client* child for animations.
  return (
    <>
      {/* Full-width hero section */}
      <HeroSection />

      {/* Container for subsequent sections (client animations) */}
      <HomePageContent blogs={allBlogs} />
    </>
  )
}