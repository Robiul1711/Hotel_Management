import MenuModal from '@/components/common/MenuModal';
import PriceModal from '@/components/common/PriceModal';
import { mealPlans } from '@/lib/Database';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Aminities = ({ amenityData, data }) => {
    const [showAll, setShowAll] = useState(false);
    console.log('amenityData', amenityData)

    const displayedAmenities = showAll ? amenityData : amenityData?.slice(0, 3);

    return (
        <div>
            <p className="text-[24px] font-bold">Amenities</p>

            <div id='hotel-aminities' className="grid grid-cols-4 gap-20">
               {
                displayedAmenities?.length > 0 ? 
                <>
                 {displayedAmenities?.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-5">
                        <img src= {item?.amenitie?.media} alt="" className="" />
                       
                        <p className="text-gray-400">{item.amenitie?.name}</p>
                    </div>
                ))}
                </>:
                <p className="">No Amenities Found</p>
               }
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
                {/* <MenuModal pdfUrl={data?.menu} /> */}
                <Link to={data?.menu ? data?.menu : '#'} target='_blank'>
                    <button

                        className="bg-primary text-white md:px-16 py-1 px-2 md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10"
                    >
                        View Menu
                    </button>
                </Link>
                <PriceModal mealPlans={data?.meal_pricing} />
            </div>
        </div>
    );
};

export default Aminities;
