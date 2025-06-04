import React, { useState, useEffect } from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import useAuth from '@/hooks/useAuth';
import { useLocation } from 'react-router-dom';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const PriceDetails = ({ villa }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [dateError, setDateError] = useState('');

  const location = useLocation();
  const from = location.state?.from;

  // Date validation effect
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

  const handlePayment = async () => {
    // Validate dates
    if (!checkInDate || !checkOutDate) {
      toast.error('Please select both check-in and check-out dates');
      return;
    }

    if (dateError) {
      toast.error(dateError);
      return;
    }

    // Validate terms
    if (!acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setLoading(true);
    const payload = {
      amount: villa?.price_a_night,
      userEmail: user?.email,
      userId: user?.id,
      villaorhotelid: villa?.id,
      type: from,
      checkindate: checkInDate,
      checkoutdate: checkOutDate
    };


    console.log(payload)

    try {
      const res = await axiosPublic.post('/razoarpay/payment', payload);
      if (res) {
        toast.success('Payment successful');
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  // Calculate minimum dates
  const today = new Date().toISOString().split('T')[0];
  const minCheckOutDate = checkInDate || today;

  return (
    <div className="xlg:max-w-md w-full mx-auto border rounded-xl p-6 bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Price Details</h2>

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

      <p className="text-sm text-green-600 flex items-center gap-1 mb-4">
        <CheckCircle className="w-4 h-4 text-green-600" />
        You Pay Zero Convenience Fees On Your Booking!
      </p>

      <div className="text-sm space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Rental Charges</span>
          <span className="font-medium">₹ {villa?.price_a_night}</span>
        </div>
        <div className="flex justify-between">
          <span>GST (As Per Government Guidelines)</span>
          <span className="font-medium">₹ 0</span>
        </div>
      </div>

      <div className="flex items-center justify-between border rounded-lg p-3 mb-2 bg-[#F5F8FF]">
        <div>
          <p className="text-sm font-medium">ESCAPE5</p>
          <p className="text-xs text-green-600">Apply To Save Upto ₹ 1,500</p>
        </div>
        <button className="text-blue-600 font-medium text-sm">Apply</button>
      </div>

      <p className="text-xs text-blue-600 mb-4 cursor-pointer underline">
        View coupons / Apply Future Stay Voucher →
      </p>

      <div className="flex justify-between items-center bg-[#FF5A1F] text-white px-4 py-3 rounded-lg mb-4">
        <span className="text-sm font-semibold">Total Payable</span>
        <span className="text-lg font-bold">₹ {villa?.price_a_night}</span>
      </div>

      <div className="flex items-start mb-4 text-xs text-gray-600">
        <input
          type="checkbox"
          className="mt-1 mr-2"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <span>
          I have read and accepted the{' '}
          <span className="underline cursor-pointer">Terms & Conditions</span>,{' '}
          <span className="underline cursor-pointer">Privacy Policies</span>,{' '}
          <span className="underline cursor-pointer">Cancellation Policy</span>, and{' '}
          <span className="underline cursor-pointer">Indemnity Form</span>
        </span>
      </div>

      <button
        onClick={handlePayment}
        disabled={loading || !acceptTerms || !checkInDate || !checkOutDate || dateError}
        className={`w-full bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 ${(loading || !acceptTerms || !checkInDate || !checkOutDate || dateError) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        {loading ? 'Processing...' : 'Continue'}
      </button>

      <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
        <ShieldCheck className="w-4 h-4 mr-2" />
        100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
      </div>
    </div>
  );
};

export default PriceDetails;