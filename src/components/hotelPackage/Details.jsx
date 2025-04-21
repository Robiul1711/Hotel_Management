import React from 'react';
import Overview from './details/Overview';
import RoomOptions from './details/RoomOptions';

const Details = () => {
    return (
        <div className='flex gap-5'>
            <div className=" w-[70%] space-y-8">

                <Overview/>
                <RoomOptions/>
            </div>
            <div className=" w-[30%]">
                card
            </div>
        </div>
    );
};

export default Details;