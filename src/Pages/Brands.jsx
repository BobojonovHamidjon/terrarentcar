import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Brands() {
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true)

  const getBrands = () => {
    axios.get('https://realauto.limsa.uz/api/brands')
      .then(res => {
        setBrands(res.data.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <div className='p-5 bg-gradient-to-b from-gray-600 to-black min-h-screen'>
      <h2 className="text-center text-white text-2xl font-bold mb-5">Brands</h2>
      
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {brands.map(brand => (
            <div 
              className='flex flex-col items-center p-5 bg-[#1a1a2e] rounded-2xl shadow-lg transition-transform transform hover:scale-105' 
              key={brand.id}
            >
              <img 
                className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain' 
                src={`https://realauto.limsa.uz/api/uploads/images/${brand.image_src}`} 
                alt={brand.title} 
              />
              <p className='text-white text-lg font-semibold mt-2 text-center'>{brand.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Brands