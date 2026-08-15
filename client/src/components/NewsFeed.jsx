import { Link } from 'react-router-dom'
import { CalendarDays, ExternalLink } from 'lucide-react'
import { NEWS_POSTS } from '../data/news'
import Card from './Card'
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function NewsCard({ post }) {
  return (
    <Card variant="cool" className="w-full">

      {post.image && (
        <div className="aspect-[16/9] overflow-hidden mb-4">
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex items-center gap-2 text-teal-100 text-xs font-bold uppercase tracking-[0.15em]">
        <CalendarDays className="h-3.5 w-3.5" />
        {formatDate(post.date)}
      </div>

      <h3 className="mt-3 font-display text-2xl font-bold">
        {post.title}
      </h3>

      {post.body && (
        <p className="mt-3 text-brand-white/80 leading-relaxed">
          {post.body}
        </p>
      )}

      {post.externalLink && (
        <a
          href={post.externalLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-teal-300 font-bold hover:text-brand-white transition-colors"
        >
          {post.externalLinkText || 'Read more'}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}

    </Card>
  )
}

export default function NewsFeed() {

  const posts = NEWS_POSTS

  const cardRefs = useRef([])
  const sectionRef = useRef(null)

  useLayoutEffect(() => {

    if (posts.length === 0) return

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      })

      cardRefs.current.forEach((el, i) => {

        if (!el) return

        const fromX = i % 2 === 0 ? -200 : 200

        tl.fromTo(
          el,
          {
            opacity: 0,
            x: fromX,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'back.out(1.4)',
          },
          i === 0 ? undefined : '<0.15'
        )

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [posts.length])


  if (posts.length === 0) {

    return (
      <div className="px-4 md:px-8">

        <Card
          variant="cool"
          className="border border-white/10 bg-white/[0.04] p-6 md:p-10 text-center"
        >

          <p className="font-display text-3xl md:text-5xl font-bold leading-tight">
            No news yet
          </p>

          <p className="mt-3 text-brand-white text-xl">
            Check back soon, or visit{' '}

            <Link
              to="/gallery"
              className="underline text-teal-500 font-bold hover:text-brand-white transition-colors"
            >
              our gallery
            </Link>

            {' '}for past events.
          </p>

        </Card>

      </div>
    )
  }


  return (
    <div
      ref={sectionRef}
      className="px-4 md:px-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >

      {posts.map((post, index) => (

        <div
          ref={(el) => (cardRefs.current[index] = el)}
          key={`${post.title}-${post.date}`}
        >
          <NewsCard post={post} />
        </div>

      ))}

    </div>
  )
}