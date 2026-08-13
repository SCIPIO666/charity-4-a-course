import about1 from '../../../public/about1.jpg'
import about2 from '../../../public/about2.jpg'
import about3 from '../../../public/about3.jpg'
import about4 from '../../../public/about4.jpg'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LandingAboutUs() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-heading', 
        { y: 50, opacity: 0 },
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
      gsap.fromTo('.about-img-left, .about-img-right', 
        { x: (i) => i === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-img-left',
            start: 'top 85%',
          }
        }
      )
      gsap.fromTo('.about-img-float', 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-img-float',
            start: 'top 85%',
          }
        }
      )
      gsap.fromTo('.about-text-circle', 
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-teal-900 py-24">

      {/* Heading */}
      <h2
        className="
          absolute
          left-1/2
          top-28
          md:top-56
          lg:top-60
          xl:top-[20%]
          2xl:top-[25%]
          about-heading
          z-30
          -translate-x-1/2
          whitespace-nowrap
          font-display
          text-3xl
          font-bold
          text-white
          sm:text-5xl
          md:text-6xl
        "
      >
        About Us
      </h2>


      {/* ctn*/}
      <div className="relative min-h-screen w-full">


        {/* top left image*/}
        <div
          className="
            absolute
            left-[2%]
            top-[20%]
            md:left-[1%]
            md:top-[-5%]
            about-img-left
            z-20

            w-[34vw]
            max-w-[480px]
            min-w-[180px]

            aspect-[4/3]
            overflow-hidden
            rounded-2xl
            border-4
            border-white
            shadow-2xl

            sm:left-[4%]
            sm:top-[8%]

            md:w-[32vw]
          "
        >
          <img
            src={about1}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* bottom right image*/}
        <div
          className="
            absolute
            bottom-[25%]
            right-[2%]
            md:bottom-[-12%]
            md:right-[10%]
            xl:bottom-[-1%]
            xl:right-[2%]
            2xl:bottom-[5%]
            2xl:right-[15%]
            about-img-right
            z-20

            w-[34vw]
            max-w-[480px]
            min-w-[180px]

            aspect-[4/3]
            overflow-hidden
            rounded-2xl
            border-4
            border-white
            shadow-2xl

            sm:right-[4%]
            sm:bottom-[8%]

            md:w-[32vw]
          "
        >
          <img
            src={about4}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/*  small floating image1 bottom left*/}
        <div
          className="
            absolute
            left-[7%]
            top-[75%]
            about-img-float
            z-20

            h-[clamp(100px,9vw,130px)]
            w-[clamp(100px,9vw,130px)]
            md:h-[clamp(200px,9vw,130px)]
            md:w-[clamp(200px,9vw,130px)]
            overflow-hidden
            rounded-full
            border-4
            border-white
            shadow-xl
          "
        >
          <img
            src={about2}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* small floating image2 top right*/}
        <div
          className="
            absolute
            right-[7%]
            top-[20%]
            md:right-[2%]
            md:top-[-2%]            
            about-img-float
            z-20

            h-[clamp(100px,10vw,140px)]
            w-[clamp(100px,10vw,140px)]

            md:h-[clamp(300px,10vw,140px)]
            md:w-[clamp(300px,10vw,140px)]
            overflow-hidden
            rounded-full
            border-4
            border-white
            shadow-xl
          "
        >
          <img
            src={about3}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            about-text-circle
            z-10

            flex
            aspect-square
            w-[min(90vw,600px)]
            -translate-x-1/2
            -translate-y-1/2

            items-center
            justify-center

            rounded-full
            bg-teal-500
            p-[clamp(1.5rem,5vw,4rem)]

            text-center
            text-7xl

            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
          "
        >
          <p
            className="
              max-w-[430px]
              font-body
              text-[clamp(1.1rem,1.4vw,1.05rem)]
              md:text-[clamp(1rem,1.4vw,1.05rem)]
              leading-relaxed
              text-white
            "
          >
            <span className='text-ink-50 font-body leading-relaxed'>Charity 4 A Course </span>is a non-profit and non-governmental
            charity organization aimed to work towards improving
            the quality of life through responsive and timely
            outreach charity programs among less fortunate
            communities in Kenya.
          </p>
        </div>


      </div>
    </section>
  )
}