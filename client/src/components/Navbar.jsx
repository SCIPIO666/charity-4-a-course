import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV_ITEMS } from '../config/navItems'
import CallToActionButton from './CallToActionButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
const location = useLocation()
const isActive = (href) => location.pathname === href

const handleNavClick = (href, e) => {
  e.preventDefault()
  setOpen(false)
  navigate(href)
}

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.getElementById('mobile-nav')
      const button = document.querySelector('button[aria-label]')
      if (open && nav && !nav.contains(e.target) && !button?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-1000 bg-teal-500 backdrop-blur-md">
        <nav className="w-full flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2.5" aria-label="Home">
            <Logo layout="stacked" tone="dark" size={56} />  
  
          </a>

          {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center min-h-[100px]">
            {NAV_ITEMS.map(({ page, href }) => (
                <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(href, e)}
                className={`font-body text-spacing-12 font-semibold transition-colors duration-slow ${
                    isActive(href)
                    ? 'text-ink-50 p-4 border border-black underline underline-offset-4 decoration-2'
                    : 'text-white/90 hover:text-ink-50 '
                }`}
                >
                {page}
                </a>
            ))}
            </div>

          {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
            <CallToActionButton variant='primary' text='Support Us' callback={() => navigate('/support')}/>
            </div>
          {/* hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden relative w-8 h-8 shrink-0 text-white z-1001"
          >
            <span className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition duration-300 ${open ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition duration-300 ${open ? '-rotate-45' : 'translate-y-2'}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 transition-opacity duration-300 md:hidden z-[100] ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* black panel */}
      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-ink-50 rounded-none transition-transform duration-300 ease-in-out md:hidden z-[1000] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {NAV_ITEMS.map(({ page, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(href, e)}
              className={`font-display text-xl uppercase tracking-wide transition-colors duration-200 ${
                isActive(href) ? 'text-teal-400' : 'text-white hover:text-teal-400'
              }`}
            >
              {page}
            </a>
          ))}
          {/* CTA */}
            <CallToActionButton variant='soft' text='Support Us' callback={() => navigate('/support')}/>
        </div>
      </div>
    </>
  )
}