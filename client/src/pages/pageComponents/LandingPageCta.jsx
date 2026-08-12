import React, { useLayoutEffect, useRef } from 'react'
import Card from '../../components/Card'
import CallToActionButton from '../../components/CallToActionButton'
import {
  HeartHandshake,
  Repeat2,
  Handshake,
  Clock
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HELP_OPTIONS = [
  {
    icon: HeartHandshake,
    title: 'Support Us Financially',
    text: 'Your contribution is a lifeline for our feeding programmes and community outreach.',
  },
  {
    icon: Repeat2,
    title: 'Become a Monthly Supporter',
    text: 'Give consistently every month so we can plan our outreach with confidence.',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    text: 'We welcome partnerships with organisations that share our commitment to community impact.',
  },
  {
    icon: Clock,
    title: 'Volunteer Your Time',
    text: "If you're passionate about creating positive change, we'd love your hands-on support.",
  },
]

export default function LandingPageCta() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-heading', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-heading',
            start: 'top 85%',
          }
        }
      )
      gsap.fromTo('.cta-text-left, .cta-text-right', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-text-left',
            start: 'top 85%',
          }
        }
      )
      gsap.fromTo('.cta-card', 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.cta-card',
            start: 'top 85%',
          }
        }
      )
      gsap.fromTo('.cta-btn', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-btn',
            start: 'top 90%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='min-h-screen bg-ink-50 text-brand-white px-6 md:px-12 py-16'>
      <h2 className="cta-heading font-display text-center relative z-20 font-bold tracking-wide uppercase py-4 pb-8">
        Support Us
      </h2>

      {/* ctn */}
      <div className='max-w-6xl mx-auto'>

        {/* header  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 py-8'>
          {/* left-desktop */}
          <div className="cta-text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-white leading-tight ">
              How could you help?
            </h2>
          </div>

          {/* right-desktop */}
          <div className="cta-text-right">
            <p className="text-grey-200 text-lg leading-relaxed">
              At <span className="text-teal-300 font-semibold">Charity 4 A Course</span>, we believe
              the collective power of compassion and generosity can create meaningful change.
              Your support is crucial in enabling us to continue our mission of making a
              positive impact on communities in need.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {HELP_OPTIONS.map((option) => {
            const Icon = option.icon

            return (
                <Card
                key={option.title}
                variant="outline"
                className="cta-card px-6 py-8 group flex flex-col gap-4 hover:bg-teal-500"
                >
                <div className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-teal-950
                    text-teal-300
                    transition-all
                    duration-300
                    group-hover:bg-teal-500
                    group-hover:text-white
                ">
                    <Icon
                    size={28}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <h3 className="
                    font-display
                    text-xl
                    font-bold
                    text-ink-50
                    transition-colors
                    duration-300
                ">
                    {option.title}
                </h3>

                <p className="
                    text-ink-50
                    transition-colors
                    duration-300

                ">
                    {option.text}
                </p>
                </Card>
            )
            })}
        </div>

        {/* CTA */}
        <div className='cta-btn flex justify-center mt-16'>
          <CallToActionButton variant="soft" text="Support Us Today" />
        </div>

      </div>
    </section>
  )
}