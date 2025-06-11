import React, { useState, useRef } from 'react';
import {
    CustomActivityIcon,
    CustomAmenityIcon,
    CustomBagIcon,
    CustomBedIcon,
    CustomFoodIcon,
    CustomTransportIcon,
} from '@/lib/CustomIconPackage';

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
    <div className="bg-[#fef7da] text-dark rounded-xl p-4  h-full flex items-center md:items-start gap-2 md:flex-col">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <h3 className="font-bold text-sm xlg:text-lg mt-3 break-words line-clamp-2">{title}</h3>
            <p className="text-sm mt-2 break-words line-clamp-4">{description}</p>
        </div>
    </div>
);

const CardGrid2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);
    const endX = useRef(0);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = endX.current - startX.current;
        const threshold = 50;

        if (distance > threshold && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else if (distance < -threshold && currentIndex < data.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <div>
            {/* Mobile: Custom Carousel */}
            <div className="md:hidden my-5 overflow-hidden relative">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {data.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0 ">
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xlg:gap-6 xlg:px-4">
                    {data.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardGrid2;
