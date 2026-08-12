import React from 'react'
import Hero from './pageComponents/Hero'
import LandingAboutUs from './pageComponents/LandingAboutUs'
import LandingPageFounder from './pageComponents/LandingPageFounder'
import LandingPageImpact from './pageComponents/LandingPageImpact'
import LandingPageCta from './pageComponents/LandingPageCta'
export default function Home() {
  return (
    <>
<Hero
  variant='outline'
  pattern='pattern4'
  text='Support Us'
  scrollArrow={false} 
  heading='Improving Lives, One Community at a Time'
  carousel={true}
  tagline='Responsive, timely outreach to the less fortunate communities'
/>
<LandingAboutUs/>
<LandingPageFounder/>
<LandingPageImpact/>
<LandingPageCta/>
</>
  )
}
