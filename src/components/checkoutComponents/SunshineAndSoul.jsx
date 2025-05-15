import React from "react";
import sunshine from "../../assets/images/sunshine.png";
import { RattingIcons } from "@/lib/CustomIcons";
const SunshineAndSoul = () => {
  return (
    <div className="p-4  rounded-[12px] bg-white w-full flex justify-between gap-8">
      <div className="w-[70%] flex flex-col ">
        <div className="flex items-start justify-between pb-4 border-b">
          <div>
            <h1 className="font-semibold text-[36px]">Sunshine And Soul</h1>
            <p className="text-[#999999] text-xl">Lonavala, Maharashtra</p>
          </div>
          <button className="border px-4 py-2.5  rounded-[8px]">Share</button>
        </div>
        {/* checkin checkout  */}
        <div className="flex items-center justify-between py-4">
<div>sdg</div>
<div className="px-3 py-2">For 1 night</div>
<div>dfg</div>
        </div>
      </div>

      <div className="w-[30%] flex flex-col items-center justify-center ">
        <p className="flex items-center gap-2 text-[#999999]">
          <RattingIcons />5 Guest Favourite
        </p>
        <img src={sunshine} alt="" />
      </div>
    </div>
  );
};

export default SunshineAndSoul;
