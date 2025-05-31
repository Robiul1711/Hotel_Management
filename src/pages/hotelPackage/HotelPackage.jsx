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
import useAxiosPublic from '@/hooks/useAxiosPublic';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CiLocationOn } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { ScrollRestoration, useParams } from 'react-router-dom';

const HotelPackage = () => {

    const { id } = useParams();
    console.log(id);
    const axiosPublic = useAxiosPublic();

    const { data: hotel } = useQuery({
        queryKey: ['hotel', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`single/hotel/${id}`);
            return res?.data?.allHotel;
        }
    })

    console.log(hotel);

    return (
        <>
            <ScrollRestoration />
            <Helmet>
                <title>Hotel Package Details</title>
            </Helmet>
            <div className="">
                <div className="hidden md:block w-11/12 mx-auto px-4">

                    <div className="">
                        <p className=" md:text-[32px] font-semibold text-primary">{hotel?.hotel_name}</p>
                        <p className="flex items-center gap-2 text-sm md:text-[20px] text-gray-600 mb-6">

                            <CiLocationOn />
                            {hotel?.location}
                        </p>
                    </div>

                    {/* search tab  */}
                    {/* <SearchTab/> */}
                </div>
            </div>
            <CommonPageWrapper>
                <PackageGallery hotel={hotel} />
                <HichFacilities hotel={hotel} />
                <Details hotel={hotel} />
                <ExperienceSection villaExperience={hotel?.experiences} />
                <RealMomentSection realMoment={hotel?.real_moments} />
                <NearbyHotels />
                {/* <CheckInOutPolicy /> */}

                <HotelPolicies />

                <SectionBanner />

            </CommonPageWrapper>
        </>

    );
};

export default HotelPackage;