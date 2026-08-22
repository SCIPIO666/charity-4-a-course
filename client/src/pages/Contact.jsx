import React from 'react'
import Hero from './pageComponents/Hero'
import {
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
gsap.registerPlugin(ScrollTrigger)
const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'charityallkenya@gmail.com',
    href: 'mailto:charityallkenya@gmail.com',
  },
  {
    icon: Phone,
    label: 'Main',
    value: '0710 564 083',
    href: 'tel:0710564083',
  },
  {
    icon: Phone,
    label: 'Office',
    value: '0727 785 223',
    href: 'tel:0727785223',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Regal Plaza, Nairobi',
    href: null,
  },
]

const SOCIALS = [
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/charity4acourse/',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/254710564083',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const contactsRef = useRef(null)
  const formRef=useRef(null)
  const mapRef=useRef(null)

useLayoutEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 75%',
      toggleActions: 'play reverse play reverse',
    },
  })

  tl.fromTo(
    contactsRef.current,
    { opacity: 0, scale: 0.65, x: -100 },
    { opacity: 1, scale: 1, x: 0, duration: 0.6, ease: 'back.out(1.4)' }
  )
    .fromTo(
      formRef.current,
      { opacity: 0, scale: 0.65, x: 100 },
      { opacity: 1, scale: 1, x: 0, duration: 0.6, ease: 'back.out(1.4)' }
    )
    .fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.65, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.4)' }
    )

  return () => {
    tl.scrollTrigger?.kill()
    tl.kill()
  }
}, [])


  return (
    <main className="bg-ink-50 text-brand-white">
    <Seo {...seoConfig.contact} />
      <Hero
        variant="outline"
        heading="Contact Us"
        pattern="pattern6"
        imageAlt = 'contact us banner image'
        carousel={false}
        image='/heroBg/contactHero.webp'
        scrollArrow={true}
        target="#contact"
      />


      <section
        id="contact"
        ref={sectionRef}
        className="relative overflow-hidden bg-teal-950 px-6 py-24 md:px-12"
      >

        {/* background */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">


          <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">

            <div>
              <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                Get in touch
              </p>

              <h2 className="font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
                Let's make a
                <span className="block text-teal-400">
                  difference.
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Whether you would like to support our work, volunteer,
                partner with us, or simply learn more about Charity 4 A Course,
                we would love to hear from you.
              </p>
            </div>

          </div>



          <div ref={contactsRef} className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* contacts */}
            <div>

              <h3 className="mb-6 font-display text-xl font-bold uppercase tracking-wide">
                Reach us directly
              </h3>

              <div className="flex flex-col gap-4">

                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon

                  const content = (
                    <>
                      <div className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        bg-teal-500
                        text-ink-50
                      ">
                        <Icon size={21} strokeWidth={2} />
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-300">
                          {item.label}
                        </p>

                        <p className="text-sm text-white/80 md:text-base">
                          {item.value}
                        </p>
                      </div>
                    </>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                        transition-all
                        duration-300
                        hover:border-teal-400/50
                        hover:bg-teal-500/10
                      "
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="
                        flex
                        items-center
                        gap-4
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >
                      {content}
                    </div>
                  )
                })}

              </div>


              {/* links */}
              <div className="mt-10">

                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Follow / connect
                </p>

                <div className="flex gap-3">

                  {SOCIALS.map((social) => {
                    const Icon = social.icon

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          border
                          border-white/15
                          text-white/70
                          transition-all
                          duration-300
                          hover:border-teal-400
                          hover:bg-teal-500
                          hover:text-ink-50
                        "
                      >
                        <Icon size={19} />
                      </a>
                    )
                  })}

                </div>

              </div>

            </div>


            {/* form */}
            <div ref={formRef} className="border border-white/10 bg-white/[0.04] p-6 md:p-10">

              <div className="mb-8">

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                  Send a message
                </p>

                <h3 className="font-display text-3xl font-bold uppercase">
                  How can we help?
                </h3>

              </div>


              <form className="flex flex-col gap-6">

         
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-white
                      outline-none
                      placeholder:text-white/30
                      transition-colors
                      focus:border-teal-400
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-white
                      outline-none
                      placeholder:text-white/30
                      transition-colors
                      focus:border-teal-400
                    "
                  />
                </div>



                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to talk about?"
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-white
                      outline-none
                      placeholder:text-white/30
                      transition-colors
                      focus:border-teal-400
                    "
                  />
                </div>


 
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-white
                      outline-none
                      placeholder:text-white/30
                      transition-colors
                      focus:border-teal-400
                    "
                  />
                </div>



                <button
                  type="submit"
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    bg-teal-500
                    px-6
                    py-4
                    font-display
                    font-bold
                    uppercase
                    tracking-wide
                    text-ink-50
                    transition-all
                    duration-300
                    hover:bg-teal-300
                    hover:-translate-y-1
                  "
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>

            </div>

          </div>


          {/* map */}
          <div  className="mt-20 border-t border-white/10 pt-16">

            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-300">
                  Find us
                </p>

                <h3 className="font-display text-3xl font-bold uppercase">
                  Nairobi, Kenya
                </h3>
              </div>

              <p className="text-sm text-white/50">
                Regal Plaza, Nairobi
              </p>

            </div>


            <div ref={mapRef} className="h-[350px] overflow-hidden border border-white/10 ">
              <iframe
                title="Charity 4 A Course location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8574795458358!2d36.8247907739739!3d-1.257463835593219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16e2fe486739%3A0xe7216c224780faa8!2sRegal%20Plaza%20Ltd!5e0!3m2!1sen!2ske!4v1786627528283!5m2!1sen!2ske" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}