import React from 'react';

const Overview = ({villa}) => {
    return (
        <div id='description' className='space-y-5 text-[#495560]'>
            <p className="text-[24px] text-black">Description</p>
            <div className="hidden md:block">
                <p className="xlg:text-xl">
                   {villa?.long_des}
                </p>
            </div>
        </div>
    );
};

export default Overview;