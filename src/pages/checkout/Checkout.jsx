import SectionBanner from '@/components/home/SectionBanner';
import React from 'react';
import checkoutBanner from '@/assets/images/checkoutBanner.png'
import AnySpecialRequests from '@/components/checkoutComponents/AnySpecialRequests';
import SunshineAndSoul from '@/components/checkoutComponents/SunshineAndSoul';
import BookingCancellationPolicy from '@/components/checkoutComponents/BookingCancellationPolicy';
import PriceDetails from '@/components/checkoutComponents/PriceDetails';
const Checkout = () => {
    return (
        <div>
            <div className='relative'>
<img src={checkoutBanner} alt="" className='w-full' />
<div className='absolute top-0 left-0 w-full section-padding-x flex justify-between gap-6'>
    <div className='space-y-7 w-[70%]'>
   <SunshineAndSoul />
<BookingCancellationPolicy />
    </div>
    <div className='w-[30%]'>
        <PriceDetails />
    </div>
</div>
            </div>
            <div className='section-padding-x max-w-[70%] w-full space-y-6'>
                <div className='flex items-center justify-between  bg-[#FEF7DA] p-4 rounded-xl '>
                    <h1 className=''>Any issue to complete your booking?</h1>
                    <button className='border border-primary px-4 py-2 rounded-md'>Click here</button>
                </div>
                <AnySpecialRequests />

            </div>
              <SectionBanner />
        </div>
    );
};

export default Checkout;