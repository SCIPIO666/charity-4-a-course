import React from 'react'
import { pattern4 } from '../../data/SvgPatterns'

export default function LandingPageFounder() {
  return (

       <section className="relative min-h-screen overflow-hidden bg-[#04211E]">
   
            {/* background */}
            <div
            className="absolute inset-0 h-full w-full"
            dangerouslySetInnerHTML={{ __html: pattern4 }}
            />
                <p>CONTENT</p>

        </section>

  )
}
