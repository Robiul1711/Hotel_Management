import React from 'react';
import Overview from './details/Overview';
import RoomOptions from './details/RoomOptions';
import ExclusiveFacilitiesFAQ from './details/ExclusiveFacilitiesFAQ';
import CheckInOutPolicy from './details/CheckInOutPolicy';
import SectionBanner from '../home/SectionBanner';
import BookingSummary from './BookingSummary';


const Details = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5'>
            <div className="w-full lg:w-[70%] space-y-8">
                <Overview />
                <RoomOptions />
                <ExclusiveFacilitiesFAQ />
                <CheckInOutPolicy />
            </div>

            <div className="w-full lg:w-[30%]">
                <div className="sticky top-24"> {/* Use a bit of spacing from top */}
                    <BookingSummary />
                </div>
            </div>
        </div>

    );
};

export default Details;