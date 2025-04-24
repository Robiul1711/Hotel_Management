import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("stays");
    const [checkIn, setCheckIn] = useState(dayjs('2025-02-28'));
    const [checkOut, setCheckOut] = useState(dayjs('2025-02-28'));
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4">
            {/* Tab Selector (commented out but made responsive) */}
            <div className="flex">
                <button
                    onClick={() => setActiveTab("stays")}
                    className={`px-4 py-2 font-medium rounded-t-md text-sm sm:text-base ${activeTab === "stays" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"
                        }`}
                >
                    Stays
                </button>
                <button
                    onClick={() => setActiveTab("experiences")}
                    className={`px-4 py-2 font-medium rounded-t-md text-sm sm:text-base ${activeTab === "experiences" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"
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



                        {/* Check-in */}
                        <div className="flex flex-col basis-[48%] sm:basis-auto">
                            <span className="text-sm md:text-lg text-black flex items-center">
                                Check-in <RiArrowDropDownLine className='text-2xl' />
                            </span>
                            <DatePicker
                                value={checkIn}
                                format="DD MMM 'YY"
                                onChange={setCheckIn}
                                allowClear={false}
                                bordered={false}
                                suffixIcon={null}
                                className="!text-primary !text-2xl !font-medium !bg-transparent !p-0 !border-none !shadow-none hover:!border-none focus:!border-none focus:!shadow-none custom-datepicker"
                                popupClassName ="custom-calendar-dropdown"
                            />
                        </div>


                        {/* Check-out */}
                        <div className="flex flex-col basis-[48%] sm:basis-auto">
                            <span className="text-sm md:text-lg text-black flex items-center">
                                Check-out <RiArrowDropDownLine className='text-2xl' />
                            </span>
                            <DatePicker
                                value={checkOut}
                                format="DD MMM 'YY"
                                onChange={setCheckOut}
                                allowClear={false}
                                bordered={false}
                                suffixIcon={null}
                                className="!text-primary !text-[40px] !font-medium !bg-transparent !p-0 !border-none !shadow-none hover:!border-none focus:!border-none focus:!shadow-none custom-datepicker"
                                popupClassName ="custom-calendar-dropdown"
                            />
                        </div>

                        {/* Guests */}
                        <div className="flex flex-col w-full sm:w-auto">
                            <span className="text-sm md:text-lg text-black flex items-center">
                                Guests <RiArrowDropDownLine className='text-xl md:text-2xl' />
                            </span>
                            <span className="text-primary text-sm md:text-2xl font-medium">2 Adults | 1 Room</span>
                        </div>

                        {/* Search Button */}
                        <Link to={'/search-result'}>
                            <button className="bg-primary  text-white text-sm sm:text-base md:text-lg  py-2 px-2 sm:px-6 sm:py-3 md:px-8 md:py-4 w-full sm:w-auto rounded-full hover:bg-orange-600 transition-all mt-2 sm:mt-0">
                                Search
                            </button>
                        </Link>

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