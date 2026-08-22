import React, { useLayoutEffect, useRef } from 'react'
import Card from '../../components/Card'
import CallToActionButton from '../../components/CallToActionButton'
import {
  HeartHandshake,
  Repeat2,
  Handshake,
  Clock
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
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

export default function LandingPageCta({ cta = true, variant = 'full' }) {//full || compact
  const sectionRef = useRef(null)
  const navigate = useNavigate()
  const compact = variant === 'compact'
const image='/heroBg/pic.webp'


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // no-op gracefully if '.cta-heading' isn't rendered (compact variant) —
      // GSAP selector targets just match zero elements, not an error
      gsap.fromTo('.cta-heading',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-heading', start: 'top 85%' },
        }
      )
      gsap.fromTo('.cta-text-left, .cta-text-right',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-text-left', start: 'top 85%' },
        }
      )
      gsap.fromTo('.cta-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.cta-card', start: 'top 85%' },
        }
      )
      gsap.fromTo('.cta-btn',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-btn', start: 'top 90%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative z-20 bg-teal-950 text-brand-white px-6 md:px-12 ${compact ? 'py-10' : 'min-h-screen py-16'}`}
    >
        <div
            className="z-0 absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04211E] via-[#04211E]/70 to-[#04211E]/40" />
     
 
      {!compact && (
        <h2 className="cta-heading font-display text-center relative z-20 font-bold tracking-wide uppercase py-4 pb-8">
          Support Us
        </h2>
      )}

      <div className={compact ? 'max-w-5xl mx-auto z-20' : 'max-w-6xl mx-auto z-20'}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-start z-20 ${compact ? 'gap-6 mb-10 py-2' : 'gap-8 md:gap-16 mb-16 py-8'}`}
        >
          <div className="cta-text-left z-20">
            <h2 className={`font-display font-bold text-brand-white leading-tight ${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
              How could you help?
            </h2>
          </div>

          <div className="cta-text-right z-20">
            <p className={`text-grey-200 leading-relaxed ${compact ? 'text-base' : 'text-lg'}`}>
              At <span className="text-teal-300 font-semibold">Charity 4 A Course</span>, we believe
              the collective power of compassion and generosity can create meaningful change.
              Your support is crucial in enabling us to continue our mission of making a
              positive impact on communities in need.
            </p>
          </div>
        </div>

        <div className={`z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${compact ? 'gap-4' : 'gap-8'}`}>
          {HELP_OPTIONS.map((option) => {
            const Icon = option.icon
            return (
              <Card
                key={option.title}
                variant="outline"
                className={`z-20 cta-card group flex flex-col gap-3 hover:bg-teal-500 ${compact ? 'px-5 py-6' : 'px-6 py-8'}`}
              >
                <div
                  className={`flex items-center justify-center rounded-xl bg-teal-950 text-teal-300 transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white ${compact ? 'h-11 w-11' : 'h-14 w-14'}`}
                >
                  <Icon
                    size={compact ? 22 : 28}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className={`font-display font-bold text-ink-50 transition-colors duration-300 ${compact ? 'text-lg' : 'text-xl'}`}>
                  {option.title}
                </h3>

                <p className={`text-ink-50 transition-colors duration-300 ${compact ? 'text-sm' : ''}`}>
                  {option.text}
                </p>
              </Card>
            )
          })}
        </div>

        {cta && (
          <div className="z-30 cta-btn flex justify-center mt-16">
            <CallToActionButton variant="soft" text="Support Us Today" callback={() => navigate('/support')} />
          </div>
        )}
      </div>
    </section>
  )
}