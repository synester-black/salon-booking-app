import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="salon.jpg"
          
          className="absolute inset-0 h-full rounded-3xl w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find and Book your favourite <span className='text-blue-500'>Salon </span>Appointment Now</h2>

        <p className="mt-4 text-gray-600">
        From a world class selection of salons you can select your barber and hair stylist and make a preappointment right away. Saving a lot of time in the process.


        </p>

        < Button className='mt-10'> Explore Now</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero