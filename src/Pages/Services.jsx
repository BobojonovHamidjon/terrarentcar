import React from 'react'

function Services() {
  return (
    <div>
      <div className="flex flex-col justify-start md:px-28 px-10 py-10 bg-gray-900">
  <p className="text-start  text-white">Luxury Cars for Rent in Dubai / Services</p>
  <div className="flex md:flex-row flex-col md:gap-10 gap-5 w-full mt-10">
    <div className="md:w-[25rem] flex flex-col gap-5 justify-start items-start">
      <img src="https://terra-autorent.vercel.app/cars/service1.jpg" alt="service 1" className="rounded" />
      <p className="md:text-3xl text-xl text-start  text-white">Ride a buggy in Dubai and have fun</p>
      <p className="text-start md:text-base text-sm text-white">Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now</p>
      <a className="text-white" href="/services/detail">LEARN MORE</a>
    </div>
    <div className="md:w-[25rem] flex flex-col gap-5 justify-start items-start">
      <img src="https://terra-autorent.vercel.app/cars/service2.jpg" alt="service 2" className="rounded" />
      <p className="md:text-3xl text-xl text-start text-white">Photoshoot with luxury car rental Dubai</p>
      <p className="text-start md:text-base text-sm text-white">Professional car photoshoot as an additional type of service at Terra Car Rental</p>
      <a className="text-white" href="/services/detail">LEARN MORE</a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Services