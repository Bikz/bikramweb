/**
 * page.tsx (Projects Index)
 * Title: Projects – Bikram Brar
 * Description: Showcases Bikram's AI and software projects, including app prototypes and R&D.
 */

import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects – Bikram Brar',
  description:
    "Explore Bikram Brar's AI-driven product development and software engineering projects.",
}

import ProjectsClient from './ProjectsClient'

export default function ProjectsPage() {
  return (
    <>
      {/* Full-width decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-br from-black/3 to-transparent rounded-full dark:from-white/3 blur-3xl"></div>
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-bl from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-black/2 to-transparent rounded-full dark:from-white/2 blur-3xl"></div>
        
        {/* Decorative circles */}
        <div className="absolute right-[25%] top-[10%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full border border-gray-200 dark:border-gray-800 opacity-30"></div>
        <div className="absolute left-[15%] top-[30%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full border border-gray-200 dark:border-gray-800 opacity-20"></div>
        <div className="absolute right-[35%] bottom-[10%] w-[15vw] h-[15vw] max-w-[250px] max-h-[250px] rounded-full border border-gray-200 dark:border-gray-800 opacity-25"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-5xl py-12 px-4 relative z-10">
        <ProjectsClient />
      </div>
    </>
  )
}