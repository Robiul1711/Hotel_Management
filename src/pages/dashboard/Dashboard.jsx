import DashboardCardSlider from '@/components/dashboard/DashboardCardSlider';
import React from 'react';
import img1 from '@/assets/images/stay1.png';
import img2 from '@/assets/images/stay2.png';
import TravelSection from '@/components/dashboard/TravelSection';
const data = [
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores',
        location: 'Lonavala',
        price: 'INR 2500'
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



const Dashboard = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <p className="text-[32px] font-neris ">Welcome Back,  John Smith!11</p>
                    <p className='font-nerisLight '>Here's what's coming up and your recent activity.</p>
                </div>

                <DashboardCardSlider data={data} />
                <TravelSection />
            </div>
        </div>
    );
};

export default Dashboard;