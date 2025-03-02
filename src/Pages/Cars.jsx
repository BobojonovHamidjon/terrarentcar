import axios from "axios";
import React, { useEffect, useState } from "react";

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategory = async () => {
    try {
      const res = await axios.get("https://realauto.limsa.uz/api/cars");
      setCars(res.data.data);
    } catch (error) {
      console.error("Ma'lumot yuklashda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-slate-900 min-h-screen p-10 flex gap-8">
     
      <div className="hidden lg:block w-[350px] bg-gray-800 p-4 text-white rounded-lg">
        <div className="flex justify-between items-center lg:mb-4">
          <img src="https://terra-autorent.vercel.app/assets/terra-CveSQ9CU.png" alt="Logo" className="w-[200px]" />
          <button className="text-red-500 font-bold lg:hidden">✕</button>
        </div>

        <p className="text-left text-2xl mt-8">Filter by</p>
        <hr className="my-4" />

        <div>
          <p className="text-left text-2xl mb-4">Car type</p>
          <div>
            {["BWM M5", "TEST1234", "yulduz", "bmw"].map((type) => (
              <div className="flex items-center mb-2" key={type}>
                <input type="checkbox" className="mr-2" value={type} />
                <span>{type}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />
          <p className="text-left text-2xl mb-4">Brand</p>
          <div>
            {["Ford", "Cobalt", "Porsche", "Bentle"].map((brand) => (
              <div className="flex items-center mb-2" key={brand}>
                <input type="checkbox" className="mr-2" value={brand} />
                <span>{brand}</span>
              </div>
            ))}
          </div>

          <p className="text-left text-2xl my-4">Model</p>
          <select className="w-full p-2 text-lg text-black rounded-md">
            <option value="">Select a model</option>
            {["Mustang", "Damas", "bmw", "ford mustang", "ok"].map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <button className="w-full text-white border border-red-600 rounded-lg py-2 bg-red-600">
            Reset
          </button>
        </div>
      </div>

     
      <div className="w-full lg:w-2/3">
        <h2 className="text-white text-4xl font-bold text-center mb-10">
          Luxury Cars for Rent in Dubai / Hire the latest supercar
        </h2>

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-[#1a1a2e] p-5 rounded-xl shadow-lg transition transform hover:scale-105"
              >
                <img
                  className="w-full h-[250px] object-cover rounded-lg"
                  src={`https://realauto.limsa.uz/api/uploads/images/${car?.car_images?.[0]?.image?.src}`}
                  alt={car.title}
                />
                <h3 className="text-white text-xl font-semibold mt-3">
                  {car.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  AED {car.price || "0"} / $ {car.price_usd || "0"} per day
                </p>
                <div className="flex gap-3 mt-4">
  <a
    href={`https://wa.me/998990004041`}
    target="_blank"
    className="bg-green-500 text-white px-4 py-2 rounded-lg flex-1 text-center flex items-center justify-center gap-2"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
    </svg>
    Whatsapp
  </a>

  <a
    href={`https://t.me/yourtelegram`}
    target="_blank"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex-1 text-center flex items-center justify-center gap-2"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 496 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm113.4 169.3c-3.4 36-17.9 120-25.3 159-3.1 16.6-9.2 22.1-15.1 22.7-12.8 1.2-22.5-8.4-34.9-16.5-19.4-12.8-30.3-20.8-49-33.3-21.7-14.5-7.6-22.5 4.7-35.5 3.2-3.3 59.2-54.2 60.3-58.9.1-.4.1-2.2-.8-3.1s-2.5-.6-3.6-.4c-1.5.3-24.3 15.5-68.6 45-6.5 4.2-12.3 6.2-17.4 6.1-5.7-.1-16.6-3.2-24.9-5.9-10-3.2-18-5-17.3-10.6.4-3.3 5-6.6 13.6-10 49.9-21.4 83.2-36 100.1-44.6 47.7-23.9 57.5-28.1 64-28.2 1.4 0 4.5.3 6.5 1.8 1.7 1.2 2.7 2.7 3 3.8s.7 4.5.4 6.8z"></path>
    </svg>
    Telegram
  </a>
</div>

               
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cars;
