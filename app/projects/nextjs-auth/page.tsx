/**
 * page.tsx (NextJS Auth Project)
 * Title: NextJS Auth Starter – Bikram Brar
 * Description: A comprehensive authentication starter for Next.js applications with various providers.
 */

import React from 'react'
import type { Metadata } from 'next'
import ProjectDetailClient from '../ProjectDetailClient'

export const metadata: Metadata = {
  title: 'NextJS Auth Starter – Bikram Brar',
  description: 'A comprehensive authentication starter for Next.js applications with various providers.',
}

export default function NextJSAuthPage() {
  const projectData = {
    title: "NextJS Auth Starter",
    description: "A comprehensive authentication solution for Next.js 14+ applications with multiple provider support and role-based access control.",
    status: "Open Source",
    categories: [
      { name: "Next.js", color: "bg-black/10 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm" },
      { name: "TypeScript", color: "bg-blue-50/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 backdrop-blur-sm" },
      { name: "Auth", color: "bg-green-50/50 text-green-700 dark:bg-green-900/30 dark:text-green-300 backdrop-blur-sm" }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "The NextJS Auth Starter is a production-ready authentication solution for Next.js applications. It provides a complete authentication system with support for multiple providers including email/password, Google, GitHub, and more. The starter also includes role-based access control, email verification, and password reset functionality."
      },
      {
        title: "Key Features",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Multiple authentication providers (Email/Password, Google, GitHub, etc.)</li>
            <li>Role-based access control with flexible permission system</li>
            <li>Email verification and password reset</li>
            <li>Session management with JWT and cookies</li>
            <li>Rate limiting and security features</li>
            <li>TypeScript support with full type safety</li>
            <li>Responsive authentication UI components</li>
            <li>Comprehensive documentation and examples</li>
          </ul>
        )
      },
      {
        title: "Technology Stack",
        content: (
          <div className="space-y-4">
            <p>This project is built with modern web technologies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Framework:</strong> Next.js 14+ (App Router)</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>Authentication:</strong> NextAuth.js / Auth.js</li>
              <li><strong>Database:</strong> Prisma ORM with PostgreSQL</li>
              <li><strong>UI Components:</strong> Tailwind CSS with shadcn/ui</li>
              <li><strong>Form Handling:</strong> React Hook Form with Zod validation</li>
              <li><strong>API:</strong> Next.js API routes with tRPC</li>
            </ul>
          </div>
        )
      },
      {
        title: "Implementation Details",
        content: "The starter uses a modular approach to authentication, allowing developers to easily add or remove providers as needed. The authentication flow is carefully designed to provide a seamless user experience while maintaining the highest security standards. The codebase is well-structured and documented, making it easy to customize for specific project requirements."
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/bikrambrar/nextjs-auth-starter",
      },
      {
        label: "Live Demo",
        url: "https://nextjs-auth-demo.bikrambrar.com",
      },
      {
        label: "Documentation",
        url: "https://nextjs-auth-docs.bikrambrar.com",
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