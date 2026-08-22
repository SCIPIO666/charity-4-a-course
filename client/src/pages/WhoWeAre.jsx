import React from 'react'
import Hero from './pageComponents/Hero'
import MissionVisionBanner from './pageComponents/MissionVisionBanner'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
import History from './pageComponents/History'
import Team from './pageComponents/Team'
export default function WhoWeAre() {
  return (
    <div>
      <Seo {...seoConfig.about} />
      <Hero
        variant='outline'
        heading='About Us'
        pattern='pattern2'
        image='/heroBg/mission.webp'
        imageAlt = 'about us banner image'
        carousel={false}
        scrollArrow={true}  
        target='#about'          
      />
      
      <section id='about' className='bg-[#04211E]'>
        <MissionVisionBanner 
          heading='MISSION' 
          info='To improve the quality of life through compassion and commitment to uplifting communities  in Kenya'
          imageSource='/heroBg/vision.webp'
        />
        
        <MissionVisionBanner 
          heading='VISION' 
          info='A Kenya where every community thrives with dignity, opportunity, and sustainable development, creating lasting positive change for generations to come.'
          imageSource='/heroBg/homeHer03.webp'
           layout = 'right'
        />

        <History/>
        <Team/>
      </section>      
    </div>
  )
}