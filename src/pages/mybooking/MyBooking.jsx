import SectionBanner from '@/components/home/SectionBanner';
import BookingBanner from '@/components/mybooking/BookingBanner';
import BookingTab from '@/components/mybooking/BookingTab';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import element from '@/assets/images/element4.png';
import { Helmet } from 'react-helmet-async';

const MyBooking = () => {
    return (
        <div className='relative'>
            <Helmet>
                <title>My Booking</title>
            </Helmet>
            <BookingBanner />
            <CommonPageWrapper>
                <BookingTab />
            </CommonPageWrapper>
            <SectionBanner/>
            <img className='absolute top-1/2 right-0 hidden xlg:flex' src={element} alt="" />
        </div>
    );
};

export default MyBooking;