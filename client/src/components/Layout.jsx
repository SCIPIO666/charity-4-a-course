import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import OrganizationSchema from '../pages/pageComponents/Programmes'
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <OrganizationSchema/>
      </main>
      <Footer/>
    </div>
  )
}