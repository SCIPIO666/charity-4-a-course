import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-ink-50 rounded-none">
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
      </footer>
    </div>
  )
}