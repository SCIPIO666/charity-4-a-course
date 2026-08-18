import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getEventPhotos } from '../data/gallery'
import { EVENTS } from '../data/events'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
export default function GalleryEvent() {
  const { eventSlug } = useParams()
  const event = EVENTS.find((e) => e.slug === eventSlug)
  const photos = getEventPhotos(eventSlug)

  return (
    <section className="min-h-screen bg-teal-950 px-6 py-20">
      <Seo {...seoConfig.galleryEvent} />
      <div className="mx-auto max-w-7xl">
        <Link to="/gallery" className="text-teal-300 text-sm hover:text-white transition-colors">
          ← Back to Gallery
        </Link>

        <h1 className="mt-4 font-display text-4xl font-bold text-white">
          {event?.title ?? eventSlug}
        </h1>
        {event && (
          <p className="mt-2 text-teal-200/70">
            {event.date} · {event.location}
          </p>
        )}

        {photos.length === 0 ? (
          <p className="mt-16 text-teal-200/60">
            Photos for this event are coming soon.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {photos.map((src, index) => (
              <div key={src} className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={`${event?.title ?? eventSlug} photo ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}