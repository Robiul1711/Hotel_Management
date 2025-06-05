import React from 'react';
import CardSlider from '../common/CardSlider';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import img1 from '@/assets/images/space1.png';
import img2 from '@/assets/images/space2.png';
import { motion } from 'framer-motion';
import { SlideUp } from '@/animation/animate';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { IoLocationOutline } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';

const data = [
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 1',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },

    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 2',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 3',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },

    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 4',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },

    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 1',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },

    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 2',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 3',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },

    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        bedroom: 'Bedroom 4',
        desc: [
            ' This bedroom is on the ground floor.',
            ` Includes an AC, Wi-Fi, wardrobe `,
            `and 
              an extra mattress upon request.`,
            `Ensuite Bathroom.`

        ]
    },

]

const Card = ({ data }) => {
    // console.log(data)
    return (
        <div className="   overflow-hidden duration-300 - w-full flex flex-col h-[300px] xs:h-[340px] sm:h-[380px] md:h-[400px] lg:h-[480px]">
            {/* Image Section */}
            <div className="relative h-[60%] sm:h-[65%] md:h-[50%] lg:h-[70%] w-full">
                <img
                    src={data?.media[0]?.space_media ? data?.media[0]?.space_media : 'https://placehold.co/600x400'}
                    className="w-full h-full object-cover rounded-lg"
                    alt={data?.title || "Accommodation"}
                />
                <p className="text-white absolute top-3 right-3 sm:top-4  bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded w-fit">
                    {data?.name}
                </p>
                <p className="absolute bottom-0 left-3 text-white">{data?.bedroom}</p>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2 sm:items-center ">
                    <ul className='list-disc list-inside text-[#656565]'>
                        <li>{data?.description}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

const SpaceSection = ({ villa }) => {
    return (
        <div className="w-full mx-auto lg:py-10 py-3 bg-transparent" id='spaces'>
            <p className="text-2xl font-bold  mb-5">Spaces</p>
            <Swiper
                modules={[]}
                spaceBetween={20}
                loop={true}
                grabCursor={true}
                speed={3000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    480: {
                        slidesPerView: 1.2,
                    },
                    640: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {
                    villa?.spaces?.length > 0 ?
                        <>
                            {villa?.spaces.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card data={item} />
                                </SwiperSlide>
                            ))}
                        </> :
                        <p className="">No spaces data found</p>
                }
            </Swiper>
        </div>
    );
};

export default SpaceSection;