import React from 'react'

// variant: 'primary' | 'on-teal' | 'outline' | 'soft'
const VARIANT_STYLES = {
  // Primary 
  primary: {
    background: 'var(--color-ink-50)',
    color: 'var(--color-brand-white)',
    border: '2px solid var(--color-ink-50)',
    borderRadius: 'var(--radius-none)',
  },
  // On-teal 
  'on-teal': {
    background: 'var(--color-brand-white)',
    color: 'var(--color-teal-500)',
    border: '2px solid var(--color-brand-white)',
    borderRadius: 'var(--radius-none)',
  },
  // Outline
  outline: {
    background: 'var(--color-brand-white)',
    color: 'var(--color-ink-50)',
    border: '2px solid var(--color-ink-50)',
    borderRadius: 'var(--radius-none)',
  },
  // Soft 
  soft: {
    background: 'var(--color-teal-500)',
    color: 'var(--color-brand-white)',
    border: '2px solid var(--color-teal-500)',
    borderRadius: 'var(--radius-btn)',
  },
}

export default function CallToActionButton({
  variant = 'primary',
  callback = () => {},
  text = 'Action',
}) {
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary

  return (
    <button
      onClick={callback}
      style={{
        ...styles,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.95rem',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease, transform 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.85'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1'
      }}
    >
      {text}
    </button>
  )
}