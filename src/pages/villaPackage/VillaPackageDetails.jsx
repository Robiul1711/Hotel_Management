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
import { ScrollRestoration, useParams } from 'react-router-dom';
import SearchTab from '@/components/common/SearchTab';
import { AmanityData } from '@/lib/Database';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Service from '@/components/home/Service';
import PropertyBanner from '@/components/common/PropertyBanner';

const VillaPackageDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const axiosPublic = useAxiosPublic();

    const { data: villa } = useQuery({
        queryKey: ['villa', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/single/villa/${id}`);
            return res?.data?.specificVilla;
        }
    })

    // console.log('villa related data', villa);

    return (
        <>
            <ScrollRestoration />
            <Helmet>
                <title>Villa Package Details</title>
            </Helmet>
            <div className="section-padding-x">
                <div className="">
                    <div className=" block ">

                        <div className=" flex flex-col items-start">
                            <p className=" md:text-[32px] font-semibold text-primary mb-0">{villa?.villa_name}</p>
                            <p className="flex items-center gap-2 text-sm md:text-[20px] text-gray-600 mb-6">

                                <CiLocationOn />
                                {villa?.location}
                            </p>
                            <p className="text-sm md:text-xl">{villa?.short_des}</p>
                        </div>
                        {/* <SearchTab/> */}
                    </div>
                </div>

                <VillaPackageGallery thumbnail={villa?.thumbnail} media={villa?.media} />
            </div>
            <CommonPageWrapper>

                <VillaDetailsSection villa={villa} />


                <SpaceSection villa={villa} />
                <div className="flex items-center">
                    <Aminities amenityData={villa?.amenities} data={villa} />
                    <img src={element} alt="" className='hidden lg:block' />
                </div>
                <ExperienceSection villaExperience={villa?.experiences} />
                <RealMomentSection realMoment={villa?.real_moments} />
                {/* <VillaFacilities /> */}

                {/* <NearbyHotels /> */}
                <HotelPolicies villa={villa} />
                <SectionBanner />
            </CommonPageWrapper>
        </>
    );
};

export default VillaPackageDetails;