import fs from 'fs'
import path from 'path'
import TravelGallery from './TravelGallery'

// Server component to get travel photos
function getTravelPhotos() {
  const travelDir = path.join(process.cwd(), 'public/travel')
  const files = fs.readdirSync(travelDir)
  
  return files
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(file => ({
      src: `/travel/${file}`,
      alt: file.split('.')[0].split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase()),
    }))
}

export default function TravelPage() {
  const photos = getTravelPhotos()
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <TravelGallery photos={photos} />
    </div>
  )
}
