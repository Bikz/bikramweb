/**
 * page.tsx (Dayplan App Project)
 * Title: Dayplan App – Bikram Brar
 * Description: SwiftUI productivity app using voice input + AI to organize and prioritize tasks.
 */

import React from 'react'
import type { Metadata } from 'next'
import ProjectDetailClient from '../ProjectDetailClient'

export const metadata: Metadata = {
  title: 'Dayplan App – Bikram Brar',
  description: 'SwiftUI productivity app that uses voice input + AI to organize and prioritize tasks.',
}

export default function DayplanAppPage() {
  const projectData = {
    title: "Dayplan App",
    description: "SwiftUI productivity app that uses voice input + AI to organize and prioritize tasks.",
    status: "Beta",
    categories: [
      { name: "AI", color: "bg-black/10 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm" },
      { name: "Mobile", color: "bg-black/5 text-gray-700 dark:bg-white/5 dark:text-gray-100 backdrop-blur-sm" }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "Dayplan is a revolutionary productivity app that combines the ease of voice input with the power of AI to transform how you plan and manage your day. Simply speak your tasks, meetings, and ideas, and Dayplan intelligently organizes everything into a structured, prioritized schedule that aligns with your personal productivity patterns."
      },
      {
        title: "Key Features",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Voice-to-task conversion with natural language understanding</li>
            <li>AI-powered task categorization and prioritization</li>
            <li>Smart scheduling that adapts to your productivity patterns</li>
            <li>Context-aware reminders and notifications</li>
            <li>Calendar integration with Apple Calendar and Google Calendar</li>
            <li>Beautifully designed timeline interface with focus mode</li>
            <li>Comprehensive analytics to help you understand your productivity</li>
          </ul>
        )
      },
      {
        title: "Development Journey",
        content: "Dayplan started as a personal project to solve my own productivity challenges. I found myself constantly juggling between notes apps, calendar apps, and to-do lists, and wanted a more integrated solution. The development process began with extensive research on productivity methodologies and user behaviors, followed by rapid prototyping to test different input methods and visualization approaches."
      },
      {
        title: "Technology Stack",
        content: (
          <div className="space-y-4">
            <p>Dayplan is built using the latest Apple technologies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Frontend:</strong> SwiftUI with Combine framework</li>
              <li><strong>Speech Processing:</strong> AVFoundation and Speech frameworks</li>
              <li><strong>AI/ML:</strong> Core ML for on-device task analysis</li>
              <li><strong>Natural Language:</strong> Custom NLP model for task identification and prioritization</li>
              <li><strong>Backend:</strong> Firebase for authentication and data sync</li>
              <li><strong>Design:</strong> Custom UI components with fluid animations</li>
            </ul>
          </div>
        )
      },
      {
        title: "Current Status",
        content: "Dayplan is currently in closed beta with a select group of productivity enthusiasts and professionals. The feedback has been overwhelmingly positive, with users reporting significant improvements in their daily organization and focus. The app is scheduled for public release in Q3 2024, with plans for an Android version to follow."
      }
    ],
    links: [
      {
        label: "Beta Program",
        url: "https://dayplan.app/beta",
      },
      {
        label: "Project Website",
        url: "https://dayplan.app",
      }
    ]
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <ProjectDetailClient {...projectData} />
    </div>
  )
}