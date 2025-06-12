import { DeleteIcons } from '@/lib/CustomIcons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSummary = ({ villa }) => {
    const navigate = useNavigate();
    
    return (
        <div className='bg-white shadow rounded-xl relative pb-16 md:pb-0 z-[9999]'>
            <p className="py-5 bg-[#fff8db] px-2 lg:text-[24px]">Booking Summary</p>
            <div className="p-8 lg:space-y-8">
                <div className="flex justify-between">
                    <p className="lg:text-lg">Executive Room x 1</p>
                    <DeleteIcons />
                </div>
                <p className="lg:text-lg">₹ {villa?.price_a_night} x 1 night</p>
                <div className="flex justify-between">
                    <p className="lg:text-lg">Tax</p>
                    <p className="lg:text-lg">₹ 0</p>
                </div>
                <div className="flex justify-between">
                    <p className="lg:text-lg">Total (tax incl.)</p>
                    <p className="lg:text-lg">₹ {villa?.price_a_night}</p>
                </div>
            </div>

            <div className="border-t p-5">
                <div className="flex gap-5 items-center justify-between">
                    <input type="text" className='border w-full h-10' />
                    <button
                        className={`px-4 py-2 rounded-full text-lg bg-secondary text-white`}
                    >
                        Apply
                    </button>
                </div>
            </div>

            {/* Desktop Button (hidden on mobile) */}
            <div className=" w-10/12 mx-auto my-5">
                <button 
                    onClick={() => navigate(`/checkout/${villa?.id}`, { state: { from: 'villa' } })}
                    className={`px-4 py-4 w-full rounded-full text-lg bg-primary text-white`}
                >
                    Reserve Now
                </button>
            </div>

            <div className="py-5 my-5 bg-gray-100">
                <p className="text-center">
                    Got Questions? Hich is at your Service
                </p>
            </div>

            {/* <div className="py-5 flex gap-2 flex-wrap justify-around">
                <button
                    className={`px-4 py-1 xlg:py-2 rounded-full text-lg bg-secondary text-white`}
                >
                    Send enquiry
                </button>

                <button
                    className={`px-4 py-1 xlg:py-2 rounded-full text-lg bg-secondary text-white`}
                >
                    Whatsapp
                </button>

                <button
                    className={`px-4 py-1 xlg:py-2 rounded-full text-lg bg-secondary text-white`}
                >
                    Call
                </button>
            </div> */}

            {/* Mobile Sticky Button (shown only on mobile) */}
            
        </div>
    );
};

export default BookingSummary;