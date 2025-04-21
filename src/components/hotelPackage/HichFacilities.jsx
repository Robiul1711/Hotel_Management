import React from "react";
import TabSection from "./TabSection";
import Service from "../home/Service";
import CardGrid from "../common/CardGrid";
import yoga from "@/assets/images/yoga.png";


export default function HichFacilities() {
  const facilities = [
    {
      title: "One– Click Room Service & Housekeeping",
      description:
        "Request room service or housekeeping with one tap, just download Hich app.",
      icon: "🏨",
    },
    {
      title: "Complimentary In-Hotel Activities",
      description:
        "Join complimentary wellness, sports, and leisure activities.",
      icon: "🎯",
    },
    {
      title: "Transportation Services",
      description:
        "Travel hassle-free with our reliable transport services.",
      icon: "🚐",
    },
    {
      title: "Order Food",
      description:
        "Enjoy delicious meals delivered straight to your room or savor a delightful dining experience at our restaurant. Conveniently settle your bill during check-out.",
      icon: "🍽️",
    },
    {
      title: "Pack My Bag Service",
      description:
        "Let us pack your belongings for a stress-free departure.",
      icon: "🧳",
    },
    {
      title: "Other Amenities (10 Facilities)",
      description:
        "Enjoy access to Wi-Fi, laundry services, concierge assistance, and a range of other premium amenities for a comfortable stay.",
      icon: "➕",
    },
  ];

  return (
    <div className=" py-10 ">
      <TabSection />
      <h2 className="text-2xl font-semibold mt-12">
        Complimentary Facilities Only With Hich:
      </h2>

      <section className="">
        <div className=" ">
         
          <div className="flex flex-wrap gap-6">
            {/* Left - Services Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1 grid-auto-rows: minmax(100px, auto)">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className={`bg-secondary text-white rounded-2xl shadow-md p-6 ${idx % 2 === 0 ? "bg-red-600 row-span-2" : "row-span-1"
                                    }`}
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="font-semibold text-lg mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                {idx % 2 === 0 && (
                                    <button className="mt-6 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition">
                                        Learn more
                                    </button>
                                )}
                            </div>
                        ))}
                    </div> */}
            <CardGrid />

            {/* Right - Image box */}
            <div className="w-full md:w-[30%] relative rounded-2xl overflow-hidden shadow-md min-h-[400px]">
              <img
                src={yoga}
                alt="Yoga and Meditation"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-white text-orange-600 text-sm px-2 py-1 font-semibold">
                Free
              </div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-xl font-semibold leading-tight">
                  Yoga & Meditation<br />With Hich Coach
                </h3>
              </div>
              <div className="absolute bottom-4 right-4 text-white text-2xl">
                <span>&#x203A;</span> {/* › symbol (similar to image) */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
