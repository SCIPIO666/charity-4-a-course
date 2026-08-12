import React, { useLayoutEffect, useRef } from 'react'
import Card from '../../components/Card'
import PartnerCarousel from '../../components/Partnercarousel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPageImpact() {
  const sectionRef = useRef(null)

  const IMPACT_STATS = [
    {
      number: 500,
      suffix: '+',
      text: 'The number of impacted children and families',
    },
    {
      number: 20,
      suffix: '+',
      text: 'Communities reached',
    },
    {
      number: 15,
      suffix: '+',
      text: 'Outreach programmes',
    },
    {
      number: 100,
      suffix: '+',
      text: 'Volunteers involved',
    },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo('.impact-heading', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.impact-heading',
            start: 'top 85%',
          }
        }
      )

      // Card entrance animation
      gsap.fromTo('.impact-card', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.impact-card',
            start: 'top 85%',
          }
        }
      )

      // Number counter animation
      const numbers = gsap.utils.toArray('.impact-number')

      numbers.forEach((number) => {
        const target = Number(number.dataset.target)
        const counter = { value: 0 }

        gsap.to(counter, {
          value: target,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: number,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            number.textContent = Math.round(counter.value)
          },
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='min-h-screen min-w-screen bg-[#04211E]'>
      {/* Heading */}
      <h2 className="impact-heading font-display p-4 mb-4 text-center relative z-20 font-bold tracking-wide uppercase">
        Our Impact
      </h2>
      
      <div className='grid justify-between gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {IMPACT_STATS.map((stat) => (
          <Card
            key={stat.text}
            variant="soft"
            className="impact-card px-4 mx-4 group"
          >
            <h3 className="text-5xl text-center font-bold text-ink-50 transition-colors duration-300 group-hover:text-brand-white">
              <span 
                className="impact-number"
                data-target={stat.number}
              >
                0
              </span>
              <span>{stat.suffix}</span>
            </h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">{stat.text}</p>
          </Card>
        ))}
      </div>
      
      {/* partner / organisation marquee — placeholder */}
      <PartnerCarousel />
    </section>
  )
}