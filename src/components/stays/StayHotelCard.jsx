import { SmallStarIcons, StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons, TrackingIcons } from '@/lib/CustomIcons';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const StayHotelCard = ({ data }) => {
    // console.log(data);
    return (
        <Link to={`/hotel-package-details/${data?.id}`} className="border-2 block border-gray-200 rounded-xl bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white  overflow-hidden duration-300 w-full rounded-xl ">
                {/* Image Section */}
                <div className="relative  w-full md:w-1/2">
                    <img
                        src={data?.thumbnail}
                        className="w-full h-[400px] object-cover"
                        alt={data?.title || "Accommodation"}
                    />
                    <p className="text-white absolute top-3 left-3 sm:top-4 sm:left-4 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
                        Free Exclusive Services
                    </p>
                </div>

                {/* Content Section */}
                <div className=" bg-white md:flex-row w-full md:w-full flex  items-start">
                    {/* content left side  */}
                    <div className="  flex flex-col h-full justify-between w-[60%] xl:w-[70%]">
                        <div className="p-4">
                            <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl line-clamp-2">
                                {data?.hotel_name}
                            </p>
                            <p className="flex items-center text-sm sm:text-base md:text-lg gap-1 sm:gap-2">
                                <IoLocationOutline className="flex-shrink-0" />
                                <span className="truncate">{data?.location}</span>
                            </p>

                            <p className="flex items-center flex-wrap text-sm sm:text-base md:text-lg gap-4 sm:gap-2">

                                <span className="truncate">Upto 13 Guests</span>
                                <SmallStarIcons />
                                <span className="">4 Rooms</span>
                                <SmallStarIcons />
                                <span className="">4 Baths</span>

                            </p>

                            {/* <p className="flex items-center text-sm sm:text-base md:text-lg gap-1 sm:gap-2">
                                Great for : <TrackingIcons /> Trekking

                            </p> */}
                        </div>
                        <div className="flex flex-wrap border-t pt-4 gap-6 p-4  items-center ">
                            <div className="border p-3 xl:p-4 rounded-full">
                                <Stay1Icons />
                            </div>

                            <div className="border p-3 xl:p-4 rounded-full">
                                <Stay2Icons />
                            </div>

                            <div className="border p-3 xl:p-4 rounded-full">
                                <Stay3Icons />
                            </div>

                            <div className="border p-3 xl:p-4 rounded-full">
                                <Stay4Icons />
                            </div>

                        </div>
                    </div>

                    {/* content right side  */}
                    <div className=" border-l flex flex-col justify-between  p-2 w-[40%] xl:w-[30%] h-full  ">   
                        <p className="flex justify-end gap-2 p-2"><StarIcons />4/5</p>
                        <div className=" flex flex-col gap-2 items-end">
                            <p className="text-lg xlg:text-xl font-semibold">₹ 21,876</p>
                            <button className='border py-1 px-2 xlg:py-3 xlg:px-7 whitespace-nowrap rounded-3xl text-secondary border-secondary flex items-center gap-3 text-xs  sm:text-base sm:px-4 sm:py-1'>
                                For 1 Room
                            </button>
                            <p className="text-[12px] text-center text-gray-300">Per Night + Taxes (1 Room)</p>
                            <Link to={`/hotel-package-details/${data?.id}`}>
                                <button className=' py-1 xlg:py-3 px-2  whitespace-nowrap rounded-3xl text-white hover:bg-orange-600 bg-secondary flex items-center gap-3 text-xs  sm:text-base sm:px-4 sm:py-1'>
                                    View package
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <p className='text-center mt-4 '>
                   {data?.short_des}
                </p>
            </div>
        </Link>

    );
};

export default StayHotelCard;