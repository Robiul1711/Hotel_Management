import React from 'react';
import Overview from '../hotelPackage/details/Overview';
import BookingSummary from '../hotelPackage/BookingSummary';
import VillaTabSection from './VillaTabSection';

const VillaDetailsSection = ({ villa }) => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 relative'>
            {/* Left Section */}
            <div className="w-full lg:w-[70%] space-y-8">
                <VillaTabSection villa={villa} />
                <Overview villa={villa} />
            </div>

            {/* Desktop Booking Summary */}
            <div className="hidden lg:block w-full lg:w-[30%]">
                <div className="sticky top-24">
                    <BookingSummary villa={villa} />
                </div>
            </div>

            {/* Mobile Booking Summary */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-md p-4 z-50">
                <BookingSummary villa={villa} />
            </div>
        </div>
    );
};

export default VillaDetailsSection;
