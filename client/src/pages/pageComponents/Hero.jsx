import React from 'react'
import { pattern1 } from './SvgPatterns'
function Hero({imageUrl,heading='HEADING'}) {
  return (
    <div className='min-h-screen bg-[#04211E] relative overflow-hidden'>

        <h1>HERO</h1>
        <div 
            className="absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{ __html: pattern1 }}
        />        
        <div className="relative z-10">
            <h1>HERO</h1>
            <h2>{heading}</h2>
        </div>

        </div>
  )
}

export default Hero