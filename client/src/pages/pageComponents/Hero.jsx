import React from 'react'
import { pattern3 } from '../../data/SvgPatterns' 
import CallToActionButton from '../../components/CallToActionButton'
function Hero({imageUrl,heading='HEADING',tagline=''}) {
  return (
    <div className='min-h-screen bg-[#04211E] relative overflow-hidden'>

        <div 
            className="absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{ __html: pattern3 }}
        />        
        <div className="relative z-10 max-w-[85%] m-auto">
            <h2 className='hero-gradient-text align-text-left'>{heading}</h2>
            <div className='m-auto w-[50%] flex align-middle justify-between gap-8 flex-col'>
                <p className='font-bold'>{tagline}</p>
                <CallToActionButton variant='soft' />
            </div>

        </div>

        </div>
  )
}

export default Hero