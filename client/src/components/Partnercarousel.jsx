import React from 'react'

/**
 * usage when real partners exist
 *   <PartnerCarousel partners={[
 *     { name: 'Org Name', logo: orgLogoImport },
 *     ...
 *   ]} />
 */

const PLACEHOLDER_PARTNERS = [
  { name: 'Partner Org 1', logo: null },
  { name: 'Partner Org 2', logo: null },
  { name: 'Partner Org 3', logo: null },
  { name: 'Partner Org 4', logo: null },
  { name: 'Partner Org 5', logo: null },
  { name: 'Partner Org 6', logo: null },
]

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

export default function PartnerCarousel({
  partners = PLACEHOLDER_PARTNERS,
  speedSeconds = 8,
}) {
  const track = [...partners, ...partners]

  return (
    <div className="w-full overflow-hidden mt-16">
      <p className="text-center  font-display font-bold tracking-wide uppercase text-brand-white mb-6">
        Organisations We Work Alongside
      </p>

      <div
        className="flex w-max gap-6 my-4"
        style={{
          animation: `scroll ${speedSeconds}s linear infinite`,
        }}
      >
        {track.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="
              h-34 w-48 shrink-0 rounded-xl
              bg-ink-50 border border-brand-line-dark
              flex items-center justify-center
              px-6
            "
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <div className="flex flex-col items-center gap-1 opacity-60">
                <span className="font-display font-bold text-lg text-brand-white">
                  {initials(partner.name)}
                </span>
                <span className="text-[10px] text-grey-400 tracking-wide uppercase">
                  logo pending
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}