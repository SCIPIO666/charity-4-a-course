import React from 'react'

export default function Header({text=''}) {
  return (
        <h2 className="font-display text-3xl font-bold uppercase">
              {text}
        </h2>
  )
}
