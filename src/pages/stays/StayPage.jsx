import SectionBanner from '@/components/home/SectionBanner';
import HotelResort from '@/components/stays/HotelResort';
import HotelVilla from '@/components/stays/HotelVilla';
import Keypoints from '@/components/stays/Keypoints';
import PrivateVilla from '@/components/stays/PrivateVilla';
import StayBanner from '@/components/stays/StayBanner';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';

const StayPage = () => {
    return (
        <>
            <StayBanner />
            <CommonPageWrapper>
                <HotelVilla/>
                <HotelResort/>
                <PrivateVilla/>
                <Keypoints/>
            </CommonPageWrapper>
            <SectionBanner />
        </>
    );
};

export default StayPage;