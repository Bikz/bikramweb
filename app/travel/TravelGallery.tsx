/**
 * TravelGallery.tsx
 * Title: Travel Gallery
 * Description: Displays a grid of travel images from various destinations.
 */

'use client'
import React from 'react'
import Image from 'next/image'

interface TravelPhoto {
  src: string
  alt: string
}

interface TravelGalleryProps {
  photos: TravelPhoto[]
}

export default function TravelGallery({ photos }: TravelGalleryProps) {
  return (
    <section className="animate-fadeIn">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Travel Gallery
      </h1>
      <p className="mb-4">
        Traveling is one of my biggest passions. I love immersing myself in new
        cultures and exploring iconic landmarks around the world.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-800"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  )
} 