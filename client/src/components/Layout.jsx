import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

import OrgSchema from '../pages/pageComponents/OrgSchema'


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <OrgSchema/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}