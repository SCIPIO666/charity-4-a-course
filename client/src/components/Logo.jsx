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
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Two C-brackets — deeper curve (control point pulled to the
            viewBox edge) + thicker stroke so they read as bold rounded
            parentheses rather than thin arcs. */}
        <path d="M 116 26 Q 2 120 116 214" fill="none" stroke={ring} strokeWidth="26" strokeLinecap="round" />
        <path d="M 124 26 Q 238 120 124 214" fill="none" stroke={ring} strokeWidth="26" strokeLinecap="round" />

        {/* "4" numeral — corners rounded via strokeLinejoin so the
            diagonal-to-crossbar join isn't a sharp miter. */}
        <path d="M 128 66 L 90 146 L 154 146" fill="none" stroke={four} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="128" y1="66" x2="128" y2="182" stroke={four} strokeWidth="16" strokeLinecap="round" />
      </svg>

      <span
        className={`font-display font-semibold ${text} whitespace-nowrap tracking-wide uppercase text-[11px] leading-tight ${stacked ? '' : 'ml-0.5'}`}
      >
        Charity 4 A Course
       
      </span>
    </a>
  )
}