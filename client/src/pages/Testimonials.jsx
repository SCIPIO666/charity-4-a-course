import { useLayoutEffect, useRef } from 'react'
import Header from '../components/Header'
import TestimonialCard from '../components/TestimonialCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Peter Ngumba',
      role: 'Community Volunteer',
      review: 'Its nice to be a part of people with like mindset to change our society.',
      rating: 5,
      image: '../../public/peterNgumba.png'
    },
    {
      name: 'Shirley Kabaru',
      role: 'Volunteer',
      review: 'In the words of Matshona Dhliwayo "Your mind shines brightest when you enlighten others; your heart, when you encourage others; your soul, when you elevate others; and your life, when you empower others". A meaningful life means to live one that is greater than self. Charity 4 A Course KENYA lives for this noble task for a Better KENYA is a better You, a Healthy KENYA is a Healthy You.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150'
    },
    {
      name: 'Godwill Kipkosgei',
      role: 'Project Manager',
      review: 'Working with Charity 4 A Course has been transformative. Their commitment to community outreach and sustainable development projects has inspired me to become more involved in social change initiatives across Kenya.',
      rating: 5,
      image: '../../public/GodwillKipkosgei.png'
    },
    {
      name: 'winfred mwikya',
      role: 'Volunteer',
      review: 'What stands out most about Charity 4 A Course is their holistic approach to community development. They don\'t just provide aid—they empower communities with the tools and knowledge to build sustainable futures for themselves.',
      rating: 5,
      image: '../../public/winfredMwikya.png'
    },
    {
      name: 'Rosemary Njuguna',
      role: 'Volunteer',
      review: 'The transparency and impact-driven approach of Charity 4 A Course is remarkable. Every donation and volunteer effort is channeled into meaningful change that you can actually see in the communities they serve.',
      rating: 5,
      image: '../../public/RosemaryNjuguna.png'
    }
  ]

  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.testimonial-header', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonial-header',
            start: 'top 80%',
            
          }
        }
      )

      gsap.fromTo('.testimonial-card', 
        { 
          y: 80, 
          opacity: 0,
          scale: 0.5
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.testimonial-grid',
            start: 'top 80%',
          }
        }
      )

      const cards = gsap.utils.toArray('.testimonial-card')
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: 'power2.out'
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          })
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='min-h-screen bg-[#04211E] p-4 md:p-8'>

      <div className="testimonial-header mb-12">
        <Header text='Testimonials' />
      </div>


      <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            role={testimonial.role}
            review={testimonial.review}
            rating={testimonial.rating}
            image={testimonial.image}
            className="testimonial-card"
          />
        ))}
      </div>
    </section>
  )
}