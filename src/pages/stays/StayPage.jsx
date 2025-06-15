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
import { Link, ScrollRestoration } from 'react-router-dom';
import StayHotelCard from '@/components/stays/StayHotelCard';
import StayVillaCard from '@/components/stays/StayVillaCard';
import useData from '@/hooks/useData';
import StayMobileCardVilla from '@/components/stays/StayMobileCardVilla';
import VillaForWeekdays from '@/components/stays/VillaForWeekdays';

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

    const [active, setActive] = useState('villa');
    const { hotelData, villaData, villaSearchResult } = useData();

    console.log('villa search result', villaSearchResult);

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
                    <div className="xmd:hidden py-5">
                        {/* <MobileFilterBar /> */}
                    </div>
                    <div className="xmd:w-[85%]">
                        <HotelVilla active={active} setActive={setActive} />
                        <div className={`hotels ${active === 'hotels' ? '' : 'hidden'}`}>
                            <div className="hidden lg:block space-y-12">
                                {
                                    hotelData?.map(item => <StayHotelCard key={item.id} data={item} />)
                                }
                            </div>



                            {/* Reels section  */}
                            <div className="hidden flex-wrap gap-10  my-5">
                                {
                                    data?.map((item) =>
                                        <div key={item?.id} className="flex justify-center items-center flex-col gap-2">
                                            <img src={item?.image} alt="" className='w-[70px]' />
                                            <p className="font-extralight text-gray-400 text-sm">{item?.name}</p>
                                        </div>)
                                }
                            </div>



                            {
                                hotelData ?
                                    <>
                                        <div className="lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                                            {
                                                hotelData?.map(item =>
                                                    <Link key={item?.id} to={`/hotel-package-details/${item?.id}`}>
                                                        <StayMobileCard key={item.id} data={item} />
                                                    </Link>
                                                )
                                            }
                                        </div>

                                        {/* <button className='w-fit mx-auto mt-5 py-3 px-10 rounded-3xl text-white bg-primary hover:bg-orange-400 flex items-center gap-3'>
                                            View All
                                        </button> */}
                                    </> :
                                    <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">No Hotel Data Found</p>
                            }
                        </div>

                        <div className={`hotels ${active === 'villa' ? '' : 'hidden'}`}>
                            {
                                villaSearchResult ?
                                    (

                                        <>
                                            {
                                                villaSearchResult?.length > 0 ? (
                                                    <div className="hidden lg:block space-y-12">

                                                        <p className="text-primary text-xl xmd:text-3xl xlg:text-5xl">
                                                            Your search result
                                                        </p>
                                                        {
                                                            villaSearchResult?.map(item => <StayVillaCard key={item.id} data={item} />)
                                                        }
                                                    </div>
                                                ) :
                                                    (
                                                        <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">No Villa Data Found</p>

                                                    )
                                            }
                                        </>
                                    ) :
                                    (
                                        <div className="hidden lg:block space-y-12">

                                            {
                                                villaData?.map(item => <StayVillaCard key={item.id} data={item} />)
                                            }
                                        </div>
                                    )
                            }


                            {/* reels section  */}
                            <div className="hidden  flex-wrap gap-10  my-5">
                                {
                                    data?.map((item) =>
                                        <div key={item?.id} className="flex justify-center items-center flex-col gap-2">
                                            <img src={item?.image} alt="" className='w-[70px]' />
                                            <p className="font-extralight text-gray-400 text-sm">{item?.name}</p>
                                        </div>)
                                }
                            </div>

                            {/* Mobile view  */}
                            {
                                villaData ?
                                    <>
                                        {
                                            villaSearchResult ? (
                                                <div className=" lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                                                    <p className="text-primary text-xl xmd:text-3xl xlg:text-5xl">
                                                        This is search result
                                                    </p>
                                                    {
                                                        villaSearchResult?.map(item => <Link key={item.id} to={`/villa-package-details/${item?.id}`}>
                                                            <StayMobileCardVilla key={item.id} data={item} />
                                                        </Link>)
                                                    }
                                                </div>
                                            ) :
                                                (
                                                    <div className=" lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                                                        {
                                                            villaData?.map(item => <Link key={item.id} to={`/villa-package-details/${item?.id}`}>
                                                                <StayMobileCardVilla key={item.id} data={item} />
                                                            </Link>)
                                                        }
                                                    </div>
                                                )
                                        }

                                        {/* <button className='w-fit mx-auto mt-5 py-3 px-10 rounded-3xl text-white bg-primary flex items-center gap-3'>
                                            View All
                                        </button> */}
                                    </>
                                    :
                                    <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">No Villa Data Found</p>
                            }


                        </div>

                    </div>
                </div>
                {/* <Keypoints /> */}
                {/* <VillaForWeekdays /> */}
            </CommonPageWrapper >
            <SectionBanner />
        </>
    );
};

export default StayPage;