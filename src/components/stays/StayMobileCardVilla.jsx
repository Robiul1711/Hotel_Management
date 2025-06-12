import { StarIcons } from '@/lib/CustomIcons';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const StayMobileCardVilla = ({ data }) => {
    console.log(data);
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col ">
            {/* Image Section */}
            <div className="relative h-[80%] sm:h-[65%] md:h-[50%] lg:h-[70%] w-full">
                <img
                    src={data?.thumbnail}
                    className="w-full h-[300px] object-cover"
                    alt={data?.title || "Accommodation"}
                />
                <p className="text-white absolute top-3 left-3 sm:top-4 sm:left-4 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
                    Free Exclusive Services
                </p>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2 sm:items-center">
                    <div className="flex flex-col w-full  ">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl ">
                                {data?.villa_name}
                            </p>
                            <p className="flex items-center gap-2"><StarIcons />5.0</p>
                        </div>
                        <p className="text-xs text-gray-400">{data?.location}</p>
                        <div className="text-xs text-gray-400">
                            {data?.short_des}
                        </div>
                        {/* <p className="text-xs text-gray-400">Upto 27 Guests  |  9 Rooms  |  10 Baths</p>
                        <p className="text-primary text-sm">₹ 21,876</p> */}
                        <div className="flex justify-between items-center gap-2">
                            {/* <p className="text-xs text-gray-400">For Per Night + Taxes</p> */}
                            <Link to={`/hotel-package-details/${data?.id}`}>
                                <p className="text-primary text-sm">View Package</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StayMobileCardVilla;