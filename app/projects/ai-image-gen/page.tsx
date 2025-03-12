/**
 * page.tsx (AI Image Generator Project)
 * Title: AI Image Generator – Bikram Brar
 * Description: Multi-model AI image generation app with style transfer and image editing capabilities.
 */

import React from 'react'
import type { Metadata } from 'next'
import ProjectDetailClient from '../ProjectDetailClient'

export const metadata: Metadata = {
  title: 'AI Image Generator – Bikram Brar',
  description: 'Multi-model AI image generation app with style transfer and image editing capabilities.',
}

export default function AIImageGenPage() {
  const projectData = {
    title: "AI Image Generator",
    description: "Multi-model AI image generation app featuring style transfer, image editing, and high-resolution outputs.",
    status: "Released 2023",
    categories: [
      { name: "AI", color: "bg-black/10 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm" },
      { name: "Web App", color: "bg-purple-50/50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 backdrop-blur-sm" },
      { name: "React", color: "bg-blue-50/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 backdrop-blur-sm" }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "The AI Image Generator is a web application that allows users to create stunning AI-generated images using text prompts. The app supports multiple AI models, including Stable Diffusion, Midjourney API, and DALL-E 3, giving users access to a wide range of generation styles and capabilities. Beyond basic image generation, the app features style transfer, image editing tools, and the ability to create high-resolution outputs suitable for professional use."
      },
      {
        title: "Key Features",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Text-to-image generation with multiple AI models</li>
            <li>Style transfer from reference images</li>
            <li>Image editing and enhancement tools</li>
            <li>High-resolution output options</li>
            <li>Customizable generation parameters</li>
            <li>User galleries and sharing capabilities</li>
            <li>Prompt library and suggestions</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        )
      },
      {
        title: "Technology Stack",
        content: (
          <div className="space-y-4">
            <p>This project is built with a modern tech stack:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Frontend:</strong> React, Next.js, TailwindCSS</li>
              <li><strong>Backend:</strong> Node.js, Express</li>
              <li><strong>AI Models:</strong> Stable Diffusion, Midjourney API, DALL-E 3</li>
              <li><strong>Cloud Infrastructure:</strong> AWS Lambda, S3, CloudFront</li>
              <li><strong>Database:</strong> MongoDB Atlas</li>
              <li><strong>Authentication:</strong> Auth0</li>
              <li><strong>Image Processing:</strong> Sharp, Canvas API</li>
            </ul>
          </div>
        )
      },
      {
        title: "Development Process",
        content: "The development process for the AI Image Generator involved extensive research into the capabilities and limitations of various AI image generation models. I started with implementing the basic text-to-image functionality and gradually added more advanced features like style transfer and image editing. User feedback was crucial throughout the development process, helping to refine the interface and add features that users found most valuable. The app underwent several iterations before reaching its current state, with each update bringing new capabilities and improvements."
      }
    ],
    links: [
      {
        label: "Live App",
        url: "https://ai-image-gen.bikrambrar.com",
      },
      {
        label: "GitHub",
        url: "https://github.com/bikrambrar/ai-image-generator",
      },
      {
        label: "Technical Article",
        url: "https://blog.bikrambrar.com/building-an-ai-image-generator",
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