import React from 'react'
import founder from '../../../public/founder.jpg'
export default function LandingPageFounder() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-50">

      {/* Background split */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >

        {/* Top section */}
        <path
          d="
            M 0 0
            H 100
            V 35
            C 80 45, 65 25, 45 40
            C 25 55, 15 40, 0 50
            Z
          "
          fill="#C3F3EB"
        />

      </svg>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
         {/* left - Photo */}
        <div className="flex items-center justify-center">
            <img src={founder} alt="founder" />
        </div>
         {/* Right Column - Description */}
        <div className="flex items-center justify-center">
            <div>
                <h2>About Our Founder</h2>
                <p>Description text here...</p>
            </div>
        </div>
      </div>

    </section>
  )
}