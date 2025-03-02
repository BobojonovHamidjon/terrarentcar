import React from 'react'

function Footer() {
  return (
<div className="bg-black text-white md:px-40 px-10 py-20 flex md:flex-row flex-col gap-5">
  <div className="flex flex-col items-start md:w-1/4">
    <img className="w-28" src="/images/logo.png" alt="logo" />
    <p className="text-start text-4xl my-5 font-bold">
      BIRLASHGAN ARAB AMIRLIKLARIDA HASHAMATLI AVTOMOBILLARNI IJARAGA OLISH
    </p>
    <p className="text-start w-3/4 text-gray-400">
      Oraliq shaxslarsiz to'g'ridan-to'g'ri sport va hashamatli avtomobillarni ijaraga oling.
      Dubayda Auto Zoom Car Rental bilan avtomobil ijaraga oling - xavfsizlik va haydash zavqi.
    </p>
    <p className="p-6 rounded-xl bg-transparent border mt-8 transition-all duration-500 hover:border-red-700 hover:bg-red-700 cursor-pointer">
      ENG YAXSHI TAKLIFNI OLING
    </p>
  </div>
  
  <div className="md:w-3/4 flex flex-col gap-5 items-center bg-[url('/images/cars.png')] bg-right-bottom saturate-50 bg-cover">
    <div className="bg-gradient-to-r from-black/70 via-gray-900/70 to-black">
      <div className="grid grid-cols-3 place-items-center gap-5 items-start">
        <div className="flex flex-col gap-2 items-start">
          <p className="md:text-3xl text-md mb-3">Avtomobillar</p>
          <p className="text-gray-500 text-start">BWM M5</p>
          <p className="text-gray-500 text-start">TEST1234</p>
          <p className="text-gray-500 text-start">yulduz</p>
          <p className="text-gray-500 text-start">bmw</p>
        </div>
        <div>
          <ul className="flex flex-col justify-between items-start h-[15rem]">
            <li>Blog</li>
            <li>Xizmat</li>
            <li className="text-start">
              <p>Kontakt</p>
              <div className="flex flex-col">
                <span className="text-gray-500">Elite 3 Sports City, Dubai 26W8 24J, Birlashgan Arab Amirliklari.</span>
                <span className="text-gray-500">+998 99 0000441</span>
                <span className="text-gray-500">Ish vaqti: 24/7</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="h-full flex flex-col justify-between px-3">
          <ul className="text-start flex flex-col gap-4">
            <li>Biz haqimizda</li>
            <li className="text-gray-500">Bizning jamoamiz</li>
            <li className="text-gray-500">FAQ</li>
          </ul>
          <div>
            <p className="text-start mb-3">Bizni kuzatib boring</p>
            <ul className="flex gap-5 text-xl">
              <li>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-10 w-10/12" />
      <div className="grid grid-cols-2 place-self-end">
        <p className="w-2/3 text-start">© 2024 Terra Car Rental. Birlashgan Arab Amirliklari.</p>
        <p>Shartlar va qoidalar</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer