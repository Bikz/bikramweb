import React from 'react'
import Image from 'next/image'

export default function MystiHealthPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <section className="animate-fadeIn">
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Mysti Health</h1>
        <p className="mb-4">
          Mysti Health is a cutting-edge AI-powered health application designed to provide personalized health insights.
        </p>

        {/* Add additional content and images as needed */}
        <div className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-800">
          <Image
            src="/mysti-health/preview.png"
            alt="Mysti Health App preview"
            fill
            className="object-cover rounded"
          />
        </div>
      </section>
    </div>
  )
}