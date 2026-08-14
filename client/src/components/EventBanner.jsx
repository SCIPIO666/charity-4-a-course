import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin } from 'lucide-react'
import { UPCOMING_EVENTS } from '../data/upcomingEvents'
import CallToActionButton from './CallToActionButton'
import Card from './Card'

function getNextEvent() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return UPCOMING_EVENTS
    .map((event) => ({ ...event, dateObj: new Date(event.date) }))
    .filter((event) => event.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj)[0]
}

function daysUntil(dateObj) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = dateObj - today
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function EventBanner() {
  const nextEvent = getNextEvent()

  if (!nextEvent) {
    return (
      <div className="px-8 md:px-8 ">
        <Card variant="soft" className="w-full text-center">
          <div className="py-10">
            <p className="font-display text-3xl md:text-5xl font-bold leading-tight">
              No upcoming events
            </p>
            <p className="mt-3 text-brand-white">
              Check the{' '}
              <Link to="/gallery" className="underline text-ink-50 font-bold hover:text-brand-whitetransition-colors">
                gallery
              </Link>{' '}
              for past events.
            </p>
          </div>
        </Card>
      </div>
    )
  }

  const days = daysUntil(nextEvent.dateObj)
  const formattedDate = nextEvent.dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="px-4 md:px-8">
      <Card variant="soft" className="w-full text-center">
        <div className="py-10 max-w-2xl mx-auto">
          <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
            {days === 0 ? 'Happening Today' : days === 1 ? 'Happening Tomorrow' : `${days} Days Away`}
          </span>

          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
            {nextEvent.title}
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-brand-white/90">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {nextEvent.location}
            </span>
          </div>

          {nextEvent.description && (
            <p className="mt-4 text-brand-white/80">{nextEvent.description}</p>
          )}

          {nextEvent.ctaLink && (
            <div className="mt-6">
              {nextEvent.ctaLink.startsWith('/') ? (
                <Link to={nextEvent.ctaLink}>
                  <CallToActionButton variant="on-teal" text={nextEvent.ctaText || 'Learn More'} />
                </Link>
              ) : (
                <a href={nextEvent.ctaLink} target="_blank" rel="noreferrer">
                  <CallToActionButton variant="on-teal" text={nextEvent.ctaText || 'Learn More'} />
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}