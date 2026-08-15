import React from 'react'
import Hero from './pageComponents/Hero'
import NewsFeed from '../components/NewsFeed'

export default function News() {
  return (
    <div>
      <Hero
        variant="outline"
        heading="News And Articles"
        pattern="pattern5"
        carousel={false}
        scrollArrow={true}
        target="#news"
      />
      <section id="news" className="min-h-screen bg-teal-950 text-brand-white py-16">
        <NewsFeed />
      </section>
    </div>
  )
}