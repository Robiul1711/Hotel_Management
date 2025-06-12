import React from "react";
import TabSection from "./TabSection";
import Service from "../home/Service";
import CardGrid from "../common/CardGrid";
import yoga from "@/assets/images/yoga.png";
import CardSwipe from "../home/CardSwipe";
import CardGrid2 from "../common/CardGrid2";
import { StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons } from "@/lib/CustomIcons";
import { CustomBridgeIcon, CustomPhoneIcon, CustomWarehouseIcon } from "@/lib/CustomIconPackage";
import { HotelTabsSection } from "@/lib/Database";
import { Link } from "react-router-dom";


export default function HichFacilities({ hotel }) {
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
      <TabSection tabs={HotelTabsSection} />

      <div className="mt-10  xlg:w-1/2" >

        <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-4xl mb-0">
          {hotel?.hotel_name}
        </p>
        <p className="flex items-center text-sm sm:text-base md:text-2xl gap-1 sm:gap-2">
          <span className="">{hotel?.location}</span>
        </p>

        <p className="text-sm sm:text-base md:text-lg flex items-center gap-3">Guest Favourite  <StarIcons /> 5/5  <span className="border-l px-4 text-blue-500 underline">15 reviews</span></p>


        <div className="flex flex-wrap gap-4 xlg:gap-12">
          {
            hotel?.additional_info_block1 &&
            <button className="bg-[#fdd13c] rounded-full py-4 px-5 md:px-8 text-[14px] md:text-base">{hotel?.additional_info_block1}</button>
          }
          {
            hotel?.additional_info_block2 &&
            <button className="bg-[#fdd13c] rounded-full py-4 px-5 md:px-8 text-[14px] md:text-base">{hotel?.additional_info_block2}</button>
          }
          {
            hotel?.additional_info_block3 &&
            <button className="bg-[#fdd13c] rounded-full py-4 px-5 md:px-8 text-[14px] md:text-base">{hotel?.additional_info_block3}</button>
          }
        </div>

        {/* icons section  */}
        <div className="flex flex-wrap  gap-2 md:gap-8 items-center ">
          {
            hotel?.amenities?.slice(0, 4)?.map((item, index) => (
              <div key={index} className="border p-2 md:p-5 rounded-full">
                <img src={item?.amenitie?.media} alt="" className="w-7" />
              </div>
            ))
          }
          
          <Link to={'#hotel-aminities'} className="text-gray-400 underline rounded-full">
            See All
          </Link>

        </div>
        {/* <div className="bg-[#fff8db] flex items-center justify-between p-3">

          <div className="flex items-center ">
            <CustomPhoneIcon />
            <span className="text-[12px] md:text-base">Connect with Host</span>
          </div>
          <button className="border-primary border rounded-full text-[12px] md:text-base py-3 px-8">Request Callback</button>
        </div> */}
      </div>
      <div className="mt-10">
        <Service />
      </div>
    </div>
  );
}
