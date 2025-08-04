import React from 'react';
import img1 from '@/assets/images/stay1.png';
import img2 from '@/assets/images/stay2.png';
import DashboardCard from '@/components/dashboard/DashboardCard';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
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
                bookingHistoryData?.map((item, index) => <DashboardCard key={index} data={item} checkin={item?.checkindate} checkout={item?.checkoutdate}  />)
            }
    
        </div>

        </div>
    );
};

export default BookingHistory;