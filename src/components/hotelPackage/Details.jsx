import React from 'react';
import Overview from './details/Overview';
import RoomOptions from './details/RoomOptions';
import ExclusiveFacilitiesFAQ from './details/ExclusiveFacilitiesFAQ';
import CheckInOutPolicy from './details/CheckInOutPolicy';
import SectionBanner from '../home/SectionBanner';
import BookingSummary from './BookingSummary';
import Aminities from './details/Aminities';
import ExperienceSection from './details/ExperienceSection';
import { AmanityData } from '@/lib/Database';
import HotelOverview from './HotelOverview';
import HotelBookingSummary from './HotelBookingSummary';


const Details = ({hotel}) => {
    return (
        <div className='flex flex-col lg:flex-row gap-5'>
            <div className="w-full lg:w-[70%] space-y-8">
                <HotelOverview hotel={hotel} />
                <RoomOptions roomTypes={hotel?.room_types}  />
                <ExclusiveFacilitiesFAQ />
                <Aminities amenityData={AmanityData} data={hotel} />
                
            </div>

            <div className="w-full lg:w-[30%]">
                <div className="sticky top-24"> {/* Use a bit of spacing from top */}
                  <HotelBookingSummary hotel={hotel}/>
                </div>
            </div>
        </div>

    );
};

export default Details;