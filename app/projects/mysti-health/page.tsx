import React from 'react'

export default function MystiHealthPage() {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        Mysti Health
      </h1>
      <p className="mb-4">
        Mysti Health is a personal AI health agent that syncs with Apple/Google
        Health data to provide personalized recommendations. By analyzing
        metrics from blood tests to heart rate patterns, Mysti Health delivers
        AI-driven insights to help users make informed wellness decisions.
      </p>
      <p className="mb-4">
        This project was born out of a desire to tackle healthcare system
        backlogs, allowing individuals to better understand their own health
        data and take proactive steps.
      </p>
      <h2 className="text-lg font-medium mt-8 mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Seamless integration with Apple/Google Health</li>
        <li>AI-generated recommendations based on test data</li>
        <li>Private beta with real user feedback loops</li>
      </ul>
      <h2 className="text-lg font-medium mt-8 mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside mb-4">
        <li>React Native, Node.js, AWS</li>
        <li>Custom multi-agent pipieline</li>
        <li>LangChain, Pinecone, GPT</li>
      </ul>
      <a
  href="https://mysti.ai"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
>
  Learn More
</a>
    </section>
  )
}