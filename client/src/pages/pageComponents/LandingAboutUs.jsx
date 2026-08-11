import about1 from '../../../public/about1.jpg'
import about2 from '../../../public/about2.jpg'
import about3 from '../../../public/about3.jpg'
import about4 from '../../../public/about4.jpg'
export default function LandingAboutUs() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-teal-900 py-24">

      {/* Heading */}
      <h2
        className="
          absolute
          left-1/2
          top-28
          md:top-56
          z-30
          -translate-x-1/2
          whitespace-nowrap
          font-display
          text-3xl
          font-bold
          text-white
          sm:text-5xl
          md:text-6xl
        "
      >
        About Us
      </h2>


      {/* ctn*/}
      <div className="relative min-h-screen w-full">


        {/* top left image*/}
        <div
          className="
            absolute
            left-[2%]
            top-[20%]
            md:left-[1%]
            md:top-[-5%]
            z-20

            w-[34vw]
            max-w-[480px]
            min-w-[180px]

            aspect-[4/3]
            overflow-hidden
            rounded-2xl
            border-4
            border-white
            shadow-2xl

            sm:left-[4%]
            sm:top-[8%]

            md:w-[32vw]
          "
        >
          <img
            src={about1}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* bottom right image*/}
        <div
          className="
            absolute
            bottom-[15%]
            right-[2%]
            md:bottom-[-12%]
            md:right-[10%]
            z-20

            w-[34vw]
            max-w-[480px]
            min-w-[180px]

            aspect-[4/3]
            overflow-hidden
            rounded-2xl
            border-4
            border-white
            shadow-2xl

            sm:right-[4%]
            sm:bottom-[8%]

            md:w-[32vw]
          "
        >
          <img
            src={about4}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/*  small floating image1 bottom left*/}
        <div
          className="
            absolute
            left-[7%]
            top-[75%]
            z-20

            h-[clamp(100px,9vw,130px)]
            w-[clamp(100px,9vw,130px)]
            md:h-[clamp(200px,9vw,130px)]
            md:w-[clamp(200px,9vw,130px)]
            overflow-hidden
            rounded-full
            border-4
            border-white
            shadow-xl
          "
        >
          <img
            src={about2}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* small floating image2 top right*/}
        <div
          className="
            absolute
            right-[7%]
            top-[20%]
            md:right-[2%]
            md:top-[-2%]            
            z-20

            h-[clamp(100px,10vw,140px)]
            w-[clamp(100px,10vw,140px)]

            md:h-[clamp(300px,10vw,140px)]
            md:w-[clamp(300px,10vw,140px)]
            overflow-hidden
            rounded-full
            border-4
            border-white
            shadow-xl
          "
        >
          <img
            src={about3}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-10

            flex
            aspect-square
            w-[min(90vw,600px)]
            -translate-x-1/2
            -translate-y-1/2

            items-center
            justify-center

            rounded-full
            bg-teal-500
            p-[clamp(1.5rem,5vw,4rem)]

            text-center
            text-7xl

            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
          "
        >
          <p
            className="
              max-w-[430px]
              font-body
              text-[clamp(0.75rem,1.4vw,1.05rem)]
              leading-relaxed
              text-white
            "
          >
            Charity 4 A Course is a non-profit and non-governmental
            charity organization aimed to work towards improving
            the quality of life through responsive and timely
            outreach charity programs among less fortunate
            communities in Kenya.
          </p>
        </div>


      </div>
    </section>
  )
}