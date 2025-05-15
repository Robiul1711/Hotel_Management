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

const VillaPackageDetails = () => {
    return (
        <>
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
                <VillaPackageGallery />
                <VillaDetailsSection />
                <SpaceSection />
                <div className="flex items-center">
                    <Aminities />
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