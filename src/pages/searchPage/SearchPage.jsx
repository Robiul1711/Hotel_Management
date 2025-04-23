import HotelResort from '@/components/stays/HotelResort';
import HotelVilla from '@/components/stays/HotelVilla';
import PrivateVilla from '@/components/stays/PrivateVilla';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';

const SearchPage = () => {
    return (
        <CommonPageWrapper>
            <p className="text-center text-8xl font-bold text-primary">Your Search result</p>
            
            <HotelResort />
            <PrivateVilla />
            <HotelResort />
            <PrivateVilla />
        </CommonPageWrapper>
    );
};

export default SearchPage;