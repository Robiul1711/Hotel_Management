import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const StaySearchBar = () => {
    return (
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full  px-4'>
            <div className="hidden md:block w-11/12 mx-auto px-4">
                <div className=" rounded-xl bg-[#f6f7f9] border p-2 md:p-8">
                    {/* Search Fields */}

                    <div className="flex  items-center justify-between  gap-4">
                        {/* Check in */}
                        <div className="flex flex-col">
                            <span className="text-lg text-black flex items-center">Check-in <RiArrowDropDownLine className='text-2xl' /></span>
                            <span className="text-primary text-2xl font-medium">28 Feb ‘25</span>
                        </div>

                        {/* Check-out */}
                        <div className="flex flex-col">
                            <span className="text-lg text-black flex items-center">Check-out <RiArrowDropDownLine className='text-2xl' /></span>
                            <span className="text-primary text-2xl font-medium">28 Feb ‘25</span>
                        </div>

                        {/* Guests */}
                        <div className="flex flex-col">
                            <span className="text-lg text-black flex items-center">Guests <RiArrowDropDownLine className='text-2xl' /></span>
                            <span className="text-primary text-2xl font-medium">2 Adults | 1 Room</span>
                        </div>

                        {/* Search Button */}
                        <button className="bg-primary text-lg text-white px-12 py-4 rounded-full hover:bg-orange-600 transition-all">
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StaySearchBar;