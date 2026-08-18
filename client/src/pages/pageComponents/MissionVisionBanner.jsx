import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../../components/Header'

gsap.registerPlugin(ScrollTrigger)

export default function MissionVisionBanner({
  heading = '',
  info = '',
  imageSource = '',
  layout = 'left', // 'left' or 'right'
}) {
  const isImageLeft = layout === 'left'
  const sectionRef = useRef(null)
  const imageWrapRef = useRef(null)
  const textWrapRef = useRef(null)

  useLayoutEffect(() => {

    const imageFromX = isImageLeft ? -80 : 80
    const textFromX = isImageLeft ? 80 : -80

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    })

    tl.fromTo(
      imageWrapRef.current,
      { x: imageFromX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    ).fromTo(
      textWrapRef.current,
      { x: textFromX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
      '-=0.6' 
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [layout])

  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#04211E] border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div
        ref={sectionRef}
        className={`relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-16 flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-6 md:gap-12 min-h-[500px]`}
      >
        <div ref={imageWrapRef} className="w-full md:w-[60%] flex items-center">
          <div className="relative w-full h-[300px] md:h-[450px]">
            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-teal-400/20 shadow-2xl shadow-teal-500/10 hover:scale-[1.02] transition-transform duration-500">
              <img src={imageSource} alt={heading} className="w-full h-full object-cover" loading='lazy' decoding='async'/>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-400/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-400/10 rounded-full blur-xl" />

            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-teal-400/30 rounded-tl-2xl" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-teal-400/30 rounded-br-2xl" />
          </div>
        </div>

        <div
          ref={textWrapRef}
          className={`w-full md:w-[40%] flex flex-col justify-center ${isImageLeft ? 'md:pr-4' : 'md:pl-4'}`}
        >
          <div className="mb-4 md:mb-6">
            <Header text={heading} />
          </div>

          <div className="relative">
            <svg className="absolute -top-2 -left-4 w-8 h-8 text-teal-400/20 fill-current" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <p className="text-white/80 text-sm md:text-base leading-relaxed pl-6">{info}</p>
          </div>

          <div className="mt-4 md:mt-6 w-16 h-1 bg-gradient-to-r from-teal-400/50 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}