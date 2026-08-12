import React from 'react'
import Card from '../../components/Card'
import PartnerCarousel from '../../components/Partnercarousel'
export default function LandingPageImpact() {
  return (
   <section className='min-h-screen min-w-screen bg-[#04211E]'>
      {/* Heading */}
            <h2 className="font-display p-4 mb-4 text-center relative z-20 font-bold tracking-wide uppercase ">
              Our Impact
        </h2>
    <div className='grid justify-between gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 '>
    
        <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 group '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50  transition-colors duration-300 group-hover:text-brand-white">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
        <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 group '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50  transition-colors duration-300 group-hover:text-brand-white">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
        <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 group '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50 transition-colors duration-300 group-hover:text-brand-white ">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl transition-colors duration-300 group-hover:text-brand-white">
                The number of impacted children and families
            </p>
        </Card>
        <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 group  mb-8 md:mb-0 '
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
