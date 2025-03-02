import React from 'react'
import { Outlet } from 'react-router-dom'
import Min from '../Pages/Min'
import Brands from '../Pages/Brands'
import Services from '../Pages/Services'
import Car from './Car'
import Luxure from './Luxure'

function Home() {
  return (
    <>
     <Outlet/>
     <Min/>
     <Brands/>
     <Car/>
     <Services/>
     <Luxure/>
     

    </>
  )
}

export default Home