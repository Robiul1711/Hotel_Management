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
import { StayData, StayHotelData, StayVillaData } from '@/lib/Database';
import React, { useState } from 'react';

import nearby from '@/assets/images/high.png'
import pune from '@/assets/images/pune.png'
import mumbai from '@/assets/images/mumbai.png'
import delhi from '@/assets/images/delhi.png'
import goa from '@/assets/images/goa.png'
import { Helmet } from 'react-helmet-async';
import { ScrollRestoration } from 'react-router-dom';
import StayHotelCard from '@/components/stays/StayHotelCard';
import StayVillaCard from '@/components/stays/StayVillaCard';

const data = [
    {
        id: 0,
        name: 'Highlights',
        image: nearby
    },
    {
        id: 1,
        name: 'Property Name',
        image: pune
    },
    {
        id: 2,
        name: 'Property Name',
        image: mumbai
    },
    {
        id: 3,
        name: 'Property Name',
        image: delhi
    },
    {
        id: 4,
        name: 'Property Name',
        image: goa
    }
]

const StayPage = () => {

    const [active, setActive] = useState('hotels');

    return (
        <>
            <ScrollRestoration />
            <Helmet>
                <title>Stays</title>
            </Helmet>
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
                        <HotelVilla active={active} setActive={setActive} />
                        <div className={`hotels ${active === 'hotels' ? '' : 'hidden'}`}>
                            <div className="hidden lg:block space-y-12">
                                {
                                    StayHotelData?.slice(0, 2)?.map(item => <StayHotelCard key={item.id} data={item} />)
                                }
                            </div>

                            <div className="hidden xmd:flex flex-wrap gap-10  my-5">
                                {
                                    data?.map((item) =>
                                        <div key={item?.id} className="flex justify-center items-center flex-col gap-2">
                                            <img src={item?.image} alt="" className='w-[70px]' />
                                            <p className="font-extralight text-gray-400 text-sm">{item?.name}</p>
                                        </div>)
                                }
                            </div>

                            <div className="hidden lg:block space-y-12">
                                {
                                    StayHotelData?.slice(2, 4)?.map(item => <StayHotelCard key={item.id} data={item} />)
                                }
                            </div>

                            <div className=" lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                                {
                                    StayHotelData?.map(item => <StayMobileCard key={item.id} data={item} />)
                                }
                            </div>

                            <button className='w-fit mx-auto mt-5 py-3 px-10 rounded-3xl text-white bg-primary hover:bg-orange-400 flex items-center gap-3'>
                                View All
                            </button>
                        </div>

                        <div className={`hotels ${active === 'villa' ? '' : 'hidden'}`}>
                            <div className="hidden lg:block space-y-12">
                                {
                                    StayVillaData?.slice(0, 2)?.map(item => <StayVillaCard key={item.id} data={item} />)
                                }
                            </div>

                            <div className="hidden xmd:flex flex-wrap gap-10  my-5">
                                {
                                    data?.map((item) =>
                                        <div key={item?.id} className="flex justify-center items-center flex-col gap-2">
                                            <img src={item?.image} alt="" className='w-[70px]' />
                                            <p className="font-extralight text-gray-400 text-sm">{item?.name}</p>
                                        </div>)
                                }
                            </div>

                            <div className="hidden lg:block space-y-12">
                                {
                                    StayVillaData?.slice(2, 4)?.map(item => <StayVillaCard key={item.id} data={item} />)
                                }
                            </div>

                            <div className=" lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                                {
                                    StayVillaData?.map(item => <StayMobileCard key={item.id} data={item} />)
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

export default StayPage;