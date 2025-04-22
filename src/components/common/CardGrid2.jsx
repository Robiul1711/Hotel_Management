import React, { useState } from 'react';
import { FaBroom, FaRunning, FaShuttleVan, FaUtensils, FaSuitcaseRolling, FaConciergeBell } from 'react-icons/fa';
import CardGrid from './CardGrid';

const data = [
    {
        icon: <FaBroom className="text-2xl" />,
        title: 'One– Click Room Service & Housekeeping',
        description: 'Request room service or housekeeping with one tap, just download Hich app.',
    },
    {
        icon: <FaRunning className="text-2xl" />,
        title: 'Complimentary In-Hotel Activities',
        description: 'Join complimentary wellness, sports, and leisure activities.',
    },
    {
        icon: <FaShuttleVan className="text-2xl" />,
        title: 'Transportation Services',
        description: 'Travel hassle-free with our reliable transport services.',
    },
    {
        icon: <FaUtensils className="text-2xl" />,
        title: 'Order Food',
        description: 'Enjoy delicious meals delivered straight to your room or savor a delightful dining experience at our restaurant. Conveniently settle your bill during check-out.',
    },
    {
        icon: <FaSuitcaseRolling className="text-2xl" />,
        title: 'Pack My Bag Service',
        description: 'Let us pack your belongings for a stress-free departure.',
    },
    {
        icon: <FaConciergeBell className="text-2xl" />,
        title: 'Other Amenities (10 Facilities)',
        description: 'Enjoy access to Wi-Fi, laundry services, concierge assistance, and a range of other premium amenities for a comfortable stay.',
    },
    // ... (other data items)
];

const Card = ({ icon, title, description }) => (
    <div className="bg-[#F5A623] text-white rounded-xl p-6  mx-2 shadow-md">
        <div>{icon}</div>
        <h3 className="font-bold text-lg mt-3">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
    </div>
);

const CardGrid2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    return (
        <div className="">
            {/* Mobile: Simple Carousel */}
            <div className="md:hidden my-5 flex flex-col gap-5">
                {
                    data?.map(item =>  <Card key={item} {...item}/>)
                }
               
            </div>

            {/* Desktop: Grid Layout */}
            {/* <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div key={index}>
                        <Card {...item} />
                    </div>
                ))}
            </div> */}

            <div className="hidden md:block">
                <CardGrid/>
            </div>
        </div>
    );
};

export default CardGrid2;