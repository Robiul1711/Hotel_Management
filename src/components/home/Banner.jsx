import banner from "@/assets/images/banner.png";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight, SlideUp, Zooming } from "@/animation/animate";

const Banner = () => {


    return (
        <div

            className="relative">
            {/* Banner Image */}
            <img
                src={banner}
                className="w-full h-auto object-cover"
                alt="Banner background"
            />

            {/* Main Text Overlay */}
            <motion.div
                variants={Zooming(0.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                className="absolute inset-0 flex top-[10%] justify-center">
                <p className="text-xl font-neris md:text-4xl lg:text-5xl xlg:text-6xl xl:text-8xl w-1/2 font-semibold text-white text-center px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    Where Every Stay Becomes A Story
                </p>
            </motion.div>

            {/* Search Bar Overlay */}
            <motion.div
                variants={SlideUp(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                className="">
                <SearchBar />
            </motion.div>
        </div>
    );
};

export default Banner;
