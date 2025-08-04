import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zooming } from "@/animation/animate";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons

import banner1 from "@/assets/images/banner.png";
import banner2 from "@/assets/images/homebanner1.jpg";
import banner3 from "@/assets/images/homebanner2.jpg";
import banner4 from "@/assets/images/homebanner3.jpg";
import banner5 from "@/assets/images/homebanner4.jpg";
/* const banners = [banner1, banner2, banner3, banner4, banner5]; */



const PropertyBanner = ({banners}) => {
    console.log("banner in property banner", banners);

    const [currentIndex, setCurrentIndex] = useState(0);

    //    Auto-slide logic 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return prevIndex === banners?.length - 1 ? 0 : prevIndex + 1
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [banners]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? banners?.length - 1 : prevIndex - 1
        })
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === banners?.length - 1 ? 0 : prevIndex + 1
        });
    }


    return (
        <div className="relative">
            <div className="relative w-full h-[45vh] overflow-hidden">
                {/* Fade Transiiton Images  */}
                {
                    banners?.map((img, index) => (
                        <img
                            key={index}
                            src={img?.media_name}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                    ))
                }

                {/* Dark overlay for better text visibility  */}
                <div className="absolute inset-0 bg-black bg-opacity-30 z-20"></div>

                {/* Left Navigation Arrow  */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all text-white"
                    aria-label="Previous slide"
                >
                    <ChevronLeft />
                </button>

                {/* Right Navigation Arrow  */}
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all text-white"
                >
                    <ChevronRight />
                </button>

                {/* Text Overlay  */}
                
            </div>
        </div>
    );
};

export default PropertyBanner;