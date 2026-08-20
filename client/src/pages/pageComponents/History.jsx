import React, { useLayoutEffect, useRef } from 'react'
import Card from '../../components/Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HISTORY = [
  {
    year: '2021',
    title: 'Where it started',
    text: "Charity 4 A Course began as a small, informal effort — a handful of volunteers coming together to share meals with families in Nairobi who needed it most.",
  },
  {
    year: '2022',
    title: 'Formal registration',
    text: "What started as informal outreach grew into a registered non-governmental, non-profit organisation, giving the work a formal structure to grow from.",
  },
  {
    year: '2023 – Present',
    title: 'Expanding outreach',
    text: "Outreach programmes expanded beyond feeding initiatives to include community events, health and wellness outreach,skills and training and volunteer-led engagement across Nairobi.",
  },
]

export default function History() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.history-heading',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.history-heading',
            start: 'top 85%',
          }
        }
      )

      const cards = gsap.utils.toArray('.history-card')
      
      cards.forEach((card, i) => {
        //  timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 30%',
            toggleActions: 'play reverse play reverse',
            scrub: 0.5, 
          }
        })

        tl.fromTo(card,
          {
            y: -150 - (i * 30), 
            opacity: 0,
            scale: 0.85,
            rotationX: -15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: 'power3.out',
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="history" className="bg-ink-50 px-6 md:px-12 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="history-heading">
          <span className="font-display text-xs font-bold tracking-widest uppercase text-teal-300">
            Our Journey
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            Our History
          </h2>
        </div>


        <div className="history-grid mt-10 max-w-3xl mx-auto space-y-6">
          {HISTORY.map((item) => (
            <Card 
              key={item.year} 
              variant="outline" 
              className="history-card p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/4">
                  <p className="font-display text-3xl font-bold text-teal-600">{item.year}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-display font-bold text-ink-50 text-xl mb-2">{item.title}</h3>
                  <p className="text-ink-50/80 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}