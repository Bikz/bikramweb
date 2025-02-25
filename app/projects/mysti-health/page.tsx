import React from 'react'
import Image from 'next/image'

export default function MystiHealthPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <section className="animate-fadeIn">
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Mysti Health</h1>
        <p className="mb-4">
          Mysti Health is a personal AI-driven health assistant designed to help users manage their wellness holistically. 
          By aggregating user health data and leveraging advanced AI algorithms, Mysti Health creates personalized action 
          plans and provides real-time insights, nudges, and progress tracking.
        </p>
        <p className="mb-4">
          The platform seamlessly integrates multiple health concerns—such as dental, dietary, fitness, and mental wellness—into 
          one unified experience, making health management simple and proactive.
        </p>

        <h2 className="text-lg font-medium mt-8 mb-2">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Health Concern Logging with detailed questionnaires</li>
          <li>AI-Generated Education & Insights based on user data</li>
          <li>Personalized Daily Action Plans with reminders</li>
          <li>Progress Tracking & Weekly Reviews</li>
          <li>Secure Data Management with robust privacy controls</li>
          <li>Integrations with wearables and health devices</li>
        </ul>

        <h2 className="text-lg font-medium mt-8 mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React & React Native (Expo) for web and mobile</li>
          <li>AWS services (Lambda, Cognito, DynamoDB, S3)</li>
          <li>OpenAI API and LangChain for AI capabilities</li>
          <li>GitHub Actions for CI/CD pipelines</li>
        </ul>

        {/* Screenshot Gallery */}
        <h2 className="text-lg font-medium mt-8 mb-2">Preview</h2>
        <div className="relative w-full h-80 md:h-96 bg-neutral-100 dark:bg-neutral-800 mb-6">
          <Image
            src="/projects/mysti.png"
            alt="Mysti Health App screenshot"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <h2 className="text-lg font-medium mt-8 mb-2">Try Mysti Health</h2>
        <p className="mb-4">
          Interested in a holistic approach to managing your health? Mysti Health combines AI intelligence with personalized 
          health tracking to help you achieve your wellness goals with less effort and better results.
        </p>
        <div className="flex justify-center mt-6 mb-4">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Coming Soon
          </a>
        </div>
      </section>
    </div>
  )
}