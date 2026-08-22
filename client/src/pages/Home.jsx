import React from 'react'
import Hero from './pageComponents/Hero'
import LandingAboutUs from './pageComponents/LandingAboutUs'
import LandingPageFounder from './pageComponents/LandingPageFounder'
import LandingPageImpact from './pageComponents/LandingPageImpact'
import LandingPageCta from './pageComponents/LandingPageCta'
import Testimonials from './pageComponents/Testimonials'
import Programmes from './pageComponents/Programmes'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
export default function Home() {
  return (
    <>
      <Seo {...seoConfig.home} />
      <Hero
        variant='outline'
        pattern='pattern4'
        text='Support Us'
        imageAlt = 'home banner image'
        image='/heroBg/homeHero.webp'
        scrollArrow={false} 
        heading='Improving Lives, One Community at a Time'
        carousel={true}
        tagline='Responsive, timely outreach to the less fortunate communities'
      />
      <LandingAboutUs/>
      <LandingPageFounder/>
      <LandingPageImpact/>
      <Testimonials/>
      <Programmes/>
      <LandingPageCta/>
    </>
  )
}
