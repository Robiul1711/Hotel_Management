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
                <div className="relative w-full md:w-1/2">
                    <img
                        src={data?.thumbnail}
                        className="w-full h-64 md:h-full object-cover"
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
  {[Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons].map((Icon, index) => (
    <div
      key={index}
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border rounded-full flex items-center justify-center"
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </div>
  ))}
</div>

                    </div>

                    {/* Right content */}
                    <div className="border-t md:border-t-0 md:border-l p-4 md:w-[40%] flex flex-col   gap-4">
                        <p className="flex justify-end gap-2 text-sm">
                            <StarIcons /> 4/5
                        </p>
                        <div className="text-center space-y-2">
                            <p className="text-lg font-semibold">₹ {data?.price_a_night}</p>
                            <button className="border py-1 px-4 rounded-3xl text-secondary border-secondary text-xs">
                                For 1 Room
                            </button>
                            <p className="text-[12px] text-gray-400">Per Night + Taxes (1 Room)</p>
                            <Link to={`/villa-package-details/${data?.id}`}>
                                <button className="py-1 px-4 rounded-3xl text-white bg-secondary hover:bg-orange-600 text-xs">
                                    View package
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="p-4">
                <p className="text-center text-sm text-gray-600">{data?.short_des}</p>
            </div>
        </Link>
    );
};

export default StayVillaCard;
