import React from 'react'

const ACTUAL_PARTNERS = [
  { name: 'UNICEF', logo: '/partners/unicef.svg' },
  { name: 'Red Cross', logo: '/partners/redcross.svg' },
  { name: 'Save the Children', logo: '/partners/savethechildren.svg' },
  { name: 'World Vision', logo: '/partners/worldvision.svg' },
  { name: 'Habitat for Humanity', logo: '/partners/habitat.svg' },
  { name: 'Oxfam International', logo: '/partners/oxfam.svg' },
  { name: 'GlobalGiving', logo: '/partners/globalgiving.svg' },
  { name: 'CARE International', logo: '/partners/care.svg' },
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
  partners = ACTUAL_PARTNERS,
  speedSeconds = 25,
}) {
  const track = [...partners, ...partners]

  return (
    <div className="w-full overflow-hidden mt-16 py-8 relative group">
      <p className="text-center font-display font-bold tracking-wider uppercase text-brand-white/90 mb-8 text-sm md:text-base">
        Organisations We Work Alongside
      </p>

      {/* Edge gradient overlays for smooth seamless appearance */}
      <div className="pointer-events-none absolute left-0 top-14 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#04211E] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-14 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#04211E] to-transparent z-10" />

      <div
        className="flex w-max gap-6 my-2 animate-scroll group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        {track.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="
              h-24 w-52 shrink-0 rounded-xl
              bg-ink-50/90 border border-brand-line-dark/30
              hover:border-teal-500/40 hover:bg-ink-100/90
              flex items-center justify-center
              px-6 py-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/10
            "
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain filter brightness-95 opacity-80 hover:opacity-100 hover:brightness-110 transition-all duration-300"
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