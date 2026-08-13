import React from 'react'

export default function Header({text=''}) {
  return (
        <h2 className="founder-heading font-display text-center relative z-20 font-bold tracking-wide uppercase p-4">
              {text}
        </h2>
  )
}
