import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import Logo from './Logo'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Who We Are' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/charity4acourse/',
    icon: FaFacebookF,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/254710564083',
    icon: FaWhatsapp,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#04211E] rounded-none">
      {/* main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* brand */}
        <div>
          <Logo tone="light" size={44} />
          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
            A non-governmental, non-profit organisation improving quality of
            life through responsive, timely outreach among less fortunate
            communities across Kenya.
          </p>
        </div>

        {/* links */}
        <div>
          <h4 className="font-display text-xs font-bold tracking-widest uppercase text-teal-300 mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/75 hover:text-teal-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <h4 className="font-display text-xs font-bold tracking-widest uppercase text-teal-300 mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            {/* email */}
            <li>
              <a
                href="mailto:charityallkenya@gmail.com"
                className="group flex items-center gap-3 text-white/75 transition-colors hover:text-teal-300"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-teal-400 transition-transform duration-300 group-hover:scale-110"
                />
                <span>charityallkenya@gmail.com</span>
              </a>
            </li>

            {/* main phone */}
            <li>
              <a
                href="tel:+254710564083"
                className="group flex items-center gap-3 text-white/75 transition-colors hover:text-teal-300"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-teal-400 transition-transform duration-300 group-hover:scale-110"
                />
                <span>0710 564 083 — Main</span>
              </a>
            </li>

            {/* Office phone */}
            <li>
              <a
                href="tel:+254727785223"
                className="group flex items-center gap-3 text-white/75 transition-colors hover:text-teal-300"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-teal-400 transition-transform duration-300 group-hover:scale-110"
                />
                <span>0727 785 223 — Office</span>
              </a>
            </li>

            {/* location */}
            <li className="flex items-center gap-3 text-white/75">
              <MapPin
                size={17}
                strokeWidth={1.8}
                className="shrink-0 text-teal-400"
              />
              <span>Regal Plaza, Nairobi</span>
            </li>
          </ul>

          {/* social links */}
          <div className="flex gap-3 mt-7">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-teal-400 hover:bg-teal-500 hover:text-white hover:-translate-y-1"
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body uppercase tracking-wide text-white/60">
          <span>© {new Date().getFullYear()} Charity 4 A Course</span>
          <span>Nairobi, Kenya</span>
          <span>
            developed by{' '}
            <a
              href="https://scipioportfolio-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 hover:underline"
            >
              Dev Scipio
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}