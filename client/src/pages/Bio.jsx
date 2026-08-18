import React from 'react'
import Hero from './pageComponents/Hero'
import SEO from './pageComponents/Seo'
export default function Bio() {
  return (
    <div className="bg-teal-950">
          <SEO
             title="Who We Are"
              description="Charity 4 A Course is a non-governmental, non-profit
              organisation improving quality of life through responsive,
              timely outreach among less fortunate communities in Kenya."
              path="/about"
          />
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

      <section id="gallery" className="bg-teal-950 min-h-screen px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-12 md:gap-16 items-start">

          {/* photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/heroBg/heroBio.jpg"
              alt="Samuel Juma Omondi, Founder of Charity 4 A Course"
              className="w-full max-w-sm rounded-2xl border-4 border-teal-900 object-cover object-top aspect-[4/5] shadow-2xl"
            />
          </div>

          {/* bio */}
          <div>
            <span className="font-display text-xs font-bold tracking-widest uppercase text-teal-300">
              Meet the Founder
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Samuel Juma Omondi
            </h2>

            <div className="mt-6 flex flex-col gap-5 text-grey-200 leading-relaxed">
              <p>
                Samuel Juma Omondi founded Charity 4 A Course on a simple
                conviction: that lasting change comes from showing up
                consistently, not from one-off gestures. Rather than waiting
                for the ideal moment or ideal resources, he chose to start
                small and stay committed — building an organisation measured
                by whether it returns, again and again, to the communities
                that need it most.
              </p>
              <p>
                Under his leadership, Charity 4 A Course has grown into a
                non-governmental, non-profit organisation delivering
                responsive, timely outreach across Kenya — from shared meals
                to community outreach events — rooted in the belief that the
                people it serves deserve dignity, not just charity.
              </p>
              <p>
                Samuel continues to lead the organisation's outreach work
                directly, staying close to the communities Charity 4 A
                Course serves rather than stepping back into a purely
                administrative role.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}