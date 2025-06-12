import React from 'react';

const HotelOverview = ({hotel}) => {
    return (
        <div id='description' className='space-y-5 text-[#495560]'>
            <p className="text-[24px] text-black"> Description</p>
            <div className="hidden md:block">
                <p className="">
                    {hotel?.long_des || 'No description available'}
                </p>
            </div>
        </div>
    );
};

export default HotelOverview;