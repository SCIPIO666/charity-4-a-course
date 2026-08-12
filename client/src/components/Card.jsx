import React from 'react'

const VARIANT_CLASSES = {
  primary: 'bg-ink-50 text-white border-2 border-ink-50',
  'on-teal': 'bg-white text-teal-500 border-2 border-white',
  outline: 'bg-white text-ink-50 border-2 border-ink-50',
  soft: 'bg-teal-500 text-white border-2 border-teal-500 rounded-btn hover:bg-ink-50 text-brand-white',
}

export default function Card({
  variant = 'primary',
  children,
  className = '',
}) {
  const variantClasses =
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary

  return (
    <div
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
}