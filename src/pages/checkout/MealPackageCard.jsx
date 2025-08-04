import { SmallStarIcons, StarIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons } from '@/lib/CustomIcons';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const MealPackageCard = ({ data, isSelected, onToggle }) => {


    return (
        <div
            className="block border-2 border-gray-200 rounded-xl bg-gray-100 overflow-hidden"
        >
            <div className="flex flex-col md:flex-row bg-white w-full rounded-xl items-center gap-10">
                {/* Image Section */}
                <div className=" w-full md:w-[30%]">
                    <img
                        src={data?.photo_url}
                        className=" w-full h-full object-cover"
                        alt={data?.title || 'Accommodation'}
                    />

                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row w-full md:w-full">

                    <div className="flex flex-col justify-between p-4 md:w-[70%]">
                        <div>
                            <p className="font-semibold text-gray-800 text-lg md:text-xl lg:text-2xl line-clamp-2 mb-0">
                                {data?.pack_name}
                            </p>

                            <div className="space-y-1">
                                <p className="mb-0"><span className="font-semibold text-xl">₹ {data?.adult_price}</span> per adult/day</p>
                                <p className="mb-0"><span className="font-semibold text-xl">₹ {data?.child_price}</span> per children/day</p>
                            </div>

                            <p className="flex flex-wrap items-center gap-2 text-sm md:text-base mt-2">
                                {data?.details}
                            </p>

                            <div className="flex gap-4">

                                <Popover>
                                    <PopoverTrigger>
                                        <button
                                            className={`text-secondary border border-secondary px-7 py-2 md:px-6 md:py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all`}>
                                            View Menu
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-screen max-w-lg">
                                        {
                                            data?.items ? (
                                                <ul className=''>
                                                    {data?.items?.map((mealItem, index) => (
                                                        <li key={index} className="text-xl font-semibold text-gray-800">
                                                            {index + 1}. {mealItem?.items_name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm text-gray-800">Refund policy not available</p>
                                            )
                                        }
                                    </PopoverContent>
                                </Popover>



                                <button
                                    onClick={() => onToggle(data)}
                                    className={`text-secondary border border-secondary px-7 py-2 md:px-6 md:py-2 rounded-full font-semibold transition-all ${isSelected
                                        ? "bg-secondary text-white hover:bg-secondary-dark"
                                        : "hover:bg-orange-600 hover:text-white"
                                        }`}
                                >
                                    {isSelected ? "✓ Added" : "+ Add to Package"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MealPackageCard;