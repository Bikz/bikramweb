import React from 'react'
import Image from 'next/image'

export default function DayplanAppPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <section className="animate-fadeIn">
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
          Dayplan App
        </h1>
        <p className="mb-4">
          Dayplan is a SwiftUI-based productivity app that transforms voice input
          into prioritized tasks. Say your ideas or to-dos out loud, and the app
          automatically assigns priorities, estimated durations, and suggested
          time blocks.
        </p>
        <p className="mb-4">
          The goal is to help busy individuals quickly offload thoughts into an
          organized, actionable plan without the friction of manual task entry and
          sorting.
        </p>

        <h2 className="text-lg font-medium mt-8 mb-2">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Voice-to-task AI, reducing manual typing</li>
          <li>Automatic prioritization & scheduling</li>
          <li>Sleek SwiftUI interface for iOS</li>
        </ul>

        <h2 className="text-lg font-medium mt-8 mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside mb-4">
          <li>SwiftUI for iOS front-end</li>
          <li>OpenAI GPT for language processing</li>
        </ul>

        {/* Screenshot Gallery */}
        <h2 className="text-lg font-medium mt-8 mb-2">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-800">
            <Image
              src="/dayplan/dayplan1.png"
              alt="Dayplan App screenshot 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-800">
            <Image
              src="/dayplan/dayplan2.png"
              alt="Dayplan App screenshot 2"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
