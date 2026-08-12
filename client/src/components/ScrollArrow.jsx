import React from 'react'
import { ArrowDown } from 'lucide-react'

export default function ScrollArrow({ target = '#about' }) {
  const handleScroll = () => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleScroll}
      aria-label="Scroll down"
      className="
        flex
        h-[60px]
        w-[60px]
        items-center
        justify-center
        rounded-full
        text-ink-50
        bg-white
        transition-transform
        duration-300
        hover:scale-110
        animate-[scroll-bounce_1.5s_ease-in-out_infinite]
      "
    >
      <ArrowDown size={28} strokeWidth={4} />
    </button>
  )
}