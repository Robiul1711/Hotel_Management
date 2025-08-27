import { SmallStarIcons, StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons } from '@/lib/CustomIcons';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const StayVillaCard = ({ data }) => {

    return (
        <Link
            to={`/villa-package-details/${data?.id}`}
            className="block border-2 border-gray-200 rounded-xl bg-gray-100 overflow-hidden"
        >
            <div className="flex flex-col md:flex-row bg-white w-full rounded-xl">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-[300px]">
                    <img
                        src={data?.thumbnail}
                        className="w-full h-full  object-cover"
                        alt={data?.title || 'Accommodation'}
                    />
                    <p className="absolute top-3 left-3 bg-black/10 text-white px-3 py-1 text-sm font-medium backdrop-blur-sm rounded">
                        Free Exclusive Services
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row w-full md:w-full">
                    {/* Left content */}
                    <div className="flex flex-col justify-between p-4 md:w-[70%]">
                        <div>
                            <p className="font-semibold text-gray-800 text-lg md:text-xl lg:text-2xl line-clamp-2">
                                {data?.villa_name}
                            </p>
                            <p className="flex items-center gap-2 text-sm md:text-base text-gray-600 mt-2">
                                <IoLocationOutline />
                                <span className="truncate">{data?.location}</span>
                            </p>

                            <p className="flex flex-wrap items-center gap-2 text-sm md:text-base mt-2">
                                <span>Upto {data?.total_guest} Guests</span>
                                <SmallStarIcons />
                                <span>{data?.total_room} Rooms</span>
                                <SmallStarIcons />
                                <span>{data?.total_bath} Baths</span>
                            </p>
                        </div>

                        {/* Icons row */}
                        <div className="flex gap-6 border-t pt-4 mt-4">
                            {
                                data?.amenities?.slice(0, 4)?.map((item, index) => (
                                    <div key={index} className="border p-2  rounded-full">
                                        <img src={item?.amenitie?.media} alt="" className="w-7" />
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    {/* Right content */}
                    <div className="border-t md:border-t-0 md:border-l p-4 md:w-[40%] flex flex-col justify-between   gap-4">
                        <p className="flex justify-end gap-2 text-sm">
                            <StarIcons /> {data?.rating_summary?.average}
                        </p>
                        <div className="flex flex-col justify-end items-end space-y-2">
                            <p className="text-lg lg:text-xl mb-0 font-semibold">₹ {data?.villa_price}</p>
                            {/* <button className="border py-1 px-4 rounded-3xl text-secondary border-secondary text-xs  sm:text-base sm:px-6 sm:py-2">
                                For 1 Room
                            </button> */}
                            <p className="text-[12px] text-gray-400">Per Night + Taxes (1 Room)</p>
                            <Link to={`/villa-package-details/${data?.id}`}>
                                <button className="py-1 px-4 rounded-3xl whitespace-nowrap text-white bg-secondary hover:bg-orange-600 text-xs sm:text-base sm:px-6 sm:py-2">
                                    View package
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="">
                <p className="text-center text-sm text-gray-600 mb-0 p-1">{data?.short_des}</p>
            </div>
        </Link>
    );
};

export default StayVillaCard;
