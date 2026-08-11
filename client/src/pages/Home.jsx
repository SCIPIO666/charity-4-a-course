import React from 'react'
import Hero from './pageComponents/Hero'
import LandingAboutUs from './pageComponents/LandingAboutUs'
import LandingPageFounder from './pageComponents/LandingPageFounder'
export default function Home() {
  return (
    <>
<Hero
  variant='outline'
  text='Support Us'
  heading='Improving Lives, One Community at a Time'
  tagline='Responsive, timely outreach to the less fortunate communities'
/>
<LandingAboutUs/>
<LandingPageFounder/>
</>
  )
}
