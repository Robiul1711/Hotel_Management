import React from "react";

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
    <div className="px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Complimentary Facilities Only With Hich:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-orange-400 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-3xl mb-4">{facility.icon}</div>
            <h3 className="text-lg font-semibold mb-2">
              {facility.title}
            </h3>
            <p className="text-sm leading-relaxed">{facility.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute top-0 left-0 bg-white text-orange-500 px-2 py-1 text-xs font-bold rounded-br-md">
            Free
          </div>
          <img
            src="/yoga-meditation.jpg"
            alt="Yoga & Meditation"
            className="rounded-xl w-full h-64 object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white text-xl font-semibold">
            Yoga & Meditation <br /> With Hich Coach
          </div>
        </div>
      </div>
    </div>
  );
}
