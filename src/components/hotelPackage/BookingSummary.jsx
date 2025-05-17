import { DeleteIcons } from '@/lib/CustomIcons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSummary = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white shadow rounded-xl'>
            <p className="py-5 bg-[#fff8db] px-2 lg:text-[24px]">Booking Summary</p>
            <div className="p-8 lg:space-y-8">
                <div className="flex justify-between">
                    <p className="lg:text-lg">Executive Room x 1</p>
                    <DeleteIcons />
                </div>
                <p className="lg:text-lg">₹ 3,500 x 1 night</p>
                <div className="flex justify-between">
                    <p className="lg:text-lg">Tax</p>
                    <p className="lg:text-lg">₹ 500</p>
                </div>
                <div className="flex justify-between">
                    <p className="lg:text-lg">Total (tax incl.)</p>
                    <p className="lg:text-lg">₹ 4000</p>
                </div>
            </div>

            <div className="border-t p-5">
                <div className="flex gap-5 items-center justify-between">
                    <input type="text" className='border w-full h-10' />
                    <button
                        className={` px-4 py-2 rounded-full text-lg  bg-secondary text-white `}
                    >
                        Apply
                    </button>
                </div>

            </div>

            <div className="w-10/12 mx-auto">
                <button onClick={() => navigate('/checkout')}
                    className={` px-4 py-2 lg:py-4 w-full rounded-full text-lg  bg-primary text-white `}
                >
                    Book now
                </button>
            </div>

            <div className="py-5 my-5 bg-gray-100 ">
                <p className="text-center">
                    Got Questions? Hich is at your Service
                </p>
            </div>

            <div className="py-5 flex gap-2 flex-wrap justify-around">
                <button
                    className={` px-4 py-1 xlg:py-2 rounded-full text-lg  bg-secondary text-white `}
                >
                    Send  equiry
                </button>

                <button
                    className={` px-4 py-1 xlg:py-2 rounded-full text-lg  bg-secondary text-white `}
                >
                    Whatsapp
                </button>

                <button
                    className={` px-4 py-1 xlg:py-2 rounded-full text-lg  bg-secondary text-white `}
                >
                    Call
                </button>
            </div>
        </div>
    );
};

export default BookingSummary;