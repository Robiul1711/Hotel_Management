import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '@/assets/images/newSwipe/1.jpg';
import img2 from '@/assets/images/newSwipe/2.jpg';
import img3 from '@/assets/images/newSwipe/3.jpg';
import img4 from '@/assets/images/newSwipe/4.jpg';


import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    img1,
    img2,
    img3,
    img4,
    
   
]

const CardSwipe = () => {
    return (
        <div className=" h-full">
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
                        <img src={item} className='w-full h-[440px] xlg:h-[500px] xxlg:h-[460px] xl:h-[415px] object-cover rounded-3xl' alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSwipe;