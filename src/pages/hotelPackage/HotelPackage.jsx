import SearchTab from '@/components/common/SearchTab';
import SearchBar from '@/components/home/SearchBar';
import SectionBanner from '@/components/home/SectionBanner';
import Service from '@/components/home/Service';
import Details from '@/components/hotelPackage/Details';
import CheckInOutPolicy from '@/components/hotelPackage/details/CheckInOutPolicy';
import ExperienceSection from '@/components/hotelPackage/details/ExperienceSection';
import HotelPolicies from '@/components/hotelPackage/details/HotelPolicies';
import NearbyHotels from '@/components/hotelPackage/details/NearbyHotels';
import RealMomentSection from '@/components/hotelPackage/details/RealMomentSection';
import HichFacilities from '@/components/hotelPackage/HichFacilities';
import PackageGallery from '@/components/hotelPackage/PackageGallery';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CiLocationOn } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { ScrollRestoration } from 'react-router-dom';

const HotelPackage = () => {
    return (
        <>
            <ScrollRestoration />
            <Helmet>
                <title>Hotel Package Details</title>
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

                    {/* search tab  */}
                    {/* <SearchTab/> */}
                </div>
            </div>
            <CommonPageWrapper>
                <PackageGallery />
                <HichFacilities />
                <Details />
                <ExperienceSection />
                <RealMomentSection />
                <NearbyHotels />
                {/* <CheckInOutPolicy /> */}

                <HotelPolicies />

                <SectionBanner />

            </CommonPageWrapper>
        </>

    );
};

export default HotelPackage;