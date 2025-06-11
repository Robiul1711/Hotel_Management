import DropdownBtn from '@/components/common/DropdownBtn';
import React from 'react';
import RoomList from './RoomList';

const RoomOptions = ({roomTypes}) => {
    // console.log(roomTypes);
    return (
        <div id='hotel-room-options'>
            <div className="flex md:flex-col justify-between md:justify-start gap-5 mb-4">
                <p className="text-[24px] text-black">Room Options</p>
                <DropdownBtn />
            </div>
            <div className="">
                <RoomList roomTypes={roomTypes} />
            </div>
        </div>
    );
};

export default RoomOptions;