import { SlideUp } from '@/animation/animate';
import banner from '@/assets/images/banner2.png';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const SectionBanner = () => {
    return (
        <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="relative   my-10 md:my-20">
            {/* Banner Image - Added min-h for mobile */}
            <img
                src={banner}
                className="w-full h-auto object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[500px] px-2 xmd:px-0 rounded-3xl"
                alt="Banner background"
            />

            {/* Main Text Overlay - Responsive positioning and sizing */}
            <div className="absolute inset-0 flex flex-col justify-center md:justify-start items-start md:text-left px-4 md:px-10 lg:left-20 md:top-[25%] gap-4 md:gap-6 lg:gap-10 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    More Than a Stay,<br />It's an Experience
                </h1>

                <p className="text-sm sm:text-base md:text-lg max-w-[500px]">
                    Enjoy personalized services, local flavors, and activities designed to enrich your journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5  sm:w-auto  justify-start">
                    <button className="border border-white text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-all text-sm sm:text-base">
                        Contact Us
                    </button>

                    <Link to={'/stays'}>
                        <button className="bg-primary text-white px-6 py-2 sm:px-8 sm:py-2 md:px-10 md:py-3 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-lg hover:shadow-primary/30 text-sm sm:text-base">
                            Explore Stays
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default SectionBanner;