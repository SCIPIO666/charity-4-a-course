import React from 'react'
import Hero from './pageComponents/Hero'
export default function Contact() {
  return (
    <div>
      <Hero
        variant='outline'
        heading='Contact Us'
        pattern='pattern6'
        carousel={false}
        scrollArrow={true}
        target = '#contact'
      />
      <section id='contact' className='min-h-screen bg-ink-50 text-brand-white'>

      </section>
    </div>
  )
}
