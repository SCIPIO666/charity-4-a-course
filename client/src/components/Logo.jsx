import React from 'react'

/**
 * @param {"side"|"stacked"} layout - tagline beside the mark, or centered below it.
 * @param {"light"|"dark"} tone  white ring / ink ring
 * @param {number} size size in px (default 44).
 */
export default function Logo({ layout = 'side', tone = 'light', size = 44 }) {
  const ring = tone === 'light' ? '#FFFFFF' : '#0A0A0A'
  const four = tone === 'light' ? '#23C4AC' : '#0F9488'
  const text = tone === 'light' ? 'text-white' : 'text-ink-50'

  const stacked = layout === 'stacked'

  return (
    <a
      href="/"
      className={`flex ${stacked ? 'flex-col items-center text-center' : 'items-center'} gap-3 shrink-0`}
      aria-label="Charity 4 A Course"
    >
      <svg width={size} height={size} viewBox="0 0 240 240" aria-hidden="true" className="shrink-0">
        {/* Outer C —  */}
        <circle
          cx="120"
          cy="120"
          r="100"
          fill="none"
          stroke={ring}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="523.60 104.72"
          transform="rotate(30 120 120)"
        />

        {/* Inner C */}
        <circle
          cx="120"
          cy="120"
          r="64"
          fill="none"
          stroke={ring}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="335.10 67.02"
          transform="rotate(210 120 120)"
        />

        {/* "4"  */}
        <path
          d="M 128 84 L 98 140 L 150 140"
          fill="none"
          stroke={four}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="128" y1="84" x2="128" y2="168" stroke={four} strokeWidth="12" strokeLinecap="round" />
      </svg>

      <span
        className={`font-display font-bold ${text} whitespace-nowrap tracking-wide uppercase text-[11px] leading-tight ${stacked ? '' : 'ml-0.5'}`}
      >
        Charity 4 A Course
      </span>
    </a>
  )
}