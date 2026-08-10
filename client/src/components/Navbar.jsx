import { useState, useEffect } from 'react'
import Logo from './Logo'
import { NAV_ITEMS } from '../config/navItems'


export default function NavbarImmanuelAG() {
  const [open, setOpen] = useState(false)
  const [activePage, setActivePage] = useState('')

  useEffect(() => {
    const currentPath = window.location.pathname
    const active = NAV_ITEMS.find(item => item.href === currentPath)
    if (active) setActivePage(active.page)
  }, [])

  const handleNavClick = (href, e) => {
    e.preventDefault()
    setOpen(false)
    window.location.href = href
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
      <header className="sticky top-0 z-20 bg-teal-500">
        <nav className="w-full flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2.5" aria-label="Home">
            <Logo />
            <span className="font-display font-bold text-base tracking-wide text-white transition-opacity duration-300 group-hover:opacity-85">
              Charity 4 A Course
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map(({ page, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(href, e)}
                className={`font-body text-sm font-semibold transition-colors duration-200 ${
                  activePage === page ? 'text-ink-50' : 'text-white/90 hover:text-white'
                } ${activePage === page ? 'underline underline-offset-4 decoration-2' : ''}`}
              >
                {page}
              </a>
            ))}
          </div>

          {/* CTA — square white block, sharp edges per theme */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#give"
              onClick={(e) => handleNavClick('/give', e)}
              className="font-body font-bold text-sm text-teal-500 bg-white hover:bg-grey-100 px-6 py-2.5 rounded-none transition-colors duration-200"
            >
              Tithe + Give
            </a>
          </div>

          {/* hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden relative w-8 h-8 shrink-0 text-white z-30"
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
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-ink-50 rounded-none transition-transform duration-300 ease-in-out md:hidden z-[101] ${
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
                activePage === page ? 'text-teal-400' : 'text-white hover:text-teal-400'
              }`}
            >
              {page}
            </a>
          ))}
          <a
            href="#give"
            onClick={(e) => handleNavClick('/give', e)}
            className="font-body font-bold text-sm text-teal-500 bg-white px-8 py-3 rounded-btn mt-4"
          >
            Tithe + Give
          </a>
        </div>
      </div>
    </>
  )
}