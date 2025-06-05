import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '@/assets/images/card1.png';
import img2 from '@/assets/images/card2.png';
import img3 from '@/assets/images/card3.png';
import img4 from '@/assets/images/card4.png';
import img5 from '@/assets/images/card5.png';
import img6 from '@/assets/images/card6.png';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
]

const CardSwipe = () => {
    return (
        <div className="relative">
            {/* Add custom styles for navigation and pagination */}
            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: white;
                    width: 40px;
                    height: 40px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                    padding: 10px;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 20px;
                    font-weight: bold;
                }
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: white;
                }
            `}</style>
            
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true} 
                pagination={{
                    clickable: true,
                }}
                spaceBetween={20}
                loop={true}
                grabCursor={false}
                speed={1000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} className='w-full' alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSwipe;