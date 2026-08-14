import React from 'react'
import Hero from './pageComponents/Hero'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin } from 'lucide-react'
export default function Gallery() {

  const events = [

    {
      slug: '4-12-2021',
      cover: '/loop2.jpg',
      title: 'Youth Empowerment',
      tag: 'Education',
      date: '28 June 2026',
      location: 'Kiambu, Kenya',
    },
    {
      src: '/about2.jpg',
      title: 'Skills Training',
      tag: 'Vocational',
      date: '15 June 2026',
      location: 'Nairobi, Kenya',
    },

    {
      src: '/about4.jpg',
      title: 'Community Outreach',
      tag: 'Outreach',
      date: '7th January 2022',
      location: 'Kiambu, Kenya',
    },
    {
      src: '/loop1.jpg',
      title: 'Community Outreach',
      tag: 'Outreach',
      date: '4th Dec 2021',
      location: 'Nairobi, Kenya',
    },
    
  ]

  return (
    <div className="bg-teal-950">

      <Hero
        variant="outline"
        heading="Gallery"
        pattern="pattern3"
        carousel={false}
        scrollArrow={true}
        target="#gallery"
      />

      <section
        id="gallery"
        className="min-h-screen bg-teal-950 px-6 py-20 md:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {events.map(({ slug, src, title, tag, date, location }) => (

            <Card
              key={`${title}-${src}`}
              variant="soft"
              className="group overflow-hidden p-0"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={src}
                  alt={title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/*  hover overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-all
                    duration-300
                    group-hover:bg-black/20
                  "
                />

              </div>



              <div className="bg-teal-500 p-5">


                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-ink-50
                ">
                  {tag}
                </span>



                <h3 className="
                  mt-2
                  font-display
                  text-xl
                  font-bold
                  leading-tight
                  text-ink-50
                ">
                  {title}
                </h3>


       
                <div className="mt-4 space-y-2">

                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-ink-50/80
                  ">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    <span>{date}</span>
                  </div>


                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-ink-50/80
                  ">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{location}</span>
                  </div>

                </div>


     
                <div className="mt-5">

                <Link
                  to={`/gallery/${slug}`}
                  className="
                    inline-block
                    bg-ink-50
                    px-5
                    py-2.5
                    font-display
                    font-bold
                    text-white
                    transition-transform
                    duration-300
                    hover:translate-x-1
                  "
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