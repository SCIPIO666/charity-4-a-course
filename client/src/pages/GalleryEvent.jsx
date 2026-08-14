import React from 'react'
import { useParams } from 'react-router-dom'
import { getEventPhotos } from '../data/events'

export default function GalleryEvent() {

  const { eventSlug } = useParams()

  const photos = getEventPhotos(eventSlug)

  return (
    <section className="min-h-screen bg-teal-950 px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <h1 className="font-display text-4xl font-bold text-white">
          {eventSlug}
        </h1>

        <div className="
          mt-10
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        ">

          {photos.map((src, index) => (

            <div
              key={src}
              className="
                aspect-[4/3]
                overflow-hidden
              "
            >

              <img
                src={src}
                alt={`${eventSlug} photo ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}