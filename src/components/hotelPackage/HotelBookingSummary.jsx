import useData from '@/hooks/useData';
import { DeleteIcons } from '@/lib/CustomIcons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelBookingSummary = ({ hotel }) => {
    const navigate = useNavigate();
    const { hotelRoom } = useData();
    // console.log(hotelRoom);

    return (
        <div className='bg-white shadow rounded-xl'>
            <p className="py-5 bg-[#fff8db] px-2 lg:text-[24px]">Hotel Booking Summary</p>
            {
                hotelRoom ?
                    <div className="p-8 lg:space-y-8">
                        <div className="flex justify-between">
                            <p className="lg:text-lg">Executive Room x 1</p>
                            <DeleteIcons />
                        </div>
                        <p className="lg:text-lg">₹ {hotelRoom?.room_price} x 1 night</p>
                        <div className="flex justify-between">
                            <p className="lg:text-lg">Tax</p>
                            <p className="lg:text-lg">₹ 0</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="lg:text-lg">Total (tax incl.)</p>
                            <p className="lg:text-lg">₹ {hotelRoom?.room_price}</p>
                        </div>
                    </div>
                    :
                    <>
                        <p className="text-3xl text-center text-primary">Select a room Type!</p>
                    </>
            }

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
                <button
                    disabled={!hotelRoom}
                    onClick={() => navigate(`/hotel-checkout/${hotel?.id}`, { state: { from: 'hotel' } })}
                    className={` px-4 py-2 lg:py-4 w-full rounded-full text-lg  ${hotelRoom ? 'bg-primary' : 'bg-gray-400'} text-white `}
                >
                    {hotelRoom ? 'Book Now' : 'Select a Room'}
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

export default HotelBookingSummary;