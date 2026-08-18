import React from 'react'

import loop1 from '../../../public/loop1.jpg'
import loop2 from '../../../public/loop2.jpg'
import loop3 from '../../../public/loop3.jpg'
import loop4 from '../../../public/loop4.jpg'

const IMAGES = [
  loop1,
  loop2,
  loop3,
  loop4,
]

export default function HeroCarousel() {
  return (
    <div className="w-full overflow-hidden">

      <div className="flex w-max animate-scroll gap-4" aria-hidden="true">

        {[...IMAGES, ...IMAGES].map((image, index) => (
          <div
            key={index}
            className="
              h-28
              w-40
              shrink-0
              overflow-hidden
              rounded-xl
            "
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  )
}