import React, { useState } from 'react'
import Header from '../../components/Header'
import CallToActionButton from '../../components/CallToActionButton'
import Card from '../../components/Card'
import Reveal from '../../components/Reveal'
import { fadeUp, scaleUp } from '../../utils/motion'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Users, Sparkles, ArrowRight, ShieldCheck, BookOpen, Utensils } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const PROGRAMME_PHOTOS = [
  { src: '/about1.webp', title: 'Community Outreach', tag: 'Outreach' },
  { src: '/loop1.webp', title: 'Youth Empowerment', tag: 'Education' },
  { src: '/about2.webp', title: 'Skills Training', tag: 'Vocational' },
  { src: '/loop2.webp', title: 'Community Outreach', tag: 'Outreach' },
  { src: '/about3.webp', title: 'Healthcare Access', tag: 'Wellness' },
  { src: '/loop3.webp', title: 'Food & Nutrition', tag: 'Food Security' },
  { src: '/about4.webp', title: 'Community Outreach', tag: 'Outreach' },
  { src: '/loop4.webp', title: 'Food & Nutrition', tag: 'Food Security'  }
]

const KEY_PROGRAMMES = [
  {
    icon: Utensils,
    title: 'Food Security & Outreach',
    description: 'Providing nutritious meals and essential food supplies to vulnerable families and community centers.',
    stat: '300+ Meals Served'
  },
  {
    icon: BookOpen,
    title: 'Youth Skills & Education',
    description: 'Empowering young leaders with practical vocational skills, mentorship, and educational resources.',
    stat: '100+ Students Trained'
  },
  {
    icon: ShieldCheck,
    title: 'Community Health',
    description: 'Delivering basic health screenings, sanitation supplies, and wellness workshops in remote areas.',
    stat: '5+ Clinics Organized'
  }
]

export default function Programmes() {
  const [activePhoto, setActivePhoto] = useState(null)
  const totalPhotos = PROGRAMME_PHOTOS.length
const navigate = useNavigate()
  return (
    <section className="relative min-h-screen bg-[#04211E] text-brand-white py-20 px-4 md:px-8 overflow-hidden select-none">
      
      {/* Background Decorative Accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#04211E] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#04211E] rounded-full blur-[100px]" />
      </div>

      {/* header*/}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <Reveal variant={fadeUp}>
          <Header text="Our Programmes" />
          <p className="mt-4 text-grey-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how our outreach initiatives are changing lives across communities with education, nutrition, and sustainable development.
          </p>
        </Reveal>
      </div>



    {/* programmes */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20">
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KEY_PROGRAMMES.map((prog, idx) => {
            const Icon = prog.icon
            return (
              <Reveal key={prog.title} variant={fadeUp} delay={idx * 0.1}>
                {/* <div className="
                  h-full p-6 sm:p-8 rounded-2xl
                  bg-ink-100/80 border border-teal-500/20
                  hover:border-teal-400/50 hover:bg-ink-100
                  transition-all duration-300 group/prog
                  flex flex-col justify-between shadow-xl
                ">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 group-hover/prog:bg-teal-500 group-hover/prog:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-white mb-3 group-hover/prog:text-teal-300 transition-colors">
                      {prog.title}
                    </h4>
                    <p className="text-grey-200 text-sm leading-relaxed mb-6">
                      {prog.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-teal-500/15 flex items-center justify-between">
                    <span className="text-xs font-semibold text-teal-400 tracking-wide">
                      {prog.stat}
                    </span>
                    <ArrowRight size={16} className="text-grey-400 group-hover/prog:translate-x-1 group-hover/prog:text-teal-300 transition-all" />
                  </div>
                </div> */}
                <Card
                  className="

                    hover:border-teal-400/50 hover:bg-ink-100
                    transition-all duration-300 group/prog
                    flex flex-col justify-between shadow-xl
                "
                variant='cool'
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 group-hover/prog:bg-teal-500 group-hover/prog:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-white mb-3 group-hover/prog:text-teal-300 transition-colors">
                      {prog.title}
                    </h4>
                    <p className="text-grey-200 text-sm leading-relaxed mb-6">
                      {prog.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-teal-500/15 flex items-center justify-between">
                    <span className="text-xs font-semibold text-teal-400 tracking-wide">
                      {prog.stat}
                    </span>
                    <ArrowRight size={16} className="text-grey-400 group-hover/prog:translate-x-1 group-hover/prog:text-teal-300 transition-all" />
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    {/* rotating carousel */}

      <div className="relative z-10 max-w-6xl mx-auto my-12 flex items-center justify-center min-h-[640px] md:min-h-[720px] group">
        
        {/*  orbit guide*/}
        <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] md:w-[800px] md:h-[800px] rounded-full   shadow-[0_0_60px_rgba(20,184,166,0.12)] pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] sm:w-[470px] sm:h-[470px] md:w-[790px] md:h-[790px] rounded-full   pointer-events-none animate-spin [animation-duration:90s]" />

        {/* parent 360deg , pause on hover*/}
        <div className="absolute inset-0 flex items-center justify-center animate-rotate pause-on-hover pointer-events-none">
          {PROGRAMME_PHOTOS.map((photo, idx) => {
            
            const angle = (idx * (2 * Math.PI)) / totalPhotos
            const xCos = Math.cos(angle)
            const ySin = Math.sin(angle)

            return (
              <div
                key={photo.src + idx}
                className="absolute pointer-events-auto transition-transform duration-300"
                style={{
                  // Position  R = 170px (mobile) to 270px (desktop)
                  transform: `translate(calc(${xCos} * clamp(150px, 32vw, 275px)), calc(${ySin} * clamp(150px, 32vw, 275px)))`
                }}
              >
                {/* counter rotate to  Keep photo upright while container spins*/}
                <div className="animate-counter-rotate pause-on-hover">
                  <div
                    onClick={() => setActivePhoto(photo)}
                    className="
                      group/card relative cursor-pointer
                      w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36
                      rounded-2xl overflow-hidden
                      border-2 border-teal-400/40 hover:border-teal-300
                      bg-ink-100 shadow-2xl shadow-black/60
                      transition-all duration-300 ease-out
                      hover:scale-125 hover:z-50 hover:shadow-teal-500/40
                    "
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}

                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-1 left-1 right-1 p-1 text-center">
                      <span className="block text-[10px] sm:text-xs font-bold text-white tracking-tight truncate drop-shadow-md">
                        {photo.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* cta*/}
            <CallToActionButton variant="soft" text="Get Involved Today"  callback={() => navigate('/support')} />


      </div>
      {/* photo modal*/}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-1000 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-teal-950 border border-teal-500/40 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-80 object-cover rounded-2xl mb-4"
              />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                    {activePhoto.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {activePhoto.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2 rounded-xl bg-teal-500/20 text-teal-300 hover:bg-teal-500 hover:text-white transition-colors text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
