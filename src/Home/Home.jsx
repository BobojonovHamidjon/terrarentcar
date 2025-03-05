import React from 'react'
import { Outlet } from 'react-router-dom'
import Min from '../Pages/Min'
import Brands from '../Pages/Brands'
import Services from '../Pages/Services'
import Car from '../Pages/Car'
import Luxure from './Luxure'
import Locations from './Location'

function Home() {
  return (
    <>
     <Outlet/>
     <Min/>
     <Brands/>
     <Car/>
     <Services/>
     <Luxure/>
     <Locations/>
     

    </>
  )
}

export default Home