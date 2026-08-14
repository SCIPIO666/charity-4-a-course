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
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])