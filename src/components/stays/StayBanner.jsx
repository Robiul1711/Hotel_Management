import { Carousel } from 'antd';
import banner1 from '@/assets/images/stayBanner.png';
import banner2 from '@/assets/images/stayBanner2.png';
import banner3 from '@/assets/images/stayBanner3.png';
import { CiSearch } from "react-icons/ci";
import StaySearchBar from './StaySearchBar';

const StayBanner = () => {
    const banners = [banner1, banner2, banner3];

    return (
        <div className="relative">
            <div className=" overflow-hidden">
                <Carousel
                    autoplay
                    autoplaySpeed={4000}
                    dotPosition="bottom"
                    effect="scrollx"
                    className="h-[40vh] md:h-[70vh]"
                >
                    {banners.map((banner, index) => (
                        <div key={index} className="relative h-[40vh] md:h-[70vh] w-full">
                            <img
                                src={banner}
                                className="w-full h-full object-cover"
                                alt={`Banner ${index + 1}`}
                            />
                            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:justify-start px-4 md:px-0 md:w-[45%] md:left-1/2 md:top-[25%] gap-4 md:gap-10 text-white text-center md:text-left">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                                    Your World of Joy
                                </h1>
                                <p className="text-sm sm:text-base md:text-[20px]">
                                    From Local Escapes to far-flung adventures, find what makes you <br /> happy anytime, anywhere
                                </p>
                                <div className="bg-white flex justify-between w-full px-4 rounded-full p-2 md:py-5">
                                    <input
                                        type="text"
                                        className='w-full text-sm md:text-base text-black outline-none'
                                        placeholder='Search Properties/Destinations/Packages'
                                    />
                                    <CiSearch className='text-black text-xl md:text-2xl' />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

                <StaySearchBar />
            </div>
        </div>
    );
};

export default StayBanner;
