import React, { useState } from 'react';
import CardSlider from '../common/CardSlider';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import img1 from '@/assets/images/stay1.png';
import img2 from '@/assets/images/stay2.png';
import { motion } from 'framer-motion';
import { SlideUp } from '@/animation/animate';
import HotelSlider from './HotelSlider';
import { HotelData, VillaData } from '@/lib/Database';
import { Link, ScrollRestoration } from 'react-router-dom';
import VillaSlider from './VillaSlider';




const Stays = () => {

    const [active, setActive] = useState('villa');


    return (
        <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
        >
            <ScrollRestoration />
            <div className="flex flex-col gap-2 lg:gap-8">
                <div className="flex justify-between">
                    <p className="text-primary font-semibold mb-0 md:text-4xl text-lg">
                        Popular Hich Stays
                    </p>
                    {/* <button className="md:hidden text-gray-400">see all</button> */}
                </div>
                <div className="flex gap-4">




                    <button
                        onClick={() => setActive('villa')}
                        className={`${active === 'villa' ? 'bg-secondary text-white' : ''}  text-secondary border border-secondary px-7 py-2 md:px-6 md:py-2 rounded-full font-semibold hover:bg-orange-600 md:text-base text-sm hover:text-white transition-all`}>
                        Villas
                    </button>
                    {/* <button
                        onClick={() => setActive('hotels')}
                        className={`${active === 'hotels' ? 'bg-secondary text-white' : ''}  text-secondary border border-secondary px-7 py-2 md:px-6 md:py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all`}>
                        Hotels
                    </button> */}
                </div>
            </div>


            <div className={`${active === 'hotels' ? 'block' : 'hidden'}`}>
                <HotelSlider data={HotelData} />
            </div>
            <div className={`${active === 'villa' ? 'block' : 'hidden'}`}>
                <VillaSlider data={VillaData} />
            </div>


            <div className="flex justify-center">
                <Link to={'/stays'}>
                    <button className="bg-primary text-white px-4 py-2 md:px-8  md:py-5 rounded-full hover:bg-orange-600 transition-all">
                        View All Stays
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default Stays;