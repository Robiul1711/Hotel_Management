import { Carousel } from 'antd';
import banner1 from '@/assets/images/stayBanner.png';
import banner2 from '@/assets/images/stayBanner2.png';
import banner3 from '@/assets/images/stayBanner3.png';
import { CiSearch } from "react-icons/ci";
import StaySearchBar from './StaySearchBar';
import { banners } from '@/lib/Database';
import SearchBar from '../home/SearchBar';

const StayBanner = () => {

    return (
        <div className="relative">
            <div className=" overflow-hidden">
                <Carousel
                    autoplay
                    autoplaySpeed={2000}
                    dotPosition="bottom"
                    effect="scrollx"
                    className="h-[33vh] md:h-[70vh]"
                >
                    {banners.map((banner, index) => (
                        <div key={index} className="relative h-[40vh] md:h-[70vh] w-full">
                            <img
                                src={banner}
                                className="w-full h-full object-cover"
                                alt={`Banner ${index + 1}`}
                            />
                            <div className="absolute inset-0 flex flex-col  md:items-start  md:justify-start px-4 md:px-0 w-[80%] md:w-[45%] left-1/3 md:left-1/2 top-[10%] md:top-[15%] gap-4  text-white text-left drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                                <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                    Your World of Joy
                                </h1>
                                <p className="text-sm sm:text-base md:text-[20px] ">
                                    From Local Escapes to far-flung adventures, find what makes you <br /> happy anytime, anywhere
                                </p>
                                <div className="bg-white hidden lg:flex justify-between w-full px-4 rounded-full p-2 md:py-5">
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

               <StaySearchBar/>
            </div>
        </div>
    );
};

export default StayBanner;
