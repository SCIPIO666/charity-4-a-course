import Hero from './pageComponents/Hero'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin } from 'lucide-react'
import { EVENTS } from '../data/events'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    })

    tl.fromTo(
      cardRefs.current,
      { opacity: 0, scale: 0.65 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.4)',
      },
      '=0.6' 
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <div className="bg-teal-950">
      <Seo {...seoConfig.gallery} />
      <Hero
        variant="outline"
        heading="Gallery"
        pattern="pattern3"
        image='/heroBg/gallery.webp'
        imageAlt = 'gallery banner image'
        carousel={false}
        scrollArrow={true}
        target="#gallery"
      />

      <section id="gallery" ref={sectionRef} className="min-h-screen bg-teal-950 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {EVENTS.map(({ slug, src, title, tag, date, location }, i) => (
              <Card
                key={`${title}-${src}`}
                variant="cool"
                ref={(el) => (cardRefs.current[i] = el)}
                className="group overflow-hidden p-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                      loading="lazy"
                      decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                </div>

                <div className="bg-teal-500 p-5 w-full">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-ink-50">
                    {tag}
                  </span>

                  <h3 className="mt-2 font-display text-xl font-bold leading-tight text-ink-50">
                    {title}
                  </h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-ink-50/80">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink-50/80">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{location}</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      to={`/gallery/${slug}`}
                      className="inline-block bg-ink-50 px-5 py-2.5 font-display font-bold text-white transition-transform duration-300 hover:translate-x-1"
                    >
                      Open Event
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}