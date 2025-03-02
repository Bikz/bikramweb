import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Repoprompter',
}

export default function RepoPrompterPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <section className="animate-fadeIn">
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
          Repoprompter
        </h1>
        <p className="mb-4">
          Repoprompter is an Electron app that helps developers turn their code repositories into rich,
          context-aware prompts for Large Language Models. Users can select a repository, then easily choose 
          specific folders and files to create optimized prompts for sharing with LLM models.
        </p>
        <p className="mb-4">
          The app also allows users to paste back markdown git-diffs or entire files, automatically updating 
          the code files and making it super easy to improve code with AI. This is particularly useful with 
          models like OpenAI o1-pro which doesn't have API access.
        </p>

        <h2 className="text-lg font-medium mt-8 mb-2">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Repository scanning & selective file inclusion</li>
          <li>Optimized prompt generation for LLMs</li>
          <li>Automatic code updates from git-diff responses</li>
          <li>Cross-platform support for Mac and Windows</li>
        </ul>

        <h2 className="text-lg font-medium mt-8 mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Electron with React and Vite</li>
          <li>Cross-platform build for Mac and Windows</li>
        </ul>

        {/* Screenshot Gallery */}
        <h2 className="text-lg font-medium mt-8 mb-2">Preview</h2>
        <div className="relative w-full h-80 md:h-96 bg-neutral-100 dark:bg-neutral-800 mb-6">
          <Image
            src="/projects/repoprompter.png"
            alt="Repoprompter App screenshot"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <h2 className="text-lg font-medium mt-8 mb-2">Try Repoprompter</h2>
        <p className="mb-4">
          Looking to streamline your AI-assisted coding workflow? Repoprompter makes it easy to create context-rich 
          prompts from your codebase and apply AI-suggested changes with minimal friction.
        </p>
        <div className="flex justify-center mt-10 mb-4">
          <a 
            href="https://repoprompter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-medium rounded-lg transition-colors duration-200"
          >
            Check Out Repoprompter
          </a>
        </div>
      </section>
    </div>
  )
}