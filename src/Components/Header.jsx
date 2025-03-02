import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`flex flex-col w-full ${isMenuOpen ? 'mb-64' : ''}`}>
        <nav className='w-full py-5 px-10 flex justify-between items-center gap-7 bg-black max-xl:px-8 '>
            <div className='flex items-center gap-5'>
                <button className='p-0 rounded-full bg-transparent'> <img src="https://terra-autorent.vercel.app/images/uzbekistan.png" alt="uz" className='w-6' /></button>
                <button className='p-0 rounded-full'> <img src="https://terra-autorent.vercel.app/images/en-img.png" alt="eng"  className='w-6'/></button>
                <button className='p-0 rounded-full'> <img src="https://terra-autorent.vercel.app/images/ru-img.png" alt="ru"  className='w-6'/></button>
                <input type="text" className="px-5 rounded-xl h-12 w-[25rem] bg-gradient-to-r from-gray-700 to-black mr-6 text-white md:block hidden " placeholder="Qidirish . . ."></input>
                <a href="/"> <img src="/images/logo.png" alt="logo" className='w-32' />
                </a>
            </div>
            <div className={`md:flex flex-col items-end ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <ul className="flex flex-col md:flex-row gap-10 bg-black md:bg-transparent p-5 md:p-0 absolute md:relative top-16 md:top-0 right-0 md:right-auto w-full md:w-auto shadow-md md:shadow-none">
                    <li>
                        <a className="text-white font-normal" href="/cars">MASHINALAR</a>
                    </li>
                    <li>
                        <a className="text-white font-normal" href="/brand">BRENDLAR</a>
                    </li>
                    <li><a className="text-white font-normal" href="/services">XIZMATLAR</a></li>
                    <li><a className="text-white font-normal" href="/about">BIZ HAQIMIZDA</a></li>
                    <li><a className="text-white font-normal" href="/contact">ALOQA</a></li>
                    <li><a className="text-white font-normal" href="/blog">BLOG</a></li>
                </ul>
                <a href="tel:+998990000441" className="text-white font-normal">+998 (99) 000 04 41</a>
            </div>
            <button 
              className="p-1 h-8 ml-7 transition-all duration-300 md:hidden bg-black text-white dark:bg-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            </button>
        </nav>
    </div>
  )
}

export default Header