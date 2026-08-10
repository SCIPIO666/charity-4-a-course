import React from 'react'
import { pattern3 } from './SvgPatterns'
import CallToActionButton from '../../components/CallToActionButton'
function Hero({imageUrl,heading='HEADING'}) {
  return (
    <div className='min-h-screen bg-[#04211E] relative overflow-hidden'>

        <div 
            className="absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{ __html: pattern3 }}
        />        
        <div className="relative z-10">
            <h2 className='hero-gradient-text'>{heading}</h2>
            <CallToActionButton variant='soft' />
        </div>

        </div>
  )
}

export default Hero