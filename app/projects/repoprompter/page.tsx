/**
 * page.tsx (Repoprompter Project)
 * Title: Repoprompter – Bikram Brar
 * Description: Electron app that helps developers turn code repositories into optimized prompts for LLMs.
 */

import React from 'react'
import type { Metadata } from 'next'
import ProjectDetailClient from '../ProjectDetailClient'

export const metadata: Metadata = {
  title: 'Repoprompter – Bikram Brar',
  description: 'Electron app that helps developers turn code repositories into optimized prompts for LLMs and apply AI changes.',
}

export default function RepoprompterPage() {
  const projectData = {
    title: "Repoprompter",
    description: "Electron app that helps developers turn code repositories into optimized prompts for LLMs and apply AI changes.",
    status: "Open Source",
    categories: [
      { name: "AI", color: "bg-black/10 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm" },
      { name: "Desktop", color: "bg-black/15 text-gray-900 dark:bg-white/15 dark:text-gray-300 backdrop-blur-sm" },
      { name: "Electron", color: "bg-black/15 text-gray-900 dark:bg-white/15 dark:text-gray-300 backdrop-blur-sm" }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "Repoprompter is a developer productivity tool that bridges the gap between your codebase and large language models (LLMs). It intelligently analyzes your repository structure, identifies relevant code files, and generates optimized prompts that provide the right context for LLMs to understand your project. This enables you to get more accurate suggestions, code completions, and architectural advice from AI models."
      },
      {
        title: "The Problem It Solves",
        content: "Developers often waste time crafting the perfect prompts for AI tools, manually copying relevant code snippets, and explaining project structure. Even then, the prompts often hit token limits or lack crucial context. Repoprompter automates this entire process, intelligently selecting and formatting the most relevant parts of your codebase for AI consumption."
      },
      {
        title: "Key Features",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Smart repository scanning and file relevance ranking</li>
            <li>Automated prompt generation with customizable templates</li>
            <li>Direct integration with leading AI services (OpenAI, Anthropic, etc.)</li>
            <li>Code snippet optimization to maximize token efficiency</li>
            <li>Context-aware dependency inclusion for better code understanding</li>
            <li>Inline AI suggestions with one-click application</li>
            <li>Cross-platform support (macOS, Windows, Linux)</li>
            <li>GitHub integration for seamless workflow</li>
          </ul>
        )
      },
      {
        title: "Technology Stack",
        content: (
          <div className="space-y-4">
            <p>Repoprompter is built using modern web technologies packaged as a desktop application:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Framework:</strong> Electron for cross-platform desktop application</li>
              <li><strong>Frontend:</strong> React with TypeScript, styled with TailwindCSS</li>
              <li><strong>Code Parsing:</strong> Tree-sitter for accurate code understanding</li>
              <li><strong>AI Integration:</strong> Custom API clients for various LLM providers</li>
              <li><strong>Repository Analysis:</strong> Proprietary algorithms for context relevance</li>
              <li><strong>State Management:</strong> Redux with middleware for async operations</li>
            </ul>
          </div>
        )
      },
      {
        title: "Open Source Collaboration",
        content: "Repoprompter is an open-source project that welcomes contributions from the developer community. Whether you're interested in improving the prompt optimization algorithms, adding support for additional programming languages, or enhancing the user interface, there are many ways to get involved. The project follows a standard GitHub contribution workflow with issues, pull requests, and code reviews."
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/Bikz/repoprompter",
      },
      {
        label: "Website",
        url: "https://repoprompter.com/",
      }
    ]
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <ProjectDetailClient {...projectData} />
    </div>
  )
}