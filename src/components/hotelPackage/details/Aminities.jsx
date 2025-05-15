import { CustomACIcon, CustomBathIcon, CustomChildIcon, CustomElderIcon, CustomPoolIcon, CustomWifiIcon } from '@/lib/CustomIconPackage';
import React from 'react';

const Aminities = () => {
    return (
        <div>
            <p className="text-[24px] font-bold">Amenities</p>
            <div className="grid grid-cols-2 gap-20">
                <div className="flex items-center gap-5">
                    <CustomACIcon />
                    <p className="text-gray-400">Ac</p>
                </div>

                <div className="flex items-center gap-5">
                    <CustomWifiIcon />
                    <p className="text-gray-400">WiFi</p>
                </div>
                <div className="flex items-center gap-5">
                    <CustomChildIcon />
                    <p className="text-gray-400">Child Friendly</p>
                </div>
                <div className="flex items-center gap-5">
                    <CustomBathIcon />
                    <p className="text-gray-400">Ensuite Bathroom</p>
                </div>

                <div className="flex items-center gap-5">
                    <CustomElderIcon />
                    <p className="text-gray-400">Elderly Friendly</p>
                </div>

                <div className="flex items-center gap-5">
                    <CustomPoolIcon />
                    <p className="text-gray-400">Pool</p>
                </div>
            </div>

            <button className="bg-primary text-white md:px-16  md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10">View All Amenities</button>

            <div className="">
                <p className="text-[24px] font-bold mt-10">Meals</p>
                <p className="text-gray-400">
                    Holiday without good Food? No Ways ;)
                    You can book your meals in advance! (And don’t worry—you can change your preferences up to 24 hours before check-in. We get it, moods change! 🙂
                </p>
            </div>

            <div className="space-x-4">
                <button className="bg-primary text-white md:px-16  md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10">View Menu</button>
                <button className="bg-primary text-white md:px-16  md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10">Meal Pricing</button>
            </div>
        </div>
    );
};

export default Aminities;