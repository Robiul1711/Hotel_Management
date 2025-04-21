import DropdownBtn from '@/components/common/DropdownBtn';
import React from 'react';
import RoomList from './RoomList';

const RoomOptions = () => {
    return (
        <div>
            <p className="text-[24px] text-black">Room Options</p>
            <div className="my-5">
                <DropdownBtn />
                <RoomList/>
            </div>
        </div>
    );
};

export default RoomOptions;