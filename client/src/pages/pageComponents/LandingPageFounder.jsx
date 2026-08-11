import React from 'react'
import founder from '../../../public/founder.jpg'
import CallToActionButton from '../../components/CallToActionButton'

export default function LandingPageFounder() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-50 pt-12">

      {/* Background split — teal panel dividing the section diagonally */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0 0
            V 100
            C 25 85, 15 65, 40 50
            C 65 35, 55 15, 100 0
            Z
          "
          fill="#14B8A6"
        />
      </svg>
            <h2 className="font-display text-center relative z-20 font-bold tracking-wide uppercase ">
              Founder
        </h2>
      {/* content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left — Photo */}
        <div className="flex items-center justify-center px-8 py-16 md:py-0">

          <img
            src={founder}
            alt="Founder of Charity 4 A Course"
            className="w-full border-4 border-ink-50 max-w-sm md:max-w-md rounded-2xl object-cover object-top aspect-[4/5] shadow-2xl"
          />
        </div>

        {/* Right — Description */}
        <div className="flex items-center justify-center px-8 py-16 md:py-0">
          <div className="max-w-md">
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Samuel Juma Omondi
            </h2>
            <p className="mt-6 text-grey-200 leading-relaxed">
              Founder bio — background, the vision behind the organisation's outreach work in Kenya.
            </p>
            <div className="mt-8">
              <CallToActionButton variant="soft" text="Read Our Full Story" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}