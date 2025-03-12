/**
 * page.tsx (Mysti Health Project)
 * Title: Mysti Health – Bikram Brar
 * Description: Personal AI health agent that syncs with Apple/Google Health for personalized recommendations.
 */

import React from 'react'
import type { Metadata } from 'next'
import ProjectDetailClient from '../ProjectDetailClient'

export const metadata: Metadata = {
  title: 'Mysti Health – Bikram Brar',
  description: 'Personal AI health agent syncing with Apple/Google Health for personalized recommendations.',
}

export default function MystiHealthPage() {
  const projectData = {
    title: "Mysti Health",
    description: "Personal AI health agent syncing with Apple/Google Health for personalized recommendations.",
    status: "Released 2024",
    categories: [
      { name: "AI", color: "bg-black/10 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm" },
      { name: "Mobile", color: "bg-black/5 text-gray-700 dark:bg-white/5 dark:text-gray-100 backdrop-blur-sm" }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "Mysti Health is an AI-powered health companion that analyzes data from Apple Health and Google Fit to provide personalized health insights. The app uses a sophisticated ML model to identify patterns in your health data and provide actionable recommendations tailored to your specific goals and health profile."
      },
      {
        title: "Key Features",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Seamless integration with Apple Health and Google Fit</li>
            <li>Daily health insights based on your activity, sleep, and nutrition data</li>
            <li>Personalized workout and recovery recommendations</li>
            <li>Nutrition analysis and meal planning suggestions</li>
            <li>Sleep quality assessment and improvement strategies</li>
            <li>Private and secure - all sensitive health data stays on your device</li>
          </ul>
        )
      },
      {
        title: "Technology Stack",
        content: (
          <div className="space-y-4">
            <p>Mysti Health is built with a modern technology stack focused on performance and privacy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Frontend:</strong> SwiftUI for iOS, Jetpack Compose for Android</li>
              <li><strong>AI Processing:</strong> On-device ML models with CoreML and TensorFlow Lite</li>
              <li><strong>Backend:</strong> Node.js with TypeScript, MongoDB Atlas</li>
              <li><strong>Cloud Infrastructure:</strong> AWS Lambda, API Gateway</li>
              <li><strong>Analytics:</strong> Privacy-focused analytics with Amplitude</li>
            </ul>
          </div>
        )
      },
      {
        title: "Development Process",
        content: "Mysti Health was developed with a user-centered design approach. After identifying the need for a more intelligent health companion, I conducted extensive user research to understand how people interact with health data. The development process involved multiple iterations and beta testing with a group of health enthusiasts who provided valuable feedback."
      }
    ],
    links: [
      {
        label: "App Store",
        url: "https://example.com/mystihealth-ios",
      },
      {
        label: "Google Play",
        url: "https://example.com/mystihealth-android",
      },
      {
        label: "Project Website",
        url: "https://mystihealth.app",
      }
    ]
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <ProjectDetailClient {...projectData} />
    </div>
  )
}