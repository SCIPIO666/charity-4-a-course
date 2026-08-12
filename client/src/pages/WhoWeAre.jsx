import React from 'react'
import Hero from './pageComponents/Hero'
export default function WhoWeAre() {
  return (
    <div>
      <Hero
        variant='outline'
        heading='Who We Are'
        pattern='pattern2'
        carousel={false}
        scrollArrow={true}            
      />
      <section className='min-h-screen bg-ink-50 text-brand-white'>

      </section>      
    </div>
  )
}
