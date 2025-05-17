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

    const [active, setActive] = useState('hotels');


    return (
        <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
        >
            <ScrollRestoration/>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <p className="text-primary md:text-5xl">
                        Popular Hich Stays
                    </p>
                    <button className="md:hidden text-gray-400">see all</button>
                </div>
                <div className="flex gap-4">
                

                    <button
                        onClick={() => setActive('hotels')}
                        className={`${active === 'hotels' ? 'bg-secondary text-white' : ''}  text-secondary border border-secondary px-3 md:px-6 md:py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all`}>
                        Hotels
                    </button>

                    <button
                        onClick={() => setActive('villa')}
                        className={`${active === 'villa' ? 'bg-secondary text-white' : ''}  text-secondary border border-secondary px-3 md:px-6 md:py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all`}>
                        Villa Rentals
                    </button>
                </div>
            </div>


            <div className={`${active === 'hotels' ? 'block' : 'hidden'}`}>
                <HotelSlider data={HotelData} />
            </div>
            <div className={`${active === 'villa' ? 'block' : 'hidden'}`}>
                <VillaSlider data={VillaData} />
            </div>


            <div className="hidden md:flex justify-center">
                <Link to={'/stays'}>
                    <button className="bg-primary text-white px-4 py-2 md:px-8  md:py-5 rounded-full hover:bg-orange-600 transition-all">
                        View All Packages
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default Stays;