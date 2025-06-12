import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import img1 from '@/assets/images/Experience.jpg';
import img2 from '@/assets/images/Experience.jpg';
import img3 from '@/assets/images/Experience.jpg';
import { IoLocationOutline } from 'react-icons/io5';
const data = [
    {
        img: img1,
        title: 'Music system with Karaoke set up',
        location: 'Music system with Karaoke set up',
    },
    {
        img: img2,
        title: 'Music system with Karaoke set up ',
        location: 'Lonavala',
    },
    {
        img: img3,
        title: `Music system with Karaoke set up`,
        location: 'Lonavala',
    },
    {
        img: img1,
        title: 'Music system with Karaoke set up',
        location: 'Music system with Karaoke set up',
    },
    {
        img: img2,
        title: 'Music system with Karaoke set up ',
        location: 'Lonavala',
    },
    {
        img: img3,
        title: `Music system with Karaoke set up`,
        location: 'Lonavala',
    },

]

const ExperienceCard = ({ data }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col h-[300px] xs:h-[340px] sm:h-[380px] md:h-[400px] lg:h-[480px]">
            {/* Image Section */}
            <div className="relative h-[60%] sm:h-[65%] md:h-[50%] lg:h-[70%] w-full">
                <img
                    src={data?.media[0]?.experience_media ? data?.media[0]?.experience_media : 'https://placehold.co/600x400'}
                    className="w-full h-full object-cover"
                    alt={data?.name || "Accommodation"}
                />

            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2 sm:items-center">
                    <div className="flex flex-col ">

                        <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl line-clamp-2 mb-0">
                            {data?.name}
                        </p>
                        <p className="">
                            {data?.description?.slice(0, 200)}...
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};


const ExperienceSection = ({ villaExperience }) => {
    return (
        <div id='hotel-experiences'>
            <p className="text-[24px] font-bold">Experiences</p>
            <p className="text-gray-400">What all you can do and experience in this property</p>

            <div className="w-full mx-auto lg:py-10 py-4 bg-transparent">

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
                            slidesPerView: 4.2,
                        },
                    }}

                >
                    {villaExperience?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ExperienceCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ExperienceSection;