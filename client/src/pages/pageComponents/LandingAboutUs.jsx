import React, { useLayoutEffect, useRef } from 'react'
import Header from '../../components/Header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LandingAboutUs() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-bg',
        { scale: 1.1, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      gsap.fromTo('.about-heading', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-heading',
            start: 'top 85%',
          }
        }
      )

      gsap.fromTo('.about-text-circle', 
        { scale: 0.7, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.about-text-circle',
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-teal-950 py-20 px-4">
      
      {/* background photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/about1.jpg"
          alt="Charity 4 A Course Outreach"
          loading="lazy"
          decoding="async"
          className="about-bg w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/90 via-teal-950/75 to-teal-950/90 backdrop-blur-[2px]" />
      </div>


      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center my-auto">
        

        <div className="about-heading mb-10 md:mb-14">
          <Header text="About Us" />
        </div>

        <div
          className="
            about-text-circle
            flex aspect-square
            w-[min(88vw,480px)] md:w-[min(90vw,540px)]
            items-center justify-center
            rounded-full
            bg-teal-500/90 backdrop-blur-md
            p-8 sm:p-12
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            border border-teal-300/40
            hover:border-teal-300 hover:shadow-[0_25px_70px_rgba(20,184,166,0.3)]
            transition-all duration-500
          "
        >
          <p className="max-w-[420px] font-body text-base sm:text-lg md:text-xl leading-relaxed text-white">
            <span className="text-ink-50 font-bold">Charity 4 A Course </span>
            is a non-profit and non-governmental charity organization aimed to work towards improving the quality of life through responsive and timely outreach charity programs among less fortunate communities in Kenya.
          </p>
        </div>

      </div>

    </section>
  )
}