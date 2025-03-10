import React from 'react'

function Blog() {
  return (
    <div>
      <div className="bg-gray-900 text-white md:px-40 px-10 py-20">
  <p className="text-4xl pb-10 text-start">BLOG</p>
  <div className="bg-gray-800 p-7 flex flex-col gap-10 pb-14">
    <div className="flex md:flex-row flex-col md:h-[15rem] md:gap-10">
      <div className="md:w-1/4">
        <img className="w-full h-full" src="https://terra-autorent.vercel.app/images/blog1.jpg" alt="blog image 1" />
      </div>
      <div className="flex flex-col items-start justify-between md:w-3/4">
        <p className="text-3xl text-start">Top 3 Destinations to Visit in Dubai in a Rental Car</p>
        <p className="text-start">One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.</p>
        <p>25 Seb 2022</p>
      </div>
    </div>
    <div className="flex md:flex-row flex-col md:h-[15rem] md:gap-10">
      <div className="md:w-1/4">
        <img className="w-full h-full" src="https://terra-autorent.vercel.app/images/blog2.jpg" alt="blog image 2" />
      </div>
      <div className="flex flex-col items-start justify-between md:w-3/4">
        <p className="text-3xl text-start">Top 5 wonderful spots for a car photo session in Dubai</p>
        <p className="text-start">There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?</p>
        <p>11 Feb 2022</p>
      </div>
    </div>
    <div className="flex md:flex-row flex-col md:h-[15rem] md:gap-10">
      <div className="md:w-1/4">
        <img className="w-full h-full" src="https://terra-autorent.vercel.app/images/blog3.jpg" alt="blog image 3" />
      </div>
      <div className="flex flex-col items-start justify-between md:w-3/4">
        <p className="text-3xl text-start">Top 5 Reasons to Rent a Car Dubai Style this Summer</p>
        <p className="text-start">Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.</p>
        <p>31 Jul 2022</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Blog