import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Charity 4 A Course'
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://charity4acourse.co.ke'
const DEFAULT_IMAGE = `${SITE_URL}/og-cover.jpg` 

// top of every page   
export default function Seo({
  title,
  description = "A non-governmental, non-profit organisation improving quality of life through responsive, timely outreach among less fortunate communities in Kenya.",
  path = '/',
  image = DEFAULT_IMAGE,
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Nairobi, Kenya`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_KE" />

      {/* twitter / X  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}