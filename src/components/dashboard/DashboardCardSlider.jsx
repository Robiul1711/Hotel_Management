import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import DashboardCard from './DashboardCard';






const DashboardCardSlider = ({ data, cardNo = 3 }) => {
    return (
        <div className="w-full mx-auto py-10 bg-transparent">

            <p className="font-neris text-[24px]">Upcoming Bookings</p>

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
                        slidesPerView: 1.4,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: cardNo,
                    },
                }}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <DashboardCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DashboardCardSlider;