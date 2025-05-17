import SectionBanner from '@/components/home/SectionBanner';
import Aminities from '@/components/hotelPackage/details/Aminities';
import ExperienceSection from '@/components/hotelPackage/details/ExperienceSection';
import HotelPolicies from '@/components/hotelPackage/details/HotelPolicies';
import NearbyHotels from '@/components/hotelPackage/details/NearbyHotels';
import RealMomentSection from '@/components/hotelPackage/details/RealMomentSection';
import SpaceSection from '@/components/villaPackageDetails/SpaceSection';
import VillaDetailsSection from '@/components/villaPackageDetails/VillaDetailsSection';
import VillaFacilities from '@/components/villaPackageDetails/VillaFacilities';
import VillaPackageGallery from '@/components/villaPackageDetails/VillaPackageGallery';
import element from '@/assets/images/element1.png';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CiLocationOn } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { ScrollRestoration } from 'react-router-dom';
import SearchTab from '@/components/common/SearchTab';
import { AmanityData } from '@/lib/Database';

const VillaPackageDetails = () => {
    return (
        <>
            <ScrollRestoration />
            <Helmet>
                <title>Villa Package Details</title>
            </Helmet>
            <div className="">
                <div className="hidden md:block w-11/12 mx-auto px-4">

                    <div className="">
                        <p className=" md:text-[32px] font-semibold text-primary">Sunshine & Soul</p>
                        <p className="flex items-center gap-2 text-sm md:text-[20px] text-gray-600 mb-6">
                            Cozy villa amidst the mountains
                            <CiLocationOn />
                            Lonavala
                        </p>
                    </div>

                    {/* search tab  */}
                    {/* <SearchTab/> */}
                </div>
            </div>
            <CommonPageWrapper>
                <VillaPackageGallery />
                <VillaDetailsSection />
                <SpaceSection />
                <div className="flex items-center">
                    <Aminities amenityData={AmanityData} />
                    <img src={element} alt="" className='hidden lg:block' />
                </div>
                <ExperienceSection />
                <RealMomentSection />
                <VillaFacilities />
                <NearbyHotels />
                <HotelPolicies />
                <SectionBanner />
            </CommonPageWrapper>
        </>
    );
};

export default VillaPackageDetails;