import React from 'react'
import Hero from './pageComponents/Hero'
import EventBanner from '../components/EventBanner'

export default function Events() {
  return (
    <div>
      <Hero
        variant="outline"
        heading="Events"
        pattern="pattern1"
        image='/heroBg/eventsHero.jpg'
        carousel={false}
        scrollArrow={true}
        target="#events"
      />
      <section id="events" className="min-h-screen bg-teal-950 text-brand-white flex justify-center align-center">
        <EventBanner />
      </section>
    </div>
  )
}