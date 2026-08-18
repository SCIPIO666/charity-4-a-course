import React from 'react'
import Hero from './pageComponents/Hero'
export default function Bio() {
  return (
    <div className="bg-teal-950">
    <Hero
    variant="outline"
    heading="About The Founder"
    pattern="pattern3"
    image={'/heroBg/shirtHero.jpg'}
    imagePosition="bg-center lg:bg-top" 
    carousel={false}
    scrollArrow={true}
    target="#gallery"
    />

        <section className='bg-teal-950 min-h-screen'>

        </section>
    </div>
  )
}
