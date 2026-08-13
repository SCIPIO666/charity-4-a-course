import React from 'react'

export default function TestimonialCard({ name, role, review, rating, image }) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 m-4 border border-white/10 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:-translate-y-1">
      
      {/* top-left quotation*/}
      <svg 
        className="absolute top-4 left-6 w-12 h-12 text-teal-400/20 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
      </svg>


      <div className="relative z-10">
        {/* stars */}
        <div className="flex gap-1 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-brand-white fill-current' : 'text-white/20 fill-current'}`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>

        {/* review  */}
        <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
          {review}
        </p>

        {/* author */}
        <div className="flex items-center gap-4">
          <img 
            src={image} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-teal-400/30"
          />
          <div>
            <h3 className="font-semibold text-white text-sm md:text-base">
              {name}
            </h3>
            <p className="text-teal-300 text-xs md:text-sm">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* bottom-right quotation*/}
      <svg 
        className="absolute bottom-4 right-6 w-12 h-12 text-teal-400/20 fill-current rotate-180"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
      </svg>

    </div>
  )
}