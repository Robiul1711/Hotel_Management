import { LocationIcons } from "@/lib/CustomIcons";
import { Button } from "antd";
import React from "react";

const DetailsAboutBooking = () => {
  return (
    <div className="mt-10 flex justify-between gap-12 w-full">
    <div className="w-[70%]">
      <h1 className="text-[40px] font-semibold mb-2 text-primary">
        The Peninsula Beverly Hills
      </h1>
      <p className="text-[#5A5C5F] font-neris flex items-center gap-0.5">
        <LocationIcons /> 387 Nightingale Close, Lake Aishafield 71732-5156
      </p>
      <h2 className="text-2xl font-semibold mt-8">Overview</h2>
      <p className="text-[#5A5C5F] font-neris font-light leading-[164%]">
        See the highlights of London via 2 classic modes of transport on this
        half-day adventure. First, you will enjoy great views of Westminster
        Abbey, the Houses of Parliament, and the London Eye, as you meander
        through the historic streets on board a vintage double decker bus.

        Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s
        architectural masterpiece, where Admirals Nelson and Wellington are
        buried, and Princess Diana and Prince Charles got married. Continue to
        the Tower of London, built nearly 1,000 years ago during the reign of
        William the Conqueror.
      </p>
      <button className="bg-primary text-white px-20 py-3 mt-6 rounded-[12px] hover:bg-orange-600 transition-all">
        Contact Support Regrading This Booking
      </button>
    </div>
    <div className="w-[30%] bg-[#f0f2f3] rounded-[12px] p-6 flex flex-col">
        <div className="flex flex-col border-b border-gray-200 pb-2">
<h1 className="text-2xl font-semibold">₹ 500</h1>
<p className="text-[#5A5C5F] mt-1">Total Amount</p>
        </div>
        <div className="flex justify-between font-light items-center my-6">
            <p>Total Amount</p>
            <h1>1234678</h1>
        </div>
        <div className="flex flex-col gap-4">
            <button className="border border-primary  text-primary hover:text-white px-2 py-3 rounded-[12px] hover:bg-orange-600 transition-all">
    Download Invoice
      </button>
      <button className="bg-primary text-white px-2 py-3 rounded-[12px] hover:bg-orange-600 transition-all">
Web Check-in
      </button>
        </div>
    </div>
    </div>
  );
};

export default DetailsAboutBooking;
