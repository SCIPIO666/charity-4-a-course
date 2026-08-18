import React from 'react'
import Seo from './pageComponents/Seo'
import { seoConfig } from '../router'
export default function NotFoundPage() {
  return (
    <>
      <Seo {...seoConfig.notFound} />
      <h1 className='min-w-screen min-h-screen bg-teal-950 font-132 tex-center flex align-center justify-center m-auto'>Page Not Found</h1>
    </>
    
  )
}
