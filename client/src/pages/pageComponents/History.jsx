import React from 'react'
import Card from '../../components/Card'

/**
 * DRAFT v1 — most of this timeline is invented placeholder narrative,
 * per instruction, for Jumah/Samuel to correct and iterate on. The one
 * exception: 2021 as the founding year isn't a random guess — it's
 * inferred from Google review timestamps found during earlier research
 * ("5 years ago" relative to Aug 2026). Everything else (registration
 * year, the expansion story) needs real facts before this ships.
 */
const HISTORY = [
  {
    year: '2021',
    title: 'Where it started',
    text: "Charity 4 A Course began as a small, informal effort — a handful of volunteers coming together to share meals with families in Nairobi who needed it most.",
  },
  {
    year: '2022',
    title: 'Formal registration',
    text: "What started as informal outreach grew into a registered non-governmental, non-profit organisation, giving the work a formal structure to grow from.",
  },
  {
    year: '2023 – Present',
    title: 'Expanding outreach',
    text: "Outreach programmes expanded beyond feeding initiatives to include community events, children's outreach, and volunteer-led engagement across Nairobi.",
  },
]

export default function History() {
  return (
    <section id="history" className="bg-ink-50 px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        <span className="font-display text-xs font-bold tracking-widest uppercase text-teal-300">
          Our Journey
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
          Our History
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HISTORY.map((item) => (
            <Card key={item.year} variant="soft" className="p-6">
              <p className="font-display text-2xl font-bold text-teal-600 mb-2">{item.year}</p>
              <h3 className="font-display font-bold text-ink-50 text-lg mb-2">{item.title}</h3>
              <p className="text-ink-50/80 text-sm leading-relaxed">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}