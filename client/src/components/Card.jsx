import React, { forwardRef } from 'react'

const VARIANT_CLASSES = {
  primary: 'bg-ink-50 text-white border-2 border-ink-50',
  'on-teal': 'bg-white text-teal-500 border-2 border-white',
  outline: 'bg-white text-ink-50 border-2 border-ink-50',
  soft: 'bg-teal-500 text-white border-2 border-teal-500 rounded-btn hover:bg-ink-50 text-brand-white',
  cool: 'group  items-center gap-4 border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-teal-400/50 hover:bg-teal-500/10'
}

const Card = forwardRef(function Card({ variant = 'primary', children, className = '' }, ref) {
  const variantClasses = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary

  return (
    <div
      ref={ref}
      className={`
        ${variantClasses}
        p-5
        font-display
        shadow-xl
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  )
})

export default Card