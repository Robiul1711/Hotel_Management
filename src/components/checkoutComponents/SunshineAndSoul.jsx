import React from "react";
import sunshine from "../../assets/images/sunshine.png";
import { RattingIcons } from "@/lib/CustomIcons";
import { CheckInIcon, GuestIcon, RoomIcon, ShareIcon } from "@/lib/CheckOutIconAll";
const SunshineAndSoul = () => {
  return (
    <div className="md:p-8 p-4 rounded-[12px] bg-white shadow-xl w-full flex flex-col sm:flex-row justify-between gap-8">
      <div className="md:w-[70%] order-2 sm:order-1 flex flex-col ">
        <div className="flex items-start justify-between pb-3 sm:pb-6 border-b">
          <div>
            <h1 className="font-semibold text-xl md:text-[36px] mb-0">Sunshine And Soul</h1>
            <p className="text-[#999999] text-base md:text-xl mb-0">Lonavala, Maharashtra</p>
          </div>
          <button className="border px-4 py-2.5 flex items-center gap-2  rounded-[8px]"><ShareIcon /> Share</button>
        </div>
        {/* checkin checkout  */}
        <div className="flex flex-col xxs:flex-row items-start gap-3 xxs:items-center justify-between py-6">
          <div className="flex flex-col">
            <div className="mb-2">Check-In</div>
            <div className="flex items-start  gap-2">
              <CheckInIcon />
              <div className="flex flex-col">
                <div className="font-semibold text-sm  md:text-lg">Sat 17 May 2025</div>
                <div className="text-[#999999] text-sm">(From 02:00 PM)</div>
              </div>{" "}
            </div>
          </div>
          <div className="px-3 py-1 sm:py-2 bg-primary text-sm text-white rounded-[6px]">For 1 night</div>
                   <div className="flex flex-col">
            <div className="mb-2">Check-Out</div>
            <div className="flex items-start  gap-2">
              <CheckInIcon />
              <div className="flex flex-col">
                <div className="font-semibold text-sm  md:text-lg">Sat 17 May 2025</div>
                <div className="text-[#999999] text-sm">(From 02:00 PM)</div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col xxs:flex-row xxs:items-center gap-5 xxs:gap-10 sm:py-4">
          <div className="flex flex-col">
            <div className="mb-2 text-[#646363]">No. of Rooms</div>
            <div className="flex items-start  gap-2">
              <RoomIcon />
              <div className="flex items-center  gap-3">
                <div className="font-semibold text-sm  md:text-lg">4 Rooms</div>
                <div className="w-px h-6 bg-[#999999]"></div>
                <div className="font-semibold text-sm  md:text-lg">4 Baths</div>
             
              </div>{" "}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 text-[#646363]">Guests</div>
            <div className="flex items-start  gap-2">
              <GuestIcon />
              <div className="flex items-center  gap-3">
                <div className="font-semibold text-sm sm:text-base md:text-lg">4 Rooms</div>
                <div className="w-px h-6 bg-[#999999]"></div>
                <div className="font-semibold text-sm  md:text-lg">4 Baths</div>
             
              </div>{" "}
            </div>
          </div>

        </div>
      </div>

      <div className="sm:w-[30%] order-1 sm:order-2 flex flex-col items-center justify-center ">
        <div className="flex items-center gap-2 pb-2 text-[#999999]">
          <RattingIcons />5 Guest Favourite
        </div>
        <img src={sunshine} alt="" className="w-full"/>
      </div>
    </div>
  );
};

export default SunshineAndSoul;
