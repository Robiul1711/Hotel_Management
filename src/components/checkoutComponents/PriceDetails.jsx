import React, { useState, useEffect } from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import useAuth from '@/hooks/useAuth';
import { useLocation } from 'react-router-dom';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { set } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const PriceDetails = ({ villa, addOnPrice, selectedMealPackages }) => {

  const { user } = useAuth();


  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [dateError, setDateError] = useState('');

  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(0); // default 2 adults
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // for package total price 
  const [mealPackageTotal, setMealPackageTotal] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  // Calculation effect
  useEffect(() => {
    const newMealPackageTotal = selectedMealPackages?.reduce((total, pkg) => {
      const adultPrice = parseFloat(pkg.adult_price) || 0;
      const childPrice = parseFloat(pkg.child_price) || 0;
      return total + (adultPrice * adults) + (childPrice * children);
    }, 0);

    console.log('New Meal package total',newMealPackageTotal)

    setMealPackageTotal(newMealPackageTotal);
    // setTotalPayable(
    //   (parseFloat(villa?.price_a_night) || 0) +
    //   (parseFloat(addOnPrice) || 0) +
    //   newMealPackageTotal
    // );
  }, [selectedMealPackages, adults, children, villa?.price_a_night, addOnPrice]);


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

  // useEffect(() => {
  //   setAdults(villa?.max_guest ? parseFloat(villa?.max_guest) : 2);
  // }, [villa?.max_guest])


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

    // setLoading(true);
    const payload = {
      amount: villa?.price_a_night,
      userEmail: user?.email,
      userId: user?.id,
      villaorhotelid: villa?.id,
      type: from,
      checkindate: checkInDate,
      checkoutdate: checkOutDate,
      guests: {
        adults,
        children,
        infants,
        total: adults + children + infants,
      },
    };


    console.log(payload)

    // try {
    //   const res = await axiosPublic.post('/razoarpay/payment', payload);
    //   if (res) {
    //     toast.success('Payment successful');
    //     window.location.href = res.data.url;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error?.response?.data?.error || 'Payment failed');
    // } finally {
    //   setLoading(false);
    // }
  };

  // Calculate minimum dates
  const today = new Date().toISOString().split('T')[0];
  const minCheckOutDate = checkInDate || today;

  // calculate package price 
  // console.log('Addon prices: ', addOnPrice);
  // console.log('selected meal packages', selectedMealPackages);

  // console.log('Number of adult', adults);
  // console.log('Number of children', children);

  console.log('Meal package total', mealPackageTotal);




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

      {/* guest section  */}
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <div
          className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
          onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
        >
          <span>{adults + children} Guests</span>
          <svg
            className={`w-4 h-4 transition-transform ${guestDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {guestDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg p-4">
            {[
              { label: 'Adults', age: '12+ Years', count: adults, setCount: setAdults },
              { label: 'Children', age: '6–11 Years', count: children, setCount: setChildren },
              // { label: 'Infants', age: '0–5 Years', count: infants, setCount: setInfants },
            ].map(({ label, age, count, setCount }) => (
              <div className="flex justify-between items-center py-2" key={label}>
                <div>
                  <p className="font-medium text-sm">{label}</p>
                  <p className="text-xs text-gray-500">{age}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-600"
                    onClick={() => setCount(Math.max(count - 1, 0))}
                    disabled={count === 0}
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm">{count}</span>
                  <button
                    className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-600"
                    onClick={() => setCount(count + 1)}
                  // disabled={adults + children + infants >=  parseFloat(villa?.max_guests)} 
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


      {dateError && (
        <p className="text-red-500 text-xs mb-2">{dateError}</p>
      )}

      {/* <p className="text-sm text-green-600 flex items-center gap-1 mb-4">
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
      </p> */}

      <div className="flex justify-between items-center bg-[#FF5A1F] text-white px-4 py-3 rounded-lg mb-4">
        <span className="text-sm font-semibold">Total Payable</span>
        <span className="text-lg font-bold">₹ {parseFloat(villa?.price_a_night) + parseFloat(addOnPrice)}</span>
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

      {/* For api call  */}
      {/* <button
        onClick={handlePayment}
        disabled={loading || !acceptTerms || !checkInDate || !checkOutDate || dateError}
        className={`w-full bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 ${(loading || !acceptTerms || !checkInDate || !checkOutDate || dateError) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        {loading ? 'Processing...' : 'Continue'}
      </button> */}

      {/* For zoho form open  */}


      <Dialog>
        <DialogTrigger className="w-full">
          <button
            className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
          >
            Continue
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

      <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
        <ShieldCheck className="w-4 h-4 mr-2" />
        100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
      </div>
    </div>
  );
};

export default PriceDetails;