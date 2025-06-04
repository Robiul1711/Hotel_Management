import React, { useEffect, useState } from 'react'
import { CheckCircle, ShieldCheck } from 'lucide-react'
import useAuth from '@/hooks/useAuth'
import { useLocation } from 'react-router-dom';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useData from '@/hooks/useData';

const HotelPriceDetails = ({ hotel }) => {
    const { user } = useAuth();
    const { hotelRoom } = useData();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [dateError, setDateError] = useState('');

    const location = useLocation();
    const from = location.state?.from;

    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const checkIn = new Date(checkInDate);
            const checkOut = new Date(checkOutDate);

            if (checkOut < checkIn) {
                const errorMsg = 'Check-out date cannot be before check-in date';
                setDateError(errorMsg);
                toast.error(errorMsg);
            } else {
                setDateError('');
            }
        }
    }, [checkInDate, checkOutDate]);


    const handleCheckInChange = (e) => {
        const newCheckInDate = e.target.value;
        setCheckInDate(newCheckInDate);

        // Reset check-out if it's now invalid
        if (checkOutDate && new Date(newCheckInDate) > new Date(checkOutDate)) {
            setCheckOutDate('');
            toast.error('Please select a new check-out date');
        }
    };


    // console.log("Navigated from:", from);
    // console.log("Hotel Room", hotelRoom);   

    // console.log(user)

    const handlePayment = async () => {
        setLoading(true)
        console.log(hotelRoom)

        if(checkInDate === '' || checkOutDate === '') {
            toast.error('Please select both check-in and check-out dates');
            setLoading(false)
            return;
        }

        const payload = {
            hoteltypeid: hotelRoom?.id,
            amount: hotelRoom?.room_price,
            userEmail: user?.email,
            userId: user?.id,
            villaorhotelid: hotel?.id,
            type: from,
            checkindate: checkInDate,
            checkoutdate: checkOutDate
        }

        console.log('this is payload', payload);


        try {
            const res = await axiosPublic.post('/razoarpay/payment', payload);
            if (res) {
                toast.success('Payment successful');
                window.location.href = res.data.url;
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        } finally {
            setLoading(false)
        }
    }

    // Calculate minimum dates
    const today = new Date().toISOString().split('T')[0];
    const minCheckOutDate = checkInDate || today;

    return (
        <div className="xlg:max-w-md w-full mx-auto border rounded-xl p-6 bg-white shadow-md">
            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">Hotel Price Details</h2>


            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={handleCheckInChange}
                        min={today}
                        className="w-full border rounded-lg p-2 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        min={minCheckOutDate}
                        className="w-full border rounded-lg p-2 text-sm"
                        disabled={!checkInDate}
                    />
                </div>
            </div>

            {dateError && (
                <p className="text-red-500 text-xs mb-2">{dateError}</p>
            )}


            {/* Zero convenience fees */}
            <p className="text-sm text-green-600 flex items-center gap-1 mb-4">
                <CheckCircle className="w-4 h-4 text-green-600" />
                You Pay Zero Convenience Fees On Your Booking!
            </p>

            {/* Charges */}
            <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                    <span>Rental Charges</span>
                    <span className="font-medium">₹ {hotelRoom?.room_price}</span>
                </div>
                <div className="flex justify-between">
                    <span>GST (As Per Government Guidelines)</span>
                    <span className="font-medium">₹ 0</span>
                </div>
            </div>

            {/* Coupon input */}
            <div className="flex items-center justify-between border rounded-lg p-3 mb-2 bg-[#F5F8FF]">
                <div>
                    <p className="text-sm font-medium">ESCAPE5</p>
                    <p className="text-xs text-green-600">Apply To Save Upto ₹ 1,500</p>
                </div>
                <button className="text-blue-600 font-medium text-sm">Apply</button>
            </div>

            {/* Voucher link */}
            <p className="text-xs text-blue-600 mb-4 cursor-pointer underline">
                View coupons / Apply Future Stay Voucher →
            </p>

            {/* Total Payable */}
            <div className="flex justify-between items-center bg-[#FF5A1F] text-white px-4 py-3 rounded-lg mb-4">
                <span className="text-sm font-semibold">Total Payable</span>
                <span className="text-lg font-bold">₹ {hotelRoom?.room_price}</span>
            </div>

            {/* Terms & checkbox */}
            <div className="flex items-start mb-4 text-xs text-gray-600">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>
                    I have read and accepted the{' '}
                    <span className="underline cursor-pointer">Terms & Conditions</span>,{' '}
                    <span className="underline cursor-pointer">Privacy Policies</span>,{' '}
                    <span className="underline cursor-pointer">Cancellation Policy</span>, and{' '}
                    <span className="underline cursor-pointer">Indemnity Form</span>
                </span>
            </div>

            {/* Continue button */}
            <button
                onClick={handlePayment}
                className="w-full bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4">
                {loading ? 'Processing...' : 'Continue'}
            </button>

            {/* Secure payment */}
            <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
                <ShieldCheck className="w-4 h-4 mr-2" />
                100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
            </div>
        </div>
    )
}

export default HotelPriceDetails
