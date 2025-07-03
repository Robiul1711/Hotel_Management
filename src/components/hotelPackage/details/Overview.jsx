import React, { useState } from 'react';

const Overview = ({ villa }) => {
    const [showFull, setShowFull] = useState(false);


    return (
        <div id='description' className='space-y-5 text-[#495560]'>
            <p className="text-[24px] text-black">Description</p>
            <div className="hidden md:block">
                <p className="xlg:text-xl">
                    {
                        villa?.long_des?.length > 250 ? (
                            <>
                                <p className=''>
                                    {showFull
                                        ? villa.long_des
                                        : villa.long_des.slice(0, 250) + "..."}
                                </p>
                                <button
                                    onClick={() => setShowFull(prev => !prev)}
                                    className="text-blue-500 font-medium "
                                >
                                    {showFull ? "See Less" : "See More"}
                                </button>
                            </>
                        ) : (
                            <p>{villa?.long_des}</p>
                        )
                    }
                </p>
            </div>
        </div>
    );
};

export default Overview;