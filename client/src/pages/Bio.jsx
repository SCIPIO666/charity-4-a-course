import React, { useLayoutEffect, useRef } from 'react'
import Hero from './pageComponents/Hero'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Bio() {
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
    <div className="bg-teal-950">
      <Seo {...seoConfig.bio} />
      <Hero
        variant="outline"
        heading="About The Founder"
        pattern="pattern3"
        imageAlt = 'founder image'
        image={'/heroBg/shirtHero.jpg'}
        imagePosition="bg-center lg:bg-top"
        carousel={false}
        scrollArrow={true}
        target="#gallery"
      />

      <section ref={sectionRef} id="gallery" className="bg-teal-950 min-h-screen px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-12 md:gap-16 items-start">

          {/* photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/heroBg/juma.jpeg"
              alt="Samuel Juma Omondi, Founder of Charity 4 A Course"
              className="w-full founder-img max-w-sm rounded-2xl border-4 border-teal-900 object-cover object-top aspect-[4/5] shadow-2xl"
            />
          </div>

          {/* bio */}
          <div>
            <span className="font-display text-xs font-bold tracking-widest uppercase text-teal-300">
              Meet the Founder
            </span>
            <h2 className="mt-4 founder-heading font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Samuel Omondi Juma
            </h2>

           <div className="mt-6 flex flex-col gap-5 text-grey-200 leading-relaxed founder-text">
              <p>
                Samuel Omondi Juma is a Medical Laboratory Scientist specializing in 
                Histopathology, with professional experience in diagnostic laboratory 
                services and a strong passion for humanitarian and community development.
              </p>
              
              <p>
                His journey in healthcare and humanitarian service is rooted in the same 
                conviction: every person deserves to be treated with dignity, compassion, 
                and respect, regardless of their circumstances.
              </p>
              
              <p>
                As a Medical Laboratory Scientist in Histopathology, Samuel works behind 
                the scenes of patient care, where the accuracy, quality, and timely 
                processing of tissue and cytology specimens contribute directly to 
                diagnosis and clinical decision-making. Through histopathology, he has 
                developed a deep appreciation of the human side of healthcare—recognizing 
                that behind every specimen is a patient, a family, and a story.
              </p>
              
              <p>
                This experience has shaped his broader approach to service. It has taught 
                him that meaningful impact is often created through small actions 
                performed consistently, responsibly, and with purpose.
              </p>
              
              <p>
                It was this philosophy that contributed to the establishment of Charity 
                4 A Course, a Kenyan non-governmental, non-profit organisation committed 
                to improving the quality of life of less fortunate and underserved 
                communities through responsive and timely outreach programmes.
              </p>
              
              <p>
                Through Charity 4 A Course, Samuel seeks to extend the values he practices 
                in healthcare beyond the laboratory. His work includes supporting 
                community outreach initiatives, providing shared meals, engaging with 
                vulnerable communities, and mobilising support around identified 
                community needs.
              </p>
              
              <p>
                His background in medical laboratory science has also influenced how he 
                approaches humanitarian work. He believes that effective community 
                service should not only respond to immediate needs but should also be 
                guided by evidence, understanding of community needs, accountability, 
                organization, and sustainable impact.
              </p>
              
              <p>
                In histopathology, Samuel is committed to quality and patient-centered 
                diagnostic services. As a humanitarian, he applies the same principles 
                of responsibility and compassion to community service. In both roles, 
                his focus remains the same: to contribute meaningfully to improving 
                people's lives.
              </p>
              
              <p>
                His professional journey has also given him an appreciation of the 
                challenges faced by patients and families within healthcare systems, 
                particularly those who may struggle with access to timely and quality 
                services. This has strengthened his belief that healthcare professionals 
                have an important role beyond their technical responsibilities—they can 
                also become advocates for compassion, community wellbeing, health 
                awareness, and social responsibility.
              </p>
              
              <p>
                As the founder of Charity 4 A Course, Samuel continues to remain 
                directly involved in outreach activities rather than taking a purely 
                administrative role. He believes that leadership in service requires 
                showing up, listening, understanding, and taking action.
              </p>
              
              <p>
                His two areas of work — Histopathology and humanitarian service — are 
                therefore connected by one central purpose: service to humanity.
              </p>
              
              <p>
                In the laboratory, he contributes to the diagnosis and management of 
                disease through scientific accuracy and quality. In the community, he 
                contributes through compassion, outreach, and practical support.
              </p>
              
              <p>
                Samuel's vision is to build a life and career where science, healthcare, 
                leadership, and humanitarian service come together to create meaningful 
                and lasting impact.
              </p>
              
              <p className="font-bold text-teal-300 text-lg mt-4">
                "Behind every specimen is a patient. Behind every community need is a 
                human being. My purpose is to serve both with competence, compassion, 
                and dignity."
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}