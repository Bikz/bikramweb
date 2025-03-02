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
        <h2 className="text-lg font-medium mt-8 mb-2">Preview</h2>
        <div className="relative w-full h-80 md:h-96 bg-neutral-100 dark:bg-neutral-800 mb-6">
          <Image
            src="/projects/dayplan.png"
            alt="Dayplan App screenshot"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <h2 className="text-lg font-medium mt-8 mb-2">Try Dayplan</h2>
        <p className="mb-4">
          Interested in transforming how you manage your daily tasks? Dayplan is designed to make your life easier by turning your spoken thoughts into an organized plan of action.
        </p>
        <div className="flex justify-center mt-10 mb-4">
          <a 
            href="https://trydayplan.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-medium rounded-lg transition-colors duration-200"
          >
            Check Out Dayplan
          </a>
        </div>
      </section>
    </div>
  )
}
