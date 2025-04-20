import banner from '@/assets/images/stayBanner.png';
import { CiSearch } from "react-icons/ci";
import SearchBar from '../home/SearchBar';

const StayBanner = () => {
    return (
        <div className="relative">
            {/* Banner Image */}
            <img
                src={banner}
                className="w-full h-auto object-cover"
                alt="Banner background"
            />

            {/* Main Text Overlay - Responsive */}
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:justify-start px-4 md:px-0 md:w-[45%] md:left-1/2 md:top-[25%] gap-4 md:gap-10 text-white text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                    Your World of Joy
                </h1>

                <p className="text-sm sm:text-base md:text-[20px]">
                    From Local Escapes to far-flung adventures, find what makes you <br /> happy anytime, anywhere

                    <span className="hidden md:inline"><br /></span>
                </p>

                <div className="bg-white flex justify-between w-full  px-4 rounded-full p-2 md:py-5">
                    <input
                        type="text"
                        className='w-full text-sm md:text-base text-black outline-none'
                        placeholder='Search Properties/Destinations/Packages'
                    />
                    <CiSearch className='text-black text-xl md:text-2xl' />
                </div>
            </div>
            {/* Search Bar Overlay */}
            <SearchBar />
        </div>
    );
};

export default StayBanner;