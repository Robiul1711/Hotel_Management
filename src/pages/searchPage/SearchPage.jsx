import AntdDualRangeSlider from '@/components/common/AntdDualRangeSlider';
import ToggleButton from '@/components/common/ToggleButton';
import SectionBanner from '@/components/home/SectionBanner';
import FilterBar from '@/components/stays/FilterBar';
import HotelResort from '@/components/stays/HotelResort';
import HotelVilla from '@/components/stays/HotelVilla';
import Keypoints from '@/components/stays/Keypoints';
import MobileFilterBar from '@/components/stays/MobileFilterBar';
import PrivateVilla from '@/components/stays/PrivateVilla';
import StayBanner from '@/components/stays/StayBanner';
import StayCard from '@/components/stays/StayCard';
import StayMobileCard from '@/components/stays/StayMobileCard';
import StaySearchBar from '@/components/stays/StaySearchBar';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import { StayData } from '@/lib/Database';
import React, { useState } from 'react';

const SearchPage = () => {
    return (
        <>
            <StayBanner />
            <CommonPageWrapper>
                <div className="flex flex-col xmd:flex-row xmd:gap-14 mt-5 xmd:mt-20">
                    <div className="hidden xmd:block xmd:w-[25%] border border-l-0  rounded-r-2xl p-4">
                        <FilterBar />
                    </div>
                    <div className="xmd:hidden">
                        <MobileFilterBar />
                    </div>
                    <div className="xmd:w-[85%]">
                        <HotelVilla />
                        <div className="">
                            <div className="hidden lg:block space-y-12">
                                {
                                    StayData.slice(0, 2)?.map(item => <StayCard key={item.id} data={item} />)
                                }
                            </div>

                            <div className=" lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                                {
                                    StayData?.map(item => <StayMobileCard key={item.id} data={item} />)
                                }
                            </div>

                            <button className='w-fit mx-auto mt-5 py-3 px-10 rounded-3xl text-white bg-primary flex items-center gap-3'>
                                View All
                            </button>
                        </div>

                    </div>
                </div>
                <Keypoints />
            </CommonPageWrapper>
            <SectionBanner />
        </>
    );
};

export default SearchPage;