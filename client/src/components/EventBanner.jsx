import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin } from 'lucide-react'
import { UPCOMING_EVENTS } from '../data/upcomingEvents'
import CallToActionButton from './CallToActionButton'
import Card from './Card'

function getUpcomingEvents() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return UPCOMING_EVENTS
    .map((event) => ({ ...event, dateObj: new Date(event.date) }))
    .filter((event) => event.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj)
}

function daysUntil(dateObj) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = dateObj - today
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

function EventCard({ event, isNext }) {
  const days = daysUntil(event.dateObj)
  const formattedDate = event.dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Card variant="cool" className="w-full text-center">
      <div className="py-8 md:py-10 max-w-2xl mx-auto">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
          {isNext && 'Next Up · '}
          {days === 0 ? 'Happening Today' : days === 1 ? 'Happening Tomorrow' : `${days} Days Away`}
        </span>

        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
          {event.title}
        </h2>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-brand-white/90">
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>

        {event.description && (
          <p className="mt-4 text-brand-white/80">{event.description}</p>
        )}

        {event.ctaLink && (
          <div className="mt-6">
            {event.ctaLink.startsWith('/') ? (
              <Link to={event.ctaLink}>
                <CallToActionButton variant="on-teal" text={event.ctaText || 'Learn More'} />
              </Link>
            ) : (
              <a href={event.ctaLink} target="_blank" rel="noreferrer">
                <CallToActionButton variant="on-teal" text={event.ctaText || 'Learn More'} />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export default function EventBanner() {
  const events = getUpcomingEvents()

  if (events.length === 0) {
    return (
      <div className="px-8 md:px-8">
        <Card className="border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <div className="py-10">
            <p className="font-display text-3xl md:text-5xl font-bold leading-tight">
              No upcoming events
            </p>
            <p className="mt-3 text-brand-white text-center text-2xl">
              Check the{' '}
              <Link to="/gallery" className="underline text-teal-500 font-bold hover:text-brand-white transition-colors">
                gallery
              </Link>{' '}
              for past events.
            </p>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-8 flex flex-col   gap-6">
      {events.map((event, index) => (
        <EventCard
          key={`${event.title}-${event.date}`}
          event={event}
          isNext={index === 0}
        />
      ))}
    </div>
  )
}