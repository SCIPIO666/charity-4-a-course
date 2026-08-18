import { Helmet } from 'react-helmet-async'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://charity4acourse.vercel.app'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Charity 4 A Course',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Charity 4 A Course is a non-profit and non-governmental charity organisation working to improve quality of life through responsive, timely outreach programmes among less fortunate communities in Kenya.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    sameAs: [
      'https://www.facebook.com/charity4acourse',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}