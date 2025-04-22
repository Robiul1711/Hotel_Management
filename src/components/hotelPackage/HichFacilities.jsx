import React from "react";
import TabSection from "./TabSection";
import Service from "../home/Service";
import CardGrid from "../common/CardGrid";
import yoga from "@/assets/images/yoga.png";
import CardSwipe from "../home/CardSwipe";
import CardGrid2 from "../common/CardGrid2";


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
    <div className=" md:py-10 ">
      <TabSection />
      <h2 className="text-2xl font-semibold mt-12">
        Complimentary Facilities Only With Hich:
      </h2>

      <div className="flex flex-col lg:flex-row items-center">
        <div className=" lg:w-[72%]">
          <div className=" ">
            {/* <CardGrid /> */}
            <CardGrid2 />
          </div>

        </div>
        <div className="w-[80%] lg:w-[28%]">
          <CardSwipe />
        </div>
      </div>
    </div>
  );
}
