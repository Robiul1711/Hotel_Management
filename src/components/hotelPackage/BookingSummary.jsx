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

const BookingSummary = ({ villa }) => {
    const navigate = useNavigate();

    return (
        <div className='bg-white shadow rounded-xl relative  md:pb-0 z-[9999] border'>
            {/* <p className="py-5 bg-[#fff8db] px-2 lg:text-[24px]">Booking Summary</p> */}
            <div className="p-4 ">
                <div className="flex justify-between">
                    <p className="font-semibold text-xl xlg:text-3xl">Starting ₹ {villa?.prices?.villa_price} / Night</p>
                </div>
                {/* zoho form  */}
                {/* <Dialog>
                    <DialogTrigger className="w-full">
                        <button
                            className={`px-4 py-2 xlg:py-4 w-full rounded-full text-lg bg-primary text-white `}
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
                </Dialog> */}

            </div>



            {/* Desktop Button (hidden on mobile) */}
            <div className=" w-10/12 mx-auto my-5">
            {console.log(villa)}
                <button
                    onClick={() => navigate(`/villa-checkout/${villa?.specificVilla?.id}`, { state: { from: 'villa' } })}
                    className={`px-4 py-4 w-full rounded-full text-lg bg-primary text-white`}
                >
                    {
                        villa?.specificVilla?.booking_option === "reserve_btn" ? " Reserve Now" : "Book Now"
                    }
                </button>

                


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