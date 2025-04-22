import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("stays");

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4">
            {/* Tab Selector (commented out but made responsive) */}
            <div className="flex">
                <button
                    onClick={() => setActiveTab("stays")}
                    className={`px-4 py-2 font-medium rounded-t-md text-sm sm:text-base ${
                        activeTab === "stays" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"
                    }`}
                >
                    Stays
                </button>
                <button
                    onClick={() => setActiveTab("experiences")}
                    className={`px-4 py-2 font-medium rounded-t-md text-sm sm:text-base ${
                        activeTab === "experiences" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"
                    }`}
                >
                    Experiences
                </button>
            </div>

            <div className="rounded-xl bg-white shadow-md p-4 md:p-6 lg:p-8">
                {activeTab === "stays" ? (
                    <div className="flex  flex-row items-center justify-between gap-3 sm:gap-4">
                        {/* Destination - Hidden on mobile */}
                        <div className="hidden md:flex flex-col w-full sm:w-auto">
                            <span className="text-sm md:text-lg text-black">Destination</span>
                            <span className="text-primary text-base md:text-2xl font-medium">Lonavala</span>
                        </div>

                     

                        {/* Check-out */}
                        <div className="flex flex-col w-full sm:w-auto">
                            <span className="text-sm md:text-lg text-black flex items-center">
                                Check-out <RiArrowDropDownLine className='text-xl md:text-2xl' />
                            </span>
                            <span className="text-primary text-sm md:text-2xl font-medium">28 Feb '25</span>
                        </div>

                        {/* Guests */}
                        <div className="flex flex-col w-full sm:w-auto">
                            <span className="text-sm md:text-lg text-black flex items-center">
                                Guests <RiArrowDropDownLine className='text-xl md:text-2xl' />
                            </span>
                            <span className="text-primary text-sm md:text-2xl font-medium">2 Adults | 1 Room</span>
                        </div>

                        {/* Search Button */}
                        <button className="bg-primary  text-white text-sm sm:text-base md:text-lg  py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 w-full sm:w-auto rounded-full hover:bg-orange-600 transition-all mt-2 sm:mt-0">
                            Search
                        </button>
                    </div>
                ) : (
                   <div className="">
                    Experience
                   </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;