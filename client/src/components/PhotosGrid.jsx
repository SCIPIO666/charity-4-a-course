import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function PhotosGrid({ photos = [] }) {
  const sectionRef = useRef(null)
  const imageRefs = useRef([])

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    })

    tl.fromTo(
      imageRefs.current,
      { opacity: 0, scale: 0.35 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.4)',
      }
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [photos])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {photos.map((src, index) => (
        <div key={src} className="group relative aspect-[4/3] overflow-hidden">
          <img
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ))}
    </section>
  )
}