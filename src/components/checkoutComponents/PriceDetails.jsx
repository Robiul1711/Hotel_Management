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

const PriceDetails = ({ villa, addOnPrice, selectedAddOnId, selectedMealPackages }) => {

  const { user } = useAuth();

  console.log(user)


  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [dateError, setDateError] = useState('');

  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [initialGuestDropdownOpen, setInitialGuestDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(0); // default 2 adults
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // for package total price 
  const [mealPackageTotal, setMealPackageTotal] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  //state variable for guest calculation  
  const [initialAdults, setInitialAdults] = useState(0);
  const [initialChildren, setInitialChildren] = useState(0);
  const [extraAdults, setExtraAdults] = useState(0);
  const [extraChildren, setExtraChildren] = useState(0);


  // Calculation effect
  useEffect(() => {
    const newMealPackageTotal = selectedMealPackages?.reduce((total, pkg) => {
      const adultPrice = parseFloat(pkg.adult_price) || 0;
      const childPrice = parseFloat(pkg.child_price) || 0;
      return total + (adultPrice * adults) + (childPrice * children);
    }, 0);



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

  const handleBookNow = async () => {

    if (totalPrice === 0) {
      toast.error('Please select a meal package and initial guest');
      return;
    }

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
      amount: totalPrice,
      type: 'villa',
      userId: user?.id,
      userEmail: user?.email,
      villaorhotelid: villa?.specificVilla?.id,
      userName: user?.name,
      checkindate: checkInDate,
      checkoutdate: checkOutDate,
    };


    console.log('booking payload', payload);

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

  // calculate package price 
  // console.log('Addon prices: ', addOnPrice);
  // console.log('selected meal packages', selectedMealPackages);

  // console.log('Number of adult', adults);
  // console.log('Number of children', children);

  /*   console.log('Meal package total', mealPackageTotal);
    console.log('villa from Price details', villa); */

  const calculateTotalPrice = async () => {

    if (selectedMealPackages?.length === 0 && initialAdults === 0) {
      return toast.error('Please select a meal package and initial guest');
    }

    const payload = {
      adult_price: villa?.prices?.adult_price,
      child_price: villa?.prices?.child_price,
      extra_adult_price: villa?.specificVilla?.extra_adult_price,
      extra_child_price: villa?.specificVilla?.extra_child_price,
      initial_adult_guest: initialAdults,
      initial_child_guest: initialChildren,
      extra_adult_guest: extraAdults,
      extra_child_guest: extraChildren,
      meal_adult_price: selectedMealPackages[0]?.adult_price,
      meal_child_price: selectedMealPackages[0]?.child_price,
      addons_price: addOnPrice
    }

    console.log("The payload", payload)

    const toastId = toast.loading('Calculating price')
    try {
      const res = await axiosPublic.post('/calculate-total', payload);
      if (res) {
        toast.success('Total price calculated', { id: toastId });
        setTotalPrice(res?.data?.total_payable)
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId });
    }


  }

  useEffect(() => {
    const fetchTotalPrice = async () => {


      const payload = {
        adult_price: villa?.prices?.adult_price,
        child_price: villa?.prices?.child_price,
        extra_adult_price: villa?.specificVilla?.extra_adult_price,
        extra_child_price: villa?.specificVilla?.extra_child_price,
        initial_adult_guest: initialAdults,
        initial_child_guest: initialChildren,
        extra_adult_guest: extraAdults,
        extra_child_guest: extraChildren,
        meal_adult_price: selectedMealPackages[0]?.adult_price,
        meal_child_price: selectedMealPackages[0]?.child_price,
        addons_price: addOnPrice
      };

      /* const toastId = toast.loading('Calculating price'); */
      try {
        const res = await axiosPublic.post('/calculate-total', payload);
        if (res) {
          /* toast.success('Total price calculated', { id: toastId }); */
          setTotalPrice(res?.data?.total_payable);
        }
      } catch (error) {
        /* toast.error('Something went wrong', { id: toastId }); */
      }
    };

    fetchTotalPrice();
  }, [villa, addOnPrice, selectedMealPackages, initialAdults, initialChildren, extraAdults, extraChildren, axiosPublic])




  const handleReserveNow = async () => {
    if (totalPrice === 0) {
      toast.error('Please select a meal package and initial guest');
      return;
    }

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
      user_id: user?.id,
      villa_id: villa?.specificVilla?.id,
      meal_pack_id: selectedMealPackages[0]?.id,
      addon_id: selectedAddOnId,
      guest_name: user?.name,
      email: user?.email,
      adult_guest: String(initialAdults + extraAdults),
      child_guest: String(initialChildren + extraChildren),
      contact: user?.contact || '25235234523',
      check_in: checkInDate,
      check_out: checkOutDate,
      payable: String(totalPrice),
    };


    console.log('Reserve payload', payload);

    const toastId = toast.loading('Reserving villa...');
    try {
      const res = await axiosPublic.post('/reserve', payload);
      if (res) {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Villa reservation failed', { id: toastId });
    }

  }


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

      {/* initial guest section  */}
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Initial Guests ({villa?.specificVilla?.total_guest})</label>
        <div
          className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
          onClick={() => setInitialGuestDropdownOpen(!initialGuestDropdownOpen)}
        >
          <span>{initialAdults + initialChildren} Guests</span>
          <svg
            className={`w-4 h-4 transition-transform ${initialGuestDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {initialGuestDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg p-4">
            {[
              { label: 'Adults', age: '12+ Years', count: initialAdults, setCount: setInitialAdults },
              { label: 'Children', age: '6–11 Years', count: initialChildren, setCount: setInitialChildren },
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
                    disabled={count >= parseFloat(villa?.specificVilla?.max_guests)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* extra guest section */}
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Extra Guests ({villa?.specificVilla?.max_guest - villa?.specificVilla?.total_guest})</label>
        <div
          className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
          onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
        >
          <span>{extraAdults + extraChildren} Guests</span>
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
              { label: 'Adults', age: '12+ Years', count: extraAdults, setCount: setExtraAdults },
              { label: 'Children', age: '6–11 Years', count: extraChildren, setCount: setExtraChildren },
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
                    disabled={extraAdults + extraChildren >= parseFloat(villa?.specificVilla?.max_guests)}
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
        <button
          onClick={calculateTotalPrice}
          className="text-sm font-semibold ">Total Payable</button>
        <span className="text-lg font-bold">₹ {totalPrice}</span>
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
      {
        villa?.specificVilla?.booking_option === "reserve_btn" ?
          <button
            onClick={handleReserveNow}
            disabled={totalPrice === 0}
            className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
          >
            Reserve Now
          </button>
          :
          <button
            disabled={totalPrice === 0}
            onClick={handleBookNow}
            className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
          >
            Book Now
          </button>
      }

      {/*  <Dialog>
        <DialogTrigger className="w-full">
          

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

      <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
        <ShieldCheck className="w-4 h-4 mr-2" />
        100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
      </div>
    </div>
  );
};

export default PriceDetails;