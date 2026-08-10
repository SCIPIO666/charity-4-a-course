import React from 'react'


export default function Logo({
  showText = true,
  className = '',
}) {
  return (
    <a
      href="/"
      className={`flex items-center gap-3 shrink-0 ${className}`}
      aria-label="Charity 4 A Course"
    >
      {/* Logo mark */}
      <img
        src=''
        alt=""
        className="w-11 h-9 object-contain"
      />

      {/* Wordmark */}
      {showText && (
        <span className="font-display text-lg font-bold text-white whitespace-nowrap">
          Charity 4 A Course
        </span>
      )}
    </a>
  )
}