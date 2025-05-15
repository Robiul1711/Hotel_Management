import React, { useState } from 'react';
import { FaBroom, FaRunning, FaShuttleVan, FaUtensils, FaSuitcaseRolling, FaConciergeBell } from 'react-icons/fa';
import CardGrid from './CardGrid';
import { CustomActivityIcon, CustomAmenityIcon, CustomBagIcon, CustomBedIcon, CustomFoodIcon, CustomTransportIcon } from '@/lib/CustomIconPackage';


const data = [
    {
        icon: <CustomBedIcon />,
        title: 'One– Click Room Service & Housekeeping',
        description: 'Request room service or housekeeping with one tap, just download Hich app.',
    },
    {
        icon: <CustomActivityIcon />,
        title: 'Complimentary In-Hotel Activities',
        description: 'Join complimentary wellness, sports, and leisure activities.',
    },
    {
        icon: <CustomTransportIcon />,
        title: 'Transportation Services',
        description: 'Travel hassle-free with our reliable transport services.',
    },
    {
        icon: <CustomFoodIcon />,
        title: 'Order Food',
        description:
            'Enjoy delicious meals delivered straight to your room or savor a delightful dining experience at our restaurant. Conveniently settle your bill during check-out.',
    },
    {
        icon: <CustomBagIcon />,
        title: 'Pack My Bag Service',
        description: 'Let us pack your belongings for a stress-free departure.',
    },
    {
        icon: <CustomAmenityIcon />,
        title: 'Other Amenities (10 Facilities)',
        description:
            'Enjoy access to Wi-Fi, laundry services, concierge assistance, and a range of other premium amenities for a comfortable stay.',
    },
];

const Card = ({ icon, title, description }) => (
    <div className="bg-[#fef7da] text-dark rounded-xl p-6 mx-2 shadow-md h-full flex items-center md:items-start gap-2 md:flex-col">
        <div className="flex-shrink-0">{icon}</div>
        <div className="">
            <h3 className="font-bold text-lg mt-3 break-words line-clamp-2">{title}</h3>
            <p className="text-sm mt-2 break-words line-clamp-4 flex-grow">{description}</p>
        </div>
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
            <div className="md:hidden my-5 flex flex-col gap-5 ">
                {data?.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {data.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardGrid2;