import React from 'react'
import Hero from './pageComponents/Hero'
export default function Gallery() {
  return (
    <div>
      <Hero
        variant='outline'
        heading='Gallery'
        pattern='pattern3'
        carousel={false}
      />
  
    </div>
  )
}
