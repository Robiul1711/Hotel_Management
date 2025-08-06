import React from 'react';
import img1 from '@/assets/images/stay1.png';
import img2 from '@/assets/images/stay2.png';
import DashboardCard from '@/components/dashboard/DashboardCard';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


import ReviewForm from "@/pages/dashboard/bookingHistory/ReviewForm";
import { CiLocationOn } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
const data = [
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores',
        location: 'Lonavala',
        price: 'INR 2500',
        checkIn: '14:00',
        checkOut: '12:00',
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores2',
        location: 'Lagos, Nigeria',
        price: 'INR 2500'
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores3',
        location: 'Lonavala',
        price: 'INR 2500'
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores4',
        location: 'Lagos, Nigeria',
        price: 'INR 2500'
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores5',
        location: 'Lagos, Nigeria',
        price: 'INR 2500'
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores6',
        location: 'Lagos, Nigeria',
        price: 'INR 2500'
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores',
        location: 'Lagos, Nigeria',
        price: 'INR 2500'
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores',
        location: 'Lagos, Nigeria',
        price: 'INR 2500'
    }
]

const BookingHistory = () => {

    const axiosSecure = useAxiosSecure();

    const { data: bookingHistoryData } = useQuery({
        queryKey: ['bookingHistoryData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking-history`);
            return res?.data?.bookedVillas;
        }
    })


    return (
        <div>
            <h1 className='text-2xl font-semibold mb-6 font-neris'>Booking History</h1>
            <div className='grid grid-cols-1  xmd:grid-cols-2 xlg:grid-cols-3 gap-4'>
                {
                    bookingHistoryData?.map((item, index) => {
                        return (

                            <VillBookingCard key={index} data={item} checkin={item?.checkindate} checkout={item?.checkoutdate} />

                        )
                    }

                    )
                }

            </div>

        </div>
    );
};



const VillBookingCard = ({ data, checkin, checkout }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();


    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col ">
            {/* Image Section */}

            <Link to={`/villa-package-details/${data?.id}`}>
                <div className="relative  w-full">
                    <img
                        src={data?.thumbnail}
                        className="w-full h-[250px] lg:h-[400px] object-cover"
                        alt={data?.title || "Accommodation"}
                    />

                    <p className="text-white flex items-center gap-3 absolute top-3 sm:top-4 left-0 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
                        <CiLocationOn /> {data?.location}
                    </p>

                    <p className={`text-white flex items-center gap-3  absolute top-3 sm:top-4 right-0 px-2 py-1 sm:px-3 text-sm sm:text-lg   bg-secondary rounded-l-lg`}>
                        Status: {data?.booking_status}
                    </p>
                </div>
            </Link>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2 sm:items-center">
                    <div className="flex justify-between  w-full">
                        <p className="w-[70%] lg:text-xl font-semibold mb-0">{data?.villa_name}</p>
                        <p className="lg:text-xl font-semibold mb-0">INR {data?.paid_amount}</p>
                    </div>
                </div>

                <ReviewForm villa={data} />

                <div className="flex  items-center">
                    {checkin && checkout ? (
                        <div className="flex justify-between items-center gap-5">
                            <div>
                                <h6 className="text-xs ">Check In</h6>
                                <h6 className="text-sm text-gray-400">{checkin}</h6>
                            </div>
                            <HiArrowLongRight className="text-gray-400 text-2xl" />
                            <div>
                                <h6 className="text-xs ">Check Out</h6>
                                <h6 className="text-sm text-gray-400">{checkout}</h6>
                            </div>
                        </div>
                    ) : (
                        // <button className="border inline-flex border-primary hover:text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl hover:bg-primary duration-300 transition-all whitespace-nowrap">
                        //   Web Check In
                        // </button>
                        <></>
                    )}
                    {/* {
            pathname === '/dashboard/booking' ? (
              <button onClick={() => navigate(`/dashboard/view-detais`)} className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl hover:bg-orange-600 transition-all whitespace-nowrap">
                View Details
              </button>
            ) : (
              <button className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl hover:bg-orange-600 transition-all whitespace-nowrap">
                View Details
              </button>
            )
          } */}

                </div>
            </div>
        </div>
    );
};

export default BookingHistory;