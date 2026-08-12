import React from 'react'
import Card from '../../components/Card'
export default function LandingPageImpact() {
  return (
   <section className='min-h-screen min-w-screen bg-[#04211E]'>
      {/* Heading */}
            <h2 className="font-display p-8 mb-4 text-center relative z-20 font-bold tracking-wide uppercase ">
              Our Impact
        </h2>
    <div className='grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 '>
    
        <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 hover:text-brand-white hover:bg-ink-50 '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50 ">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl">
                The number of impacted children and families
            </p>
        </Card>
                <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 hover:text-brand-white hover:bg-ink-50 '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50 ">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl">
                The number of impacted children and families
            </p>
        </Card>
                <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 hover:text-brand-white hover:bg-ink-50 '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50 ">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl">
                The number of impacted children and families
            </p>
        </Card>
                <Card
            variant="soft"
            className='min-w-[30%] px-4 mx-4 hover:text-brand-white hover:bg-ink-50 '
            >
             <h3 className="text-5xl text-center font-bold text-ink-50 ">500<span>+</span></h3>
            <p className="text-center text-ink-50 text-xl">
                The number of impacted children and families
            </p>
        </Card>
    </div>
 
   </section>
  )
}
