import { BlogPosts } from 'app/components/posts'

export default function HomePage() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-3xl font-semibold tracking-tighter">
        Welcome to My Portfolio
      </h1>

      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        Hi! I’m Bikram, a Senior Product Manager and AI developer. I love
        creating products that make life easier—especially leveraging AI to
        solve real-world problems.
      </p>

      {/* Featured Projects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Featured AI Projects</h2>
        <div className="space-y-4">
          <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded">
            <h3 className="font-bold text-lg">Mysty Health</h3>
            <p className="text-sm mt-1">
              A personal AI health agent that syncs with Apple/Google Health and
              provides personalized health recommendations based on your data.
            </p>
          </div>

          <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded">
            <h3 className="font-bold text-lg">Dayplan App</h3>
            <p className="text-sm mt-1">
              SwiftUI productivity app that uses voice input and AI to
              automatically organize and prioritize your tasks.
            </p>
          </div>

          <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded">
            <h3 className="font-bold text-lg">Repoprompter</h3>
            <p className="text-sm mt-1">
              Transforms your code repositories into prompts for LLMs, making
              AI-assisted coding more efficient.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Intro */}
      <p className="mb-4">
        Learn more about my background on the{' '}
        <a href="/about" className="underline hover:text-blue-600">
          About page
        </a>{' '}
        or check out my{' '}
        <a href="/travel" className="underline hover:text-blue-600">
          Travel page
        </a>{' '}
        for some photo highlights from my adventures.
      </p>

      {/* Blog Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-3">Latest Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
