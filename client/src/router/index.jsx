import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Events from '../pages/Events'
import Gallery from '../pages/Gallery'
import News from '../pages/News'
import WhoWeAre from '../pages/WhoWeAre'
import Layout from '../components/Layout'
import NotFoundPage from '../pages/NotFoundPage'
import GalleryEvent from '../pages/GalleryEvent'
import Support from '../pages/Support'
import Bio from '../pages/Bio'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://charity4acourse.vercel.app'

// SEO
export const seoConfig = {
  home: {
    title: 'Charity 4 A Course Kenya - Empowering Communities Across Kenya',
    description: 'A non-governmental, non-profit organisation improving quality of life through responsive, timely outreach among less fortunate communities across Kenya. Join us in making a difference.',
    path: `${SITE_URL}/`
  },
  about: {
    title: 'About Us - Our Mission & Vision | Charity 4 A Course Kenya',
    description: 'Learn about Charity 4 A Course Kenya\'s mission to empower communities through education, resources, and sustainable development initiatives across Kenya.',
    path: `${SITE_URL}/about`
  },
  events: {
    title: 'Upcoming Events - Community Outreach Programs | Charity 4 A Course Kenya',
    description: 'Discover upcoming community outreach events, fundraising drives, and volunteer opportunities with Charity 4 A Course Kenya. Get involved and make a difference.',
    path: `${SITE_URL}/events`
  },
  gallery: {
    title: 'Photo Gallery - Our Impact in Communities | Charity 4 A Course Kenya',
    description: 'View photos from our community outreach programs, events, and initiatives across Kenya. See the impact we\'re making together.',
    path: `${SITE_URL}/gallery`
  },
  galleryEvent: {
    title: 'Event Gallery - {eventSlug} | Charity 4 A Course Kenya',
    description: 'View photos and highlights from {eventSlug} - a community outreach event by Charity 4 A Course Kenya.',
    path: `${SITE_URL}/gallery/:eventSlug`
  },
  news: {
    title: 'Latest News & Updates - Community Impact Stories | Charity 4 A Course Kenya',
    description: 'Stay updated with the latest news, success stories, and community impact reports from Charity 4 A Course Kenya.',
    path: `${SITE_URL}/news`
  },
  contact: {
    title: 'Contact Us - Get Involved | Charity 4 A Course Kenya',
    description: 'Get in touch with Charity 4 A Course Kenya. Reach out for volunteering opportunities, donations, partnerships, or any inquiries.',
    path: `${SITE_URL}/contact`
  },
  support: {
    title: 'Support Our Cause - Donate & Volunteer | Charity 4 A Course Kenya',
    description: 'Support Charity 4 A Course Kenya through donations, volunteering, or partnerships. Every contribution helps transform communities across Kenya.',
    path: `${SITE_URL}/support`
  },
  bio: {
    title: 'Our Team - Meet the Change Makers | Charity 4 A Course Kenya',
    description: 'Meet the dedicated team behind Charity 4 A Course Kenya - passionate individuals committed to improving lives across Kenyan communities.',
    path: `${SITE_URL}/bio`
  },
  notFound: {
    title: 'Page Not Found - Charity 4 A Course Kenya',
    description: 'The page you\'re looking for doesn\'t exist. Return to our homepage to learn more about our community outreach programs in Kenya.',
    path: `${SITE_URL}/404`
  }
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <WhoWeAre /> },
      { path: '/events', element: <Events /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/gallery/:eventSlug', element: <GalleryEvent /> },
      { path: '/contact', element: <Contact /> },
      { path: '/news', element: <News /> },
      { path: '/support', element: <Support /> },
      { path: '/bio', element: <Bio /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])