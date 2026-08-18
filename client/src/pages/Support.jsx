import React from 'react'
import Hero from './pageComponents/Hero'
import SupportMethods from '../components/SupportMethods'
import LandingPageCta from './pageComponents/LandingPageCta'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
export default function Support() {
  return (
    <div className="bg-teal-950">
      <Seo {...seoConfig.support} />
      <Hero
        variant="outline"
        heading="Support Our Work"
        image="/donate.webp"
        imageAlt = 'support us  banner image'
        carousel={false}
        scrollArrow={true}
        target="#support"
      />
      <section id="support" className="min-h-screen bg-teal-950 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <LandingPageCta variant="compact" cta={false} />
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
            Every contribution — however you choose to give — goes directly toward the outreach,
            training, and mentorship programmes you can see across our{' '}
            <a href="/gallery" className="underline text-teal-300 hover:text-white transition-colors">
              gallery
            </a>
            .
          </p>
          <SupportMethods />
        </div>
      </section>
    </div>
  )
}