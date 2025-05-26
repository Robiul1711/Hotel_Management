import MenuModal from '@/components/common/MenuModal';
import PriceModal from '@/components/common/PriceModal';
import { mealPlans } from '@/lib/Database';
import React, { useState } from 'react';

const Aminities = ({ amenityData, data }) => {
    const [showAll, setShowAll] = useState(false);

    const displayedAmenities = showAll ? amenityData : amenityData.slice(0, 3);

    return (
        <div>
            <p className="text-[24px] font-bold">Amenities</p>

            <div id='hotel-aminities' className="grid grid-cols-2 gap-20">
                {displayedAmenities?.map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                        {item.icon}
                        <p className="text-gray-400">{item.title}</p>
                    </div>
                ))}
            </div>

            
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-primary text-white md:px-16 py-1 px-2 md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10"
                >
                    {
                        showAll ? 'View Less Amenities' : 'View More Amenities'
                    }
                </button>
            

            <div className="" id='hotel-meals'>
                <p className="text-[24px] font-bold mt-10">Meals</p>
                <p className="text-gray-400">
                    Holiday without good Food? No Ways ;)
                    You can book your meals in advance! (And don’t worry—you can change your preferences up to 24 hours before check-in. We get it, moods change! 🙂
                </p>
            </div>

            <div className="flex gap-4">
                <MenuModal pdfUrl={data?.menu} />
                <PriceModal mealPlans={mealPlans} />
            </div>
        </div>
    );
};

export default Aminities;
