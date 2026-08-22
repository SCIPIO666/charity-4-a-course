import React from 'react'
import Hero from './pageComponents/Hero'
import NewsFeed from '../components/NewsFeed'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
export default function News() {
  return (
    <div>
      <Seo {...seoConfig.news} />
      <Hero
        variant="outline"
        heading="News And Articles"
        pattern="pattern5"
        imageAlt = 'news and articles banner image'
        image='/heroBg/newsHero.webp'
        carousel={false}
        scrollArrow={true}
        target="#news"
      />
      <section id="news" className="min-h-screen bg-teal-950 text-brand-white py-16 px-4 md:px-8 flex flex-col gap-6">
        <NewsFeed />
      </section>
    </div>
  )
}
