import React from 'react'

export default function DayplanAppPage() {
  return (
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
      
    </section>
  )
}