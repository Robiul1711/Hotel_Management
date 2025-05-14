import React from 'react';
import img1 from '@/assets/images/stay1.png';
import img2 from '@/assets/images/stay2.png';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useNavigate } from 'react-router-dom';
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
const CheckIn = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='pb-10'>
            <h1 className='text-2xl font-semibold mb-6 font-neris'>Web Check-in</h1>
            <div className='flex flex-col items-center justify-center bg-[#FA0] rounded-[12px] p-16'>
<p className='font-neris text-xl  md:text-[32px] text-white  max-w-[826px] text-center mx-auto '>Complete your check-in details to save time at arrival. Upload required documents securely.</p>
          <button onClick={() => navigate('/dashboard/web-check-form')} className='bg-white text-black px-4 sm:px-20 py-3 rounded-[12px] text-center  transition-all'>Complete Booking</button>
            </div>
        </div>
 <div> 
            <h1 className='text-2xl font-semibold mb-6 font-neris'>Completed Web Check-in</h1>
        <div className='grid grid-cols-1  xmd:grid-cols-2 xlg:grid-cols-3 gap-4'>
            {
                data.map((item, index) => <DashboardCard key={index} data={item}  />)
            }
    
        </div>

        </div>
        </>
    );
};

export default CheckIn;