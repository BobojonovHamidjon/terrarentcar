import React from 'react'

function Car() {
  return (
    
    <div className="container mx-auto px-4 bg-gradient-to-b from-black to-slate-700 py-10">
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">BWM M5</h2>
      <button className="text-sm text-blue-600 hover:">
        <a href="/cars">SEE ALL →</a>
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <a className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700" href="/cars/87a755fd-22f7-4267-a7d4-09426ea842b0">
        <img src="https://realauto.limsa.uz/api/uploads/images/fad061c7-b963-46c0-ad3a-32f919c68838.jpeg" alt="Mustang" className="w-full md:h-56 h-28 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold">Mustang</h3>
        <p className="text-sm text-gray-300">AED 4000 / $5000</p>
        <p className="text-sm text-gray-400">per day</p>
      </a>
      <a className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700" href="/cars/0612dde3-87e5-48d6-b1bd-e9948f5fdf15">
        <img src="https://realauto.limsa.uz/api/uploads/images/aaf60817-75e7-47e8-8b23-f9dfc4eb5b4d.png" alt="ok" className="w-full md:h-56 h-28 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold">ok</h3>
        <p className="text-sm text-gray-300">AED 2323 / $2133</p>
        <p className="text-sm text-gray-400">per day</p>
      </a>
    </div>
  </div>

  <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">TEST1234
      </h2>
      <button className="text-sm text-blue-600 hover:">
        <a href="/cars">SEE ALL →</a>
      </button>
    </div>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    <a className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700" href="/cars/5d74d984-3916-4442-9c60-49a88301c876">
      <img src="https://realauto.limsa.uz/api/uploads/images/36f4da31-02c1-4c26-bc04-66413f9221ce.png" alt="Damas" className="w-full md:h-56 h-28 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">Damas</h3>
      <p className="text-sm text-gray-300">AED 111 / $111</p>
      <p className="text-sm text-gray-400">per day</p>
    </a>
  </div>
  <section>
  
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">YULDUZ</h2>
      <button className="text-sm text-blue-600 hover:">
        <a href="/cars">SEE ALL →</a>
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <a className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700" href="/cars/87a755fd-22f7-4267-a7d4-09426ea842b0">
        <img src="https://realauto.limsa.uz/api/uploads/images/a0e8e2b5-4a7b-40c1-a9b1-978948d6a5f7.png" alt="Mustang" className="w-full md:h-56 h-28 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold">Mustang</h3>
        <p className="text-sm text-gray-300">AED 4000 / $5000</p>
        <p className="text-sm text-gray-400">per day</p>
      </a>
      <a className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700" href="/cars/0612dde3-87e5-48d6-b1bd-e9948f5fdf15">
        <img src="https://realauto.limsa.uz/api/uploads/images/aaf60817-75e7-47e8-8b23-f9dfc4eb5b4d.png" alt="ok" className="w-full md:h-56 h-28 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold">ok</h3>
        <p className="text-sm text-gray-300">AED 2323 / $2133</p>
        <p className="text-sm text-gray-400">per day</p>
      </a>
    </div>
  </div>

  <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">TEST1234
      </h2>
      <button className="text-sm text-blue-600 hover:">
        <a href="/cars">SEE ALL →</a>
      </button>
    </div>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    <a className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700" href="/cars/5d74d984-3916-4442-9c60-49a88301c876">
      <img src="https://realauto.limsa.uz/api/uploads/images/aaf60817-75e7-47e8-8b23-f9dfc4eb5b4d.png" alt="Damas" className="w-full md:h-56 h-28 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">Damas</h3>
      <p className="text-sm text-gray-300">AED 111 / $111</p>
      <p className="text-sm text-gray-400">per day</p>
    </a>
  </div>

  </section>
</div>

  
  
  )
}

export default Car