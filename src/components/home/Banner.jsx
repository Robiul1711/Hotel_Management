import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import { SlideUp, Zooming } from "@/animation/animate";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons

// Add multiple banner images
import banner1 from "@/assets/images/banner.png";
import banner2 from "@/assets/images/homebanner1.jpg";
import banner3 from "@/assets/images/homebanner2.jpg";
import banner4 from "@/assets/images/homebanner3.jpg";
import banner5 from "@/assets/images/homebanner4.jpg";

const banners = [banner1, banner2, banner3, banner4, banner5];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative">
            <div className="relative w-full h-[75vh] overflow-hidden">
                {/* Fade Transition Images */}
                {banners.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Banner ${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                ))}

                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-30 z-15"></div>

                {/* Left Navigation Arrow */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all text-white"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Right Navigation Arrow */}
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all text-white"
                    aria-label="Next slide"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Text Overlay */}
                <motion.div
                    variants={Zooming(0.5)}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 flex items-center justify-center z-20"
                >
                    <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white text-center px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-4xl">
                        Where Every Stay Becomes A Story
                    </p>
                </motion.div>

                {/* Search Bar Overlay */}

            </div>
            <div

                className="absolute bottom-[5%] w-full px-4 flex justify-center z-30"
            >
                <SearchBar />
            </div>
        </div>

    );
};

export default Banner;