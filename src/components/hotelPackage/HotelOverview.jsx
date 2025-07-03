import React, { useState } from 'react';

const HotelOverview = ({ hotel }) => {
    console.log(hotel?.long_des)
    const [showFull, setShowFull] = useState(false);
    return (
        <div id='description' className='space-y-5 text-[#495560]'>
            <p className="text-[24px] text-black"> Description</p>
            <div className="hidden md:block">
                <p className="">
                    {/* {hotel?.long_des || 'No description available'}  */}
                    {
                        hotel?.long_des?.length > 250 ? (
                            <>
                                <p>
                                    {showFull
                                        ? hotel.long_des
                                        : hotel.long_des.slice(0, 250) + "..."}
                                </p>
                                <button
                                    onClick={() => setShowFull(prev => !prev)}
                                    className="text-blue-500 font-medium mt-1"
                                >
                                    {showFull ? "See Less" : "See More"}
                                </button>
                            </>
                        ) : (
                            <p>{hotel?.long_des || 'No description available'}</p>
                        )
                    }
                </p>
            </div>
        </div>
    );
};

export default HotelOverview;