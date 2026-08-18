import React from 'react'
import Hero from './pageComponents/Hero'
import EventBanner from '../components/EventBanner'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
export default function Events() {

  return (
    <div>
      <Seo {...seoConfig.events} />
      <Hero
        variant="outline"
        heading="Events"
        pattern="pattern1"
        image='/heroBg/eventsHero.jpg'
        imageAlt = 'events banner image'
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