import React from 'react'
import { pattern4 } from '../../data/SvgPatterns'
import CallToActionButton from '../../components/CallToActionButton'
import HeroCarousel from './HeroCarousel'
function Hero({
  imageUrl,
  heading = 'HEADING',
  tagline = '',
  variant = 'outline',
  text = '',
  carousel=false
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04211E]">

      {/* background */}
      <div
        className="absolute inset-0 h-full w-full"
        dangerouslySetInnerHTML={{ __html: pattern4 }}
      />

      {/*content */}
      <div className="
        relative z-10
        flex min-h-screen
        items-center justify-center
        px-6 py-24
      ">
        <div className="
          flex w-full max-w-5xl
          lg:w-vw
          flex-col
          items-center
          justify-center
          text-center
        ">

          {/* Heading */}
          <h2 className="
            hero-gradient-text
            w-full
            text-center
          ">
            {heading}
          </h2>

          {/* tagline*/}
          <div className="
            mt-8
            flex w-full max-w-2xl
            flex-col
            items-center
            justify-center
            gap-6
          ">

            {tagline && (
              <p className="
                max-w-xl
                text-center
                font-bold
                leading-relaxed
                text-white
              ">
                {tagline}
              </p>
            )}
        {carousel &&  <HeroCarousel/>}
            {text && (
              <CallToActionButton
                variant={variant}
                text={text}
              />
            )}

          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero