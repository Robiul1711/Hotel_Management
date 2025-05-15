import SearchBar from '@/components/home/SearchBar';
import SectionBanner from '@/components/home/SectionBanner';
import Service from '@/components/home/Service';
import Details from '@/components/hotelPackage/Details';
import CheckInOutPolicy from '@/components/hotelPackage/details/CheckInOutPolicy';
import ExperienceSection from '@/components/hotelPackage/details/ExperienceSection';
import RealMomentSection from '@/components/hotelPackage/details/RealMomentSection';
import HichFacilities from '@/components/hotelPackage/HichFacilities';
import PackageGallery from '@/components/hotelPackage/PackageGallery';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CiLocationOn } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';

const HotelPackage = () => {
    return (
        <>
            <Helmet>
                <title>Hotel Package</title>
            </Helmet>
            <div className="">
                <div className="hidden md:block w-11/12 mx-auto px-4">

                    <div className="">
                        <p className=" md:text-[32px] font-semibold text-primary">The Peninsula Beverly Hills</p>
                        <p className="flex items-center gap-2 text-sm md:text-[20px] text-gray-600 mb-6">
                            Lush green valley view
                            <CiLocationOn />
                            Lonavala
                        </p>
                    </div>

                    <div className=" rounded-xl bg-[#f6f7f9] border p-2 md:p-8">
                        {/* Search Fields */}

                        <div className="flex  items-center justify-between  gap-4">
                            {/* Destination */}
                            <div className="hidden md:flex flex-col ">
                                <span className="text-lg text-black">Destination</span>
                                <span className="text-primary text-2xl font-medium">Lonavala</span>
                            </div>

                            {/* Check-out */}
                            <div className="flex flex-col">
                                <span className="text-lg text-black flex items-center">Check-out <RiArrowDropDownLine className='text-2xl' /></span>
                                <span className="text-primary text-2xl font-medium">28 Feb ‘25</span>
                            </div>

                            {/* Guests */}
                            <div className="flex flex-col">
                                <span className="text-lg text-black flex items-center">Guests <RiArrowDropDownLine className='text-2xl' /></span>
                                <span className="text-primary text-2xl font-medium">2 Adults | 1 Room</span>
                            </div>

                            {/* Search Button */}
                            <button className="bg-primary text-lg text-white px-12 py-4 rounded-full hover:bg-orange-600 transition-all">
                                Search
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <CommonPageWrapper>
                <PackageGallery />
                <HichFacilities />
                <Details />
                <ExperienceSection />
                <RealMomentSection/>
                <CheckInOutPolicy />
                <SectionBanner />

            </CommonPageWrapper>
        </>

    );
};

export default HotelPackage;