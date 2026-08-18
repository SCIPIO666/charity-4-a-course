import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import {pattern1,pattern2,pattern3,pattern4, pattern5,pattern6 } from '../../data/SvgPatterns'
import CallToActionButton from '../../components/CallToActionButton'
import HeroCarousel from './HeroCarousel'
import ScrollArrow from '../../components/ScrollArrow'
import { useNavigate } from 'react-router-dom'

function Hero({
  heading = 'HEADING',
  tagline = '',
  pattern='pattern4',
  variant = 'outline',
  image = '',
  imageAlt = '', 
  imagePosition = 'bg-center lg:bg-top',
  text = '',
  target = '',
  scrollArrow=false,
  carousel=false
}) {

     function determinePattern(patternType){
        if (patternType==='pattern1') return pattern1
        if (patternType==='pattern2') return pattern2
        if (patternType==='pattern3') return pattern3
        if (patternType==='pattern4') return pattern4
        if (patternType==='pattern5') return pattern5
        if (patternType==='pattern6') return pattern6
    }

    const headingRef = useRef(null)

    function SplitText({ text }) {
      const words = text.split(' ')
      return (
        <>
          {words.map((word, wi) => (
            <React.Fragment key={wi}>
              <span className="inline-block whitespace-nowrap">
                {word.split('').map((char, ci) => (
                  <span key={ci} className="char inline-block">
                    {char}
                  </span>
                ))}
              </span>
              {wi < words.length - 1 && ' '}
            </React.Fragment>
          ))}
        </>
      )
    }
    useLayoutEffect(() => {
    const letters = headingRef.current.querySelectorAll('span')

    gsap.fromTo(
        letters,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.035, ease: 'power3.out' }
    )
    }, [heading])

const navigate = useNavigate()
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04211E]">

      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            fetchpriority="high"
            className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04211E] via-[#04211E]/70 to-[#04211E]/40" />
        </>
      ) : (
        <div
          className="absolute inset-0 [&>svg]:w-full [&>svg]:block"
          dangerouslySetInnerHTML={{ __html: determinePattern(pattern) }}
        />
      )}

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
          align-center
          text-center
        ">

            <h1
            ref={headingRef}
            className="font-display text-4xl font-bold uppercase leading-tight md:text-6xl"
            >
            <SplitText text={heading} />
            </h1>


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
                callback={() => navigate('/support')}
              />
            )}
        {scrollArrow && <ScrollArrow target ={target} />}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero