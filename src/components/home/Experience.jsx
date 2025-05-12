import React from 'react';
import CardSlider from '../common/CardSlider';
import img1 from '@/assets/images/ex1.png';
import img2 from '@/assets/images/ex2.png';
import { motion } from 'framer-motion'
import { SlideUp } from '@/animation/animate';

const data = [
    {
        img: img1,
        title: 'Gym Name',
        location: 'Lonavala',
    },
    {
        img: img2,
        title: 'Retreat Name',
        location: 'Lonavala',
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores3',
        location: 'Lonavala',
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores4',
        location: 'Lonavala',
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores5',
        location: 'Lagos, Nigeria',
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores6',
        location: 'Lagos, Nigeria',
    },
    {
        img: img1,
        title: 'The Hich Hotel',
        location: 'Lagos, Nigeria',
    },
    {
        img: img2,
        title: 'The Hich Hotel',
        location: 'Lagos, Nigeria',
    }
]

const Experience = () => {
    return (
        <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <p className="text-primary md:text-5xl">
                        Popular Hich Experiences
                    </p>
                    <button className="md:hidden text-gray-400">see all</button>
                </div>
                <div className="hidden md:flex gap-4">
                    <button className="bg-secondary text-white md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-all">
                        Health & Wellness
                    </button>

                    <button className="text-secondary border border-secondary md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-all">
                        Adventures
                    </button>
                    <button className="text-secondary border border-secondary md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-all">
                        Cood & Culinary
                    </button>
                </div>
            </div>
            <CardSlider data={data} />

            <div className="hidden md:flex justify-center">
                <button className="bg-primary text-white px-4 py-2 md:px-8  md:py-5 rounded-full hover:bg-orange-600 transition-all">
                    View All Packages
                </button>
            </div>
        </motion.div>
    );
};

export default Experience;