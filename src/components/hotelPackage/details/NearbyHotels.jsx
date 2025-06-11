import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import img1 from '@/assets/images/hotel11.png';
import img2 from '@/assets/images/hotel22.png';
import img3 from '@/assets/images/hotel33.png';
import img4 from '@/assets/images/hotel11.png';
import img5 from '@/assets/images/hotel22.png';
import { StarIcons } from '@/lib/CustomIcons';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const data = [
    {
        img: img1,
        title: 'Bali Villa  @Vyoman',
        price: '56,000/night',
        description: `Nestled amidst [lush greenery/sparkling coastlines/serene mountains], [Resort Name] is a tranquil escape where nature meets luxury. Whether you're seeking peaceful solitude or vibrant adventure, our resort offers the perfect setting with world-class amenities, thoughtfully designed spaces, and unforgettable experiences.`,
    },
    {
        img: img2,
        title: 'Bali Villa  @Vyoman',
        price: '56,000/night',
        description: `Nestled amidst [lush greenery/sparkling coastlines/serene mountains], [Resort Name] is a tranquil escape where nature meets luxury. Whether you're seeking peaceful solitude or vibrant adventure, our resort offers the perfect setting with world-class amenities, thoughtfully designed spaces, and unforgettable experiences.`,
    },
    {
        img: img3,
        title: 'Bali Villa  @Vyoman',
        price: '56,000/night',
        description: `Nestled amidst [lush greenery/sparkling coastlines/serene mountains], [Resort Name] is a tranquil escape where nature meets luxury. Whether you're seeking peaceful solitude or vibrant adventure, our resort offers the perfect setting with world-class amenities, thoughtfully designed spaces, and unforgettable experiences.`,
    },

    {
        img: img4,
        title: 'Bali Villa  @Vyoman',
        price: '56,000/night',
        description: `Nestled amidst [lush greenery/sparkling coastlines/serene mountains], [Resort Name] is a tranquil escape where nature meets luxury. Whether you're seeking peaceful solitude or vibrant adventure, our resort offers the perfect setting with world-class amenities, thoughtfully designed spaces, and unforgettable experiences.`,
    },



]

const HotelCard = ({ data }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col h-auto  ">
            {/* Image Section */}
            <div className="relative h-[60%] sm:h-[65%] md:h-[50%] lg:h-[70%] w-full">
                <img
                    src={data?.img}
                    className="w-full h-full object-cover"
                    alt={data?.title || "Accommodation"}
                />
                <div className="bg-white p-2 absolute top-5 rounded-full right-10">
                    <FaHeart className='text-3xl text-[#ff4c05]' />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex  items-start gap-2 sm:items-center">
                    <div className="flex flex-col w-[60%] sm:w-[65%]">

                        <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl mb-0">
                            {data?.title}
                        </p>
                        <p className="text-gray-400">
                            {data?.price}
                        </p>

                    </div>

                    <div className="">
                        <p className="flex items-center gap-2"><StarIcons />5.0</p>
                    </div>


                </div>
                <p className="text-gray-400">
                    {data?.description}
                </p>
            </div>
        </div>
    );
};

const NearbyHotels = () => {
    return (
        <div className="w-full mx-auto py-10 bg-transparent" id='nearby-hotels'>
            <p className="text-[24px] font-bold">Nearby Hotels</p>
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
                        slidesPerView: 3.5,
                    },
                }}

            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <HotelCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NearbyHotels;