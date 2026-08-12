import React, { useLayoutEffect, useRef } from 'react'
import founder from '../../../public/founder.jpg'
import CallToActionButton from '../../components/CallToActionButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPageFounder() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.founder-heading', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.founder-heading',
            start: 'top 85%',
          }
        }
      )
      gsap.fromTo('.founder-img', 
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.founder-img',
            start: 'top 80%',
          }
        }
      )
      gsap.fromTo('.founder-text', 
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.founder-text',
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-ink-50 pt-12">

      {/* diagonal split with curve */}
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
        <h2 className="founder-heading font-display text-center relative z-20 font-bold tracking-wide uppercase ">
              Founder
        </h2>
      {/* content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left — Photo */}
        <div className="flex items-center justify-center px-8 py-16 md:py-0">

          <img
            src={founder}
            alt="Founder of Charity 4 A Course"
            className="founder-img w-full border-4 border-ink-50 max-w-sm md:max-w-md rounded-2xl object-cover object-top aspect-[4/5] shadow-2xl"
          />
        </div>

        {/* Right — Description */}
        <div className="founder-text flex items-center justify-center px-8 py-16 md:py-0">
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