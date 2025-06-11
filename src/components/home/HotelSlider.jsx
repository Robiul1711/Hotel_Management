import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Card from '../common/Card';
import { FaHeart } from 'react-icons/fa';
import { StarIcons } from '@/lib/CustomIcons';
import { Link } from 'react-router-dom';
import useData from '@/hooks/useData';


const HotelCard = ({ data }) => {

    console.log(data);

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col h-[320px] sm:h-[350px] md:h-[400px] lg:h-[400px]">
            {/* Image Section - Fixed ratio but constrained by parent height */}
            <div className="relative h-[80%] w-full"> {/* Percentage of parent height */}
                <img
                    src={data?.thumbnail}
                    className="w-full h-full object-cover"
                    alt={data?.title || "Accommodation"}
                    loading="lazy" // Better performance
                />
                {/* <div className="bg-white p-1 sm:p-2 absolute top-3 sm:top-5 rounded-full right-3 sm:right-10">
                    <FaHeart className='text-xl sm:text-2xl md:text-3xl text-[#ff4c05]' />
                </div> */}
            </div>

            {/* Content Section - Flexible height */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col">
                <div className="flex items-start gap-2 sm:items-center mb-1 sm:mb-2">
                    <div className="flex flex-col flex-1 min-w-0"> {/* Prevents text overflow */}
                        <p className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl lg:text-xl truncate mb-0">
                            {data?.hotel_name}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            {data?.location}

                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            {data?.short_des}

                        </p>

                    </div>
                    <div className="flex-shrink-0">
                        <p className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                            <StarIcons className="w-3 h-3 sm:w-4 sm:h-4" />5.0
                        </p>
                    </div>
                </div>
                {/* <p className="text-primary lg:text-2xl font-bold mb-0">₹ {data?.price}</p>
                <p className="text-base text-gray-400">For Per Night + Taxes</p> */}

            </div>
        </div>
    );
};


const HotelSlider = ({ data, cardNo = 3.5 }) => {

    const { hotelData } = useData();

    return (
        <div className="w-full mx-auto py-3 lg:py-10 bg-transparent">
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
                        slidesPerView: cardNo,
                    },
                }}
            >
                {
                    hotelData ?
                        <>
                            {hotelData?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link to={`/hotel-package-details/${item?.id}`}>
                                        <HotelCard data={item} />
                                    </Link>
                                </SwiperSlide>
                            ))}

                        </>
                        :
                        <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">No Hotel Data Found</p>
                }

            </Swiper>
        </div>
    );
};

export default HotelSlider;