import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const SearchTab = () => {
    return (
        <div className=" rounded-xl bg-[#f6f7f9] border p-2 md:p-8">

            <div className="flex  items-center justify-between  gap-4">
                <div className="hidden md:flex flex-col ">
                    <span className="text-lg text-black">Destination</span>
                    <span className="text-primary text-2xl font-medium">Lonavala</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-lg text-black flex items-center">Check-out <RiArrowDropDownLine className='text-2xl' /></span>
                    <span className="text-primary text-2xl font-medium">28 Feb ‘25</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-lg text-black flex items-center">Guests <RiArrowDropDownLine className='text-2xl' /></span>
                    <span className="text-primary text-2xl font-medium">2 Adults | 1 Room</span>
                </div>

                <button className="bg-primary text-lg text-white px-12 py-4 rounded-full hover:bg-orange-600 transition-all">
                    Search
                </button>
            </div>

        </div>
    );
};

export default SearchTab;