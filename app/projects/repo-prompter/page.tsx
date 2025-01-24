import React from 'react'

export default function RepoPrompterPage() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
      Repo Prompter
      </h1>
      <p className="mb-4">
        Repo Prompter helps developers turn their code repositories into rich,
        context-aware prompts for Large Language Models. This streamlines the
        AI-assisted coding process by making sure the model has direct knowledge
        of your project’s structure, files, and dependencies.
      </p>
      <p className="mb-4">
        Instead of manually crafting prompts referencing your code,
        Repo Prompter automates that step, empowering you to focus on the actual
        problem-solving rather than data wrangling.
      </p>
      <h2 className="text-lg font-medium mt-8 mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Automated repository scanning & context extraction</li>
        <li>Generates high-level or file-specific prompts</li>
        <li>Works with popular LLMS like Deepseek, Claude, LLaMA, and GPT</li>
      </ul>
      <h2 className="text-lg font-medium mt-8 mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Tauri and Svelte for desktop app</li>
        <li>Cloudflare workers for backend</li>
      </ul>
    </section>
  )
}