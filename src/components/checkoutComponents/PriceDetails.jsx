// import React, { useState, useEffect } from "react";
// import { CheckCircle, ShieldCheck } from "lucide-react";
// import useAuth from "@/hooks/useAuth";
// import { useLocation } from "react-router-dom";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import toast from "react-hot-toast";
// import { set } from "date-fns";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// const PriceDetails = ({
//   villa,
//   addOnPrice,
//   selectedAddOnId,
//   selectedMealPackages,
// }) => {
//   const { user } = useAuth();
//   const axiosPublic = useAxiosPublic();
//   const [loading, setLoading] = useState(false);
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [acceptTerms, setAcceptTerms] = useState(false);
//   const [dateError, setDateError] = useState("");

//   const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
//   const [initialGuestDropdownOpen, setInitialGuestDropdownOpen] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [mealPackageTotal, setMealPackageTotal] = useState(0);

//   // Guest state variables
//   const [initialAdults, setInitialAdults] = useState(0);
//   const [initialChildren, setInitialChildren] = useState(0);
//   const [extraAdults, setExtraAdults] = useState(0);
//   const [extraChildren, setExtraChildren] = useState(0);

//   // Get guest limits from villa data
//   const initialGuestLimit = villa?.specificVilla?.total_guest || 0;
//   const maxExtraGuests = villa?.specificVilla?.max_guest - initialGuestLimit;
//   const maxTotalGuests = villa?.specificVilla?.max_guest;

//   // Calculate current counts
//   const currentInitialGuests = initialAdults + initialChildren;
//   const currentExtraGuests = extraAdults + extraChildren;

//   // Calculation effect
//   useEffect(() => {
//     const newMealPackageTotal = selectedMealPackages?.reduce((total, pkg) => {
//       const adultPrice = parseFloat(pkg.adult_price) || 0;
//       const childPrice = parseFloat(pkg.child_price) || 0;
//       return total + adultPrice * (initialAdults + extraAdults) + childPrice * (initialChildren + extraChildren);
//     }, 0);

//     setMealPackageTotal(newMealPackageTotal);
//   }, [selectedMealPackages, initialAdults, initialChildren, extraAdults, extraChildren]);

//   const location = useLocation();

//   console.log(selectedMealPackages)
//   console.log(addOnPrice)

//   // Date validation effect
//   useEffect(() => {
//     if (checkInDate && checkOutDate) {
//       const checkIn = new Date(checkInDate);
//       const checkOut = new Date(checkOutDate);

//       if (checkOut < checkIn) {
//         const errorMsg = "Check-out date cannot be before check-in date";
//         setDateError(errorMsg);
//         toast.error(errorMsg);
//       } else {
//         setDateError("");
//       }
//     }
//   }, [checkInDate, checkOutDate]);

//   const handleCheckInChange = (e) => {
//     const newCheckInDate = e.target.value;
//     setCheckInDate(newCheckInDate);

//     if (checkOutDate && new Date(newCheckInDate) > new Date(checkOutDate)) {
//       setCheckOutDate("");
//       toast.error("Please select a new check-out date");
//     }
//   };

//   const handleBookNow = async () => {
//     if (totalPrice === 0) {
//       toast.error("Please select a meal package and initial guest");
//       return;
//     }

//     if (!checkInDate || !checkOutDate) {
//       toast.error("Please select both check-in and check-out dates");
//       return;
//     }

//     if (dateError) {
//       toast.error(dateError);
//       return;
//     }

//     if (!acceptTerms) {
//       toast.error("Please accept the terms and conditions");
//       return;
//     }

//     const payload = {
//       amount: totalPrice,
//       type: "villa",
//       userId: user?.id,
//       userEmail: user?.email,
//       villaorhotelid: villa?.specificVilla?.id,
//       userName: user?.name,
//       checkindate: checkInDate,
//       checkoutdate: checkOutDate,
//     };

//     try {
//       const res = await axiosPublic.post("/razoarpay/payment", payload);
//       if (res) {
//         toast.success("Payment successful");
//         window.location.href = res.data.url;
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.error || "Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const today = new Date().toISOString().split("T")[0];
//   const minCheckOutDate = checkInDate || today;

//   const calculateTotalPrice = async () => {
//     if (selectedMealPackages?.length === 0 && initialAdults === 0) {
//       return toast.error("Please select a meal package and initial guest");
//     }

