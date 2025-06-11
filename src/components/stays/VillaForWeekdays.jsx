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
    <div>
      <div className="mb-14">
        <p className="text-primary md:text-5xl mb-2">
          Villas for ₹1 on Weekdays
        </p>
        <p className="mb-0 text-2xl">
          Just pay for meals – the villa’s practically on us from Monday
          -Thursday!
        </p>
      </div>
      {/* card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className=" relative">
        <img
          src={hotel1}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <p className="text-white absolute top-3 left-3 sm:top-4 sm:left-4 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
          Free Exclusive Services
        </p>
        <div className="absolute bottom-0 left-0 bg-white p-4 rounded-lg shadow-md">
          <p className="flex items-center gap-1 text-lg mb-1">
            <IoLocationOutline /> Lonavala
          </p>
          <div className="flex justify-between gap-6 items-center">
            <h1 className="text-2xl">
              Tropical Adventures and Sun-Kissed Shores
            </h1>
            <button className="rounded-full bg-secondary whitespace-nowrap text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              View package{" "}
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
