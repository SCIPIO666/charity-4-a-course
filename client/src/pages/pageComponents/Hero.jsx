import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import {pattern1,pattern2,pattern3,pattern4, pattern5,pattern6 } from '../../data/SvgPatterns'
import CallToActionButton from '../../components/CallToActionButton'
import HeroCarousel from './HeroCarousel'
import ScrollArrow from '../../components/ScrollArrow'
function Hero({
  heading = 'HEADING',
  tagline = '',
  pattern='pattern4',
  variant = 'outline',
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
    return (
        <>
        {text.split('').map((char, index) => (
            <span
            key={index}
            className="inline-block"
            >
            {char === ' ' ? '\u00A0' : char}
            </span>
        ))}
        </>
    )
    }
    useLayoutEffect(() => {
    const letters = headingRef.current.querySelectorAll('span')

    gsap.fromTo(
        letters,
        {
        y: -100,
        opacity: 0,
        // rotateX: -45,
        },
        {
        y: 0,
        opacity: 1,
        // rotateX: 0,
        duration: 0.7,
        stagger: 0.035,
        ease: 'power3.out',
        }
    )
    }, [heading])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04211E]">

      {/* background */}
      <div
        className="absolute inset-0 h-full w-full"
        dangerouslySetInnerHTML={{ __html: determinePattern(pattern) }}
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
          align-center
          text-center
        ">

          {/* Heading */}
            <h2
            ref={headingRef}
            className="hero-gradient-text w-full text-center"
            >
            <SplitText text={heading} />
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
        {scrollArrow && <ScrollArrow target ={target} />}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero