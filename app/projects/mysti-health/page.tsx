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
              <li><strong>Frontend:</strong> React Native Expo with TypeScript</li>
              <li><strong>AI Processing:</strong> Custom fine-tuned models with OpenAI</li>
              <li><strong>Backend:</strong> Node.js with TypeScript</li>
              <li><strong>Cloud Infrastructure:</strong> EC2, Cloudfront, Route 53, S3</li>
              <li><strong>Analytics:</strong> Privacy focused - no tracking</li>
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
        url: "https://mysti.ai",
      },
      {
        label: "Google Play",
        url: "https://mysti.ai",
      },
      {
        label: "Project Website",
        url: "https://mysti.ai",
      }
    ]
  };

  return (
    <>
      {/* Full-width decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <div className="absolute -top-[5%] -left-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        <div className="absolute bottom-[5%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        
        {/* Decorative circles */}
        <div className="absolute right-[20%] top-[15%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] rounded-full border border-gray-200 dark:border-gray-800 opacity-25"></div>
        <div className="absolute left-[25%] top-[45%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full border border-gray-200 dark:border-gray-800 opacity-20"></div>
        <div className="absolute right-[30%] bottom-[15%] w-[15vw] h-[15vw] max-w-[200px] max-h-[200px] rounded-full border border-gray-200 dark:border-gray-800 opacity-30"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-5xl py-12 px-4 relative z-10">
        <ProjectDetailClient {...projectData} />
      </div>
    </>
  )
}