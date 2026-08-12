import React from 'react'
import Hero from './pageComponents/Hero'
export default function Events() {
  return (
    <div>
      <Hero
        variant='outline'
        heading='Upcoming  Events'
        pattern='pattern1'
        carousel={false}
      />      
    </div>
  )
}
