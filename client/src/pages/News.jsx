import React from 'react'
import Hero from './pageComponents/Hero'
export default function News() {
  return (
    <div>
      <Hero
        variant='outline'
        heading='News And Articles'
        pattern='pattern5'
        carousel={false}
        scrollArrow={true} 
        target = '#news'           
      />  
      <section id='news' className='min-h-screen bg-ink-50 text-brand-white'>

      </section>         
    </div>
  )
}