//     const payload = {
//       adult_price: villa?.prices?.adult_price,
//       child_price: villa?.prices?.child_price,
//       extra_adult_price: villa?.specificVilla?.extra_adult_price,
//       extra_child_price: villa?.specificVilla?.extra_child_price,
//       initial_adult_guest: initialAdults,
//       initial_child_guest: initialChildren,
//       extra_adult_guest: extraAdults,
//       extra_child_guest: extraChildren,
//       meal_adult_price: selectedMealPackages[0]?.adult_price || 0,
//       meal_child_price: selectedMealPackages[0]?.child_price || 0,
//       addons_price: addOnPrice,
//     };

//     const toastId = toast.loading("Calculating price");
//     try {
//       const res = await axiosPublic.post("/calculate-total", payload);
//       if (res) {
//         toast.success("Total price calculated", { id: toastId });
//         setTotalPrice(res?.data?.total_payable);
//       }
//     } catch (error) {
//       toast.error("Something went wrong", { id: toastId });
//     }
//   };

//   useEffect(() => {
//     const fetchTotalPrice = async () => {
//       const payload = {
//         adult_price: villa?.prices?.adult_price,
//         child_price: villa?.prices?.child_price,
//         extra_adult_price: villa?.specificVilla?.extra_adult_price,
//         extra_child_price: villa?.specificVilla?.extra_child_price,
//         initial_adult_guest: initialAdults,
//         initial_child_guest: initialChildren,
//         extra_adult_guest: extraAdults,
//         extra_child_guest: extraChildren,
//         meal_adult_price:
//           selectedMealPackages?.length > 0
//             ? selectedMealPackages[0]?.adult_price || 0
//             : 0,
//         meal_child_price:
//           selectedMealPackages?.length > 0
//             ? selectedMealPackages[0]?.child_price || 0
//             : 0,
//         addons_price: addOnPrice,
//       };

//       try {
//         const res = await axiosPublic.post("/calculate-total", payload);
//         if (res) {
//           setTotalPrice(res?.data?.total_payable);
//         }
//       } catch (error) {
//         console.error("Error calculating price:", error);
//       }
//     };

//     fetchTotalPrice();
//   }, [
//     villa,
//     addOnPrice,
//     selectedMealPackages,
//     initialAdults,
//     initialChildren,
//     extraAdults,
//     extraChildren,
//     axiosPublic,
//   ]);

//   const handleReserveNow = async () => {
//     if (totalPrice === 0 || selectedMealPackages.length === 0) {
//       toast.error("Please select a meal package and initial guest");
//       return;
//     }

//     if (!checkInDate || !checkOutDate) {
//       toast.error("Please select both check-in and check-out dates");
//       return;
//     }

//     if (dateError) {
//       toast.error(dateError);
//       return;
//     }

//     if (!acceptTerms) {
//       toast.error("Please accept the terms and conditions");
//       return;
//     }

//     const payload = {
//       user_id: user?.id,
//       villa_id: villa?.specificVilla?.id,
//       meal_pack_id: selectedMealPackages[0]?.id,
//       addon_id: selectedAddOnId,
//       guest_name: user?.name,
//       email: user?.email,
//       adult_guest: String(initialAdults + extraAdults),
//       child_guest: String(initialChildren + extraChildren),
//       contact: user?.phone || "",
//       check_in: checkInDate,
//       check_out: checkOutDate,
//       payable: String(totalPrice),
//     };

