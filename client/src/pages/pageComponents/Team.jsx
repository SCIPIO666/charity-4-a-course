import React, { useLayoutEffect, useRef } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TEAM = [
  { name: 'Samuel Omondi Juma', role: 'Founder', photo: '/team/juma.jpeg'},
  { name: 'Eunice Kanana', role: 'Programs Coordinator', photo: '/team/kanana.jpeg' },
  { name: 'John Ochuka', role: 'Project Manager', photo: '/team/john.jpeg' },
  { name: 'Fairman Omondi', role: 'Community Outreach Coordinator', photo: '/team/fairman.jpeg' },
  { name: 'Esphoney Ondicho', role: 'Volunteer Coordinator', photo: '/team/esphoney.JPG' },
]

export default function Team() {
  const sectionRef = useRef(null)
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.team-heading',
        { y: 30, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: { 
            trigger: '.team-heading', 
            start: 'top 85%' 
          },
        }
      )

      gsap.fromTo('.team-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'back.out(1.5)',
          scrollTrigger: { 
            trigger: '.team-grid', 
            start: 'top 85%' 
          },
        }
      )
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="bg-ink-50 px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="team-heading"> 
          <span className="font-display text-xs font-bold tracking-widest uppercase text-teal-300">
            Meet the members in our leadership.
          </span>
          <Header text="Our Team"/>
        </div>

        <div className="team-grid mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"> 
          {TEAM.map((person) => (
            <Card 
              key={person.name} 
              variant="cool" 
              className="team-card p-4 flex flex-col items-center text-center gap-3" 
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-34 h-34 rounded-full object-cover object-top border-2 border-brand-white"
              />
              <div>
                <p className="font-display font-bold text-teal-500 text-sm leading-tight">{person.name}</p>
                <p className="text-brand-white text-xs mt-1">{person.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}