import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import img1 from '@/assets/images/celebrate1.jpg';
import img2 from '@/assets/images/celebrate2.jpg';
import img3 from '@/assets/images/celebrate3.jpg';
import Card from '../common/Card';
const data = [
    {
        img: img1,
        title: 'Birthdays & Celebrations',
        location: 'Birthdays & Celebrations',
    },
    {
        img: img2,
        title: 'Events & Ceremonies ',
        location: 'Lonavala',
    },
    {
        img: img3,
        title: `Corporate Meetings`,
        location: 'Lonavala',
    },
    {
        img: img1,
        title: 'Birthdays & Celebrations',
        location: 'Birthdays & Celebrations',
    },
    {
        img: img2,
        title: 'Events & Ceremonies ',
        location: 'Lonavala',
    },
    {
        img: img3,
        title: `Corporate Meetings`,
        location: 'Lonavala',
    },

]

const CelebrateCard = ({ data }) => {
    return (
        <div className="relative w-[115px] h-[110px] xxs:w-[140px] xxs:h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xlg:w-[360px] xl:w-[440px] xl:h-[500px] rounded-xl overflow-hidden">
            <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
                <h3 className="text-white text-base sm:text-[24px] font-semibold">
                    {data.title}
                </h3>
            </div>
        </div>
    );
};

const Celebrate = () => {
    return (
        <div className="w-full mx-auto  bg-transparent">
            <p className="text-primary  md:text-4xl lg:text-5xl lg:text-center md:text-left font-semibold mb-4">
                Celebrate with Hich
            </p>
            <Swiper
                modules={[]}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 3.1,
                    },
                    480: {
                        slidesPerView: 3.1,
                    },
                    640: {
                        slidesPerView: 3.1,
                    },
                    768: {
                        slidesPerView: 3.1,
                    },
                    1024: {
                        slidesPerView: 3.1,
                    },
                    1200: {
                        slidesPerView: 3.1
                    },
                     1400: {
                        slidesPerView: 3.5
                    }
                }}

                grabCursor={true}
                speed={3000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}

            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CelebrateCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Celebrate;