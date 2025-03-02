import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('https://realauto.limsa.uz/api/locations')
      .then(res => {
        setLocations(res.data.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  return (
    <div className='w-full min-h-screen bg-gray-900 text-white p-10'>
      <div className='grid grid-cols-2 gap-10 text-left'>
        <h1 className='text-3xl font-bold'>LOCATION </h1>
        <h1 className='text-3xl font-bold'>CITY</h1>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-5 text-left'>
        {locations.map(location => (
          <div key={location.id} className='text-lg'>
            <p>{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;