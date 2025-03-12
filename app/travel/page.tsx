/**
 * page.tsx (Travel Page)
 * Title: Travel – Bikram Brar
 * Description: Photo gallery and brief commentary on Bikram's worldwide travels and cultural explorations.
 */

import fs from 'fs'
import path from 'path'
import TravelGallery from './TravelGallery'
import type { Metadata } from 'next'

// Server component metadata
export const metadata: Metadata = {
  title: 'Travel – Bikram Brar',
  description:
    "Discover Bikram's global adventures and photography from destinations around the world.",
}

function getTravelPhotos() {
  const travelDir = path.join(process.cwd(), 'public/travel')
  const files = fs.readdirSync(travelDir)

  return files
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file) => ({
      src: `/travel/${file}`,
      alt: file
        .split('.')[0]
        .split('-')
        .join(' ')
        .replace(/\b\w/g, (l) => l.toUpperCase()),
    }))
}

export default function TravelPage() {
  const photos = getTravelPhotos()
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 relative">
      <div className="relative z-10">
        <TravelGallery photos={photos} />
      </div>
    </div>
  )
}