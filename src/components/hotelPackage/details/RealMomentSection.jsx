import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import img1 from '@/assets/images/real1.jpg';
import img2 from '@/assets/images/real2.jpg';
import img3 from '@/assets/images/real3.jpg';
import img4 from '@/assets/images/real4.jpg';
import img5 from '@/assets/images/real5.jpg';

const data = [
    {
        img: img1,
        title: 'Vijay March 10',
        time: '12.34 AM',
    },
    {
        img: img2,
        title: 'Vijay March 10',
        time: '12.34 AM',
    },
    {
        img: img3,
        title: 'Vijay March 10',
        time: '12.34 AM',
    },
    {
        img: img4,
        title: 'Vijay March 10',
        time: '12.34 AM',
    },
    {
        img: img5,
        title: 'Vijay March 10',
        time: '12.34 AM',
    },
    {
        img: img1,
        title: 'Vijay March 10',
        time: '12.34 AM',
    },

]

const CelebrateCard = ({ data }) => {
    return (
        <div className="relative w-[115px] h-[170px] xxs:w-[140px] xxs:h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xlg:w-[360px] xl:w-[300px] xl:h-[350px] rounded-xl overflow-hidden">
            <img
                src={data?.media_name}
                alt={data.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end   text-center px-1 md:px-4">
                <div className="flex items-center justify-between w-full my-2 ">
                    <span className="text-white text-[8px] md:text-sm ">
                        {data.title}
                    </span>
                    <span className="text-white text-[8px] md:text-xs">{data.time}</span>
                </div>
            </div>
        </div>
    );
};

const RealMomentSection = ({realMoment}) => {
    // console.log(realMoment)
    return (
        <div className="w-full mx-auto lg:py-10 py-4 bg-transparent" id='real-moments'>
            <p className="text-[24px] font-bold">Real Moments</p>
            <p className="text-gray-400">Real People, Real Stories (just like you)</p>
            <Swiper
                modules={[]}
                spaceBetween={20}
                loop={true}
                slidesPerView={5.1}
                grabCursor={true}
                speed={3000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2.5,
                    },
                    400: {
                        slidesPerView: 3.2,
                    },
                    640: {
                        slidesPerView: 3.2,
                    },
                    750: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3.2,
                    },
                    1500:{
                        slidesPerView: 3.5,
                    },
                    1650:{
                        slidesPerView: 4.5
                    }

                }}

            >
                {realMoment?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CelebrateCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RealMomentSection;