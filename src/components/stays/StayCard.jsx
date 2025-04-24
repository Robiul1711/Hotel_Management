import { SmallStarIcons, StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons, TrackingIcons } from '@/lib/CustomIcons';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const StayCard = ({ data }) => {
    return (
        <div className="border-2 border-gray-200 rounded-xl bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white  overflow-hidden duration-300 w-full rounded-xl ">
                {/* Image Section */}
                <div className="relative w-[50%]">
                    <img
                        src={data?.img}
                        className="w-full h-full object-cover"
                        alt={data?.title || "Accommodation"}
                    />
                    <p className="text-white absolute top-3 left-3 sm:top-4 sm:left-4 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
                        Free Exclusive Services
                    </p>
                </div>

                {/* Content Section */}
                <div className=" bg-white w-[60%] flex  items-start">
                    {/* content left side  */}
                    <div className="  flex flex-col justify-between w-3/4">
                        <div className="p-4">
                            <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl line-clamp-2">
                                {data?.title}
                            </p>
                            <p className="flex items-center text-sm sm:text-base md:text-lg gap-1 sm:gap-2">
                                <IoLocationOutline className="flex-shrink-0" />
                                <span className="truncate">{data?.location} | Maharashta</span>
                            </p>

                            <p className="flex items-center text-sm sm:text-base md:text-lg gap-4 sm:gap-2">

                                <span className="truncate">Upto 13 Guests</span>
                                <SmallStarIcons />
                                <span className="">4 Rooms</span>
                                <SmallStarIcons />
                                <span className="">4 Baths</span>

                            </p>

                            <p className="flex items-center text-sm sm:text-base md:text-lg gap-1 sm:gap-2">
                                Great for : <TrackingIcons /> Trekking

                            </p>
                        </div>
                        <div className="flex border-t pt-4 justify-evenly items-center ">
                            <div className="border p-5 rounded-full">
                                <Stay1Icons />
                            </div>

                            <div className="border p-5 rounded-full">
                                <Stay2Icons />
                            </div>

                            <div className="border p-5 rounded-full">
                                <Stay3Icons />
                            </div>

                            <div className="border p-5 rounded-full">
                                <Stay4Icons />
                            </div>

                        </div>
                    </div>

                    {/* content right side  */}
                    <div className=" border-l flex flex-col justify-evenly p-2 w-1/4 h-full items-center ">
                        <p className="flex items-center gap-2"><StarIcons />4/5</p>
                        <div className=" flex flex-col gap-2 items-center">
                            <p className="text-2xl ">₹ 21,876</p>
                            <button className='border py-3 px-5 rounded-3xl text-secondary border-secondary flex items-center gap-3'>
                                For 1 Room
                            </button>
                            <p className="text-[12px] text-center text-gray-300">Per Night + Taxes (1 Room)</p>
                            <button className=' py-3 px-5 rounded-3xl text-white bg-secondary flex items-center gap-3'>
                                View package
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <p className='text-center mt-4 text-xl'>
                    Step into Sunshine & Soul, an exquisite villa in Lonavala where elegance meets comfort from the very first moment.
                </p>
            </div>
        </div>

    );
};

export default StayCard;