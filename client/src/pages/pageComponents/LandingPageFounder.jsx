import React, { useLayoutEffect, useRef } from 'react'
import founder from '../../../public/heroBg/juma.jpeg'
import CallToActionButton from '../../components/CallToActionButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
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
const navigate = useNavigate()
  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-ink-50 pt-12">

      {/* diagonal split with curve */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
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
          fill="#04211E"
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
            loading="lazy"
            decoding="async"
            className="founder-img w-full border-4 border-ink-50 max-w-sm md:max-w-md rounded-2xl object-cover object-top aspect-[4/5] shadow-2xl"
          />
        </div>
{/* Right — Description */}
<div className="founder-text flex items-center justify-center px-8 py-16 md:py-0">
  <div className="max-w-md">
    {/* Label */}
    {/* <div className="inline-flex items-center gap-2 bg-teal-400/10 px-3 py-1 rounded-full mb-4">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
        Meet Our Founder
      </span>
    </div> */}
    
    <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
      Samuel Omondi Juma
    </h2>
    
    <p className="mt-2 text-sm text-teal-300/80 font-medium">
      Medical Laboratory Scientist • Humanitarian • Community Leader
    </p>
    
    <div className="mt-6 space-y-4 text-grey-200 leading-relaxed">
      <p>
        <span className="text-white font-medium">Samuel</span> founded Charity 4 A Course on a simple conviction — 
        that lasting change comes from showing up <span className="text-teal-300 font-medium">consistently</span>, 
        not just once. As a Medical Laboratory Scientist in Histopathology, 
        he brings scientific precision and deep compassion to community service.
      </p>
      
      <p className="text-white/80 text-sm italic border-l-2 border-brand-50 pl-4">
        "Behind every specimen is a patient. Behind every community need is a 
        human being. My purpose is to serve both with competence, compassion, 
        and dignity."
      </p>
      
   
    </div>
    
    <div className="mt-8 flex flex-wrap gap-4">
      <CallToActionButton 
        variant="outline" 
        text="Read His Story" 
        callback={() => navigate('/bio')}
        className="bg-teal-500 hover:bg-teal-400"
      />
  
    </div>
  </div>
</div>

      </div>
    </section>
  )
}