import { useState, useEffect } from 'react'
import Logo from './Logo'
import { NAV_ITEMS } from '../config/navItems'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activePage, setActivePage] = useState('')

  // active page based on current path
  useEffect(() => {
    const currentPath = window.location.pathname
    const active = NAV_ITEMS.find(item => item.href === currentPath)
    if (active) {
      setActivePage(active.page)
    }
  }, [])

  const handleNavClick = (href, e) => {
    e.preventDefault()
    setOpen(false)

    window.location.href = href
  }


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // outside handler
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

  // scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
        <nav className="w-full flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <a 
            href="/" 
            className="group flex items-center gap-2" 
            aria-label="Home"
          >
            <Logo />
            <span className="font-mono text-sm tracking-widest text-[#16324A]">
              Charity 4 A Course
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map(({ page, href }, index) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(href, e)}
                className={`relative font-mono text-sm transition-colors duration-300 ${
                  activePage === page 
                    ? 'text-[#A9501C]' 
                    : 'text-[#241C15] hover:text-[#16324A]'
                }`}
              >
                <span className="text-[#A9501C]/60 mr-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {page}
                {activePage === page && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#A9501C] rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden relative w-8 h-8 shrink-0 text-[#241C15] z-30"
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition duration-300 ${
                open ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition duration-300 ${
                open ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[100] ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white border-l border-[#E5E7EB] shadow-xl transition-transform duration-300 ease-in-out md:hidden z-[101] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {NAV_ITEMS.map(({ page, href }, index) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(href, e)}
              className={`text-lg transition-colors duration-300 ${
                activePage === page 
                  ? 'text-[#A9501C]' 
                  : 'text-[#241C15] hover:text-[#16324A]'
              }`}
            >
              <span className="text-[#A9501C]/60 mr-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              {page}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}