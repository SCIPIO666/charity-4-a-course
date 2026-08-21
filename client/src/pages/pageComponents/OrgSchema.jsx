import { Helmet } from 'react-helmet-async'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://charity4acourse.co.ke'

export default function OrgSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Charity 4 A Course',
    alternateName: 'Charity 4 A Course Kenya',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Charity 4 A Course is a non-profit and non-governmental charity organisation working to improve quality of life through responsive, timely outreach programmes among less fortunate communities in Kenya.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Regal Plaza Ltd',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254710564083',
        contactType: 'general inquiries',
        areaServed: 'KE',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+254727785223',
        contactType: 'office',
        areaServed: 'KE',
      },
    ],
    email: 'charityallkenya@gmail.com',
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