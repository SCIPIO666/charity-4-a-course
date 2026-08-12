import React from 'react'

const VARIANT_STYLES = {
  primary: {
    background: 'var(--color-ink-50)',
    color: 'var(--color-brand-white)',
    border: '2px solid var(--color-ink-50)',
    borderRadius: 'var(--radius-none)',
  },

  'on-teal': {
    background: 'var(--color-brand-white)',
    color: 'var(--color-teal-500)',
    border: '2px solid var(--color-brand-white)',
    borderRadius: 'var(--radius-none)',
  },

  outline: {
    background: 'var(--color-brand-white)',
    color: 'var(--color-ink-50)',
    border: '2px solid var(--color-ink-50)',
    borderRadius: 'var(--radius-none)',
  },

  soft: {
    background: 'var(--color-teal-500)',
    color: 'var(--color-brand-white)',
    border: '2px solid var(--color-teal-500)',
    borderRadius: 'var(--radius-btn)',

  },
}

export default function Card({
  variant = 'primary',
  children,
  className = '',
}) {
  const styles =
    VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary

  return (
    <div
      style={{
        ...styles,
        fontFamily: 'var(--font-display)',
        transition: 'all 0.3s ease, transform 0.15s ease',
      }}
      className={`
        p-5
        ${className}
      `}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.opacity = '0.9'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.opacity = '1'
      }}
    >
      {children}
    </div>
  )
}