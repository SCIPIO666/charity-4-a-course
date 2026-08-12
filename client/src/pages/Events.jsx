import React from 'react'
import Hero from './pageComponents/Hero'
export default function Events() {
  return (
    <div>
      <Hero
        variant='outline'
        heading='Events'
        pattern='pattern1'
        carousel={false}
        scrollArrow={true}   
        target = '#events'     
      />   
      <section id='events' className='min-h-screen bg-ink-50 text-brand-white'>

      </section>         
    </div>
  )
}
