import React from 'react';
import { motion } from 'framer-motion'
import { SlideUp } from '@/animation/animate';
const App = () => {
    return (
        <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className='mt-[90px] flex flex-col gap-11'>
            <div className="space-y-4 md:space-y-10">
                <p className="text-primary md:text-5xl font-semibold mb-0">
                    HICH – The Unhotel Experience. Stay Different. Live More.
                </p>
                <div className=" text-sm lg:text-xl">
                    <p className="">
                        Hich isn’t just a place to stay—it’s a vibe, a community, a way of life. We’re redefining hospitality by bringing together hotels, villas, modern hostels, farm stays, glamping spots, and urban ashrams to create experiences that go beyond just a comfy bed and good WiFi.
                    </p>

                    <p className="hidden md:flex">
                        At Hich, you don’t just check in—you become a part of something bigger. Think community gatherings, immersive experiences, and the freedom to explore on your own terms. No more rushing for early breakfasts, robotic check-in and check-out times, or overpriced mini-fridge snacks. Just authentic stays, real connections, and a whole lot of good vibes.
                    </p>
                    <p className="hidden md:flex">
                        Welcome to the Unhotel way of living. Ready to stay different?
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default App;