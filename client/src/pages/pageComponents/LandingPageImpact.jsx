import React, { useLayoutEffect, useRef } from 'react'
import Card from '../../components/Card'
import PartnerCarousel from '../../components/Partnercarousel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPageImpact() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
   <section ref={sectionRef} className='min-h-screen min-w-screen bg-[#04211E]'>
      {/* Heading */}
            <h2 className="impact-heading font-display p-4 mb-4 text-center relative z-20 font-bold tracking-wide uppercase ">
              Our Impact
        </h2>
    <div className='grid justify-between gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 '>
    
        <Card
            variant="soft"
            className='impact-card min-w-[30%] px-4 mx-4 group '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50  transition-colors duration-300 group-hover:text-brand-white">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
        <Card
            variant="soft"
            className='impact-card min-w-[30%] px-4 mx-4 group '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50  transition-colors duration-300 group-hover:text-brand-white">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
        <Card
            variant="soft"
            className='impact-card min-w-[30%] px-4 mx-4 group '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50 transition-colors duration-300 group-hover:text-brand-white ">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
        <Card
            variant="soft"
            className='impact-card min-w-[30%] px-4 mx-4 group  mb-8 md:mb-0 '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50  transition-colors duration-300 group-hover:text-brand-white">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
    </div>
    {/* partner / organisation marquee — placeholder  */}
    <PartnerCarousel />
   </section>
  )
}
