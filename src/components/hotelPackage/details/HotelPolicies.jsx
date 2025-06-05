import { Location } from '@/lib/CustomIconPackage';
import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HotelPolicies = ({ villa }) => {
    return (
        <div className="p-4 space-y-4">
            <div className="" id='hotel-location'>
                <p className="text-[24px] font-bold leading-none mb-1">Location</p>
                <Link target='_blank' to={villa?.map_link}>
                    <p className="text-gray-400">{villa?.location}</p>
                    <p className="flex text-gray-400 underline gap-2"><Location />Open in Maps</p>
                </Link>

            </div>

            <p className="text-[24px] font-bold leading-none mb-1">Hotel Policies</p>
            <p className="text-2xl border-l-4 border-red-600 px-2 leading-tight mb-4">
                Rules And Refund Policy
            </p>

            {/* Refund Timeline */}
            <div className="flex items-start justify-between  border-gray-200 rounded-lg p-4 gap-6 max-w-[700px]">
                {/* Left side */}
                <div className=" space-y-1">
                    <FaMinusCircle className="text-orange-400 text-xl align-middle" />
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">50% Future Stay Voucher / Refund</span>
                    </div>
                    <p className="text-sm text-gray-600">On/Before 10th May, 2025</p>
                </div>

                {/* Right side */}
                <div className=" space-y-1">
                    <IoMdCloseCircle className="text-pink-600 text-xl align-middle" />
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">No Refund</span>
                    </div>
                    <p className="text-sm text-gray-600">After 10th May, 2025</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
                <button className="bg-gray-100 text-sm font-medium px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition">
                    Refund Policy
                </button>
                <button className="bg-gray-100 text-sm font-medium px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition">
                    Home Rules and Policy
                </button>
            </div>

            {/* Check-in/out Info */}
            <p className="text-sm text-gray-800">
                Check-in time: <span className="font-semibold">{villa?.check_in}</span> , Check-out time: <span className="font-semibold">{villa?.check_out}</span>
            </p>
            <p className="text-xs text-gray-500">
                <span className="underline">Note:</span> Early check-in and late check-out is subject to availability (at an additional fee)
            </p>

            <div className="space-y-3">
                <p className="text-[24px]">Contact Hotel</p>
                <div className="space-x-5">
                    <button
                        className={` px-4 md:py-2 py-1 rounded-full text-lg  bg-secondary text-white `}
                    >
                        Whatsapp Us
                    </button>
                    <button
                        className={` px-6 md:py-2 py-1 rounded-full text-lg  bg-secondary text-white `}
                    >
                        Call Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelPolicies;
