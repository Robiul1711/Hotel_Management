import AntdDualRangeSlider from '@/components/common/AntdDualRangeSlider';
import ToggleButton from '@/components/common/ToggleButton';
import SectionBanner from '@/components/home/SectionBanner';
import FilterBar from '@/components/stays/FilterBar';
import HotelResort from '@/components/stays/HotelResort';
import HotelVilla from '@/components/stays/HotelVilla';
import Keypoints from '@/components/stays/Keypoints';
import PrivateVilla from '@/components/stays/PrivateVilla';
import StayBanner from '@/components/stays/StayBanner';
import StayCard from '@/components/stays/StayCard';
import StaySearchBar from '@/components/stays/StaySearchBar';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import { StayData } from '@/lib/Database';
import React, { useState } from 'react';

const StayPage = () => {
    return (
        <>
            <StayBanner />
            <CommonPageWrapper>
                <div className="flex flex-col md:flex-row gap-14">
                    <div className="md:w-1/4 border border-l-0  rounded-r-2xl p-4">
                        <FilterBar />
                    </div>
                    <div className="md:w-3/4 ">
                        <HotelVilla />
                        {
                            StayData?.map(item => <StayCard key={item.id} data = {item}/>)
                        }
                    </div>
                </div>
                <Keypoints />
            </CommonPageWrapper>
            <SectionBanner />
        </>
    );
};

export default StayPage;