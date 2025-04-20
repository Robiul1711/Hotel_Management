import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("stays");
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full xlg:w-8/12 px-4">
            {/* <div className="flex">
                <button
                    onClick={() => setActiveTab("stays")}
                    className={`px-4 py-2 font-medium rounded-t-md ${activeTab === "stays" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"
                        }`}
                >
                    Stays
                </button>
                <button
                    onClick={() => setActiveTab("experiences")}
                    className={`px-4 py-2 font-medium rounded-r-md  ${activeTab === "experiences" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"
                        }`}
                >
                    Experiences
                </button>
            </div> */}

            <div className=" rounded-xl bg-white shadow-md p-2 md:p-8">
                {/* Search Fields */}

                {
                    activeTab === "stays" ? (
                        <div className="flex  items-center justify-between  gap-4">
                            {/* Destination */}
                            <div className="hidden md:flex flex-col">
                                <span className="text-lg text-black">Destination</span>
                                <span className="text-primary text-2xl font-medium">Lonavala</span>
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
                    ) :

                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-4 gap-4">
                            {/* Destination */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Experience</span>
                                <span className="text-orange-600 font-medium">Lonavala</span>
                            </div>

                            {/* Check-out */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Check-out</span>
                                <span className="text-black font-medium">28 Feb ‘25</span>
                            </div>

                            {/* Guests */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Guests</span>
                                <span className="text-orange-600 font-medium">2 Adults | 1 Room</span>
                            </div>

                            {/* Search Button */}
                            <button className="bg-orange-500 text-white md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-all">
                                Search
                            </button>
                        </div>

                }

            </div>
        </div>
    );
};

export default SearchBar;