import  React ,{ useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Home from './Home/Home'
import Cars from './Pages/Cars'
import Brands from './Pages/Brands'
import Services from './Pages/Services'
import About from './Pages/About'
import Cantact from './Pages/Cantact'
import Blog from './Pages/Blog'





function App() {
 

  return (
    <>
    <Routes>
    <Route path="/" element={<Main />}>
    <Route index element={<Home />} />
    <Route path='/cars' element ={<Cars/>}/>
    <Route path='/brand' element ={<Brands/>}/>
    <Route path='/services' element ={<Services/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/contact' element ={<Cantact/>}/>
    <Route path='/blog' element ={<Blog/>}/>
     
    </Route>
    </Routes>
    </>
  )
}

export default App
