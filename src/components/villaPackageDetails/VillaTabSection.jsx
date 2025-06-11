import React from 'react';
import TabSection from '../hotelPackage/TabSection';
import { StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons } from "@/lib/CustomIcons";
import { CustomBridgeIcon, CustomPhoneIcon, CustomWarehouseIcon } from "@/lib/CustomIconPackage";
import { HotelTabsSection, VillaTabsSection } from '@/lib/Database';
import { Link } from 'react-router-dom';

const VillaTabSection = ({ villa }) => {
    console.log(villa)
    return (
        <div>
            <TabSection tabs={VillaTabsSection} />
            <div className="mt-10  " >

                <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-4xl mb-0">
                    {villa?.villa_name}
                </p>
                <p className="flex items-center text-sm sm:text-base md:text-2xl gap-1 sm:gap-2 mb-0">
                    <span className="">{villa?.location} </span>
                </p>

                <p className="text-sm sm:text-base md:text-lg flex items-center gap-3">Guest Favourite  <StarIcons /> 5/5  <span className="border-l px-4 text-blue-500 underline">15 reviews</span></p>


                <div className="flex flex-wrap gap-4 xlg:gap-12">
                    <button className="bg-[#fdd13c] rounded-full py-4 px-5 md:px-8 text-[14px] md:text-base">Up to {villa?.total_guest} Guests</button>
                    <button className="bg-[#fdd13c] rounded-full py-4 px-5 md:px-8 text-[14px] md:text-base">{villa?.total_room} Rooms</button>
                    <button className="bg-[#fdd13c] rounded-full py-4 px-5 md:px-8 text-[14px] md:text-base">{villa?.total_bath} Baths</button>
                </div>

                {/* icons section  */}
                <div className="flex flex-wrap  py-5 gap-2 md:gap-10 items-center ">
                    <div className="border p-2 md:p-5 rounded-full">
                        <Stay1Icons />
                    </div>

                    <div className="border p-2 md:p-5 rounded-full">
                        <Stay2Icons />
                    </div>

                    <div className="border p-2 md:p-5 rounded-full">
                        <Stay3Icons />
                    </div>

                    <div className="border p-2 md:p-5 rounded-full">
                        <Stay4Icons />
                    </div>
                    <div className="border p-2 md:p-5 rounded-full">
                        <CustomBridgeIcon />
                    </div>
                    <div className="border p-2 md:p-5 rounded-full">
                        <CustomWarehouseIcon />
                    </div>
                    <Link to={'#hotel-aminities'} className="text-xl text-gray-500 underline cursor-pointer">
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
        </div>
    );
};

export default VillaTabSection;