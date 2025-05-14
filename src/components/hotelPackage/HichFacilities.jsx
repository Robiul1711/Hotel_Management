import React from "react";
import TabSection from "./TabSection";
import Service from "../home/Service";
import CardGrid from "../common/CardGrid";
import yoga from "@/assets/images/yoga.png";
import CardSwipe from "../home/CardSwipe";
import CardGrid2 from "../common/CardGrid2";
import { StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons } from "@/lib/CustomIcons";
import { CustomBridgeIcon, CustomPhoneIcon, CustomWarehouseIcon } from "@/lib/CustomIconPackage";


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

      <div className="mt-10  xlg:w-1/2" >

        <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-4xl ">
          Sunshine & Soul
        </p>
        <p className="flex items-center text-sm sm:text-base md:text-2xl gap-1 sm:gap-2">
          <span className="">Lonavala, Maharashtra </span>
        </p>

        <p className="text-sm sm:text-base md:text-lg flex items-center gap-3">Guest Favourite  <StarIcons /> 5/5  <span className="border-l px-4 text-blue-500 underline">15 reviews</span></p>

        <div className="flex flex-wrap gap-4 xlg:gap-20">
          <button className="bg-[#fdd13c] rounded-full py-4 px-8 min-w-48">Up to 13 Guests</button>
          <button className="bg-[#fdd13c] rounded-full py-4 px-8 min-w-48">1 - 4 Rooms</button>
          <button className="bg-[#fdd13c] rounded-full py-4 px-8 min-w-48">4 Baths</button>
        </div>

        <div className="flex flex-wrap  py-5 gap-10 items-center ">
          <div className="border p-5 rounded-full">
            <Stay1Icons />
          </div>

          <div className="border p-5 rounded-full">
            <Stay2Icons />
          </div>

          <div className="border p-5 rounded-full">
            <Stay3Icons />
          </div>

          <div className="border p-5 rounded-full">
            <Stay4Icons />
          </div>
          <div className="border p-5 rounded-full">
            <CustomBridgeIcon />
          </div>
          <div className="border p-5 rounded-full">
            <CustomWarehouseIcon />
          </div>
          <div className="text-gray-400 p-5 rounded-full">
            See All
          </div>

        </div>
        <div className="bg-[#fff8db] flex items-center justify-between p-3">

          <div className="flex items-center ">
            <CustomPhoneIcon />
            <span className="">Connect with Host</span>
          </div>
          <button className="border-primary border rounded-full py-3 px-8">Request Callback</button>
        </div>
      </div>



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
