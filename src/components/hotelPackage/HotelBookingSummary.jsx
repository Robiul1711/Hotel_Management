import useData from '@/hooks/useData';
import { DeleteIcons } from '@/lib/CustomIcons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const HotelBookingSummary = ({ hotel }) => {
    const navigate = useNavigate();
    const { hotelRoom } = useData();
    // console.log(hotelRoom);

    return (
        <div className='bg-white shadow rounded-xl '>
            <p className="py-5 bg-[#fff8db] px-2 lg:text-[24px]">Hotel Booking Summary</p>
            <div className="p-4">
                {
                    hotelRoom ?
                        <div className="p-4 ">
                            <div className="flex justify-between">
                                <p className="font-semibold text-xl xlg:text-3xl">Starting ₹ {hotelRoom?.room_price} / Night</p>
                            </div>

                        </div>
                        :
                        <>
                            <p className="text-3xl text-center text-primary">Select a room Type!</p>
                        </>
                }
                <Dialog>
                    <DialogTrigger className="w-full">
                        <button
                            className={` py-2 xlg:py-4 my-4 w-full rounded-full text-lg bg-primary text-white mx-auto `}
                        >
                            Reserve Now
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                        <iframe
                            title="Hich Booking Reservation Form"
                            aria-label="Hich Booking Reservation Form"
                            src="https://forms.zohopublic.com/happiitude/form/HichBookingReservationForm/formperma/waC6BnIrySDnOkkja2rjqMK5eNviEOL80VVkx576KEo"
                            frameBorder="0"
                            style={{ height: "800px", width: "100%", border: "none" }}
                        />
                    </DialogContent>
                </Dialog>
            </div>


            {/* <div className="border-t p-5">
                <div className="flex gap-5 items-center justify-between">
                    <input type="text" className='border w-full h-10' />
                    <button
                        className={` px-4 py-2 rounded-full text-lg  bg-secondary text-white `}
                    >
                        Apply
                    </button>
                </div>

            </div> */}

            {/* <div className="w-10/12 mx-auto">
                <button
                    disabled={!hotelRoom}
                    onClick={() => navigate(`/hotel-checkout/${hotel?.id}`, { state: { from: 'hotel' } })}
                    className={` px-4 py-2 lg:py-4 w-full rounded-full text-lg  ${hotelRoom ? 'bg-primary' : 'bg-gray-400'} text-white `}
                >
                    {hotelRoom ? 'Book Now' : 'Select a Room'}
                </button>
            </div> */}

            {/* <div className="py-5 my-5 bg-gray-100 ">
                <p className="text-center">
                    Got Questions? Hich is at your Service
                </p>
            </div> */}

            {/* <div className="py-5 flex gap-2 flex-wrap justify-around">
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
            </div> */}
        </div>
    );
};

export default HotelBookingSummary;