export default function LandingAboutUs() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-50">

      {/*  heading */}
      <h2 className="
        absolute
        left-1/2
        top-16
        -translate-x-1/2
        z-20
        font-display
        text-3xl
        sm:text-5xl
        font-bold
        text-white
        md:text-6xl
      ">
        About Us
      </h2>

      {/* Main composition */}
      <div className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        px-6
      ">

        {/* circle */}
        <div className="
          relative
          z-10
          flex
          aspect-square
          w-[280px]
          items-center
          justify-center
          rounded-full
          bg-teal-500
          p-10
          text-center
          shadow-2xl
          sm:w-[340px]
          md:w-[600px]
        ">

          <p className="
            max-w-[280px]
            font-body
            text-sm
            leading-relaxed
            text-white
            sm:text-base
          ">
            Charity 4 A Course is a non-profit and non-governmental
            charity organization aimed to work towards improving
            the quality of life through responsive and timely
            outreach charity programs among less fortunate
            communities in Kenya.
          </p>

        </div>

        {/* image 1 */}
        <div className="
          absolute
          left-[2%]
          top-[23%]
          z-0
          h-50
          md:h-150
          md:w-100
          w-50
          overflow-hidden
          rounded-2xl
          border-4
          border-white
          shadow-xl
          sm:h-32
          sm:w-32
        ">
          <img
            src="/images/about-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* image 2 */}
        <div className="
          absolute
          right-[2%]
          top-[20%]
          z-20
          h-28
          w-28
          overflow-hidden
          rounded-full
          border-4
          border-white
          shadow-xl
          sm:h-36
          sm:w-36
        ">
          <img
            src="/images/about-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* image 3 */}
        <div className="
          absolute
          bottom-[15%]
          left-[18%]
          z-20
          h-24
          w-24
          overflow-hidden
          rounded-full
          border-4
          border-white
          shadow-xl
          sm:h-32
          sm:w-32
        ">
          <img
            src="/images/about-3.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* image 4 */}
        <div className="
          absolute
          bottom-[18%]
          right-[18%]
          z-20
          h-20
          w-20
          overflow-hidden
          rounded-full
          border-4
          border-white
          shadow-xl
          sm:h-28
          sm:w-28
        ">
          <img
            src="/images/about-4.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}