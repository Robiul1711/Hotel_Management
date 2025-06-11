import React from "react";
import hotel1 from "@/assets/images/hotel1.png";
import { IoLocationOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    location: "Pune",
    image: hotel1,
    details: "Tropical Adventures and Sun-Kissed Shores",
  },
  {
    id: 2,
    location: "Mumbai",
    image: hotel1,
    details: "Tropical Adventures and Sun-Kissed Shores",
  },
  {
    id: 3,
    location: "Delhi",
    image: hotel1,
    details: "Tropical Adventures and Sun-Kissed Shores",
  },
];

const VillaForWeekdays = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="mb-10 text-center">
        <p className="text-primary text-2xl sm:text-3xl md:text-5xl font-semibold mb-3">
          Villas for ₹1 on Weekdays
        </p>
        <p className="text-base sm:text-lg md:text-2xl text-gray-600">
          Just pay for meals – the villa’s practically on us from Monday–Thursday!
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="rounded-xl overflow-hidden shadow-md bg-white">
            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-full object-cover"
              />
              {/* Badge */}
              <p className="absolute top-3 left-3 bg-black/30 text-white px-3 py-1 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
                Free Exclusive Services
              </p>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="flex items-center text-gray-700 gap-2 text-sm sm:text-base mb-1">
                <IoLocationOutline /> {item.location}
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <h1 className="text-sm sm:text-lg font-medium text-gray-800">
                  {item.details}
                </h1>
                <button className="rounded-full bg-secondary whitespace-nowrap text-white px-4 py-2 text-xs sm:text-sm hover:bg-orange-600 transition">
                  View package
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillaForWeekdays;

