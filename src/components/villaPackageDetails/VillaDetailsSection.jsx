import React from 'react';
import Overview from '../hotelPackage/details/Overview';
import BookingSummary from '../hotelPackage/BookingSummary';
import Aminities from '../hotelPackage/details/Aminities';
import VillaTabSection from './VillaTabSection';

const VillaDetailsSection = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5'>
            <div className="w-full lg:w-[70%] space-y-8">
                <VillaTabSection/>
                <Overview />
               

            </div>

            <div className="w-full lg:w-[30%]">
                <div className="sticky top-24"> {/* Use a bit of spacing from top */}
                    <BookingSummary />
                </div>
            </div>
        </div>
    );
};

export default VillaDetailsSection;