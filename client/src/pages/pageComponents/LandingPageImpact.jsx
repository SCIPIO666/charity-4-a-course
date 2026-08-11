import React from 'react'
import Card from '../../components/Card'
export default function LandingPageImpact() {
  return (
   <section className='min-h-screen min-w-screen bg-[#04211E]'>
      {/* Heading */}
            <h2 className="font-display p-8 mb-4 text-center relative z-20 font-bold tracking-wide uppercase ">
              Our Impact
        </h2>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
    
        <Card
            variant="soft"
            className='min-w-[20%] px-4 mx-4 '
            >
             <h3>Education</h3>
            <p>
                Supporting children through access to education.
            </p>
        </Card>
                <Card
            variant="soft"
            className='min-w-[20%] px-4 mx-4 '
            >
             <h3>Education</h3>
            <p>
                Supporting children through access to education.
            </p>
        </Card>
                <Card
            variant="soft"
            className='min-w-[20%] px-4 mx-4 '
            >
             <h3>Education</h3>
            <p>
                Supporting children through access to education.
            </p>
        </Card>
                <Card
            variant="soft"
            className='min-w-[20%] px-4 mx-4 '
            >
             <h3>Education</h3>
            <p>
                Supporting children through access to education.
            </p>
        </Card>
    </div>
 
   </section>
  )
}
