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
        carousel={false}
        scrollArrow={true}
        target="#events"
      />
      <section id="events" className="min-h-content bg-teal-950 text-brand-white">
        <EventBanner />
      </section>
    </div>
  )
}