//     const toastId = toast.loading("Reserving villa...");
//     try {
//       const res = await axiosPublic.post("/reserve", payload);
//       if (res) {
//         toast.success(res?.data?.message, { id: toastId });
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.error || "Villa reservation failed", {
//         id: toastId,
//       });
//     }
//   };
//  console.log(selectedAddOnId)
//  console.log(selectedMealPackages)
//  console.log(villa?.comission)
//   return (
//     <div className="xlg:max-w-md w-full mx-auto border rounded-xl p-6 bg-white shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Price Details</h2>

//       {/* Date Pickers */}
//       <div className="grid grid-cols-2 gap-4 mb-2">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Check-in
//           </label>
//           <input
//             type="date"
//             value={checkInDate}
//             onChange={handleCheckInChange}
//             min={today}
//             className="w-full border rounded-lg p-2 text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Check-out
//           </label>
//           <input
//             type="date"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             min={minCheckOutDate}
//             className="w-full border rounded-lg p-2 text-sm"
//             disabled={!checkInDate}
//           />
//         </div>
//       </div>

//       {/* Initial Guest Section */}
//       <div className="relative mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Initial Guests (Max {initialGuestLimit} included in base price)
//         </label>
//         <div
//           className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
//           onClick={() => setInitialGuestDropdownOpen(!initialGuestDropdownOpen)}
//         >
//           <span>{currentInitialGuests} Guests</span>
//           <svg
//             className={`w-4 h-4 transition-transform ${
//               initialGuestDropdownOpen ? "rotate-180" : ""
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>

//         {initialGuestDropdownOpen && (
//           <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg p-4">
//             {[
//               {
//                 label: "Adults",
//                 age: "12+ Years",
//                 count: initialAdults,
//                 setCount: setInitialAdults,
//               },
//               {
//                 label: "Children",
//                 age: "6–11 Years",
//                 count: initialChildren,
//                 setCount: setInitialChildren,
//               },
//             ].map(({ label, age, count, setCount }) => (
//               <div
//                 className="flex justify-between items-center py-2"
//                 key={label}
//               >
//                 <div>
//                   <p className="font-medium text-sm">{label}</p>
//                   <p className="text-xs text-gray-500">{age}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-600"
//                     onClick={() => setCount(Math.max(count - 1, 0))}
//                     disabled={count === 0}
//                   >
//                     −
//                   </button>
//                   <span className="w-4 text-center text-sm">{count}</span>
//                   <button
//                     className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-600"
//                     onClick={() => {
//                       if (currentInitialGuests < initialGuestLimit) {
//                         setCount(count + 1);
//                       } else {
//                         toast.error(`Maximum ${initialGuestLimit} initial guests allowed`);
//                       }
//                     }}
//                     disabled={currentInitialGuests >= initialGuestLimit}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Extra Guest Section */}
//       <div className="relative mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Extra Guests (Max {maxExtraGuests} allowed at additional cost)
//         </label>
//         <div
//           className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
//           onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
//         >
//           <span>{currentExtraGuests} Guests</span>
//           <svg
//             className={`w-4 h-4 transition-transform ${
//               guestDropdownOpen ? "rotate-180" : ""
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>

//         {guestDropdownOpen && (
//           <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg p-4">
//             {[
//               {
//                 label: "Extra Adults",
//                 age: "12+ Years",
//                 count: extraAdults,
//                 setCount: setExtraAdults,
//               },
//               {
//                 label: "Extra Children",
//                 age: "6–11 Years",
//                 count: extraChildren,
//                 setCount: setExtraChildren,
//               },
//             ].map(({ label, age, count, setCount }) => (
//               <div
//                 className="flex justify-between items-center py-2"
//                 key={label}
//               >
//                 <div>
//                   <p className="font-medium text-sm">{label}</p>
//                   <p className="text-xs text-gray-500">{age}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-600"
//                     onClick={() => setCount(Math.max(count - 1, 0))}
//                     disabled={count === 0}
//                   >
//                     −
//                   </button>
//                   <span className="w-4 text-center text-sm">{count}</span>
//                   <button
//                     className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-600"
//                     onClick={() => {
//                       if (currentExtraGuests < maxExtraGuests) {
//                         setCount(count + 1);
//                       } else {
//                         toast.error(`Maximum ${maxExtraGuests} extra guests allowed`);
//                       }
//                     }}
//                     disabled={currentExtraGuests >= maxExtraGuests}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {dateError && <p className="text-red-500 text-xs mb-2">{dateError}</p>}

//       <div className="flex justify-between items-center bg-[#FF5A1F] text-white px-4 py-3 rounded-lg mb-4">
//         <button
//           onClick={calculateTotalPrice}
//           className="text-sm font-semibold"
//         >
//           Total Payable
//         </button>
//         <span className="text-lg font-bold">₹ {totalPrice}</span>
//       </div>

//       <div className="flex items-start mb-4 text-xs text-gray-600">
//         <input
//           type="checkbox"
//           className="mt-1 mr-2"
//           checked={acceptTerms}
//           onChange={(e) => setAcceptTerms(e.target.checked)}
//         />
//         <span>
//           I have read and accepted the{" "}
//           <span className="underline cursor-pointer">Terms & Conditions</span>,{" "}
//           <span className="underline cursor-pointer">Privacy Policies</span>,{" "}
//           <span className="underline cursor-pointer">Cancellation Policy</span>,
//           and <span className="underline cursor-pointer">Indemnity Form</span>
//         </span>
//       </div>

//       {villa?.specificVilla?.booking_option === "reserve_btn" ? (
//         <button
//           onClick={handleReserveNow}
//           disabled={totalPrice === 0}
//           className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
//         >
//           Reserve Now
//         </button>
//       ) : (
//         <button
//           disabled={totalPrice === 0}
//           onClick={handleBookNow}
//           className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
//         >
//           Book Now
//         </button>
//       )}

//       <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
//         <ShieldCheck className="w-4 h-4 mr-2" />
//         100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
//       </div>
//     </div>
//   );
// };

// export default PriceDetails;

import React, { useState, useEffect } from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { set } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PriceDetails = ({
  villa,
  addOnPrice,
  selectedAddOnId,
  selectedMealPackages,
}) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [dateError, setDateError] = useState("");

  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [initialGuestDropdownOpen, setInitialGuestDropdownOpen] =
    useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [mealPackageTotal, setMealPackageTotal] = useState(0);

  const [initialAdults, setInitialAdults] = useState(0);
  const [initialChildren, setInitialChildren] = useState(0);
  const [extraAdults, setExtraAdults] = useState(0);
  const [extraChildren, setExtraChildren] = useState(0);

  const initialGuestLimit = villa?.specificVilla?.total_guest || 0;
  const maxExtraGuests = villa?.specificVilla?.max_guest - initialGuestLimit;
  const maxTotalGuests = villa?.specificVilla?.max_guest;

  const currentInitialGuests = initialAdults + initialChildren;
  const currentExtraGuests = extraAdults + extraChildren;

  useEffect(() => {
    const newMealPackageTotal = selectedMealPackages?.reduce((total, pkg) => {
      const adultPrice = parseFloat(pkg.adult_price) || 0;
      const childPrice = parseFloat(pkg.child_price) || 0;
      return (
        total +
        adultPrice * (initialAdults + extraAdults) +
        childPrice * (initialChildren + extraChildren)
      );
    }, 0);

    setMealPackageTotal(newMealPackageTotal);
  }, [
    selectedMealPackages,
    initialAdults,
    initialChildren,
    extraAdults,
    extraChildren,
  ]);

  const location = useLocation();

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      if (checkOut < checkIn) {
        const errorMsg = "Check-out date cannot be before check-in date";
        setDateError(errorMsg);
        toast.error(errorMsg);
      } else {
        setDateError("");
      }
    }
  }, [checkInDate, checkOutDate]);

  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);

    if (checkOutDate && new Date(newCheckInDate) > new Date(checkOutDate)) {
      setCheckOutDate("");
      toast.error("Please select a new check-out date");
    }
  };

  const handleBookNow = async () => {
    if (totalPrice === 0) {
      toast.error("Please select a meal package and initial guest");
      return;
    }

    if (!checkInDate || !checkOutDate) {
      toast.error("Please select both check-in and check-out dates");
      return;
    }

    if (dateError) {
      toast.error(dateError);
      return;
    }

    if (!acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    const payload = {
      amount: totalPrice,
      type: "villa",
      userId: user?.id,
      userEmail: user?.email,
      villaorhotelid: villa?.specificVilla?.id,
      userName: user?.name,
      checkindate: checkInDate,
      checkoutdate: checkOutDate,
    };

    try {
      const res = await axiosPublic.post("/razoarpay/payment", payload);
      if (res) {
        toast.success("Payment successful");
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const minCheckOutDate = checkInDate || today;

  const calculateTotalPrice = async () => {
    if (selectedMealPackages?.length === 0 && initialAdults === 0) {
      return toast.error("Please select a meal package and initial guest");
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
      meal_adult_price: selectedMealPackages[0]?.adult_price || 0,
      meal_child_price: selectedMealPackages[0]?.child_price || 0,
      addons_price: addOnPrice,
    };

    const toastId = toast.loading("Calculating price");
    try {
      const res = await axiosPublic.post("/calculate-total", payload);
      if (res) {
        toast.success("Total price calculated", { id: toastId });
        setTotalPrice(res?.data?.total_payable);
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

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
        meal_adult_price:
          selectedMealPackages?.length > 0
            ? selectedMealPackages[0]?.adult_price || 0
            : 0,
        meal_child_price:
          selectedMealPackages?.length > 0
            ? selectedMealPackages[0]?.child_price || 0
            : 0,
        addons_price: addOnPrice,
      };

      try {
        const res = await axiosPublic.post("/calculate-total", payload);
        if (res) {
          setTotalPrice(res?.data?.total_payable);
        }
      } catch (error) {
        console.error("Error calculating price:", error);
      }
    };

    fetchTotalPrice();
  }, [
    villa,
    addOnPrice,
    selectedMealPackages,
    initialAdults,
    initialChildren,
    extraAdults,
    extraChildren,
    axiosPublic,
  ]);

  const handleReserveNow = async () => {
    if (totalPrice === 0 || selectedMealPackages.length === 0) {
      toast.error("Please select a meal package and initial guest");
      return;
    }

    if (!checkInDate || !checkOutDate) {
      toast.error("Please select both check-in and check-out dates");
      return;
    }

    if (dateError) {
      toast.error(dateError);
      return;
    }

    if (!acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    const payload = {
      user_id: user?.id,
      villa_id: villa?.specificVilla?.id,
      meal_pack_id: selectedMealPackages[0]?.id,
      addon_id: selectedAddOnId,
      guest_name: user?.name,
      email: user?.email,
      adult_guest: String(initialAdults + extraAdults),
      child_guest: String(initialChildren + extraChildren),
      contact: user?.phone || "",
      check_in: checkInDate,
      check_out: checkOutDate,
      payable: String(totalPrice),
    };

    const toastId = toast.loading("Reserving villa...");
    try {
      const res = await axiosPublic.post("/reserve", payload);
      if (res) {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || "Villa reservation failed", {
        id: toastId,
      });
    }
  };
  const totalAddOnPrice = Array.isArray(addOnPrice)
    ? addOnPrice.reduce((acc, price) => acc + parseFloat(price || 0), 0)
    : parseFloat(addOnPrice || 0);

  // -------------------------------
  // 🆕 Details Summary Section
  // -------------------------------
  const detailRow = (label, value) => (
    <div className="flex justify-between text-sm text-gray-700 mb-1">
      <span>{label}</span>
      <span className="font-medium">₹ {value || 0}</span>
    </div>
  );
  const adultPrice = parseFloat(selectedMealPackages?.[0]?.adult_price || 0);
  const childPrice = parseFloat(selectedMealPackages?.[0]?.child_price || 0);

  const totalAdultGuests = initialAdults + extraAdults;
  const totalChildGuests = initialChildren + extraChildren;

  const mealAdultTotal = adultPrice * totalAdultGuests;
  const mealChildTotal = childPrice * totalChildGuests;

  return (
    <div className="xlg:max-w-md w-full mx-auto border rounded-xl p-6 bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Price Details</h2>

      {/* Date Pickers */}
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check-in
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={handleCheckInChange}
            min={today}
            className="w-full border rounded-lg p-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check-out
          </label>
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

      {/* Initial Guest Section */}
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Initial Guests (Max {initialGuestLimit} included in base price)
        </label>
        <div
          className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
          onClick={() => setInitialGuestDropdownOpen(!initialGuestDropdownOpen)}
        >
          <span>{currentInitialGuests} Guests</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              initialGuestDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {initialGuestDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg p-4">
            {[
              {
                label: "Adults",
                age: "12+ Years",
                count: initialAdults,
                setCount: setInitialAdults,
              },
              {
                label: "Children",
                age: "6–11 Years",
                count: initialChildren,
                setCount: setInitialChildren,
              },
            ].map(({ label, age, count, setCount }) => (
              <div
                className="flex justify-between items-center py-2"
                key={label}
              >
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
                    onClick={() => {
                      if (currentInitialGuests < initialGuestLimit) {
                        setCount(count + 1);
                      } else {
                        toast.error(
                          `Maximum ${initialGuestLimit} initial guests allowed`
                        );
                      }
                    }}
                    disabled={currentInitialGuests >= initialGuestLimit}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Extra Guest Section */}
      <div className="relative mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Extra Guests (Max {maxExtraGuests} allowed at additional cost)
        </label>
        <div
          className="border rounded-lg p-2 text-sm cursor-pointer flex justify-between items-center"
          onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
        >
          <span>{currentExtraGuests} Guests</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              guestDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {guestDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg p-4">
            {[
              {
                label: "Extra Adults",
                age: "12+ Years",
                count: extraAdults,
                setCount: setExtraAdults,
              },
              {
                label: "Extra Children",
                age: "6–11 Years",
                count: extraChildren,
                setCount: setExtraChildren,
              },
            ].map(({ label, age, count, setCount }) => (
              <div
                className="flex justify-between items-center py-2"
                key={label}
              >
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
                    onClick={() => {
                      if (currentExtraGuests < maxExtraGuests) {
                        setCount(count + 1);
                      } else {
                        toast.error(
                          `Maximum ${maxExtraGuests} extra guests allowed`
                        );
                      }
                    }}
                    disabled={currentExtraGuests >= maxExtraGuests}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {dateError && <p className="text-red-500 text-xs mb-2">{dateError}</p>}
      <div className="mb-6 border border-dashed rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm">
          Cost Breakdown
        </h3>

        {/* ✅ Show Meal Costs Only If a Meal Package is Selected */}
        {selectedMealPackages?.length > 0 &&
          adultPrice > 0 &&
          totalAdultGuests > 0 &&
          detailRow(
            `Meal Adult Total (${totalAdultGuests} × ₹${adultPrice})`,
            mealAdultTotal
          )}

        {selectedMealPackages?.length > 0 &&
          childPrice > 0 &&
          totalChildGuests > 0 &&
          detailRow(
            `Meal Child Total (${totalChildGuests} × ₹${childPrice})`,
            mealChildTotal
          )}

        {/* {initialAdults > 0 &&
          detailRow(
            `Initial Adults (${initialAdults} × ₹${villa?.prices?.adult_price})`,
            villa?.prices?.adult_price * initialAdults
          )}

        {initialChildren > 0 &&
          detailRow(
            `Initial Children (${initialChildren} × ₹${villa?.prices?.child_price})`,
            villa?.prices?.child_price * initialChildren
          )} */}

        {/* {extraAdults > 0 &&
          detailRow(
            `Extra Adults (${extraAdults} × ₹${villa?.specificVilla?.extra_adult_price})`,
            villa?.specificVilla?.extra_adult_price * extraAdults
          )} */}

        {/* {extraChildren > 0 &&
          detailRow(
            `Extra Children (${extraChildren} × ₹${villa?.specificVilla?.extra_child_price})`,
            villa?.specificVilla?.extra_child_price * extraChildren
          )} */}

        {totalAddOnPrice > 0 && detailRow("Add-on Price", totalAddOnPrice)}

        {/* {villa?.specificVilla?.commission &&
          detailRow("Commission", villa?.specificVilla?.commission)} */}
      </div>

      <div className="flex justify-between items-center bg-[#FF5A1F] text-white px-4 py-3 rounded-lg mb-4">
        <button onClick={calculateTotalPrice} className="text-sm font-semibold">
          Total Payable
        </button>
        {/* <span className="text-lg font-bold">₹ {totalPrice}</span> */}
        <span className="text-lg font-bold">
          {villa?.specificVilla?.commission
            ? (
                Number(totalPrice) +
                (Number(totalPrice) *
                  Number(villa?.specificVilla?.commission || 0)) /
                  100
              ).toFixed(2)
            : totalPrice}
        </span>
      </div>

      <div className="flex items-start mb-4 text-xs text-gray-600">
        <input
          type="checkbox"
          className="mt-1 mr-2"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <span>
          I have read and accepted the{" "}
          <span className="underline cursor-pointer">Terms & Conditions</span>,{" "}
          <span className="underline cursor-pointer">Privacy Policies</span>,{" "}
          <span className="underline cursor-pointer">Cancellation Policy</span>,
          and <span className="underline cursor-pointer">Indemnity Form</span>
        </span>
      </div>

      {villa?.specificVilla?.booking_option === "reserve_btn" ? (
        <button
          onClick={handleReserveNow}
          disabled={totalPrice === 0}
          className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
        >
          Reserve Now
        </button>
      ) : (
        <button
          disabled={totalPrice === 0}
          onClick={handleBookNow}
          className="bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 w-full"
        >
          Book Now
        </button>
      )}

      <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
        <ShieldCheck className="w-4 h-4 mr-2" />
        100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
      </div>
    </div>
  );
};

export default PriceDetails;
